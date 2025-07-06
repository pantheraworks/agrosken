import { execSync } from 'child_process';
import { readFileSync, statSync, readdirSync } from 'fs';
import { join, relative, posix } from 'path';
import { Client } from 'basic-ftp';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FTP_CONFIG = {
  host: process.env.FTP_HOST || 'your-ftp-server.com',
  port: parseInt(process.env.FTP_PORT) || 21,
  user: process.env.FTP_USER || 'username',
  password: process.env.FTP_PASSWORD || 'password',
  secure: process.env.FTP_SECURE === 'true',
  remotePath: process.env.FTP_REMOTE_PATH || '/public_html'
};

const PROJECT_ROOT = join(__dirname, '..');
const BUILD_DIR = join(PROJECT_ROOT, 'dist');

function buildApp() {
  console.log('🔨 Building application...');
  try {
    execSync('npm run build', { 
      cwd: PROJECT_ROOT, 
      stdio: 'inherit' 
    });
    console.log('✅ Build completed successfully');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

async function uploadDirectory(client, localDir, remoteDir) {
  const items = readdirSync(localDir);
  
  for (const item of items) {
    const localPath = join(localDir, item);
    const remotePath = posix.join(remoteDir, item);
    const stats = statSync(localPath);
    
    if (stats.isDirectory()) {
      console.log(`📁 Creating directory: ${remotePath}`);
      try {
        await client.ensureDir(remotePath);
        await uploadDirectory(client, localPath, remotePath);
      } catch (error) {
        console.warn(`⚠️  Directory creation failed: ${error.message}`);
      }
    } else {
      console.log(`📄 Uploading file: ${remotePath}`);
      try {
        await client.uploadFrom(localPath, remotePath);
      } catch (error) {
        console.error(`❌ Upload failed for ${item}:`, error.message);
        throw error;
      }
    }
  }
}

async function deployToFTP() {
  console.log('🚀 Starting FTP deployment...');
  
  if (!FTP_CONFIG.host || FTP_CONFIG.host === 'your-ftp-server.com') {
    console.error('❌ FTP configuration missing. Please set environment variables:');
    console.error('   FTP_HOST, FTP_USER, FTP_PASSWORD, FTP_REMOTE_PATH');
    process.exit(1);
  }
  
  const client = new Client();
  client.ftp.verbose = true;
  
  try {
    console.log(`🔗 Connecting to ${FTP_CONFIG.host}...`);
    await client.access(FTP_CONFIG);
    console.log('✅ Connected to FTP server');
    
    console.log(`📂 Navigating to remote directory: ${FTP_CONFIG.remotePath}`);
    await client.ensureDir(FTP_CONFIG.remotePath);
    
    console.log('📤 Uploading files...');
    await uploadDirectory(client, BUILD_DIR, FTP_CONFIG.remotePath);
    
    console.log('✅ Deployment completed successfully!');
    
  } catch (error) {
    console.error('❌ Deployment failed:', error.message);
    process.exit(1);
  } finally {
    client.close();
  }
}

async function main() {
  console.log('🚀 Starting deployment process...');
  
  try {
    buildApp();
    await deployToFTP();
    console.log('🎉 Deployment completed successfully!');
  } catch (error) {
    console.error('❌ Deployment process failed:', error.message);
    process.exit(1);
  }
}

main(); 

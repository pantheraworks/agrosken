# Scripts Directory

This directory contains utility scripts for the Agrosken application.

## Available Scripts

### 1. Deploy Script (`deploy.js`)

The `deploy.js` script builds the application and deploys it to your FTP server. It works identically for both local and CI environments.

#### Setup

1. Install dependencies (already done):

   ```bash
   npm install basic-ftp dotenv
   ```

2. Create a `.env` file in the project root with your FTP configuration:
   ```bash
   FTP_HOST=your-ftp-server.com
   FTP_PORT=21
   FTP_USER=your-username
   FTP_PASSWORD=your-password
   FTP_SECURE=false
   FTP_REMOTE_PATH=/public_html
   ```

#### Configuration Options

- `FTP_HOST`: Your FTP server hostname or IP address
- `FTP_PORT`: FTP port (default: 21)
- `FTP_USER`: Your FTP username
- `FTP_PASSWORD`: Your FTP password
- `FTP_SECURE`: Set to `true` for FTPS (secure FTP)
- `FTP_REMOTE_PATH`: Remote directory path where files will be uploaded

#### Usage

```bash
npm run deploy
```

The script will:

1. Build the application using `npm run build`
2. Connect to your FTP server
3. Upload all files from the `dist` directory to the remote path
4. Display progress and completion status

### 2. GitHub Actions Deployment

Automatic deployment is configured via GitHub Actions in `.github/workflows/deploy.yml`. It triggers on every push to the `main` branch and uses the same `deploy.js` script.

#### Setup GitHub Secrets

In your GitHub repository, go to Settings > Secrets and variables > Actions, and add the following secrets:

- `FTP_HOST`: Your FTP server hostname
- `FTP_PORT`: Your FTP port (usually 21)
- `FTP_USER`: Your FTP username
- `FTP_PASSWORD`: Your FTP password
- `FTP_SECURE`: Set to `true` for FTPS, `false` for FTP
- `FTP_REMOTE_PATH`: Remote directory path (e.g., `/public_html`)

#### How it works

1. **Trigger**: Pushes to `main` branch
2. **Install**: Installs dependencies with `npm ci`
3. **Deploy**: Runs `npm run deploy` (builds and deploys)
4. **Status**: Check the Actions tab for deployment status

### 3. Screenshot Script (`screenshot.js`)

The `screenshot.js` script automatically takes screenshots of different sections of the application for documentation and testing purposes.

#### Prerequisites

- Development server must be running on `localhost:5173`
- Puppeteer dependency is already installed

#### Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. In a separate terminal, run the screenshot script:
   ```bash
   npm run screenshot
   ```

#### Generated Screenshots

The script creates screenshots in the `screenshots/` directory:

- `full-page.png`: Complete page screenshot
- `hero-section.png`: Hero section viewport
- `hero-hover.png`: Button hover state
- `services-section.png`: Services section
- `contact-section.png`: Contact section
- `privacy-policy.png`: Privacy policy page
- `faq.png`: FAQ page

#### Features

- Automatic navigation between pages
- Waits for animations and network activity
- Captures specific sections and interactive states
- Handles responsive layouts and scroll positioning

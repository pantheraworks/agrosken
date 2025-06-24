import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function takeScreenshot() {
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: {
      width: 1280,
      height: 800
    }
  });

  try {
    const page = await browser.newPage();
    
    // Navigate to the development server
    await page.goto('http://localhost:5173', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait for animations to complete
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Take full page screenshot
    const screenshotPath = join(__dirname, '..', 'screenshots', 'full-page.png');
    await page.screenshot({
      path: screenshotPath,
      fullPage: true
    });
    console.log(`📸 Full page screenshot saved to: screenshots/full-page.png`);

    // Take hero section screenshot
    const heroScreenshotPath = join(__dirname, '..', 'screenshots', 'hero-section.png');
    await page.screenshot({
      path: heroScreenshotPath,
      clip: {
        x: 0,
        y: 0,
        width: 1280,
        height: 800
      }
    });
    console.log(`📸 Hero section screenshot saved to: screenshots/hero-section.png`);

    // Hover on Get Started button
    const button = await page.$('.group');
    if (button) {
      await button.hover();
      await new Promise(resolve => setTimeout(resolve, 600)); // Wait for hover animation
      
      const hoverScreenshotPath = join(__dirname, '..', 'screenshots', 'hero-hover.png');
      await page.screenshot({
        path: hoverScreenshotPath,
        clip: {
          x: 0,
          y: 600,
          width: 400,
          height: 200
        }
      });
      console.log(`📸 Button hover screenshot saved to: screenshots/hero-hover.png`);
    }

    // Scroll to services section
    await page.evaluate(() => {
      document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
    });
    await new Promise(resolve => setTimeout(resolve, 1000));

    const servicesScreenshotPath = join(__dirname, '..', 'screenshots', 'services-section.png');
    await page.screenshot({
      path: servicesScreenshotPath,
      clip: {
        x: 0,
        y: 0,
        width: 1280,
        height: 800
      }
    });
    console.log(`📸 Services section screenshot saved to: screenshots/services-section.png`);

  } catch (error) {
    console.error('Error taking screenshot:', error);
  } finally {
    await browser.close();
  }
}

// Run the screenshot function
takeScreenshot();
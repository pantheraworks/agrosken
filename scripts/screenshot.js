import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function takeScreenshot() {
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: {
      width: 1280,
      height: 800,
    },
  });

  try {
    const page = await browser.newPage();

    // Navigate to the development server
    await page.goto("http://localhost:5173", {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    // Wait for animations to complete
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Take full page screenshot
    const screenshotPath = join(
      __dirname,
      "..",
      "screenshots",
      "full-page.png"
    );
    await page.screenshot({
      path: screenshotPath,
      fullPage: true,
    });
    console.log(`📸 Full page screenshot saved to: screenshots/full-page.png`);

    // Take hero section screenshot
    const heroScreenshotPath = join(
      __dirname,
      "..",
      "screenshots",
      "hero-section.png"
    );
    await page.screenshot({
      path: heroScreenshotPath,
      clip: {
        x: 0,
        y: 0,
        width: 1280,
        height: 800,
      },
    });
    console.log(
      `📸 Hero section screenshot saved to: screenshots/hero-section.png`
    );

    // Hover on Get Started button
    const button = await page.$(".group");
    if (button) {
      await button.hover();
      await new Promise((resolve) => setTimeout(resolve, 600)); // Wait for hover animation

      const hoverScreenshotPath = join(
        __dirname,
        "..",
        "screenshots",
        "hero-hover.png"
      );
      await page.screenshot({
        path: hoverScreenshotPath,
        clip: {
          x: 0,
          y: 600,
          width: 400,
          height: 200,
        },
      });
      console.log(
        `📸 Button hover screenshot saved to: screenshots/hero-hover.png`
      );
    }

    // Scroll to services section
    await page.evaluate(() => {
      const scrollContainer = document.querySelector(
        ".h-screen.overflow-y-scroll"
      );
      const servicesSection = document.getElementById("services-section");
      if (scrollContainer && servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const servicesScreenshotPath = join(
      __dirname,
      "..",
      "screenshots",
      "services-section.png"
    );
    await page.screenshot({
      path: servicesScreenshotPath,
      clip: {
        x: 0,
        y: 0,
        width: 1280,
        height: 800,
      },
    });
    console.log(
      `📸 Services section screenshot saved to: screenshots/services-section.png`
    );

    // Scroll to contact section
    await page.evaluate(() => {
      const scrollContainer = document.querySelector(
        ".h-screen.overflow-y-scroll"
      );
      const contactSection = document.getElementById("contact-section");
      if (scrollContainer && contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      } else if (scrollContainer) {
        // If section not found, scroll to bottom of container
        scrollContainer.scrollTo(0, scrollContainer.scrollHeight);
      }
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const contactScreenshotPath = join(
      __dirname,
      "..",
      "screenshots",
      "contact-section.png"
    );

    // Get the contact section dimensions to capture the full section
    const contactSectionBounds = await page.evaluate(() => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        return {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height,
        };
      }
      return null;
    });

    if (contactSectionBounds) {
      await page.screenshot({
        path: contactScreenshotPath,
        clip: contactSectionBounds,
      });
    } else {
      // Fallback to viewport screenshot
      await page.screenshot({
        path: contactScreenshotPath,
        fullPage: false,
      });
    }
    console.log(
      `📸 Contact section screenshot saved to: screenshots/contact-section.png`
    );

    // Navigate to privacy policy page
    await page.goto("http://localhost:5173/privacy-policy", {
      waitUntil: "networkidle0",
      timeout: 30000,
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const privacyPolicyScreenshotPath = join(
      __dirname,
      "..",
      "screenshots",
      "privacy-policy.png"
    );
    await page.screenshot({
      path: privacyPolicyScreenshotPath,
      fullPage: true,
    });
    console.log(
      `📸 Privacy policy page screenshot saved to: screenshots/privacy-policy.png`
    );
  } catch (error) {
    console.error("Error taking screenshot:", error);
  } finally {
    await browser.close();
  }
}

// Run the screenshot function
takeScreenshot();

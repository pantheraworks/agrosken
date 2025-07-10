import { Command, CommandContext, StepResult } from "../types";

export const responsiveCommand: Command = {
  name: "responsive",
  description:
    "Make existing components responsive with real-time browser testing",
  steps: [
    {
      id: "start",
      prompt:
        "Which component would you like to make responsive? (e.g., Hero, Services, Navbar)",
      action: async (context: CommandContext): Promise<StepResult> => {
        context.state.targetComponent = context.userInput || "";
        return {
          success: true,
          message: `Making ${context.state.targetComponent} component responsive. Let me start by checking the current implementation...`,
          nextStep: "findComponent",
        };
      },
    },
    {
      id: "findComponent",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Use Glob tool to find the component file
        // 2. Read the component to understand current structure
        // 3. Check if component already has responsive styles
        // 4. Store component path in context.state.componentPath
        return {
          success: true,
          message: "Found component and analyzed current implementation",
          nextStep: "searchReferences",
        };
      },
    },
    {
      id: "searchReferences",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Use Glob tool to search references/ folder for mobile/tablet designs
        // 2. Look for patterns like *mobile*, *tablet*, *responsive*, *{component-name}*
        // 3. Store found references in context.state.references
        // 4. If no references found, proceed with best practices
        return {
          success: true,
          message: "Searched for responsive design references",
          nextStep: "startDevServer",
        };
      },
    },
    {
      id: "startDevServer",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Check if dev server is running using ps aux | grep vite
        // 2. If not running, inform that dev server needs to be started
        // 3. Store server status in context.state.devServerRunning
        return {
          success: true,
          message: "Checked development server status",
          nextStep: "openBrowser",
        };
      },
    },
    {
      id: "openBrowser",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Use mcp__browsermcp__browser_navigate to open http://localhost:5173
        // 2. Wait 3 seconds for initial load
        // 3. Take initial desktop screenshot
        // 4. Store in context.state.screenshots.desktop
        return {
          success: true,
          message: "Opened browser and captured desktop view",
          nextStep: "implementResponsive",
        };
      },
    },
    {
      id: "implementResponsive",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Create a backup of the original component
        // 2. Add responsive Tailwind classes for different breakpoints:
        //    - Mobile first approach (default styles for mobile)
        //    - sm: (640px) - Large phones/small tablets
        //    - md: (768px) - Tablets
        //    - lg: (1024px) - Laptops
        //    - xl: (1280px) - Desktops
        // 3. Focus on:
        //    - Responsive padding/margins
        //    - Flexible grid/flex layouts
        //    - Responsive font sizes
        //    - Mobile-friendly navigation
        //    - Image/icon sizing
        // 4. Use references if available for guidance
        return {
          success: true,
          message: "Implemented responsive styles",
          nextStep: "testMobile",
        };
      },
    },
    {
      id: "testMobile",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Set viewport to mobile size (375x667) using browser DevTools
        // 2. Navigate to component location
        // 3. Wait 2 seconds for render
        // 4. Take screenshot using mcp__browsermcp__browser_screenshot
        // 5. Check for:
        //    - Overflow issues
        //    - Text readability
        //    - Touch target sizes (min 44px)
        //    - Proper stacking of elements
        // 6. Store screenshot in context.state.screenshots.mobile
        return {
          success: true,
          message: "Tested mobile view",
          nextStep: "testTablet",
        };
      },
    },
    {
      id: "testTablet",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Set viewport to tablet size (768x1024)
        // 2. Take screenshot
        // 3. Check for proper layout at medium breakpoint
        // 4. Store screenshot in context.state.screenshots.tablet
        return {
          success: true,
          message: "Tested tablet view",
          nextStep: "iterateIfNeeded",
        };
      },
    },
    {
      id: "iterateIfNeeded",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Analyze screenshots for issues:
        //    - Text overflow or cutoff
        //    - Elements overlapping
        //    - Improper spacing
        //    - Navigation usability
        // 2. If issues found:
        //    - Make adjustments to responsive styles
        //    - Re-test affected viewports
        //    - Repeat up to 3 times
        // 3. Compare with reference designs if available
        // 4. Set context.state.iterationCount
        return {
          success: true,
          message: "Checked and refined responsive implementation",
          nextStep: "captureAllBreakpoints",
        };
      },
    },
    {
      id: "captureAllBreakpoints",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Capture final screenshots at all breakpoints:
        //    - Mobile: 375px
        //    - Large Mobile: 640px
        //    - Tablet: 768px
        //    - Desktop: 1024px
        //    - Large Desktop: 1280px
        // 2. Save screenshots with descriptive names
        // 3. Create a comparison summary
        return {
          success: true,
          message: "Captured screenshots at all breakpoints",
          nextStep: "validateAccessibility",
        };
      },
    },
    {
      id: "validateAccessibility",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Check console for any errors
        // 2. Verify touch targets are at least 44x44px on mobile
        // 3. Check color contrast remains good
        // 4. Ensure interactive elements are accessible
        // 5. Test with keyboard navigation if applicable
        return {
          success: true,
          message: "Validated accessibility",
          nextStep: "summary",
        };
      },
    },
    {
      id: "summary",
      action: async (context: CommandContext): Promise<StepResult> => {
        const component = context.state.targetComponent;
        const screenshots = context.state.screenshots || {};
        const breakpoints = Object.keys(screenshots).join(", ");

        return {
          success: true,
          message: `Successfully made ${component} component responsive!

Key improvements:
- Mobile-first responsive design implemented
- Tested on ${breakpoints} breakpoints
- Optimized for touch interactions
- Maintained visual hierarchy across devices
- ${context.state.iterationCount || 0} iterations performed

The component now adapts seamlessly from mobile to desktop viewports.`,
          nextStep: null,
        };
      },
    },
  ],
};

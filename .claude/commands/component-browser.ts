import { readdir } from "fs/promises";
import { join } from "path";
import { Command, CommandContext, StepResult } from "../types";

export const componentBrowserCommand: Command = {
  name: "component-browser",
  description:
    "Create a new component with real-time browser testing using MCP",
  steps: [
    {
      id: "checkMCP",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must check if MCP browser tools are available
        // Look for mcp__browser__ prefixed tools or similar
        return {
          success: true,
          message: "Checking MCP browser extension availability...",
          nextStep: "gitSetup",
        };
      },
    },
    {
      id: "gitSetup",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must execute these git commands:
        // 1. git checkout main
        // 2. git pull
        // 3. git checkout -b add-[component-name]-component
        return {
          success: true,
          message: "Switching to main branch and creating feature branch...",
          nextStep: "askName",
        };
      },
    },
    {
      id: "askName",
      prompt:
        "What type of component would you like to create? (e.g., contact form, pricing table, testimonial section)",
      action: async (
        context: CommandContext,
        input: string
      ): Promise<StepResult> => {
        context.state.componentType = input;
        return {
          success: true,
          message: `Creating a ${input} component with browser testing...`,
          nextStep: "findReference",
        };
      },
    },
    {
      id: "findReference",
      action: async (context: CommandContext): Promise<StepResult> => {
        const referencesPath = join(process.cwd(), "references");
        const componentType = context.state.componentType
          .toLowerCase()
          .replace(/\s+/g, "-");

        try {
          const files = await readdir(referencesPath);
          const matchingFiles = files.filter(
            (file) =>
              file.toLowerCase().includes(componentType) ||
              file
                .toLowerCase()
                .includes(
                  context.state.componentType.split(" ")[0].toLowerCase()
                )
          );

          if (matchingFiles.length === 0) {
            return {
              success: false,
              message: `No reference found for "${context.state.componentType}". Please add a reference image to the references folder.`,
              nextStep: null,
            };
          }

          context.state.referenceFiles = matchingFiles;
          context.state.referencePath = join(referencesPath, matchingFiles[0]);

          return {
            success: true,
            message: `Found reference: ${matchingFiles[0]}`,
            nextStep: "startDevServer",
          };
        } catch (error) {
          return {
            success: false,
            message:
              "Could not access references folder. Please ensure it exists.",
            nextStep: null,
          };
        }
      },
    },
    {
      id: "startDevServer",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Check if dev server is running (check if localhost:5173 is accessible)
        // 2. If not running, start it with npm run dev in background
        // 3. Wait for server to be ready
        return {
          success: true,
          message: "Development server ready. Opening browser...",
          nextStep: "openBrowser",
        };
      },
    },
    {
      id: "openBrowser",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must use MCP browser tools to:
        // 1. Navigate to http://localhost:5173
        // 2. Take initial screenshot for reference
        // 3. Store browser session context for later use
        context.state.browserReady = true;
        return {
          success: true,
          message: "Browser opened at development server.",
          nextStep: "generateInitialComponent",
        };
      },
    },
    {
      id: "generateInitialComponent",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Use Read tool to view the reference image
        // 2. Generate initial React component based on design
        // 3. Create component files in src/components/[ComponentName]/
        // 4. Create or update the staging route at /stage
        // 5. Import and render the component there
        context.state.componentGenerated = true;
        return {
          success: true,
          message:
            "Initial component generated. Starting interactive testing...",
          nextStep: "interactiveTest",
        };
      },
    },
    {
      id: "interactiveTest",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must use MCP browser tools to:
        // 1. Navigate to /stage
        // 2. Take screenshot of rendered component
        // 3. Compare with reference image
        // 4. Test interactions (hover states, clicks if applicable)
        // 5. Check console for any errors
        // 6. Document findings
        context.state.testResults = {
          visualMatch: false,
          interactionsWork: false,
          consoleErrors: [],
        };
        return {
          success: true,
          message: "Initial test complete. Component needs refinement.",
          nextStep: "refineComponent",
        };
      },
    },
    {
      id: "refineComponent",
      prompt:
        "Based on browser testing, the component needs adjustments. Should I continue refining? (yes/no/describe specific changes)",
      action: async (
        context: CommandContext,
        input: string
      ): Promise<StepResult> => {
        if (input.toLowerCase() === "no") {
          return {
            success: true,
            message: "Moving to integration phase...",
            nextStep: "askLocation",
          };
        }

        // REQUIRED: Claude must:
        // 1. If user provided specific changes, implement them
        // 2. Otherwise, refine based on test results
        // 3. Update component code
        // 4. Use MCP browser tools to:
        //    - Refresh the page
        //    - Take new screenshot
        //    - Test interactions again
        //    - Check console
        // 5. Repeat until component matches reference

        return {
          success: true,
          message: "Refining component based on browser feedback...",
          nextStep: "interactiveTest",
        };
      },
    },
    {
      id: "askLocation",
      prompt:
        'Where should this component be integrated? (e.g., "landing page after services", "new page at /about")',
      action: async (
        context: CommandContext,
        input: string
      ): Promise<StepResult> => {
        context.state.integrationLocation = input;
        return {
          success: true,
          message: "Integrating component...",
          nextStep: "integrate",
        };
      },
    },
    {
      id: "integrate",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Import component in target location
        // 2. Add component at specified position
        // 3. Use MCP browser tools to:
        //    - Navigate to the integration page
        //    - Verify component renders correctly
        //    - Test any interactions
        //    - Take final screenshot
        // 4. Run npm run format
        context.state.integrated = true;
        return {
          success: true,
          message: "Component integrated and verified in browser!",
          nextStep: "finalValidation",
        };
      },
    },
    {
      id: "finalValidation",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must use MCP browser tools to:
        // 1. Navigate through the site to ensure nothing broke
        // 2. Take screenshots of key pages
        // 3. Check console for errors
        // 4. Generate a visual report of changes
        return {
          success: true,
          message: "Browser validation complete. All tests passed!",
          nextStep: "confirmIntegration",
        };
      },
    },
    {
      id: "confirmIntegration",
      prompt:
        "Component has been integrated and browser-tested. Would you like to create a PR? (yes/no)",
      action: async (
        context: CommandContext,
        input: string
      ): Promise<StepResult> => {
        if (input.toLowerCase() === "yes") {
          return {
            success: true,
            message: "Creating pull request...",
            nextStep: "createPR",
          };
        } else {
          return {
            success: true,
            message:
              "Component created and tested successfully! Remember to create a PR when ready.",
            nextStep: null,
          };
        }
      },
    },
    {
      id: "createPR",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Run npm run format
        // 2. Stage all changes
        // 3. Commit with descriptive message
        // 4. Push branch
        // 5. Create PR with:
        //    - Description of component
        //    - Browser test results
        //    - Screenshots if possible
        return {
          success: true,
          message: "Pull request created with browser test results!",
          nextStep: null,
        };
      },
    },
  ],
};

import { readdir } from "fs/promises";
import { join } from "path";
import { Command, CommandContext, StepResult } from "../types";

export const componentCommand: Command = {
  name: "component",
  description: "Create a new component from reference images",
  steps: [
    {
      id: "gitSetup",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must execute these git commands:
        // 1. git checkout main
        // 2. git pull
        // 3. git checkout -b add-[component-name]-component
        // This ensures we always start from the latest main branch
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
          message: `Creating a ${input} component...`,
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

          if (matchingFiles.length > 1) {
            return {
              success: true,
              message: `Found ${matchingFiles.length} potential references. Using: ${matchingFiles[0]}`,
              nextStep: "clarifyDesign",
            };
          }

          return {
            success: true,
            message: `Found reference: ${matchingFiles[0]}`,
            nextStep: "generateComponent",
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
      id: "clarifyDesign",
      prompt:
        "I found multiple references. Do you have any specific design preferences? (Press Enter to use the default)",
      action: async (
        context: CommandContext,
        input: string
      ): Promise<StepResult> => {
        if (input) {
          context.state.designPreferences = input;
        }
        return {
          success: true,
          message: "Understood. Generating component...",
          nextStep: "generateComponent",
        };
      },
    },
    {
      id: "generateComponent",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Use Read tool to view the reference image at context.state.referencePath
        // 2. Generate React component code based on the design
        // 3. Create a proper PascalCase component name (not just the user input)
        // 4. Save component in src/components/[ComponentName]/[ComponentName].tsx
        // 5. Create index.ts for exports
        // 6. Use Tailwind CSS classes matching the project style
        context.state.componentGenerated = true;
        return {
          success: true,
          message: "Component generated. Creating preview...",
          nextStep: "createStaging",
        };
      },
    },
    {
      id: "createStaging",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Create a new route /stage in App.tsx or router configuration
        // 2. Create a StagingPage component that displays the new component
        // 3. Import and render the new component in the staging page
        // 4. Ensure npm run dev is running so user can preview
        context.state.stagingCreated = true;
        return {
          success: true,
          message:
            "Component staged at http://localhost:5173/stage. Please review and approve.",
          nextStep: "awaitApproval",
        };
      },
    },
    {
      id: "awaitApproval",
      prompt:
        'Please review the component at /stage. Type "approve" to continue or "reject" to cancel:',
      action: async (
        context: CommandContext,
        input: string
      ): Promise<StepResult> => {
        if (input.toLowerCase() === "approve") {
          return {
            success: true,
            message: "Great! Where would you like to integrate this component?",
            nextStep: "askLocation",
          };
        } else if (input.toLowerCase() === "reject") {
          return {
            success: false,
            message: "Component creation cancelled.",
            nextStep: null,
          };
        } else {
          return {
            success: false,
            message: 'Please type "approve" or "reject".',
            nextStep: "awaitApproval",
          };
        }
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
        // 1. Parse context.state.integrationLocation to understand where to add
        // 2. Import the new component in the target file
        // 3. Add the component JSX at the specified location
        // 4. Run npm run format to ensure code style
        context.state.integrated = true;
        return {
          success: true,
          message: "Component integrated successfully!",
          nextStep: "updateScreenshots",
        };
      },
    },
    {
      id: "updateScreenshots",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Read scripts/screenshot.js
        // 2. Add new screenshot capture for the component
        // 3. Run npm run screenshot to validate the component renders correctly
        // 4. Use Read tool to verify screenshot was created successfully
        return {
          success: true,
          message: "Component added to screenshot script. Validation complete!",
          nextStep: "confirmIntegration",
        };
      },
    },
    {
      id: "confirmIntegration",
      prompt:
        "Component has been integrated and validated. Would you like to create a PR for this component? (yes/no)",
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
              "Component created successfully! Remember to create a PR when ready.",
            nextStep: null,
          };
        }
      },
    },
    {
      id: "createPR",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Run npm run format to ensure code style
        // 2. Run git add -A to stage all changes
        // 3. Create commit with message: "Add [ComponentName] component"
        // 4. Push branch with git push -u origin [branch-name]
        // 5. Use gh pr create with title and description
        // 6. Include in PR description: what component was added, where it was integrated
        return {
          success: true,
          message: "Pull request created successfully!",
          nextStep: null,
        };
      },
    },
  ],
};

import { readFile } from "fs/promises";
import { join } from "path";
import { Command, CommandContext, StepResult } from "../types";

interface RefactoringIssue {
  type: string;
  severity: "high" | "medium" | "low";
  file: string;
  line?: number;
  description: string;
  suggestion: string;
}

export const refactorCommand: Command = {
  name: "refactor",
  description: "Analyze and refactor code for better quality and performance",
  steps: [
    {
      id: "gitSetup",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must execute these git commands:
        // 1. git checkout main
        // 2. git pull
        // 3. git checkout -b refactor-[target]-improvements
        // This ensures we always start from the latest main branch
        return {
          success: true,
          message: "Switching to main branch and creating refactor branch...",
          nextStep: "selectTarget",
        };
      },
    },
    {
      id: "selectTarget",
      prompt:
        "What would you like to refactor? (file path, component name, or 'analyze' for suggestions)",
      action: async (
        context: CommandContext,
        input: string
      ): Promise<StepResult> => {
        context.state.target = input;

        if (input.toLowerCase() === "analyze") {
          return {
            success: true,
            message: "Analyzing codebase for refactoring opportunities...",
            nextStep: "analyzeCodebase",
          };
        }

        return {
          success: true,
          message: `Analyzing ${input} for refactoring opportunities...`,
          nextStep: "analyzeTarget",
        };
      },
    },
    {
      id: "analyzeCodebase",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Use Glob to find all .tsx and .ts files
        // 2. Analyze files for:
        //    - Large files (>300 lines)
        //    - Files with multiple exports
        //    - Files with "TODO" or "FIXME" comments
        // 3. Use Grep to find:
        //    - Duplicated code patterns
        //    - Long functions
        //    - Complex conditionals
        //    - Missing TypeScript types (any types)
        // 4. Present findings organized by severity
        context.state.codebaseAnalysis = true;
        return {
          success: true,
          message: "Found refactoring opportunities. Please select targets.",
          nextStep: "selectRefactorings",
        };
      },
    },
    {
      id: "analyzeTarget",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Read the target file(s)
        // 2. Analyze for issues:
        //    - Code duplication
        //    - Long functions (>50 lines)
        //    - Complex conditionals (nested ifs, long ternaries)
        //    - Missing TypeScript types
        //    - Unnecessary re-renders (missing memo, useCallback)
        //    - Accessibility issues
        //    - Magic numbers/strings
        // 3. Create a list of RefactoringIssue objects
        // 4. Sort by severity
        context.state.issues = [];
        return {
          success: true,
          message: "Analysis complete. Found refactoring opportunities.",
          nextStep: "presentFindings",
        };
      },
    },
    {
      id: "presentFindings",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Display all found issues with numbers
        // 2. Group by severity (high, medium, low)
        // 3. Show code snippets for context
        // 4. Provide clear descriptions and suggestions
        return {
          success: true,
          message: "Refactoring opportunities presented.",
          nextStep: "selectRefactorings",
        };
      },
    },
    {
      id: "selectRefactorings",
      prompt:
        "Which improvements would you like to apply? (numbers separated by commas, or 'all')",
      action: async (
        context: CommandContext,
        input: string
      ): Promise<StepResult> => {
        context.state.selectedRefactorings = input;
        return {
          success: true,
          message: "Creating refactoring plan...",
          nextStep: "createPlan",
        };
      },
    },
    {
      id: "createPlan",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Create detailed plan for each selected refactoring
        // 2. Show before/after preview for each change
        // 3. Identify dependencies and import updates needed
        // 4. Determine order of operations
        return {
          success: true,
          message: "Refactoring plan created. Ready to implement.",
          nextStep: "confirmPlan",
        };
      },
    },
    {
      id: "confirmPlan",
      prompt: "Review the plan above. Proceed with refactoring? (yes/no)",
      action: async (
        context: CommandContext,
        input: string
      ): Promise<StepResult> => {
        if (input.toLowerCase() !== "yes") {
          return {
            success: false,
            message: "Refactoring cancelled.",
            nextStep: null,
          };
        }
        return {
          success: true,
          message: "Starting refactoring implementation...",
          nextStep: "implement",
        };
      },
    },
    {
      id: "implement",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Apply refactorings one by one
        // 2. For each refactoring:
        //    - Make the code change
        //    - Update imports if needed
        //    - Run relevant tests if they exist
        // 3. Extract new components/hooks/utils as needed:
        //    - Create new files in appropriate directories
        //    - Add proper exports
        //    - Update imports in original files
        // 4. Add TypeScript types where missing
        // 5. Add JSDoc comments for complex functions
        context.state.implemented = true;
        return {
          success: true,
          message: "Refactoring complete. Running validation...",
          nextStep: "validate",
        };
      },
    },
    {
      id: "validate",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Run npm run lint
        // 2. Run npm run format
        // 3. Run npm run build to check TypeScript
        // 4. Run existing tests if any
        // 5. Generate new tests for refactored code if needed
        // 6. Take screenshots if UI changes
        return {
          success: true,
          message: "Validation complete. All checks passed.",
          nextStep: "generateTests",
        };
      },
    },
    {
      id: "generateTests",
      prompt:
        "Would you like to generate tests for the refactored code? (yes/no)",
      action: async (
        context: CommandContext,
        input: string
      ): Promise<StepResult> => {
        if (input.toLowerCase() === "yes") {
          // REQUIRED: Claude must:
          // 1. Identify test framework (Jest, Vitest, etc.)
          // 2. Generate appropriate test files
          // 3. Include unit tests for extracted functions
          // 4. Include component tests if applicable
          // 5. Run the tests to ensure they pass
          context.state.testsGenerated = true;
        }
        return {
          success: true,
          message:
            input.toLowerCase() === "yes"
              ? "Tests generated successfully."
              : "Skipping test generation.",
          nextStep: "reviewAndCommit",
        };
      },
    },
    {
      id: "reviewAndCommit",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Show summary of all changes made
        // 2. List any new files created
        // 3. Show before/after metrics (lines of code, complexity, etc.)
        // 4. Run git diff to show changes
        return {
          success: true,
          message: "Refactoring summary presented.",
          nextStep: "confirmCommit",
        };
      },
    },
    {
      id: "confirmCommit",
      prompt: "Commit these changes? (yes/no)",
      action: async (
        context: CommandContext,
        input: string
      ): Promise<StepResult> => {
        if (input.toLowerCase() !== "yes") {
          return {
            success: false,
            message:
              "Changes not committed. You can review and commit manually.",
            nextStep: null,
          };
        }
        // REQUIRED: Claude must:
        // 1. Run git add -A
        // 2. Create descriptive commit message listing:
        //    - What was refactored
        //    - Key improvements made
        //    - Any new patterns introduced
        // 3. Commit the changes
        return {
          success: true,
          message: "Changes committed successfully.",
          nextStep: "askPR",
        };
      },
    },
    {
      id: "askPR",
      prompt: "Would you like to create a pull request? (yes/no)",
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
        }
        return {
          success: true,
          message: "Refactoring complete! Remember to create a PR when ready.",
          nextStep: null,
        };
      },
    },
    {
      id: "createPR",
      action: async (context: CommandContext): Promise<StepResult> => {
        // REQUIRED: Claude must:
        // 1. Push branch with git push -u origin [branch-name]
        // 2. Use gh pr create with:
        //    - Title describing what was refactored
        //    - Body listing:
        //      - Problems identified
        //      - Solutions implemented
        //      - New patterns introduced
        //      - Performance improvements
        //      - Test coverage changes
        return {
          success: true,
          message: "Pull request created successfully!",
          nextStep: null,
        };
      },
    },
  ],
};

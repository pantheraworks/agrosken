import { Command, CommandContext, SlashCommandRegistry } from "./types";
import { componentCommand } from "./commands/component";
import { refactorCommand } from "./commands/refactor";

class CommandRegistry implements SlashCommandRegistry {
  commands: Map<string, Command> = new Map();

  register(command: Command): void {
    this.commands.set(command.name, command);
  }

  async execute(commandName: string, context: CommandContext): Promise<void> {
    const command = this.commands.get(commandName);
    if (!command) {
      console.error(`Command "${commandName}" not found`);
      return;
    }

    let currentStepIndex = 0;

    while (currentStepIndex < command.steps.length) {
      const step = command.steps[currentStepIndex];

      if (step.prompt) {
        // This would be handled by Claude's interface
        console.log(`[${command.name}] ${step.prompt}`);
      }

      // In actual implementation, this would wait for user input if needed
      const result = await step.action(context);

      console.log(`[${command.name}] ${result.message}`);

      if (!result.success || !result.nextStep) {
        break;
      }

      // Find next step
      const nextStepIndex = command.steps.findIndex(
        (s) => s.id === result.nextStep
      );
      if (nextStepIndex === -1) {
        console.error(`Next step "${result.nextStep}" not found`);
        break;
      }

      currentStepIndex = nextStepIndex;
    }
  }

  list(): Command[] {
    return Array.from(this.commands.values());
  }
}

// Initialize registry and register commands
export const commandRegistry = new CommandRegistry();
commandRegistry.register(componentCommand);
commandRegistry.register(refactorCommand);

// Export for Claude to use
export { Command, CommandContext } from "./types";

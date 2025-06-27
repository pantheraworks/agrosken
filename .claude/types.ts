export interface CommandContext {
  state: Record<string, any>;
  currentStep?: string;
}

export interface StepResult {
  success: boolean;
  message: string;
  nextStep: string | null;
}

export interface CommandStep {
  id: string;
  prompt?: string;
  action: (context: CommandContext, input?: string) => Promise<StepResult>;
}

export interface Command {
  name: string;
  description: string;
  steps: CommandStep[];
}

export interface SlashCommandRegistry {
  commands: Map<string, Command>;
  register(command: Command): void;
  execute(commandName: string, context: CommandContext): Promise<void>;
  list(): Command[];
}

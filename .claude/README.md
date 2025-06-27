# Claude Slash Commands

This directory contains custom slash commands for Claude Code to use when working with this project.

## Available Commands

### `/component`

Creates a new component from reference images with the following flow:

1. Switches to main branch and creates a new feature branch
2. Asks for a general component name
3. Searches the references folder for matching designs
4. Asks clarifying questions if the design is ambiguous
5. Generates the component with an appropriate name
6. Creates a `/stage` endpoint for preview
7. Awaits user approval for the preview
8. Integrates the component at the specified location
9. Updates the screenshot script for validation
10. Asks for confirmation to create a pull request
11. Creates PR with the new component (if approved)

## Command Structure

Commands are defined in the `commands/` directory and follow this structure:

- Each command is a separate TypeScript file
- Commands define multiple steps with prompts and actions
- Steps can be conditional based on context
- Claude handles the actual implementation of actions

## Adding New Commands

To add a new command:

1. Create a new file in `commands/` directory
2. Define the command with its steps
3. Import and register it in `index.ts`
4. Claude will automatically recognize and use the command

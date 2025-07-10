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

### `/component-browser`

Creates a new component with real-time browser testing using MCP browser extension:

1. Checks MCP browser availability
2. Switches to main branch and creates a feature branch
3. Asks for component type
4. Finds matching reference images
5. Starts development server
6. Opens browser using MCP tools
7. Generates initial component
8. Interactive browser testing:
   - Live preview of component
   - Visual comparison with reference
   - Interaction testing (hover, click)
   - Console error checking
9. Iterative refinement based on browser feedback
10. Integration with browser verification
11. Final validation across site
12. Optional PR creation with test results

### `/refactor`

Analyzes and refactors code for better quality and performance:

1. Switches to main branch and creates a refactor branch
2. Asks for target (file path, component, or 'analyze' for suggestions)
3. Analyzes code for common issues:
   - Code duplication
   - Long functions (>50 lines)
   - Complex conditionals
   - Missing TypeScript types
   - Performance issues
   - Accessibility concerns
4. Presents findings grouped by severity
5. Asks which improvements to apply
6. Shows refactoring plan with before/after preview
7. Implements selected refactorings
8. Validates changes (lint, format, build, tests)
9. Optionally generates tests for refactored code
10. Creates PR with detailed description of improvements

### `/responsive`

Makes existing components responsive with real-time browser testing:

1. Asks which component to make responsive
2. Finds and analyzes the component's current implementation
3. Searches references folder for mobile/tablet designs
4. Checks if development server is running
5. Opens browser and captures initial desktop view
6. Implements responsive styles using Tailwind CSS:
   - Mobile-first approach
   - Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
   - Responsive padding, margins, typography, and layouts
7. Tests on multiple viewports:
   - Mobile (375x667)
   - Tablet (768x1024)
   - Desktop and larger screens
8. Iterates and refines based on visual testing
9. Captures final screenshots at all breakpoints
10. Validates accessibility and touch targets
11. Provides summary of responsive improvements

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

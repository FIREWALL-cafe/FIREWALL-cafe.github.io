# Claude Code Project Guidelines

## Project Setup
This is a React application for Firewall Cafe with both client and server components.

## Development Workflow

### Documentation Standards
- When completing a phase of work with a commit, always include the short commit hash in any tracking documents
- Create incremental change documents for complex features to track progress step-by-step
- Mark milestones clearly with commit hashes for easy reference

### Code Standards
- Never include yourself as co-author in commits
- Remove "generated with" lines from commit messages
- Follow existing code conventions and patterns
- Use existing libraries and utilities - check package.json before adding new dependencies

### Testing
- Run linting and type checking before commits
- Verify functionality in both development and build modes
- Test responsive design on mobile breakpoints

## Common Commands
- `yarn dev` - Start development server with both client and server (recommended)
- `npm run dev` - Alternative command for development server
- `npm run build` - Create production build  
- `npm start` - Run production server

## Architecture Notes
- Uses React 18.2 with functional components and hooks
- React Router DOM for client-side routing
- Tailwind CSS for styling
- Context API (ApiContext) for state management
- Component-based architecture with wrapper patterns
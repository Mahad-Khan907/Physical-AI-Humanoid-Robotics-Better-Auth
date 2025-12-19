# Research for "Create AI Textbook Site"

## 1. Best practices for customizing Docusaurus v3 themes

**Decision**: Use Docusaurus swizzling to override default theme components. Create a custom CSS file for styling.

**Rationale**: Swizzling provides a structured way to customize the theme without forking it. It allows for easy updates of the underlying theme. Custom CSS will be used for granular control over the look and feel.

**Alternatives considered**:
- Forking the theme: This would make it difficult to get updates from the original theme.
- Using a different theme: The default theme is a good starting point and can be customized to our needs.

## 2. Investigate Tailwind-like styling vs. custom CSS for Docusaurus

**Decision**: Use custom CSS.

**Rationale**: For the scope of this project, a full utility-first CSS framework like Tailwind is overkill. Custom CSS will be easier to manage and will result in a smaller final bundle size. We can adopt a BEM-like methodology for our custom CSS to keep it organized.

**Alternatives considered**:
- Tailwind CSS: Would require additional setup and configuration. The benefits do not outweigh the costs for this project.

## 3. Best practices for integrating Claude Code for content generation in a Docusaurus project

**Decision**: Use a script-based approach to generate Markdown files from Claude Code prompts.

**Rationale**: We will create a set of scripts that take a chapter and section as input, generate a prompt for Claude Code, and save the output as a Markdown file in the correct directory. This will allow for easy regeneration of content and ensures consistency.

**Alternatives considered**:
- Manual copy-pasting: This is error-prone and time-consuming.
- A more complex integration with a custom Docusaurus plugin: This is not necessary for the current scope.

## 4. Optimal setup for GitHub Pages/Vercel deployment for a Docusaurus site

**Decision**: Use GitHub Pages for deployment.

**Rationale**: GitHub Pages is free, easy to set up, and integrates well with our existing GitHub-based workflow. Docusaurus has built-in support for deploying to GitHub Pages.

**Alternatives considered**:
- Vercel: Vercel is a great platform, but for this project, GitHub Pages is sufficient and simpler.

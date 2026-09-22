## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Engineering Standards

Follow these principles on every feature or change:

- **Plan before coding.** For non-trivial work, create a todo list, outline the affected files, and state the approach before editing.
- **Read before write.** Never blind-edit. Understand the surrounding context, imports, types, and conventions of the file first.
- **Type safety.** Prefer strict TypeScript, explicit return types, and `interface`/`type` over `any`. Validate external input (props, API responses, user data) with schemas.
- **Separation of concerns.** Keep components, data fetching, business logic, and styling in distinct modules. Avoid mega-files.
- **Accessibility (a11y).** Use semantic HTML, ARIA where needed, keyboard-navigable UI, and sufficient contrast. Test with a screen-reader mindset.
- **Performance.** Lazy-load heavy code, avoid layout shift, minimize client-side JS on Astro, use `client:` directives deliberately, and prefer islands architecture.
- **SEO & metadata.** Every page should have a descriptive `<title>`, meta description, canonical URL, and Open Graph tags. Use Astro's SEO integrations where available.
- **Naming & consistency.** Follow existing project conventions for file names, component props, utility helpers, and directory structure.
- **Error handling.** Handle edge cases, empty states, loading states, and errors explicitly. Fail gracefully.
- **Security.** Escape dynamic content, validate and sanitize user input, avoid `set:html` with untrusted data, and keep secrets out of the client bundle.
- **Testing.** Write or update tests for changed logic. Prefer integration tests for user flows and unit tests for pure utilities.
- **Documentation.** Update comments and relevant docs when behavior changes. Leave the codebase clearer than you found it.

## Skill Discovery

Before implementing a feature, check the available skills and load the one that matches the task (e.g., accessibility, performance, testing, SEO, Tailwind, etc.). Use the `skill` tool to inject relevant guidance into the session. If no skill fits, proceed with the engineering standards above.

## Codegraph

Use `codegraph_codegraph_explore` as the primary tool for understanding the codebase. Call it **before** any operation — feature work, bug fix, refactor, or review — to:

- Understand the symbols, files, and call paths involved in the change.
- Discover existing patterns, conventions, and reusable utilities to avoid duplicating logic.
- Identify the blast radius of an edit before modifying code.

Treat the returned source as already read; do not re-open those files with `Read`. Only fall back to `Grep` or `Glob` when codegraph does not surface what you need.

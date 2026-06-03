// Prefix a /public asset with the configured basePath so it resolves correctly
// when the site is hosted under a subpath (e.g. GitHub Pages at /<repo>/).
// NEXT_PUBLIC_* values are inlined at build time, so this works in both
// server and client components.
export const asset = (path: string): string =>
  `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;

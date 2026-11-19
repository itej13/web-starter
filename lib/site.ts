// Single source of truth for site identity: used by metadata, sitemap and robots.
export const site = {
  name: "Web Starter",
  description: "Replace with a one-sentence description of the site.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // Add public routes here so they land in sitemap.xml.
  routes: ["/"],
};

export function absoluteUrl(path: string, base: string = site.url): string {
  return new URL(path, base.endsWith("/") ? base : `${base}/`).toString();
}

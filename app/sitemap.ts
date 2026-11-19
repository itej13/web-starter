import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return site.routes.map((route) => ({ url: absoluteUrl(route) }));
}

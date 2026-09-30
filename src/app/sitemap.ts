import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = "https://envsync.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ["", "/docs", "/blog", "/blog/why-env-files-are-broken"].map((p) => ({
    url: `${SITE}${p}`,
    lastModified,
  }));
}

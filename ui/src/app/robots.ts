import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://hail.prasoon.rs";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/user", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

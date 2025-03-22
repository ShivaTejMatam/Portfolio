import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://shivatejmatam.vercel.app/sitemap.xml",
    host: "https://shivatejmatam.vercel.app"
  };
}


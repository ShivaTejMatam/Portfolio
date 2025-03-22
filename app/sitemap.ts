import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://shivatejmatam.vercel.app", lastModified: new Date() }
  ];
}

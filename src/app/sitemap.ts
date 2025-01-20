import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.marquista.co/",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://marquista.co/",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://www.marquista.co/about-us",
      lastModified: new Date(),
      priority: 0.2,
    },
    {
      url: "https://www.marquista.co/what-we-do",
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: "https://www.marquista.co/past-projects",
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}

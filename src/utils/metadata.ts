import { Metadata } from "next";

export function constructMetadata({
  title = "Marquista - Marketing Agency",
  description = "Marquista is a leading production agency based in Egypt, specializing in high-quality content creation for social media campaigns, TV commercials, music videos, and more. Our passionate team of experts brings innovative storytelling, precision, and creativity to every project. From concept development to post-production, we create impactful visuals that engage audiences and elevate brands. Trust us to bring your bold ideas to life with exceptional quality and on-time delivery.",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    icons,
    metadataBase: new URL("https://www.marquista.co/"),
  };
}

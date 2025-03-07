import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sofa to Strider",
    short_name: "Sofa2Strider",
    description: "An app to help you get started going outside",
    start_url: "/",
    display: "standalone",
    background_color: "#faf3dd",
    theme_color: "#faf3dd",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/walking-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

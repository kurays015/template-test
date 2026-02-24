const ROOT_URL = "https://asdad.com";

export const minikitConfig = {
  accountAssociation: {
    header: "aws",
    payload: "adasd",
    signature: "ad",
  },
  miniapp: {
    version: "1",
    name: "My Base Mini-App",
    subtitle: "A Base Mini-App",
    description: "Built with Base Builder",
    screenshotUrls: ["https://asdad.com/image.png"],
    iconUrl: "https://asdad.com/image.png",
    splashImageUrl: "https://asdad.com/image.png",
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: "https://asdad.com/api/webhook",
    primaryCategory: "social",
    tags: ["base", "miniapp"],
    heroImageUrl: "https://asdad.com/image.png",
    tagline: "asd",
    ogTitle: "My Base Mini-App",
    ogDescription: "Built with Base Builder",
    ogImageUrl: "https://asdad.com/image.png",
    "noindex": true

  },
} as const;

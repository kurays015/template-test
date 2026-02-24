const ROOT_URL = "https://www.youtube.com/watch?v=_k22WAEAfpE";

export const minikitConfig = {
  accountAssociation: {
    header: "asd",
    payload: "adad",
    signature: "adad",
  },
  miniapp: {
    version: "1",
    name: "My Base Mini-App",
    subtitle: "A Base Mini-App",
    description: "Built with Base Builder",
    screenshotUrls: ["https://www.youtube.com/watch?v=_k22WAEAfpE/image.png"],
    iconUrl: "https://www.youtube.com/watch?v=_k22WAEAfpE/image.png",
    splashImageUrl: "https://www.youtube.com/watch?v=_k22WAEAfpE/image.png",
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: "https://www.youtube.com/watch?v=_k22WAEAfpE/api/webhook",
    primaryCategory: "social",
    tags: ["base", "miniapp"],
    heroImageUrl: "https://www.youtube.com/watch?v=_k22WAEAfpE/image.png",
    tagline: "asdasda",
    ogTitle: "My Base Mini-App",
    ogDescription: "Built with Base Builder",
    ogImageUrl: "https://www.youtube.com/watch?v=_k22WAEAfpE/image.png",
    "noindex": true

  },
} as const;

const ROOT_URL = "https://template-test-chi-five.vercel.app/";

export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjIzNzk2NzMsInR5cGUiOiJhdXRoIiwia2V5IjoiMHhCM0M5OEU5RWY0M2Y3ODJEZWIwOTVjMGM1NTcyRjZCNjQ4QzZENDExIn0",
    payload: "eyJkb21haW4iOiJ0ZW1wbGF0ZS10ZXN0LWNoaS1maXZlLnZlcmNlbC5hcHAifQ",
    signature: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEH1flkI3lkIOwf0ZNNh_szdgu2VdXh3QjaryJpFwy3W7Suc9MUEsvpZsW_BzGkm7IPOSFIh6QIkwbzqX8rul_SAGwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  },
  miniapp: {
    version: "1",
    name: "My Base Mini-App",
    subtitle: "A Base Mini-App",
    description: "Built with Base Builder",
    screenshotUrls: [],
    iconUrl: "https://template-test-chi-five.vercel.app/image.png",
    splashImageUrl: "https://template-test-chi-five.vercel.app/image.png",
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: "https://template-test-chi-five.vercel.app/api/webhook",
    primaryCategory: "social",
    tags: ["base", "miniapp"],
    heroImageUrl: "https://template-test-chi-five.vercel.app/image.png",
    tagline: "",
    ogTitle: "My Base Mini-App",
    ogDescription: "Built with Base Builder",
    ogImageUrl: "https://template-test-chi-five.vercel.app/image.png",
  },
} as const;

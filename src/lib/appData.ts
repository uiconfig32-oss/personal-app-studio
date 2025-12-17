export interface AppData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  appIcon: string;
  appStoreUrl: string;
  privacyPolicyUrl: string;
}

export const appData: AppData[] = [
  {
    id: "readnest",
    name: "Readnest",
    tagline: "A digital companion for analog book lovers",
    description:
      "Readnest helps you track your reading journey, discover new books, and build lasting reading habits. Designed for those who love the feel of physical books but want the convenience of digital tracking.",
    appIcon: "/images/app-icons/readnest-icon.png",
    appStoreUrl: "https://apps.apple.com/app/readnest",
    privacyPolicyUrl: "/privacy/readnest",
  },
];

export function getAppById(id: string): AppData | undefined {
  return appData.find((app) => app.id === id);
}

export function getAppByName(name: string): AppData | undefined {
  return appData.find(
    (app) => app.name.toLowerCase() === name.toLowerCase()
  );
}

import downloadsData from "@/content/downloads.json";

export interface HostedDownload {
  title: string;
  description: string;
  category: string;
  version: string;
  size: string;
  href: string;
}

export interface ThirdPartySoftware {
  name: string;
  description: string;
  category: string;
  url: string;
}

// Data is editable via Decap CMS at /admin (Download Center collection).
export const hostedDownloads: HostedDownload[] = downloadsData.hosted;
export const thirdPartySoftware: ThirdPartySoftware[] =
  downloadsData.thirdParty;

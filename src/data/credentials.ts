import type { LocalizedText } from "./practice-areas";
import { siteConfig } from "./site";

export type Credential = {
  id: string;
  label: LocalizedText;
};

export const credentials: Credential[] = siteConfig.keywords.map((kw, i) => ({
  id: `kw-${i}`,
  label: kw,
}));
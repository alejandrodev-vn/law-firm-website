import type { LocalizedText } from "./practice-areas";

export type Credential = {
  id: string;
  label: LocalizedText;
};

export const credentials: Credential[] = [
  {
    id: "vba",
    label: {
      vi: "Thành viên Liên đoàn Luật sư Việt Nam",
      en: "Member of Vietnam Bar Federation",
      zh: "越南律师联合会成员",
    },
  },
  {
    id: "hcm-bar",
    label: {
      vi: "Đoàn Luật sư TP. Hồ Chí Minh",
      en: "Ho Chi Minh City Bar Association",
      zh: "胡志明市律师协会",
    },
  },
  {
    id: "iso",
    label: {
      vi: "Quy trình ISO 9001:2015",
      en: "ISO 9001:2015 Certified Process",
      zh: "ISO 9001:2015 认证流程",
    },
  },
  {
    id: "intl",
    label: {
      vi: "Đối tác mạng luật sư quốc tế",
      en: "International Law Network Partner",
      zh: "国际律师网络合作伙伴",
    },
  },
];
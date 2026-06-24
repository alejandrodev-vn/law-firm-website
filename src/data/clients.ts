import type { LocalizedText } from "./practice-areas";

export type ClientType = {
  id: string;
  image: string;
  title: LocalizedText;
};

export const clientTypes: ClientType[] = [
  {
    id: "investors",
    image: "/images/clients/investors.jpg",
    title: {
      vi: "Nhà đầu tư trong nước và nước ngoài",
      en: "Domestic and foreign investors",
      zh: "国内外投资者",
    },
  },
  {
    id: "fdi",
    image: "/images/clients/fdi.jpg",
    title: {
      vi: "Doanh nghiệp có vốn đầu tư nước ngoài (FDI)",
      en: "Foreign-invested enterprises (FDI)",
      zh: "外商投资企业（FDI）",
    },
  },
  {
    id: "manufacturing",
    image: "/images/clients/manufacturing.jpg",
    title: {
      vi: "Doanh nghiệp sản xuất, xuất nhập khẩu, EPE",
      en: "Manufacturing, import-export, and EPE enterprises",
      zh: "生产、进出口及出口加工企业",
    },
  },
  {
    id: "projects",
    image: "/images/clients/projects.jpg",
    title: {
      vi: "Chủ đầu tư, nhà thầu và các bên tham gia dự án",
      en: "Investors, contractors, and project participants",
      zh: "投资者、承包商及项目参与方",
    },
  },
  {
    id: "sme",
    image: "/images/clients/sme.jpg",
    title: {
      vi: "SMEs, startup và doanh nghiệp đang mở rộng",
      en: "SMEs, startups, and expanding businesses",
      zh: "中小企业、初创企业及扩张中企业",
    },
  },
  {
    id: "individuals",
    image: "/images/clients/individuals.jpg",
    title: {
      vi: "Cá nhân cần tư vấn pháp lý và bảo vệ quyền lợi",
      en: "Individuals seeking legal advisory and rights protection",
      zh: "需要法律咨询及权益保护的个人",
    },
  },
];
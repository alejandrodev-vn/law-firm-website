import type { LocalizedText } from "./practice-areas";

export type TeamMember = {
  id: string;
  name: LocalizedText;
  title: LocalizedText;
  experience: LocalizedText;
  specialty: LocalizedText;
  initials: string;
  image: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "nguyen-van-minh",
    name: {
      vi: "Nguyễn Văn Minh",
      en: "Nguyen Van Minh",
      zh: "阮文明",
    },
    title: {
      vi: "Luật sư trưởng — Đối tác sáng lập",
      en: "Managing Partner — Founding Partner",
      zh: "管理合伙人 — 创始合伙人",
    },
    experience: {
      vi: "Hơn 20 năm kinh nghiệm trong lĩnh vực luật doanh nghiệp và M&A. Tốt nghiệp Thạc sĩ Luật tại Đại học Harvard.",
      en: "Over 20 years of experience in corporate law and M&A. Holds an LL.M. from Harvard Law School.",
      zh: "拥有超过20年公司法和并购领域经验。哈佛大学法学硕士学位。",
    },
    specialty: {
      vi: "Luật doanh nghiệp, M&A, Đầu tư",
      en: "Corporate Law, M&A, Investment",
      zh: "公司法、并购、投资",
    },
    initials: "NM",
    image: "/images/team/tran-thi-an.jpg",
  },
  {
    id: "tran-thi-an",
    name: {
      vi: "Trần Thị An",
      en: "Tran Thi An",
      zh: "陈氏安",
    },
    title: {
      vi: "Luật sư cấp cao",
      en: "Senior Attorney",
      zh: "高级律师",
    },
    experience: {
      vi: "15 năm kinh nghiệm tư vấn lao động và tranh tụng. Từng là cố vấn pháp lý tại các tập đoàn đa quốc gia.",
      en: "15 years of experience in labor advisory and litigation. Former legal counsel at multinational corporations.",
      zh: "拥有15年劳动咨询和诉讼经验。曾任跨国公司法律顾问。",
    },
    specialty: {
      vi: "Luật lao động, Tranh tụng",
      en: "Labor Law, Litigation",
      zh: "劳动法、诉讼",
    },
    initials: "TA",
    image: "/images/team/nguyen-van-minh.jpg",
  },
  {
    id: "le-quoc-hung",
    name: {
      vi: "Lê Quốc Hùng",
      en: "Le Quoc Hung",
      zh: "黎国雄",
    },
    title: {
      vi: "Luật sư — Chuyên viên BĐS",
      en: "Attorney — Real Estate Specialist",
      zh: "律师 — 房地产专家",
    },
    experience: {
      vi: "12 năm kinh nghiệm trong giao dịch bất động sản và dự án đầu tư. Tham gia hơn 50 dự án BĐS lớn.",
      en: "12 years of experience in real estate transactions and investment projects. Involved in over 50 major real estate projects.",
      zh: "拥有12年房地产交易和投资项目经验。参与超过50个大型房地产项目。",
    },
    specialty: {
      vi: "Bất động sản, Đầu tư dự án",
      en: "Real Estate, Project Investment",
      zh: "房地产、项目投资",
    },
    initials: "LH",
    image: "/images/team/le-quoc-hung.jpg",
  },
  {
    id: "pham-linh-chi",
    name: {
      vi: "Phạm Linh Chi",
      en: "Pham Linh Chi",
      zh: "范灵芝",
    },
    title: {
      vi: "Luật sư — Sở hữu trí tuệ",
      en: "Attorney — Intellectual Property",
      zh: "律师 — 知识产权",
    },
    experience: {
      vi: "10 năm kinh nghiệm bảo hộ và xử lý vi phạm sở hữu trí tuệ. Chứng chỉ đại diện sở hữu công nghiệp.",
      en: "10 years of experience in IP protection and infringement cases. Certified industrial property representative.",
      zh: "拥有10年知识产权保护和侵权处理经验。工业产权代理人资格。",
    },
    specialty: {
      vi: "Sở hữu trí tuệ, Công nghệ",
      en: "Intellectual Property, Technology",
      zh: "知识产权、科技",
    },
    initials: "PC",
    image: "/images/team/pham-linh-chi.jpg",
  },
];
import type { LocalizedText } from "./practice-areas";

export type NewsArticle = {
  slug: string;
  date: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  content: LocalizedText;
  category: LocalizedText;
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "fdi-establishment-guide",
    date: "2026-03-10",
    category: {
      vi: "FDI & Doanh nghiệp",
      en: "FDI & Corporate",
      zh: "FDI与公司",
    },
    title: {
      vi: "Thủ tục thành lập công ty có vốn đầu tư nước ngoài tại Việt Nam",
      en: "Procedures for Establishing a Foreign-Invested Company in Vietnam",
      zh: "在越南设立外商投资公司的程序",
    },
    excerpt: {
      vi: "Tổng quan các bước, hồ sơ và lưu ý pháp lý khi nhà đầu tư nước ngoài thành lập doanh nghiệp tại Việt Nam.",
      en: "Overview of steps, documents, and legal considerations for foreign investors establishing a business in Vietnam.",
      zh: "外国投资者在越南设立企业的步骤、文件及法律注意事项概述。",
    },
    content: {
      vi: "Thành lập doanh nghiệp có vốn đầu tư nước ngoài tại Việt Nam đòi hỏi tuân thủ nhiều quy định về ngành nghề, tỷ lệ sở hữu và thủ tục cấp Giấy chứng nhận đăng ký đầu tư.\n\nNhà đầu tư cần chuẩn bị hồ sơ đầy đủ, lựa chọn hình thức doanh nghiệp phù hợp và nắm rõ các nghĩa vụ sau khi đi vào hoạt động. SOPHYS hỗ trợ toàn bộ quy trình từ tư vấn ban đầu đến hoàn tất thủ tục.",
      en: "Establishing a foreign-invested enterprise in Vietnam requires compliance with regulations on business sectors, ownership ratios, and investment registration certificate procedures.\n\nInvestors need to prepare complete documentation, choose the appropriate enterprise form, and understand post-operation obligations. SOPHYS supports the entire process from initial advisory to completion of procedures.",
      zh: "在越南设立外商投资企业需遵守有关行业、持股比例及投资注册证书程序的规定。\n\n投资者需准备完整文件、选择合适的企业形式并了解运营后的义务。SOPHYS提供从初步咨询到完成手续的全流程支持。",
    },
  },
  {
    slug: "customs-compliance-2026",
    date: "2026-02-15",
    category: {
      vi: "Hải quan & XNK",
      en: "Customs & Trade",
      zh: "海关与贸易",
    },
    title: {
      vi: "Tuân thủ pháp luật hải quan cho doanh nghiệp xuất nhập khẩu",
      en: "Customs Law Compliance for Import-Export Enterprises",
      zh: "进出口企业的海关法律合规",
    },
    excerpt: {
      vi: "Các điểm cần lưu ý về kiểm tra chuyên ngành, xuất xứ hàng hóa và làm việc với cơ quan Hải quan.",
      en: "Key considerations on specialized inspection, rules of origin, and working with Customs authorities.",
      zh: "关于专业检验、原产地及与海关机构沟通的关键注意事项。",
    },
    content: {
      vi: "Doanh nghiệp xuất nhập khẩu và doanh nghiệp chế xuất (EPE) cần tuân thủ chặt chẽ quy định về hải quan, kiểm tra chuyên ngành và xuất xứ hàng hóa.\n\nViệc chủ động rà soát quy trình nội bộ và cập nhật thay đổi pháp luật giúp giảm thiểu rủi ro trong hoạt động kinh doanh. SOPHYS cung cấp dịch vụ tư vấn hải quan toàn diện cho doanh nghiệp.",
      en: "Import-export and export processing enterprises (EPE) must strictly comply with customs regulations, specialized inspection, and rules of origin.\n\nProactively reviewing internal processes and staying updated on legal changes helps minimize business risks. SOPHYS provides comprehensive customs advisory for enterprises.",
      zh: "进出口及出口加工企业（EPE）须严格遵守海关规定、专业检验及原产地规则。\n\n主动审查内部流程并及时了解法律变化有助于降低经营风险。SOPHYS为企业提供全面的海关咨询服务。",
    },
  },
  {
    slug: "outsourced-legal-counsel",
    date: "2026-01-20",
    category: {
      vi: "Tư vấn thường xuyên",
      en: "Ongoing Advisory",
      zh: "常年顾问",
    },
    title: {
      vi: "Dịch vụ luật sư nội bộ thuê ngoài — Giải pháp cho doanh nghiệp vừa và nhỏ",
      en: "Outsourced In-House Counsel — A Solution for SMEs",
      zh: "外部内部律师服务——中小企业的解决方案",
    },
    excerpt: {
      vi: "Tại sao doanh nghiệp nên cân nhắc mô hình luật sư thuê ngoài thay vì xử lý pháp lý theo từng vụ việc?",
      en: "Why should businesses consider outsourced counsel instead of handling legal matters case by case?",
      zh: "企业为何应考虑外部律师模式，而非逐案处理法律事务？",
    },
    content: {
      vi: "Mô hình luật sư nội bộ thuê ngoài giúp doanh nghiệp kiểm soát rủi ro pháp lý một cách chủ động và liên tục, thay vì chỉ xử lý khi phát sinh tranh chấp.\n\nVới dịch vụ tư vấn pháp lý thường xuyên, SOPHYS đồng hành cùng doanh nghiệp trong mọi quyết định kinh doanh quan trọng, hỗ trợ làm việc với cơ quan nhà nước và bảo vệ lợi ích hợp pháp lâu dài.",
      en: "The outsourced in-house counsel model helps businesses proactively and continuously control legal risks, rather than only addressing issues when disputes arise.\n\nThrough ongoing legal advisory, SOPHYS partners with businesses on every important business decision, supports engagement with state authorities, and protects long-term legitimate interests.",
      zh: "外部内部律师模式帮助企业主动、持续地控制法律风险，而非仅在争议发生时才处理。\n\n通过常年法律顾问服务，SOPHYS陪伴企业做出每一项重要商业决策，协助与国家机构沟通，并保护长期合法权益。",
    },
  },
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
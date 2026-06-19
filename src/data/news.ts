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
    slug: "new-labor-code-2025",
    date: "2026-03-15",
    category: {
      vi: "Luật lao động",
      en: "Labor Law",
      zh: "劳动法",
    },
    title: {
      vi: "Những điểm mới của Bộ luật Lao động 2025 cần lưu ý",
      en: "Key Changes in the 2025 Labor Code You Should Know",
      zh: "2025年劳动法新规要点解读",
    },
    excerpt: {
      vi: "Bộ luật Lao động sửa đổi 2025 có nhiều thay đổi quan trọng ảnh hưởng đến quyền lợi người lao động và nghĩa vụ doanh nghiệp.",
      en: "The amended 2025 Labor Code introduces significant changes affecting employee rights and employer obligations.",
      zh: "2025年修订劳动法对劳动者权益和企业义务带来重要变化。",
    },
    content: {
      vi: "Bộ luật Lao động sửa đổi 2025 đã chính thức có hiệu lực, mang đến nhiều thay đổi quan trọng mà doanh nghiệp cần nắm rõ. Trong đó, các quy định về thời giờ làm việc, nghỉ phép và chấm dứt hợp đồng lao động được điều chỉnh nhằm cân bằng hơn giữa quyền lợi người lao động và nhu cầu vận hành của doanh nghiệp.\n\nDoanh nghiệp nên rà soát lại nội quy lao động, quy chế lương thưởng và các hợp đồng lao động hiện hành để đảm bảo tuân thủ đầy đủ quy định mới. Việc cập nhật kịp thời sẽ giúp tránh rủi ro pháp lý và tranh chấp lao động không đáng có.",
      en: "The amended 2025 Labor Code has officially taken effect, bringing important changes that businesses must understand. Regulations on working hours, leave, and employment termination have been adjusted to better balance employee rights and operational needs.\n\nBusinesses should review their internal labor rules, compensation policies, and existing employment contracts to ensure full compliance with the new regulations. Timely updates will help avoid legal risks and unnecessary labor disputes.",
      zh: "2025年修订劳动法已正式生效，带来了企业必须了解的重要变化。关于工作时间、休假和劳动合同解除的规定已进行调整，以更好地平衡劳动者权益和企业运营需求。\n\n企业应审查内部劳动规章、薪酬制度及现有劳动合同，确保完全符合新规定。及时更新有助于避免法律风险和不必要的劳动争议。",
    },
  },
  {
    slug: "foreign-investment-guide-2026",
    date: "2026-02-20",
    category: {
      vi: "Đầu tư nước ngoài",
      en: "Foreign Investment",
      zh: "外商投资",
    },
    title: {
      vi: "Hướng dẫn đầu tư nước ngoài tại Việt Nam năm 2026",
      en: "Foreign Investment Guide in Vietnam 2026",
      zh: "2026年越南外商投资指南",
    },
    excerpt: {
      vi: "Tổng quan về thủ tục, điều kiện và lưu ý pháp lý khi nhà đầu tư nước ngoài thành lập doanh nghiệp tại Việt Nam.",
      en: "Overview of procedures, conditions, and legal considerations for foreign investors establishing businesses in Vietnam.",
      zh: "外国投资者在越南设立企业的程序、条件及法律注意事项概述。",
    },
    content: {
      vi: "Việt Nam tiếp tục là điểm đến hấp dẫn cho nhà đầu tư nước ngoài nhờ nền kinh tế ổn định và chính sách mở cửa. Tuy nhiên, việc thành lập doanh nghiệp có vốn đầu tư nước ngoài đòi hỏi tuân thủ nhiều quy định pháp luật.\n\nNhà đầu tư cần lưu ý các điều kiện về tỷ lệ sở hữu, ngành nghề kinh doanh có điều kiện, thủ tục cấp Giấy chứng nhận đăng ký đầu tư và các nghĩa vụ về thuế, lao động sau khi đi vào hoạt động.",
      en: "Vietnam continues to be an attractive destination for foreign investors due to its stable economy and open policies. However, establishing a foreign-invested enterprise requires compliance with numerous legal regulations.\n\nInvestors should pay attention to ownership ratio requirements, conditional business sectors, investment registration certificate procedures, and tax and labor obligations after commencing operations.",
      zh: "越南凭借稳定的经济和开放政策，继续成为外国投资者的热门目的地。然而，设立外商投资企业需要遵守众多法律规定。\n\n投资者应注意持股比例要求、有条件经营的行业、投资注册证书办理程序，以及运营后的税务和劳动义务。",
    },
  },
  {
    slug: "ip-protection-strategies",
    date: "2026-01-10",
    category: {
      vi: "Sở hữu trí tuệ",
      en: "Intellectual Property",
      zh: "知识产权",
    },
    title: {
      vi: "Chiến lược bảo vệ sở hữu trí tuệ cho doanh nghiệp khởi nghiệp",
      en: "IP Protection Strategies for Startups",
      zh: "初创企业知识产权保护策略",
    },
    excerpt: {
      vi: "Tài sản trí tuệ là giá trị cốt lõi của nhiều startup — làm thế nào để bảo vệ hiệu quả?",
      en: "Intellectual property is core value for many startups — how to protect it effectively?",
      zh: "知识产权是许多初创企业的核心价值——如何有效保护？",
    },
    content: {
      vi: "Đối với các doanh nghiệp khởi nghiệp, tài sản trí tuệ thường là tài sản quan trọng nhất. Việc đăng ký nhãn hiệu, bằng sáng chế và bản quyền sớm sẽ giúp bảo vệ thương hiệu và công nghệ trước khi đối thủ cạnh tranh sao chép.\n\nNgoài đăng ký chính thức, doanh nghiệp nên xây dựng chính sách bảo mật thông tin nội bộ, sử dụng thỏa thuận bảo mật (NDA) khi hợp tác và theo dõi thị trường để phát hiện vi phạm kịp thời.",
      en: "For startups, intellectual property is often the most valuable asset. Early registration of trademarks, patents, and copyrights helps protect brand and technology before competitors can copy them.\n\nBeyond formal registration, businesses should establish internal confidentiality policies, use non-disclosure agreements (NDAs) in partnerships, and monitor the market to detect infringement promptly.",
      zh: "对于初创企业，知识产权往往是最有价值的资产。尽早注册商标、专利和版权，有助于在竞争对手仿冒之前保护品牌和技术。\n\n除正式注册外，企业应建立内部保密政策，在合作中使用保密协议（NDA），并监测市场以及时发现侵权行为。",
    },
  },
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
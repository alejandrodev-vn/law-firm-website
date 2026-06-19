import type { LocalizedText } from "./practice-areas";

export type Testimonial = {
  id: string;
  quote: LocalizedText;
  author: LocalizedText;
  role: LocalizedText;
  company: LocalizedText;
};

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: {
      vi: "Minh An đã hỗ trợ chúng tôi hoàn tất thủ tục M&A một cách chuyên nghiệp, rõ ràng và đúng tiến độ. Đội ngũ luôn sẵn sàng giải đáp mọi thắc mắc pháp lý.",
      en: "Minh An helped us complete our M&A procedures professionally, clearly, and on schedule. The team was always ready to address every legal question.",
      zh: "明安以专业、清晰的方式帮助我们按时完成了并购手续。团队随时解答我们的法律疑问。",
    },
    author: {
      vi: "Trần Đức Thành",
      en: "Tran Duc Thanh",
      zh: "陈德胜",
    },
    role: {
      vi: "Giám đốc Điều hành",
      en: "Chief Executive Officer",
      zh: "首席执行官",
    },
    company: {
      vi: "Công ty TNHH Công nghệ Việt",
      en: "Viet Tech Co., Ltd.",
      zh: "越南科技有限公司",
    },
  },
  {
    id: "testimonial-2",
    quote: {
      vi: "Chúng tôi đánh giá cao sự tận tâm và am hiểu sâu sắc pháp luật lao động của đội ngũ. Mọi vấn đề đều được xử lý minh bạch và hiệu quả.",
      en: "We highly value the team's dedication and deep knowledge of labor law. Every issue was handled transparently and efficiently.",
      zh: "我们高度认可团队的专业精神和对劳动法的深刻理解。所有问题都得到了透明高效的处理。",
    },
    author: {
      vi: "Lê Minh Hương",
      en: "Le Minh Huong",
      zh: "黎明香",
    },
    role: {
      vi: "Giám đốc Nhân sự",
      en: "HR Director",
      zh: "人力资源总监",
    },
    company: {
      vi: "Tập đoàn Đầu tư Đông Nam",
      en: "Southeast Investment Group",
      zh: "东南投资集团",
    },
  },
  {
    id: "testimonial-3",
    quote: {
      vi: "Dịch vụ tư vấn bất động sản rất chi tiết và thực tế. Họ giúp chúng tôi tránh được nhiều rủi ro pháp lý trong dự án đầu tư.",
      en: "The real estate advisory service was thorough and practical. They helped us avoid many legal risks in our investment project.",
      zh: "房地产咨询服务详尽务实，帮助我们在投资项目中规避了许多法律风险。",
    },
    author: {
      vi: "Phạm Quốc Bảo",
      en: "Pham Quoc Bao",
      zh: "范国宝",
    },
    role: {
      vi: "Tổng Giám đốc",
      en: "General Director",
      zh: "总经理",
    },
    company: {
      vi: "Công ty BĐS Phương Nam",
      en: "Southern Real Estate Co.",
      zh: "南方房地产公司",
    },
  },
];
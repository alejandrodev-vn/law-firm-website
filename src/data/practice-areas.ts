export type LocalizedText = {
  vi: string;
  en: string;
  zh: string;
};

export type PracticeArea = {
  slug: string;
  icon: string;
  title: LocalizedText;
  shortDesc: LocalizedText;
  fullDesc: LocalizedText;
  services: LocalizedText[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-law",
    icon: "building",
    title: {
      vi: "Luật doanh nghiệp",
      en: "Corporate Law",
      zh: "公司法",
    },
    shortDesc: {
      vi: "Thành lập, tái cấu trúc, M&A và tư vấn tuân thủ cho doanh nghiệp.",
      en: "Formation, restructuring, M&A, and compliance advisory for businesses.",
      zh: "企业设立、重组、并购及合规咨询。",
    },
    fullDesc: {
      vi: "Chúng tôi hỗ trợ doanh nghiệp trong toàn bộ vòng đời hoạt động — từ thành lập công ty, xây dựng cơ cấu quản trị, đến các giao dịch M&A phức tạp và tuân thủ quy định pháp luật.",
      en: "We support businesses throughout their lifecycle — from company formation and governance structuring to complex M&A transactions and regulatory compliance.",
      zh: "我们为企业提供全生命周期法律支持——从公司设立、治理结构搭建，到复杂并购交易及法规合规。",
    },
    services: [
      {
        vi: "Thành lập và điều chỉnh doanh nghiệp",
        en: "Company formation and amendments",
        zh: "公司设立与变更",
      },
      {
        vi: "Tư vấn M&A và đầu tư",
        en: "M&A and investment advisory",
        zh: "并购与投资咨询",
      },
      {
        vi: "Soạn thảo và rà soát hợp đồng thương mại",
        en: "Commercial contract drafting and review",
        zh: "商业合同起草与审查",
      },
      {
        vi: "Tuân thủ pháp luật doanh nghiệp",
        en: "Corporate compliance",
        zh: "企业合规",
      },
    ],
  },
  {
    slug: "labor-law",
    icon: "users",
    title: {
      vi: "Luật lao động",
      en: "Labor Law",
      zh: "劳动法",
    },
    shortDesc: {
      vi: "Tư vấn quan hệ lao động, chính sách nhân sự và tranh chấp lao động.",
      en: "Employment relations, HR policies, and labor dispute resolution.",
      zh: "劳动关系、人力资源政策及劳动争议处理。",
    },
    fullDesc: {
      vi: "Đội ngũ của chúng tôi giúp doanh nghiệp xây dựng chính sách nhân sự phù hợp pháp luật, xử lý tranh chấp lao động và bảo vệ quyền lợi người lao động cũng như người sử dụng lao động.",
      en: "Our team helps businesses develop compliant HR policies, resolve labor disputes, and protect the rights of both employees and employers.",
      zh: "我们的团队帮助企业制定合规的人力资源政策，处理劳动争议，保护劳动者和用人单位的合法权益。",
    },
    services: [
      {
        vi: "Soạn thảo nội quy, quy chế lao động",
        en: "Internal labor rules and regulations",
        zh: "内部规章与劳动制度",
      },
      {
        vi: "Tư vấn chấm dứt hợp đồng lao động",
        en: "Employment termination advisory",
        zh: "劳动合同解除咨询",
      },
      {
        vi: "Đại diện tranh tụng lao động",
        en: "Labor litigation representation",
        zh: "劳动争议诉讼代理",
      },
      {
        vi: "Tư vấn BHXH và phúc lợi",
        en: "Social insurance and benefits advisory",
        zh: "社会保险与福利咨询",
      },
    ],
  },
  {
    slug: "real-estate",
    icon: "home",
    title: {
      vi: "Bất động sản",
      en: "Real Estate",
      zh: "房地产",
    },
    shortDesc: {
      vi: "Giao dịch bất động sản, dự án đầu tư và giải quyết tranh chấp đất đai.",
      en: "Property transactions, investment projects, and land dispute resolution.",
      zh: "房地产交易、投资项目及土地纠纷解决。",
    },
    fullDesc: {
      vi: "Chúng tôi tư vấn toàn diện cho các giao dịch bất động sản, dự án đầu tư, thủ tục pháp lý về quyền sử dụng đất và giải quyết tranh chấp liên quan đến tài sản.",
      en: "We provide comprehensive advisory on real estate transactions, investment projects, land use rights procedures, and property-related disputes.",
      zh: "我们为房地产交易、投资项目、土地使用权手续及财产相关纠纷提供全面法律咨询。",
    },
    services: [
      {
        vi: "Rà soát pháp lý dự án BĐS",
        en: "Real estate project due diligence",
        zh: "房地产项目法律尽职调查",
      },
      {
        vi: "Soạn thảo hợp đồng mua bán, thuê",
        en: "Sale and lease agreement drafting",
        zh: "买卖及租赁合同起草",
      },
      {
        vi: "Tư vấn thủ tục sổ đỏ, sổ hồng",
        en: "Land title and certificate procedures",
        zh: "产权证办理咨询",
      },
      {
        vi: "Giải quyết tranh chấp đất đai",
        en: "Land dispute resolution",
        zh: "土地纠纷解决",
      },
    ],
  },
  {
    slug: "intellectual-property",
    icon: "shield",
    title: {
      vi: "Sở hữu trí tuệ",
      en: "Intellectual Property",
      zh: "知识产权",
    },
    shortDesc: {
      vi: "Bảo hộ thương hiệu, bằng sáng chế, bản quyền và xử lý vi phạm.",
      en: "Trademark, patent, copyright protection and infringement handling.",
      zh: "商标、专利、版权保护及侵权处理。",
    },
    fullDesc: {
      vi: "Chúng tôi hỗ trợ khách hàng bảo vệ tài sản trí tuệ, đăng ký nhãn hiệu, bằng sáng chế và xử lý các vụ vi phạm quyền sở hữu trí tuệ tại Việt Nam và quốc tế.",
      en: "We help clients protect intellectual property assets, register trademarks and patents, and handle IP infringement cases in Vietnam and internationally.",
      zh: "我们帮助客户保护知识产权资产，办理商标和专利注册，处理越南及国际范围内的知识产权侵权案件。",
    },
    services: [
      {
        vi: "Đăng ký nhãn hiệu, bằng sáng chế",
        en: "Trademark and patent registration",
        zh: "商标与专利注册",
      },
      {
        vi: "Rà soát và soạn thảo hợp đồng IP",
        en: "IP contract review and drafting",
        zh: "知识产权合同审查与起草",
      },
      {
        vi: "Xử lý vi phạm sở hữu trí tuệ",
        en: "IP infringement enforcement",
        zh: "知识产权侵权维权",
      },
      {
        vi: "Tư vấn chuyển giao công nghệ",
        en: "Technology transfer advisory",
        zh: "技术转让咨询",
      },
    ],
  },
  {
    slug: "litigation",
    icon: "scale",
    title: {
      vi: "Tranh tụng & giải quyết tranh chấp",
      en: "Litigation & Dispute Resolution",
      zh: "诉讼与争议解决",
    },
    shortDesc: {
      vi: "Đại diện tranh tụng tại tòa án, trọng tài và hòa giải thương mại.",
      en: "Court representation, arbitration, and commercial mediation.",
      zh: "法院诉讼代理、仲裁及商业调解。",
    },
    fullDesc: {
      vi: "Đội ngũ tranh tụng của chúng tôi có kinh nghiệm đại diện khách hàng tại các cấp tòa án, trọng tài thương mại và các thủ tục hòa giải, luôn ưu tiên giải pháp hiệu quả và bảo vệ quyền lợi tối đa.",
      en: "Our litigation team has extensive experience representing clients in courts, commercial arbitration, and mediation proceedings, always prioritizing effective solutions and maximum protection of client interests.",
      zh: "我们的诉讼团队拥有丰富的法院代理、商事仲裁及调解经验，始终优先选择高效方案并最大限度保护客户权益。",
    },
    services: [
      {
        vi: "Tranh tụng dân sự, thương mại",
        en: "Civil and commercial litigation",
        zh: "民事及商事诉讼",
      },
      {
        vi: "Trọng tài thương mại",
        en: "Commercial arbitration",
        zh: "商事仲裁",
      },
      {
        vi: "Hòa giải và đàm phán",
        en: "Mediation and negotiation",
        zh: "调解与谈判",
      },
      {
        vi: "Thi hành án dân sự",
        en: "Civil judgment enforcement",
        zh: "民事判决执行",
      },
    ],
  },
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((area) => area.slug === slug);
}
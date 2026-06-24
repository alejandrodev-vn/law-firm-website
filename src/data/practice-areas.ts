export type LocalizedText = {
  vi: string;
  en: string;
  zh: string;
};

export type PracticeArea = {
  slug: string;
  icon: string;
  image: string;
  title: LocalizedText;
  shortDesc: LocalizedText;
  fullDesc: LocalizedText;
  services: LocalizedText[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "fdi-corporate",
    icon: "building",
    image: "/images/practice-areas/fdi-corporate.png",
    title: {
      vi: "Đầu tư nước ngoài (FDI) và Doanh nghiệp",
      en: "Foreign Investment (FDI) & Corporate",
      zh: "外商投资（FDI）与公司",
    },
    shortDesc: {
      vi: "Thành lập FDI, M&A, tái cấu trúc và tư vấn quản trị doanh nghiệp.",
      en: "FDI establishment, M&A, restructuring, and corporate governance advisory.",
      zh: "外商投资设立、并购、重组及公司治理咨询。",
    },
    fullDesc: {
      vi: "Chúng tôi đồng hành nhà đầu tư trong nước và quốc tế trong toàn bộ vòng đời doanh nghiệp — từ thành lập, điều chỉnh dự án đầu tư, chuyển nhượng vốn, M&A đến tái cấu trúc và tuân thủ quản trị doanh nghiệp.",
      en: "We accompany domestic and international investors throughout the business lifecycle — from establishment and investment project adjustments to capital transfer, M&A, restructuring, and corporate governance compliance.",
      zh: "我们为国内外投资者提供全生命周期法律服务——从设立、投资项目的调整、股权转让、并购到重组及公司治理合规。",
    },
    services: [
      { vi: "Thành lập doanh nghiệp có vốn đầu tư nước ngoài", en: "Establishment of foreign-invested enterprises", zh: "外商投资企业设立" },
      { vi: "Điều chỉnh dự án đầu tư và doanh nghiệp", en: "Investment project and enterprise adjustments", zh: "投资项目和企业的调整" },
      { vi: "Chuyển nhượng vốn, M&A và tái cấu trúc doanh nghiệp", en: "Capital transfer, M&A, and corporate restructuring", zh: "股权转让、并购及企业重组" },
      { vi: "Tư vấn quản trị và tuân thủ doanh nghiệp", en: "Corporate governance and compliance advisory", zh: "公司治理与合规咨询" },
    ],
  },
  {
    slug: "investment-construction",
    icon: "home",
    image: "/images/practice-areas/investment-construction.jpg",
    title: {
      vi: "Đầu tư, Xây dựng và Dự án",
      en: "Investment, Construction & Projects",
      zh: "投资、建设与项目",
    },
    shortDesc: {
      vi: "Tư vấn pháp lý dự án đầu tư, xây dựng, đất đai và triển khai vận hành.",
      en: "Legal advisory on investment projects, construction, land, and project operations.",
      zh: "投资项目、建设、土地及项目运营的法律咨询。",
    },
    fullDesc: {
      vi: "SOPHYS hỗ trợ chủ đầu tư, nhà thầu và các bên liên quan trong triển khai dự án đầu tư, xây dựng — từ tư vấn pháp lý ban đầu, quản lý hợp đồng xây dựng đến các vấn đề về đất đai, môi trường và phòng cháy chữa cháy.",
      en: "SOPHYS supports investors, contractors, and stakeholders in implementing investment and construction projects — from initial legal advisory and construction contract management to land, environmental, and fire safety matters.",
      zh: "SOPHYS为投资者、承包商及相关方提供投资与建设项目法律支持——从初步法律咨询、建设合同管理到土地、环境及消防相关问题。",
    },
    services: [
      { vi: "Tư vấn pháp lý dự án đầu tư", en: "Investment project legal advisory", zh: "投资项目法律咨询" },
      { vi: "Xây dựng, đất đai, môi trường và phòng cháy chữa cháy", en: "Construction, land, environmental, and fire safety", zh: "建设、土地、环境及消防" },
      { vi: "Quản lý hợp đồng xây dựng", en: "Construction contract management", zh: "建设合同管理" },
      { vi: "Hỗ trợ triển khai và vận hành dự án", en: "Project implementation and operations support", zh: "项目实施与运营支持" },
    ],
  },
  {
    slug: "contracts-commerce",
    icon: "document",
    image: "/images/practice-areas/contracts-commerce.jpg",
    title: {
      vi: "Hợp đồng và Giao dịch thương mại",
      en: "Contracts & Commercial Transactions",
      zh: "合同与商业交易",
    },
    shortDesc: {
      vi: "Soạn thảo, rà soát hợp đồng thương mại trong nước và quốc tế.",
      en: "Drafting and reviewing domestic and international commercial contracts.",
      zh: "国内外商业合同的起草与审查。",
    },
    fullDesc: {
      vi: "Chúng tôi hỗ trợ doanh nghiệp trong mọi giao dịch thương mại — soạn thảo, rà soát, đàm phán hợp đồng xây dựng, mua bán hàng hóa, dịch vụ và hợp đồng thương mại quốc tế, đồng thời tư vấn quản trị rủi ro giao dịch.",
      en: "We support businesses in all commercial transactions — drafting, reviewing, and negotiating construction, goods sale, service, and international commercial contracts, while advising on transaction risk management.",
      zh: "我们为企业提供全方位商业交易法律支持——起草、审查和谈判建设、货物买卖、服务及国际商业合同，并提供交易风险管理咨询。",
    },
    services: [
      { vi: "Soạn thảo, rà soát và đàm phán hợp đồng", en: "Contract drafting, review, and negotiation", zh: "合同起草、审查与谈判" },
      { vi: "Hợp đồng thương mại quốc tế", en: "International commercial contracts", zh: "国际商业合同" },
      { vi: "Hợp đồng xây dựng, mua bán hàng hóa và dịch vụ", en: "Construction, goods, and service contracts", zh: "建设、货物及服务合同" },
      { vi: "Tư vấn và quản trị rủi ro giao dịch", en: "Transaction risk management advisory", zh: "交易风险管理咨询" },
    ],
  },
  {
    slug: "dispute-litigation",
    icon: "scale",
    image: "/images/practice-areas/dispute-litigation.jpg",
    title: {
      vi: "Giải quyết tranh chấp và Tố tụng",
      en: "Dispute Resolution & Litigation",
      zh: "争议解决与诉讼",
    },
    shortDesc: {
      vi: "Tranh chấp thương mại, đầu tư, xây dựng và đại diện tố tụng.",
      en: "Commercial, investment, construction disputes and litigation representation.",
      zh: "商业、投资、建设争议及诉讼代理。",
    },
    fullDesc: {
      vi: "SOPHYS đại diện khách hàng trong giải quyết tranh chấp thương mại, đầu tư, xây dựng, bất động sản, doanh nghiệp và tranh chấp cá nhân — thông qua thương lượng, hòa giải, trọng tài và tố tụng tại Tòa án.",
      en: "SOPHYS represents clients in resolving commercial, investment, construction, real estate, corporate, and personal disputes — through negotiation, mediation, arbitration, and court litigation.",
      zh: "SOPHYS代理客户解决商业、投资、建设、房地产、企业及个人争议——通过谈判、调解、仲裁及法院诉讼。",
    },
    services: [
      { vi: "Tranh chấp thương mại", en: "Commercial disputes", zh: "商业争议" },
      { vi: "Tranh chấp đầu tư, xây dựng và bất động sản", en: "Investment, construction, and real estate disputes", zh: "投资、建设及房地产争议" },
      { vi: "Tranh chấp doanh nghiệp và cá nhân", en: "Corporate and personal disputes", zh: "企业及个人争议" },
      { vi: "Đại diện trong thương lượng, hòa giải, trọng tài và tố tụng", en: "Representation in negotiation, mediation, arbitration, and litigation", zh: "谈判、调解、仲裁及诉讼代理" },
    ],
  },
  {
    slug: "customs-trade",
    icon: "globe",
    image: "/images/practice-areas/customs-trade.jpg",
    title: {
      vi: "Hải quan, Xuất nhập khẩu và Tuân thủ thương mại",
      en: "Customs, Import/Export & Trade Compliance",
      zh: "海关、进出口与贸易合规",
    },
    shortDesc: {
      vi: "Tư vấn hải quan, EPE, kiểm tra chuyên ngành và xuất xứ hàng hóa.",
      en: "Customs advisory, EPE, specialized inspection, and rules of origin.",
      zh: "海关咨询、出口加工企业、专业检验及原产地。",
    },
    fullDesc: {
      vi: "Chúng tôi hỗ trợ doanh nghiệp sản xuất, xuất nhập khẩu và doanh nghiệp chế xuất (EPE) trong tuân thủ pháp luật hải quan — từ tư vấn xuất nhập khẩu, kiểm tra chuyên ngành, xuất xứ hàng hóa đến làm việc với cơ quan Hải quan và cơ quan quản lý nhà nước.",
      en: "We support manufacturing, import-export, and export processing enterprises (EPE) in customs law compliance — from import-export advisory, specialized inspection, and rules of origin to working with Customs and relevant state authorities.",
      zh: "我们为生产、进出口及出口加工企业（EPE）提供海关法律合规支持——从进出口咨询、专业检验、原产地到与海关及相关国家机构的工作协调。",
    },
    services: [
      { vi: "Tư vấn pháp luật hải quan và xuất nhập khẩu", en: "Customs and import-export law advisory", zh: "海关及进出口法律咨询" },
      { vi: "Doanh nghiệp chế xuất (EPE), gia công và sản xuất xuất khẩu", en: "EPE, processing, and export manufacturing enterprises", zh: "出口加工企业、加工及出口生产" },
      { vi: "Kiểm tra chuyên ngành, xuất xứ hàng hóa", en: "Specialized inspection and rules of origin", zh: "专业检验及原产地" },
      { vi: "Hỗ trợ làm việc với cơ quan Hải quan", en: "Support in working with Customs authorities", zh: "协助与海关机构沟通" },
    ],
  },
  {
    slug: "retainer-advisory",
    icon: "shield",
    image: "/images/practice-areas/retainer-advisory.jpg",
    title: {
      vi: "Tư vấn pháp lý thường xuyên",
      en: "Ongoing Legal Advisory",
      zh: "常年法律顾问",
    },
    shortDesc: {
      vi: "Luật sư nội bộ thuê ngoài và đồng hành pháp lý dài hạn.",
      en: "Outsourced in-house counsel and long-term legal partnership.",
      zh: "外部内部律师及长期法律陪伴。",
    },
    fullDesc: {
      vi: "Dịch vụ luật sư nội bộ thuê ngoài giúp doanh nghiệp kiểm soát rủi ro pháp lý trong hoạt động kinh doanh hàng ngày, hỗ trợ làm việc với cơ quan nhà nước và đồng hành pháp lý dài hạn cùng doanh nghiệp.",
      en: "Our outsourced in-house counsel service helps businesses control legal risks in daily operations, supports engagement with state authorities, and provides long-term legal partnership.",
      zh: "外部内部律师服务帮助企业控制日常经营中的法律风险，协助与国家机构沟通，并提供长期法律陪伴。",
    },
    services: [
      { vi: "Dịch vụ luật sư nội bộ thuê ngoài", en: "Outsourced in-house counsel service", zh: "外部内部律师服务" },
      { vi: "Kiểm soát rủi ro pháp lý trong hoạt động kinh doanh", en: "Legal risk control in business operations", zh: "经营活动法律风险控制" },
      { vi: "Hỗ trợ làm việc với cơ quan nhà nước", en: "Support in working with state authorities", zh: "协助与国家机构沟通" },
      { vi: "Đồng hành pháp lý dài hạn cùng doanh nghiệp", en: "Long-term legal partnership with businesses", zh: "与企业长期法律陪伴" },
    ],
  },
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((area) => area.slug === slug);
}
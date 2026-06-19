# Website Giới Thiệu Công Ty Luật

Website demo giới thiệu công ty luật — 3 ngôn ngữ (Việt, Anh, Trung), giao diện trầm, chuyên nghiệp.

## Tính năng

- **3 ngôn ngữ**: Tiếng Việt (mặc định), English, 中文
- **7 trang chính**: Trang chủ, Giới thiệu, Lĩnh vực hành nghề, Chi tiết lĩnh vực, Đội ngũ, Tin tức, Liên hệ
- **Responsive** — tối ưu mobile & desktop
- **Form liên hệ** + Google Maps embed
- **SEO cơ bản** — metadata, Open Graph

## Công nghệ

- [Next.js 16](https://nextjs.org/) (App Router)
- [next-intl](https://next-intl.dev/) — đa ngôn ngữ
- [Tailwind CSS 4](https://tailwindcss.com/)

## Chạy local

```bash
npm install
npm run dev
```

Mở [http://localhost:3000/vi](http://localhost:3000/vi) (hoặc `/en`, `/zh`).

## Build production

```bash
npm run build
npm start
```

## Cấu trúc thư mục

```
src/
├── app/[locale]/          # Các trang theo ngôn ngữ
├── components/            # Header, Footer, Cards, Form...
├── data/                  # Nội dung demo (lĩnh vực, đội ngũ, tin tức)
├── i18n/                  # Cấu hình đa ngôn ngữ
├── messages/              # Bản dịch UI (vi.json, en.json, zh.json)
└── lib/                   # Utilities
```

## Tùy chỉnh nội dung

| Nội dung | File |
|----------|------|
| Tên công ty, menu, label UI | `src/messages/{vi,en,zh}.json` |
| Lĩnh vực hành nghề | `src/data/practice-areas.ts` |
| Đội ngũ luật sư | `src/data/team.ts` |
| Tin tức / kiến thức pháp lý | `src/data/news.ts` |
| Liên hệ, maps, mạng xã hội | `src/data/site.ts` |

## Màu sắc

Tone **Navy + Kem + Vàng đồng** — chuyên nghiệp, uy tín:

- Navy: `#1a2744`
- Kem: `#f5f0e8`
- Vàng đồng: `#b8860b`

## Triển khai

Có thể deploy lên Vercel, VPS hoặc bất kỳ hosting hỗ trợ Node.js:

```bash
npm run build
```

## Ghi chú demo

Nội dung hiện tại là **demo** (Công ty Luật ABC). Thay thế bằng nội dung thực tế của khách hàng trước khi go-live.
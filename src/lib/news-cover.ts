import type { NewsArticle } from "@/data/news";

export const NEWS_COVER_FALLBACK = "/images/news/default.jpg";

const PLACEHOLDER_COVERS: Record<string, string> = {
  "fdi-establishment-guide": "/images/news/fdi-establishment-guide.jpg",
  "customs-compliance-2026": "/images/news/customs-compliance-2026.jpg",
  "outsourced-legal-counsel": "/images/news/outsourced-legal-counsel.jpg",
};

export function getNewsCoverImage(article: NewsArticle): string {
  return article.coverImage ?? PLACEHOLDER_COVERS[article.slug] ?? NEWS_COVER_FALLBACK;
}
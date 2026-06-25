export type PhilosophyCardKey = "beyondLaw" | "besideYou";

export type PhilosophyCardVisual = {
  image: string;
  fallback: string;
  variant: "dark" | "light";
};

export const philosophyVisuals: Record<PhilosophyCardKey, PhilosophyCardVisual> = {
  beyondLaw: {
    image: "/images/philosophy/beyond-law.jpg",
    fallback: "/images/philosophy/beyond-law-fallback.jpg",
    variant: "dark",
  },
  besideYou: {
    image: "/images/philosophy/beside-you.jpg",
    fallback: "/images/philosophy/beside-you-fallback.jpg",
    variant: "light",
  },
};
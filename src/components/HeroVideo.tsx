"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster: string;
  className?: string;
};

export default function HeroVideo({ src, poster, className = "" }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPlayback = () => {
      if (media.matches) {
        video.pause();
        return;
      }
      video.play().catch(() => {});
    };

    syncPlayback();
    media.addEventListener("change", syncPlayback);
    return () => media.removeEventListener("change", syncPlayback);
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "onLoad" | "placeholder" | "blurDataURL"> & {
  fallbackSrc: string;
};

export default function ProgressiveImage({
  src,
  fallbackSrc,
  alt,
  className = "",
  priority = false,
  ...rest
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Image
        src={fallbackSrc}
        alt=""
        aria-hidden
        className={`${className} scale-[1.02] blur-[1px]`}
        priority={priority}
        {...rest}
      />
      <Image
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ease-out motion-reduce:transition-none ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        priority={priority}
        onLoad={() => setLoaded(true)}
        {...rest}
      />
    </>
  );
}
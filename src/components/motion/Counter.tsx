"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { gsap, registerGsap } from "@/lib/gsap";

type Props = {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export default function Counter({
  value,
  suffix = "",
  duration = 1.4,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    if (reduce) {
      setDisplay(value);
      return;
    }

    registerGsap();

    const counter = { val: 0 };
    const tween = gsap.to(counter, {
      val: value,
      duration,
      ease: "power3.out",
      onUpdate: () => setDisplay(Math.round(counter.val)),
    });

    return () => {
      tween.kill();
    };
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
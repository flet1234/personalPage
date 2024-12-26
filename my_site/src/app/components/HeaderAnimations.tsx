"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeaderAnimation = ({ name, borderColor }: { name: string; borderColor: string }) => {
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        headerRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  return (
    <div ref={headerRef} className="flex flex-col">
      {name}
      <span
        className={`w-12/12 mt-0.5 border-b-2 border-${borderColor} ${borderColor === "background" ? "dark:border-slate-300" : ""}`}
      ></span>
    </div>
  );
};

export default HeaderAnimation;

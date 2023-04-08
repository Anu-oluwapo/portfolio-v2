import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import imagesLoaded from "imagesloaded";

export const lenis = new Lenis({
  smoothWheel: true,
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

export function loadComplete() {
  gsap.set(".hero-section .text-content *", {
    transform: "translateY(70%)",
    opacity: 0,
  });
  gsap.set(".scroller", { x: "150%" });

  gsap.set(".about-section .section-header", {
    x: "-100%",
  });

  const loadCompleteTl = gsap.timeline();
  loadCompleteTl
    .to(".preloader-section", {
      y: "-100%",
      delay: 0.5,
    })
    .to(
      "section:nth-child(2)",
      {
        y: "-100%",
        delay: 0.6,
      },
      0
    )
    .to(
      "section:nth-child(3)",
      {
        y: "-100%",
        delay: 0.7,
      },
      0
    )
    .to(
      ".hero-section .text-content *",
      {
        transform: "translateY(0%)",
        opacity: 1,
        duration: 1.5,
        delay: 0.8,
        ease: "Power3.easeOut",
      },
      0
    )
    .to(
      ".scroller",
      {
        x: "auto",
        delay: 1,
        duration: 1,
        ease: "Power3.easeOut",
      },
      0
    )
    .to(
      ".about-section .section-header",
      {
        x: "auto",
        delay: 1,
        duration: 1.5,
        ease: "Power3.easeOut",
      },
      0
    );
}

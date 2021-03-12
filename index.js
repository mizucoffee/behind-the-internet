const debug = false;

gsap.to(".anim-1", {
  scrollTrigger: {
    trigger: ".anim-1",
    start: "top top",
    end: "50% end",
    scrub: true,
    pin: true,
    markers: debug
  }
});

gsap.to("#pop1", {
  scrollTrigger: {
    trigger: ".anim-1-content",
    start: "60% center",
    markers: debug,
    toggleActions: "play none none reverse"
  },
  opacity: 1,
  transform: 'translateY(0px)'
});

gsap.to("#pop2", { // 動かす要素
  scrollTrigger: {
    trigger: ".anim-1-content",
    start: "80% center",
    markers: debug,
    toggleActions: "play none none reverse"
  },
  opacity: 1,
  transform: 'translateY(0px)'
});
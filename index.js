const debug = false;

pinPage('.anim-1', '90%')
show('#pop1', ".anim-1-content", "60%", "80%")
show('#pop2', ".anim-1-content", "100%", "120%")

function pinPage(target, size) {
  gsap.to(target, {
    scrollTrigger: {
      trigger: ".anim-1",
      start: "top top",
      end: `${size} end`,
      scrub: true,
      pin: true,
      markers: debug
    }
  });
}

function show(target, trigger, start, end) {
  gsap.to(target, {
    scrollTrigger: {
      trigger: trigger,
      start: `${start} center`,
      end: `${end} center`,
      markers: debug,
      scrub: true,
      toggleActions: "play none none reverse"
    },
    opacity: 1,
    transform: 'translateY(0px)'
  });
}

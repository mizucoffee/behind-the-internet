const debug = false;

pinPage('#anim-1', '90%')
show('#pop1', "#anim-1-content", "60%", "80%")
show('#pop2', "#anim-1-content", "100%", "120%")

pinPage('#anim-2', '120%')
translate('#packet1', "#anim-2-content", "70%", "120%", 'calc(100% - 350px)')
translate('#packet2', "#anim-2-content", "150%", "200%", '0px')

pinPage('#anim-3', '200%')

function pinPage(target, size) {
  gsap.to(target, {
    scrollTrigger: {
      trigger: target,
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

function translate(target, trigger, start, end, to) {
  gsap.to(target, {
    scrollTrigger: {
      trigger: trigger,
      start: `${start} center`,
      end: `${end} center`,
      markers: true,
      scrub: true,
      toggleActions: "play none none reverse"
    },
    left: to
  });
}
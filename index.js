const debug = false;

pinPage('#anim-1', '90%')
show('#pop1', "#anim-1-content", "60%", "80%")
show('#pop2', "#anim-1-content", "100%", "120%")

pinPage('#anim-2', '200%')
animate('#packet1', "#anim-2-content", "70%", "130%", {right: '0'})
fadeout('#packet1', "#anim-2-content", "140%", "170%")
fadein('#packet2', "#anim-2-content", "190%", "220%")
animate('#packet2', "#anim-2-content", "230%", "290%", {left: '0px'})

pinPage('#anim-3', '450%')
animate('#dns1', "#anim-3-content", "70%", "130%", {right: 0, top: 0})
fadeout('#dns1', "#anim-3-content", "140%", "170%")

fadein('#dns2', "#anim-3-content", "190%", "220%")
animate('#dns2', "#anim-3-content", "230%", "290%", {left: 0, top: 'calc(50% - 55px)'})
fadeout('#dns2', "#anim-3-content", "300%", "330%")

fadein('#dns3', "#anim-3-content", "350%", "380%")
animate('#dns3', "#anim-3-content", "390%", "450%", {right: 0, bottom: 0})
fadeout('#dns3', "#anim-3-content", "460%", "490%")

fadein('#dns4', "#anim-3-content", "510%", "540%")
animate('#dns4', "#anim-3-content", "550%", "610%", {left: 0, bottom: 'calc(50% - 55px)'})

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

function animate(target, trigger, start, end, anim) {
  gsap.to(target, {
    scrollTrigger: {
      trigger: trigger,
      start: `${start} center`,
      end: `${end} center`,
      markers: debug,
      scrub: true,
      toggleActions: "play none none reverse"
    },
    ...anim
  });
}

function fadein(target, trigger, start, end) {
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
  });
}

function fadeout(target, trigger, start, end) {
  gsap.to(target, {
    scrollTrigger: {
      trigger: trigger,
      start: `${start} center`,
      end: `${end} center`,
      markers: debug,
      scrub: true,
      toggleActions: "play none none reverse"
    },
    opacity: 0,
  });
}
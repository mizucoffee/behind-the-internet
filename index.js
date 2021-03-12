gsap.to(".anim-1", { // 動かす要素
  scrollTrigger: {
    trigger: ".anim-1", // この要素まできたらアニメーション開始
    start: "top top", // ビューポートの設定
    end: "100% end", // ビューポートの設定
    scrub: true,
    pin: true,
    markers: true // 検証用のマーカーを表示
  }
});

gsap.to("#pop1", { // 動かす要素
  scrollTrigger: {
    trigger: "#pop1", // この要素まできたらアニメーション開始
    start: "50% center", // ビューポートの設定
    //    pin: true,
    markers: true // 検証用のマーカーを表示
  },
  opacity: 1,
  transform: 'translateY(0px)'
});

gsap.to("#pop2", { // 動かす要素
  scrollTrigger: {
    trigger: "#pop2", // この要素まできたらアニメーション開始
    start: "100% center", // ビューポートの設定
    //    pin: true,
    markers: true // 検証用のマーカーを表示
  },
  opacity: 1,
  transform: 'translateY(0px)'
});
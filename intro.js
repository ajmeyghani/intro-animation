const letterAnimationIntro = {
  targets: ".letter",
  // opacity: [0, 1],
  opacity: {
    value: [0, 1],
    easing: "easeInOutSine",
    duration: 500,
  },
  duration: 500,
  translateY: [-50, 0],
  delay: anime.stagger(100),
  easing: "steps(10)",
};

const letterAnimationOutro = {
  targets: ".letter",
  opacity: [1, 0],
  duration: 2000,
  translateY: "-=50",
  delay: anime.stagger(100),
};

const squareAnimation = {
  targets: ".square",
  translateX: [-50, 50],
  loop: true,
  easing: "steps(3)",
  duration: 800
};

const scaleUpSquare = {
  targets: ".square",
  scale: [1, 100],
  easing: "steps(10)",
  duration: 500,
};

const introAnimation = anime.timeline({
  loop: false,
});

introAnimation
  .add(squareAnimation)
  .add(scaleUpSquare)
  .add(letterAnimationIntro)
  .add(letterAnimationOutro, "+=1000");
// introAnimation.add(squareAnimation)

// const a3 = {
//   targets: '.square',
//   translateX: 250,
//   direction: 'alternate',
//   loop: true,
//   easing: 'steps(5)'
// }

// var tl = anime.timeline({
//   loop: true,
//   duration: 800,
// });

// tl.add(a1).add(a3,0).add(a2)

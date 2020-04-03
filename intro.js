const squareMoveRight = {
  targets: ".square",
  translateX: [-50, 50],
  loop: true,
  easing: "steps(3)",
  duration: 800,
};

const scaleUpSquare = {
  targets: ".square",
  scale: [1, 100],
  easing: "steps(10)",
  duration: 500,
};

const lettersIntro = {
  targets: ".letter",
  opacity: {
    value: [0, 1],
    easing: "easeInOutSine",
    duration: 500,
  },
  duration: 500,
  translateY: [-50, 0],
  delay: window.anime.stagger(100),
  easing: "steps(10)",
};

const lettersOutro = {
  targets: ".letter",
  opacity: [1, 0],
  duration: 2000,
  translateY: "-=50",
  delay: window.anime.stagger(100),
};

const introAnimation = window.anime.timeline({
  loop: false,
  delay: 200,
});

introAnimation
  .add(squareMoveRight)
  .add(scaleUpSquare)
  .add(lettersIntro)
  .add(lettersOutro, "+=1000");

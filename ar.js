import {
  randomButterflyOne,
  randomButterflyTwo,
  randomButterflyThree,
  randomButterflyFour,
  randomButterflyFive,
} from "./animationLoader.js";
const firstButterfly = document.querySelector("#butterfly1");
const secondButterfly = document.querySelector("#butterfly2");
const thirdButterfly = document.querySelector("#butterfly3");
const fourthButterfly = document.querySelector("#butterfly4");
const fifthButterfly = document.querySelector("#butterfly5");
const scanText = document.querySelector("#promptToScan");
const catchText = document.querySelector("#promptToCatch");
const congratsText = document.querySelector("#congratsPrompt");

const { PID } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

const { CID } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

let caught1 = false;
let caught2 = false;
let caught3 = false;
let caught4 = false;
let caught5 = false;

firstButterfly.addEventListener("click", (event) => {
  handleClick(firstButterfly, caught1);
  caught1 = true;
  if (caught1 || caught2 || caught3 || caught4 || caught5) {
    location.href = `https://mystifying-nightingale-5da125.netlify.app/?username=${CID}&&${randomButterflyOne}=true`;
  }
});

secondButterfly.addEventListener("click", (event) => {
  handleClick(secondButterfly, caught2);
  caught2 = true;
  if (caught1 || caught2 || caught3 || caught4 || caught5) {
    location.href = `https://mystifying-nightingale-5da125.netlify.app/?butterfly1=${randomButterflyTwo}`;
  }
});

thirdButterfly.addEventListener("click", (event) => {
  handleClick(thirdButterfly, caught3);
  caught3 = true;
  if (caught1 || caught2 || caught3 || caught4 || caught5) {
    location.href = `https://mystifying-nightingale-5da125.netlify.app/?butterfly1=${randomButterflyThree}`;
  }
});

fourthButterfly.addEventListener("click", (event) => {
  handleClick(fourthButterfly, caught4);
  caught4 = true;
  if (caught1 || caught2 || caught3 || caught4 || caught5) {
    location.href = `https://mystifying-nightingale-5da125.netlify.app/?butterfly1=${randomButterflyFour}`;
  }
});

fifthButterfly.addEventListener("click", (event) => {
  handleClick(fifthButterfly, caught5);
  caught5 = true;
  console.log("just checkinggit");

  if (caught1 || caught2 || caught3 || caught4 || caught5) {
    location.href = `https://mystifying-nightingale-5da125.netlify.app/?butterfly1=${randomButterflyFive}`;
  }
});

const mouseEnter = () => {
  scanText.object3D.visible = false;
  catchText.object3D.visible = true;
};

const mouseLeave = () => {
  catchText.object3D.visible = false;
  setTimeout(setVisibility, 2000);
};

firstButterfly.addEventListener("mouseenter", mouseEnter);
firstButterfly.addEventListener("mouseleave", mouseLeave);

secondButterfly.addEventListener("mouseenter", mouseEnter);
secondButterfly.addEventListener("mouseleave", mouseLeave);

thirdButterfly.addEventListener("mouseenter", mouseEnter);
thirdButterfly.addEventListener("mouseleave", mouseLeave);

fourthButterfly.addEventListener("mouseenter", mouseEnter);
fourthButterfly.addEventListener("mouseleave", mouseLeave);

fifthButterfly.addEventListener("mouseenter", mouseEnter);
fifthButterfly.addEventListener("mouseleave", mouseLeave);

const handleClick = (butterfly, catchValue) => {
  catchText.object3D.visible = false;
  fourSecondPrompt(congratsText, butterfly);
  if (!catchValue) {
    congratsText.setAttribute(
      "value",
      `You caught a ${butterfly.classList.value}!
    You can now view it in your collection!`
    );
    butterfly.components.animation.attrValue.enabled = true;
  } else {
    congratsText.setAttribute(
      "value",
      `You have already caught this ${butterfly.classList.value}!`
    );
  }
};

const setVisibility = () => {
  if (
    catchText.object3D.visible === false &&
    congratsText.object3D.visible === false
  ) {
    scanText.object3D.visible = true;
  }
};

const fourSecondPrompt = (element, butterfly) => {
  element.object3D.visible = true;
  setTimeout((event) => {
    element.object3D.visible = false;
    if (butterfly.states[0] === "cursor-hovered") {
      catchText.object3D.visible = true;
    } else {
      scanText.object3D.visible = true;
    }
  }, 4000);
};

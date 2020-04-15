const targetEl = document.querySelector("#butterfly");
const secondTargetEl = document.querySelector("#butterfly2");
const thirdTargetEl = document.querySelector("#butterfly3");
const fourthTargetEl = document.querySelector("#butterfly4");
const congratsEl = document.querySelector("#congratsPrompt");
const scanTextEl = document.querySelector("#promptToScan");
const catchTextEl = document.querySelector("#promptToCatch");
const gotItTextEl = document.querySelector("#catchedIt");
const starsEl = document.querySelector(".stars");

const refObj = {};
let catched1 = false;
let catched2 = false;
let catched3 = false;
let catched4 = false;

const mouseEnter = () => {
  if (!congratsEl.object3D.visible) {
    scanTextEl.object3D.visible = false;
    catchTextEl.object3D.visible = true;
  }
};

const mouseLeave = () => {
  if (!congratsEl.object3D.visible) {
    scanTextEl.object3D.visible = true;
    catchTextEl.object3D.visible = false;
  }
};

targetEl.addEventListener("click", (event) => {
  handleClick(targetEl, catched1);
  catched1 = true;
});

secondTargetEl.addEventListener("click", (event) => {
  handleClick(secondTargetEl, catched2);
  catched2 = true;
});

thirdTargetEl.addEventListener("click", (event) => {
  handleClick(thirdTargetEl, catched3);
  catched3 = true;
});

fourthTargetEl.addEventListener("click", (event) => {
  handleClick(fourthTargetEl, catched4);
  catched4 = true;
});

targetEl.addEventListener("mouseenter", mouseEnter);
targetEl.addEventListener("mouseleave", mouseLeave);

secondTargetEl.addEventListener("mouseenter", mouseEnter);
secondTargetEl.addEventListener("mouseleave", mouseLeave);

thirdTargetEl.addEventListener("mouseenter", mouseEnter);
thirdTargetEl.addEventListener("mouseleave", mouseLeave);

fourthTargetEl.addEventListener("mouseenter", mouseEnter);
fourthTargetEl.addEventListener("mouseleave", mouseLeave);

function handleClick(element, catchValue) {
  scanTextEl.object3D.visible = false;
  catchTextEl.object3D.visible = false;
  if (catchValue === false) {
    addToRefObj(element);
    congratsEl.setAttribute(
      "value",
      `You caught a ${element.classList}!
    You can now view it in your collection!`
    );
    element.components.animation.attrValue.enabled = true;
<<<<<<< HEAD
    twoSecondPrompt(congratsEl);
=======
    setAsVisible(textEl);
    setTimeout((event) => {
      textEl.object3D.visible = false;
    }, 2000);
    starsEl.setAttribute("particle-system", "enabled", "true");
>>>>>>> a0203e8cb18e951ba5088ef745c20a3b366a460a
  } else {
    congratsEl.setAttribute(
      "value",
      `You've already caught this ${element.classList}!`
    );
    element.components.animation.attrValue.enabled = true;
    twoSecondPrompt(congratsEl);
  }
}

const setVisibility = () => {
  if (!catchTextEl.object3D.visible) {
    scanTextEl.object3D.visible = true;
  }
};

const addToRefObj = (target) => {
  if (refObj[target.classList.value]) {
    refObj[target.classList.value] = refObj[target.classList.value] + 1 || 0;
  } else {
    refObj[target.classList.value] = 1;
  }
  return refObj;
};

const twoSecondPrompt = (element) => {
  element.object3D.visible = true;
  setTimeout((event) => {
    element.object3D.visible = false;
    scanTextEl.object3D.visible = true;
  }, 2000);
};

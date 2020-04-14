const targetEl = document.querySelector("#butterfly");
const secondTargetEl = document.querySelector("#butterfly2");
const thirdTargetEl = document.querySelector("#butterfly3");
const fourthTargetEl = document.querySelector("#butterfly4");
const textEl = document.querySelector("#text");
const scanTextEl = document.querySelector("#promptToScan");
const catchTextEl = document.querySelector("#promptToCatch");
const gotItTextEl = document.querySelector("#catchedIt");
const starsEl = document.querySelector(".stars");

const refObj = {};
let catched1 = false;
let catched2 = false;
let catched3 = false;
let catched4 = false;

targetEl.addEventListener("click", (event) => {
  handleClick(targetEl, catched1);
  catched1 = true;
});

targetEl.addEventListener("mouseenter", () => {
  scanTextEl.object3D.visible = false;
  catchTextEl.object3D.visible = true;
});

targetEl.addEventListener("mouseleave", () => {
  setTimeout(setVisibility, 2000);
  catchTextEl.object3D.visible = false;
});

secondTargetEl.addEventListener("click", (event) => {
  handleClick(secondTargetEl, catched2);
  catched2 = true;
});

secondTargetEl.addEventListener("mouseenter", () => {
  scanTextEl.object3D.visible = false;
  catchTextEl.object3D.visible = true;
});

secondTargetEl.addEventListener("mouseleave", () => {
  setTimeout(setVisibility, 2000);
  catchTextEl.object3D.visible = false;
});

thirdTargetEl.addEventListener("click", (event) => {
  handleClick(thirdTargetEl, catched3);
  catched3 = true;
});
thirdTargetEl.addEventListener("mouseenter", () => {
  scanTextEl.object3D.visible = false;
  catchTextEl.object3D.visible = true;
});
thirdTargetEl.addEventListener("mouseleave", () => {
  setTimeout(setVisibility, 2000);
  catchTextEl.object3D.visible = false;
});
fourthTargetEl.addEventListener("click", (event) => {
  handleClick(fourthTargetEl, catched4);
  catched4 = true;
});

fourthTargetEl.addEventListener("mouseenter", () => {
  scanTextEl.object3D.visible = false;
  catchTextEl.object3D.visible = true;
});

fourthTargetEl.addEventListener("mouseleave", () => {
  setTimeout(setVisibility, 2000);
  catchTextEl.object3D.visible = false;
});

function handleClick(element, catchValue) {
  scanTextEl.object3D.visible = false;
  catchTextEl.object3D.visible = false;
  if (catchValue === false) {
    addToRefObj(element);
    textEl.setAttribute(
      "value",
      `You caught a ${element.classList}!
    You can now view it in your collection!`
    );
    element.components.animation.attrValue.enabled = true;
    setAsVisible(textEl);
    setTimeout((event) => {
      textEl.object3D.visible = false;
    }, 2000);
    starsEl.setAttribute("particle-system", "enabled", "true");
  } else {
    textEl.setAttribute(
      "value",
      `You've already caught this ${element.classList}!`
    );
    element.components.animation.attrValue.enabled = true;
    setAsVisible(textEl);
    setTimeout((event) => {
      textEl.object3D.visible = false;
    }, 2000);
  }
}

const setVisibility = () => {
  if (!catchTextEl.object3D.visible) {
    scanTextEl.object3D.visible = true;
  }
};

const setAsInisible = (element) => {
  element.object3D.visible = false;
};
const setAsVisible = (element) => {
  element.object3D.visible = true;
};

const addToRefObj = (target) => {
  if (refObj[target.classList.value]) {
    refObj[target.classList.value] = refObj[target.classList.value] + 1 || 0;
  } else {
    refObj[target.classList.value] = 1;
  }
  return refObj;
};

//how to create new element on page!

// const newEntity = document.createElement("a-entity");
// newEntity.setAttribute("geometry", {
//   primitive: "box",
//   height: 3,
//   width: 1
// });
// targetEl.appendChild(newEntity)

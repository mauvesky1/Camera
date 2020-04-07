const targetEl = document.querySelector("#butterfly");
const textEl = document.querySelector("#text");
const scanTextEl = document.querySelector("#promptToScan");
const catchTextEl = document.querySelector("#promptToCatch");
const gotItTextEl = document.querySelector("#catchedIt");
const refObj = {};
let catched = false;

targetEl.addEventListener("click", function () {
  console.log(catched);
  if (catched === false) {
    addToRefObj(targetEl);
    console.log(refObj);
    textEl.setAttribute("text", "value", `Caught: ${refObj[targetEl.id]}`);
    targetEl.components.animation.attrValue.enabled = true;
    catchTextEl.object3D.visible = false;
    catched = true;
  }
});

targetEl.addEventListener("mouseenter", () => {
  scanTextEl.object3D.visible = false;
  catchTextEl.object3D.visible = true;
});

targetEl.addEventListener("mouseleave", () => {
  setTimeout(setVisibility, 2000);
  catchTextEl.object3D.visible = false;
});

const addToRefObj = (target) => {
  if (refObj[target.id]) {
    refObj[target.id] = refObj[target.id] + 1 || 0;
  } else {
    refObj[target.id] = 1;
  }
  return refObj;
};

const setVisibility = () => {
  if (!catchTextEl.object3D.visible) {
    scanTextEl.object3D.visible = true;
  }
};

//how to create new element on page!

// const newEntity = document.createElement("a-entity");
// newEntity.setAttribute("geometry", {
//   primitive: "box",
//   height: 3,
//   width: 1
// });
// targetEl.appendChild(newEntity);

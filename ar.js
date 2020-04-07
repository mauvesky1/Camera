const targetEl = document.querySelector("#butterfly");
const textEl = document.querySelector("#text");
const scanTextEl = document.querySelector("#promptToScan");
const catchTextEl = document.querySelector("#promptToCatch");
const refObj = {};

targetEl.addEventListener("click", function () {
  addToRefObj(targetEl);
  console.log(refObj);
  textEl.setAttribute("text", "value", `Caught: ${refObj[targetEl.id]}`);
  targetEl.components.animation.attrValue.enabled = true;
});

targetEl.addEventListener("mouseenter", () => {
  scanTextEl.object3D.visible = false;
  catchTextEl.object3D.visible = true;
});

targetEl.addEventListener("mouseleave", () => {
  scanTextEl.object3D.visible = true;
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

//how to create new element on page!

// const newEntity = document.createElement("a-entity");
// newEntity.setAttribute("geometry", {
//   primitive: "box",
//   height: 3,
//   width: 1
// });
// targetEl.appendChild(newEntity);

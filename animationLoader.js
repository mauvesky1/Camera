const butterfly = document.querySelector("#butterfly");
const butterfly2 = document.querySelector("#butterfly2");
const butterfly3 = document.querySelector("#butterfly3");
const butterfly4 = document.querySelector("#butterfly4");

const butterflyArray1 = [
  "Mexican_Bluewing",
  "Mother_Of_Pearl",
  "Autumn_Leaf",
  "Punchinello",
];
const butterflyArray2 = [
  "butterfly4",
  "butterfly5",
  "butterfly6",
  "butterfly14",
];
const butterflyArray3 = [
  "butterfly7",
  "butterfly8",
  "butterfly9",
  "butterfly15",
];
const butterflyArray4 = [
  "butterfly10",
  "butterfly11",
  "butterfly11",
  "butterfly12",
];

const randomiser = () => {
  return Math.floor(Math.random() * 4);
};

const thisValue = "butterfly.components.gltf-model.attrValue";
setTimeout(() => {
  butterfly.setAttribute(
    "gltf-model",
    `./butterflies/${butterflyArray1[randomiser()]}.gltf`
  );
  butterfly2.setAttribute(
    "gltf-model",
    `./butterflies/${butterflyArray2[randomiser()]}.gltf`
  );
  butterfly3.setAttribute(
    "gltf-model",
    `./butterflies/${butterflyArray3[randomiser()]}.gltf`
  );
  butterfly4.setAttribute(
    "gltf-model",
    `./butterflies/${butterflyArray4[randomiser()]}.gltf`
  );
}, 500);

setTimeout(() => {
  butterfly.classList.value = butterfly
    .getAttribute("gltf-model")
    .slice(14, -5);
}, 1500);

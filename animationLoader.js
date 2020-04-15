const butterfly = document.querySelector("#butterfly");
const butterfly2 = document.querySelector("#butterfly2");
const butterfly3 = document.querySelector("#butterfly3");
const butterfly4 = document.querySelector("#butterfly4");

const butterflyArray1 = [
  "butterfly1",
  "butterfly2",
  "butterfly3",
  "butterfly4",
];
const butterflyArray2 = [
  "butterfly5",
  "butterfly6",
  "butterfly7",
  "butterfly8",
];
const butterflyArray3 = [
  "butterfly9",
  "butterfly10",
  "butterfly11",
  "butterfly12",
];
const butterflyArray4 = [
  "butterfly13",
  "butterfly14",
  "butterfly15",
  "butterfly15",
];

const randomiser = () => {
  return Math.floor(Math.random() * 4);
};

setTimeout(() => {
  butterfly.setAttribute(
    "gltf-model",
    `https://raw.githubusercontent.com/Norbs89/ardemo/master/butterflies/${
      butterflyArray1[randomiser()]
    }.gltf`
  );
  butterfly2.setAttribute(
    "gltf-model",
    `https://raw.githubusercontent.com/Norbs89/ardemo/master/butterflies/${
      butterflyArray2[randomiser()]
    }.gltf`
  );
  butterfly3.setAttribute(
    "gltf-model",
    `https://raw.githubusercontent.com/Norbs89/ardemo/master/butterflies/${
      butterflyArray3[randomiser()]
    }.gltf`
  );
  butterfly4.setAttribute(
    "gltf-model",
    `https://raw.githubusercontent.com/Norbs89/ardemo/master/butterflies/${
      butterflyArray4[randomiser()]
    }.gltf`
  );
}, 500);

setTimeout(() => {
  butterfly.classList.value = butterfly
    .getAttribute("gltf-model")
    .slice(68, -5);

  butterfly2.classList.value = butterfly2
    .getAttribute("gltf-model")
    .slice(68, -5);

  butterfly3.classList.value = butterfly3
    .getAttribute("gltf-model")
    .slice(68, -5);

  butterfly4.classList.value = butterfly4
    .getAttribute("gltf-model")
    .slice(68, -5);
}, 1500);

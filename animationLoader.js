const butterfly1 = document.querySelector("#butterfly1");
const butterfly2 = document.querySelector("#butterfly2");
const butterfly3 = document.querySelector("#butterfly3");
const butterfly4 = document.querySelector("#butterfly4");
const butterfly5 = document.querySelector("#butterfly5");

const butterflyArrays = {
  marker1: ["Midas", "Mother Of Pearl", "Mexican Bluewing"],
  marker2: ["Peacock", "Frosted Tip", "Apetura Iris"],
  marker3: ["Starlet", "Stargazer", "Swirley-Harley"],
  marker4: ["Haywain", "Shoreline", "Purple Emperor"],
  marker5: ["Vive La France", "Scrying Glass", "Seafoam"],
};

const randomiser = () => {
  return Math.floor(Math.random() * 3);
};

setTimeout(() => {
  butterfly1.setAttribute(
    "gltf-model",
    `https://raw.githubusercontent.com/Norbs89/ardemo/master/butterflies/${
      butterflyArrays.marker1[randomiser()]
    }.gltf`
  );
  butterfly2.setAttribute(
    "gltf-model",
    `https://raw.githubusercontent.com/Norbs89/ardemo/master/butterflies/${
      butterflyArrays.marker2[randomiser()]
    }.gltf`
  );
  butterfly3.setAttribute(
    "gltf-model",
    `https://raw.githubusercontent.com/Norbs89/ardemo/master/butterflies/${
      butterflyArrays.marker3[randomiser()]
    }.gltf`
  );
  butterfly4.setAttribute(
    "gltf-model",
    `https://raw.githubusercontent.com/Norbs89/ardemo/master/butterflies/${
      butterflyArrays.marker4[randomiser()]
    }.gltf`
  );
  butterfly5.setAttribute(
    "gltf-model",
    `https://raw.githubusercontent.com/Norbs89/ardemo/master/butterflies/${
      butterflyArrays.marker5[randomiser()]
    }.gltf`
  );
}, 100);

setTimeout(() => {
  butterfly1.classList.value = butterfly1
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

  butterfly5.classList.value = butterfly5
    .getAttribute("gltf-model")
    .slice(68, -5);
}, 1500);

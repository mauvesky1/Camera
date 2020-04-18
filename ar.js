const firstButterfly = document.querySelector("#butterfly1");
const secondButterfly = document.querySelector("#butterfly2");
const thirdButterfly = document.querySelector("#butterfly3");
const fourthButterfly = document.querySelector("#butterfly4");
const fifthButterfly = document.querySelector("#butterfly5");
const scanText = document.querySelector("#promptToScan");
const catchText = document.querySelector("#promptToCatch");
const congratsText = document.querySelector("#congratsPrompt");

const firebaseConfig = {
  apiKey: "AIzaSyB4tz8vEzmfsVvXs2hcKogzIdWECdNeQbc",
  authDomain: "backend-679e8.firebaseapp.com",
  databaseURL: "https://backend-679e8.firebaseio.com",
  projectId: "backend-679e8",
  storageBucket: "backend-679e8.appspot.com",
  messagingSenderId: "363772688197",
  appId: "1:363772688197:web:1b1ae070f6afdaf41eb02c",
  measurementId: "G-6FSQXQCNBN",
};

const { PID } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

const { CID } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore();
const docRef = firestore.doc(`parents/${PID}/userProfiles/${CID}`);

const increment = firebase.firestore.FieldValue.increment(1);

let catched1 = false;
let catched2 = false;
let catched3 = false;
let catched4 = false;
let catched5 = false;

firstButterfly.addEventListener("click", (event) => {
  handleClick(firstButterfly, catched1);
  catched1 = true;
});

secondButterfly.addEventListener("click", (event) => {
  handleClick(secondButterfly, catched2);
  catched2 = true;
});

thirdButterfly.addEventListener("click", (event) => {
  handleClick(thirdButterfly, catched3);
  catched3 = true;
});

fourthButterfly.addEventListener("click", (event) => {
  handleClick(fourthButterfly, catched4);
  catched4 = true;
});

fifthButterfly.addEventListener("click", (event) => {
  handleClick(fifthButterfly, catched5);
  catched5 = true;
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
    docRef.update({ [butterfly.classList.value]: increment });
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

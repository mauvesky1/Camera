const firstButterfly = document.querySelector("#butterfly1");
const secondButterfly = document.querySelector("#butterfly2");
const thirdButterfly = document.querySelector("#butterfly3");
const fourthButterfly = document.querySelector("#butterfly4");
const fifthButterfly = document.querySelector("#butterfly5");
const congratsText = document.querySelector("#congratsPrompt");
const scanText = document.querySelector("#promptToScan");
const catchText = document.querySelector("#promptToCatch");

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
  if (!congratsText.object3D.visible) {
    setTimeout((event) => {
      scanText.object3D.visible = false;
      catchText.object3D.visible = true;
    }, 300);
  }
};

const mouseLeave = () => {
  if (!congratsText.object3D.visible) {
    setTimeout((event) => {
      scanText.object3D.visible = true;
      catchText.object3D.visible = false;
    }, 500);
  }
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
  console.log(PID);
  scanText.object3D.visible = false;
  catchText.object3D.visible = false;
  if (!catchValue) {
    congratsText.setAttribute(
      "value",
      `You caught a ${butterfly.classList.value}!
    You can now view it in your collection!`
    );
    butterfly.components.animation.attrValue.enabled = true;
    twoSecondPrompt(congratsText);
    docRef.update({ [butterfly.classList.value]: increment });
  } else {
    congratsText.setAttribute(
      "value",
      `You've already caught this ${butterfly.classList.value}!`
    );
    twoSecondPrompt(congratsText);
  }
};

const setVisibility = () => {
  if (!catchText.object3D.visible) {
    scanText.object3D.visible = true;
  }
};

const twoSecondPrompt = (element) => {
  element.object3D.visible = true;
  setTimeout((event) => {
    element.object3D.visible = false;
    scanText.object3D.visible = true;
  }, 2000);
};

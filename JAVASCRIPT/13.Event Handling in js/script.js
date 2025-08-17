// Events

// 1. Event Handler
// (onclick, onload, onmouseover, onmouseout, onkeypress, onkeydown, onkeyup)

// function onclickFun() {
//   console.log("This box has been clicked");
// }

// const keyPressEvent = () => {
//   console.log("The keep has been hitted");
// };

// const onkeyup = () => {
//   console.log("onkeyup ");
// };

// const onkeydown = () => {
//   console.log("onkeydown");
// };

// function firstFuncCall() {
//   console.log("func 1");
// }

// function secondFuncCall() {
//   console.log("Sec  2");
// }

// 2. Event Listerns
const box1 = document.getElementById("box-1");
box1.addEventListener("click", () => {
  // console.log("Click has been triggered");
  console.log("Box");
});

// box1.addEventListener("click", () => {
//   console.log("Click has been triggered");
// });

const cont = document.getElementById("cont");
box1.addEventListener(
  "click",
  () => {
    // console.log("Click has been triggered");
    console.log("Container");
  },
  true
);

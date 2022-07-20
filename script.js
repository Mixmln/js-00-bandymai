"use strict";
let fdOneEl = document.getElementById("first-nOne");
let sdOneEl = document.getElementById("second-nOne");
let fdTwoEl = document.getElementById("first-nTwo");
let sdTwoEl = document.getElementById("second-nTwo");
let sOneEl = document.getElementById("sumOne");
let sTwoEl = document.getElementById("sumTwo");
let h4OneEl = document.getElementById("winOne");
let h4TwoEl = document.getElementById("winTwo");

// Blue Player
// Dice One
let fdOneElNum = 1;
fdOneElNum = Math.ceil(Math.random() * 6);
fdOneEl.textContent = fdOneElNum;
console.log("fdOneElNum ===", fdOneElNum);
// Dice Two
let sdOneElNum = 1;
sdOneElNum = Math.ceil(Math.random() * 6);
sdOneEl.innerHTML = sdOneElNum;
// Sum
sOneEl.textContent = `Sum: ${fdOneElNum + sdOneElNum}`;
if (fdOneElNum + sdOneElNum == 12) {
  h4OneEl.textContent = "You WIN!";
  alert("Blue Player WIN!!!");
} else {
  h4OneEl.textContent = "Try Again";
}

// Red Player
// Dice One
let fdTwoElNum = 1;
fdTwoElNum = Math.ceil(Math.random() * 6);
fdTwoEl.textContent = fdTwoElNum;
// Dice Two
let sdTwoElNum = 1;
sdTwoElNum = Math.ceil(Math.random() * 6);
sdTwoEl.innerHTML = sdTwoElNum;
// Sum
sTwoEl.textContent = `Sum : ${fdTwoElNum + sdTwoElNum}`;
if (fdTwoElNum + sdTwoElNum == 12) {
  h4TwoEl.textContent = "You WIN!";
  alert("Red Player WIN!!!");
} else {
  h4TwoEl.textContent = "Try Again";
}

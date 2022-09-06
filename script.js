import { User } from "./object.js";
let userArray = [];

//for some reason I couldn't import the class User from another file, even after enabling module

function calcBMI() {
  const inputName = document.querySelector("#name").value;
  const inputWeight = Number(document.querySelector("#weight").value);
  const inputHeight = Number(document.querySelector("#height").value);
  let user = new User(inputName, inputWeight, inputHeight);
  userArray.push(user);
  console.log(userArray);
  showUsers();
  resetInput();
}

document.querySelector("button").addEventListener("click", calcBMI);

function showUsers() {
  document.querySelector("#infoSec").textContent = "";
  userArray.forEach((user) => {
    const template = document.querySelector("#infoTemplate").content;
    const copy = template.cloneNode(true);
    copy.querySelector("#titleName").textContent = user.userName;
    copy.querySelector("#weightSec").textContent =
      "Your weight is: " + user.userWeight + "kg";
    copy.querySelector("#heightSec").textContent =
      "Your height is: " + user.userHeight + "m";
    copy.querySelector("#BMISec").textContent = "Your BMI is: " + user.userBMI;
    const parent = document.querySelector("#infoSec");
    parent.appendChild(copy);
  });
}
function resetInput() {
  document.querySelector("#name").value = "";
  document.querySelector("#height").value = "";
  document.querySelector("#weight").value = "";
}

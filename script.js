let userArray = [];

//for some reason I couldn't import the class User from another file, even after enabling module

class User {
  constructor(userName, userWeight, userHeight) {
    this.userName = userName;
    this.userWeight = userWeight;
    this.userHeight = userHeight;
    this.userBMI = this.getBMI();
  }
  getBMI() {
    return Number(this.userWeight) / Math.pow(Number(this.userHeight), 2);
  }
}

function calcBMI() {
  const inputName = document.querySelector("#name").value;
  const inputWeight = Number(document.querySelector("#weight").value);
  const inputHeight = Number(document.querySelector("#height").value);
  let user = new User(inputName, inputWeight, inputHeight);
  userArray.push(user);
  console.log(userArray);
  resetInput();
}

function resetInput() {
  document.querySelector("#name").value = "";
  document.querySelector("#height").value = "";
  document.querySelector("#weight").value = "";
}

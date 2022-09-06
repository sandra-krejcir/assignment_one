export class User {
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

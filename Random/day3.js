const carInfo = new Object();

carInfo.carMake = "Honda";
carInfo.carModel = "Civic";
carInfo.modelYear = 2019;
carInfo.initialMileage = 35400;

class Square {
  constructor(height, width) {
    this.height = 4;
    this.width = 4;
  }
}
console.log(Square.height);

class House {
  constructor(isBig, location, stories) {
    this.isBig = "True";
    this.location = "Cleveland";
    this.stories = 3;
  }
}

const input = document.createElement("input");
input.setAttribute("type", "integer");
document.body.appendChild(userinput);

const addedMileage = document.getElementById("userinput").int;
alert(addedMileage);

carInfo.updatedMileage = function () {
  return carInfo.initialMileage + addedMileage;
};
console.log(carInfo.updatedMileage);
console.log(carInfo.carMake);

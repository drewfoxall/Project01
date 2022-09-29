var name = document.getElementById("header");
var style = document.createElement("pedropedropedro");

x = 5;
elem = document.getElementById("demo");
elem.innerHTML = x;
var x;

color = "blue";
choice = document.getElementById("color");
choice.innerHTML = color;
var color;

/// Local Scope - Create Local function
function testFunction() {
  let favoriteCar = "Civic";
  console.log(favoriteCar);
}

///Global JS Variable
let favoriteGame = "Tarkov";

function testGame() {
  console.log(favoriteGame);
}
/// Note the use of variable before it is defined
favoriteColor();

console.log(favoriteColor);

function favoriteColor() {
  colorName = "Red";
}

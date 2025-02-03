function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function celcisusToFahrenheit(celcisus) {
  return celcisus * 9 / 5 + 32;
}

//Common JS syntax
module.exports = {randomInt, celcisusToFahrenheit};

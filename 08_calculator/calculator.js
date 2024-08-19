const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  // let mySum = 0
	// for (let i=0; i<array.length; i++) {
  //   mySum += array[i]
  // }
  // return mySum

  // return array.reduce((total, current) => {
  //   return total + current
  // }, 0) 

  return array.reduce((total, current) => total + current, 0);

};

// multiply here is instead multiply all 
const multiply = function (array) {

  // return array.reduce((product, current) => {
  //   return product * current
  // }, 1)

  return array.reduce((product, current) => product * current, 1)
};

const power = function(a, b) {
	return a ** b

  // return Math.pow(a,b)
};

const factorial = function(n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

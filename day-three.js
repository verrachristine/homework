//1. Writing a Function that adds two numbers together
// Function Declaration
function addNumbers(x, y) {
  return x + y;
}
console.log(addNumbers(5, 9));

// Function Expression
const addNums = function (x, y) {
  return x + y;
};
console.log(addNums(5, 4));

// Arrow Function Expression
const addingNums = (x, y) => {
  return x + y;
};
console.log(addingNums(10, 50));

//Shorthand Function
const addsNums = (x, y) => x + y;
console.log(addsNums(3, 2));

// 2. Write a car object that has a modal and color
//Create a property called year then console.log all of the objects properties individually.
let car = {
  make: "hyundai",
  color: "electric blue",
  year: "2020",
};

console.log(`Make: ${car.make}`);
console.log(`Color: ${car.color}`);
console.log(`Year: ${car.year}`);

//3. Write a function to get the first element in an array.
function firstElement(arrayOfElements) {
  return arrayOfElements[0];
}

let myArray = ["Todd", "Damian", "Jonathan"];

console.log(`The first element of the array is ${firstElement(myArray)}`);

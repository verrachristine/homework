// 1. Write a function named assignGrade that takes one argument, a number score.
//Returns a grade for the score, either “A,” “B,” “C,” “D,” or “F.”
//Call that function for a few different scores and log the result to ensure it works

//A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: 60>=

function assignGrade(score) {
  if (score >= 90) {
    console.log("Student's grade is an A");
  } else if (score >= 80) {
    console.log("Student's grade is a B");
  } else if (score >= 70) {
    console.log("Student's grade is a C");
  } else if (score >= 60) {
    console.log("Student's grade is a D");
  } else {
    console.log("Student's grade is an F");
  }
}

const arrayOfScores = [90, 40, 77, 97, 50];
for (const value of arrayOfScores) {
  assignGrade(value);
}

// 2. Create a function that returns the number of true values in an array.
//const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]
const testArray = [
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  false,
];

function trueCounter(array) {
  let trueCount = 0;
  for (let value of array) {
    if (value === true) {
      trueCount++;
    }
  }
  console.log(trueCount);
}

trueCounter(testArray);

// 3. Create a function that converts a string to all uppercase letters and console.log the result (hint: string methods):

let str = "WHAT a TIME to BE ALIVE!";
function convertUppercase(sentence) {
  return sentence.toUpperCase();
}

console.log(convertUppercase(str));

// 4. Create a function that takes in a number of two-pointers and three-pointers made and returns a basketball team’s total score?
function basketballScore(twoPointers, threePointers) {
  return 2 * twoPointers + 3 * threePointers;
}

console.log(`Total team's score is ${basketballScore(5, 3)}`);
console.log(`Total team's score is ${basketballScore(1, 2)}`);

// Extra for experts:
// 5. Create a function that takes an array of numbers & returns both min and max in that order. (use a loop)
const arrayOfNumbers = [3, 10, 30, 12, 20];
function maxMin(array) {
  for (i = 2; i < n; i++) {
    if (arr[i] > minmax.max) minmax.max = arr[i];
    else if (arr[i] < minmax.min) minmax.min = arr[i];
  }
  return minmax;
}

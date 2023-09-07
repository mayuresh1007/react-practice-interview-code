//Write a function that takes an array of numbers and destructures the first two numbers into separate variables num1 and num2. Then, return the sum of these two numbers.
const numbers = [5, 8, 12, 7];

function sumFirst2Num(numbers) {
  const [v1, v2] = numbers;
  console.log(v1, v2);
  return v1 + v2;
}
const result = sumFirst2Num(numbers);
console.log(result); // It should log 13 (5 + 8)

//Create a function that takes an array of numbers and uses array destructuring to extract the first number into a variable called firstNumber, and the rest of the numbers into an array called restNumbers.
function splitArray(numbers) {
  // Your code here
  const [firstNumber, ...restNumbers] = numbers;
  console.log(firstNumber, restNumbers);
  return { firstNumber, restNumbers };
}
splitArray(numbers);
const { firstNumber, restNumbers } = splitArray(numbers);

console.log(`First Number: ${firstNumber}`);
console.log(`Rest Numbers: ${restNumbers.join(", ")}`);

// Given an object representing a person's information, use object destructuring to extract the name and age properties into separate variables.
const person = {
  name: "Alice",
  age: 30,
  gender: "Female",
};

// Your code here
const { name, age } = person;
console.log(`Name: ${name}, Age: ${age}`);

//Modify the previous problem to provide default values for name and age in case they are not present in the object.
const person1 = {
  gender: "Male",
};

// Your code here
const final = { ...person, ...person1 };

console.log(`Name: ${name}, Age: ${age}`);
console.log(final);

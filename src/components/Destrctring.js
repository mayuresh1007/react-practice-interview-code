const numbers = [5, 8, 12, 7];

function sumFirst2Num(numbers) {
  const [v1, v2] = numbers;
  console.log(v1, v2);
  return v1 + v2;
}
const result = sumFirst2Num(numbers);
console.log(result); // It should log 13 (5 + 8)

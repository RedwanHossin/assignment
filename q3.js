function sum(arrayA, arrayB) {
  return [...arrayA, ...arrayB].reduce((a, b) => a + b, 0);
}
function avg(arrayA, arrayB) {
  return [...arrayA, ...arrayB].reduce((a, b) => a + b, 0) / (arrayA.length + arrayB.length);
}

console.log("Sum:", sum([1, 2, 3], [1, 2]));
console.log("Avg:", avg([1, 2, 3], [1, 3]));

const age = parseInt(prompt("how old are you?"));

console.log(isNaN(age));

if (isNaN(age)) {
  console.log("please write a number");
} else if (age < 18) {
  console.log("you are too young");
} else if (age >= 18 && age <= 50) {
  console.log("you can drink");
} else if (age === 100) {
  // not !==
  console.log("100 years old?");
} else {
  console.log("you are too old");
}

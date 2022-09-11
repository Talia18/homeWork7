let result;
let firstNumber;
let secondNumber;

firstNumber = Number(prompt("הזן מספר"));

while (isNaN(firstNumber)) {
  alert("הערך הראשון אינו מספר");
  firstNumber = Number(prompt("הזן מספר"));
}

let operator = prompt(
  'לחיבור הזן "+" לחיסור הזן "-" לכפל הזן "*" לחילוק הזן "/"'
);

let oper = ["+", "-", "*", "/"];
if (!oper.includes(operator)) {
  alert("הזנת אופרציה שגויה!");
}
secondNumber = Number(prompt("הזן מספר שני"));

while (isNaN(secondNumber)) {
  alert("הערך השני אינו מספר");
  secondNumber = Number(prompt("הזן מספר"));
}

if (operator == "+") {
  result = firstNumber + secondNumber;
} else if (operator == "-") {
  result = firstNumber - secondNumber;
} else if (operator == "*") {
  result = firstNumber * secondNumber;
} else if (operator == "+") {
  result = firstNumber / secondNumber;
}

alert(result);

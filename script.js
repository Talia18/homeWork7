let firstNumber = Number(prompt("הזן מספר"));
let secondNumber = Number(prompt("הזן מספר שני"));
let operator = prompt(
  'לחיבור הזן "+" לחיסור הזן "-" לכפל הזן "*" לחילוק הזן "/"'
);

if (isNaN(firstNumber)) {
  alert("הערך הראשון אינו מספר");
} else if (isNaN(secondNumber)) {
  alert("הערך השני אינו מספר");
} else {
  let result;
  if (operator == "+") {
    result = firstNumber + secondNumber;
  } else if (operator == "-") {
    result = firstNumber - secondNumber;
  } else if (operator == "*") {
    result = firstNumber * secondNumber;
  } else if (operator == "+") {
    result = firstNumber / secondNumber;
  } else {
    result = "נא להזין מספר תקני";
  }

  alert(result);
}

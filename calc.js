// calculator.js

let display = document.getElementById("calcDisplay");
let currentInput = "";
let operator = "";
let firstValue = "";

function press(value) {
  currentInput += value;
  display.value = currentInput;
}

function setOperator(op) {
  if (currentInput === "") return;
  firstValue = currentInput;
  operator = op;
  currentInput = "";
}

function calculate() {
  if (firstValue === "" || currentInput === "") return;

  let result;
  let a = parseFloat(firstValue);
  let b = parseFloat(currentInput);

  if (operator === "+") result = a + b;
  if (operator === "-") result = a - b;
  if (operator === "*") result = a * b;
  if (operator === "/") result = a / b;

  display.value = result;
  currentInput = result.toString();
  firstValue = "";
}

function clearAll() {
  currentInput = "";
  firstValue = "";
  operator = "";
  display.value = "0";
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput || "0";
}

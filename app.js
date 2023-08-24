const previousEquation = document.querySelector(`#previous-equation`);
const currentEquation = document.querySelector(`#current-equation`);
const numberButtons = document.querySelectorAll(`#number-button`);
const operatorButtons = document.querySelector(`#operator-button`);
const clearButton = document.querySelector(`#clear-button`);
const deleteButton = document.querySelector(`#delete-button`);
const decimalButton = document.querySelector(`#decimal-button`);
const equalButton = document.querySelector(`#equal-button`);

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

class Calculator {
  constructor(previousEquation, currentEquation) {
    this.previousEquation = previousEquation;
    this.currentEquation = currentEquation;
    this.clear();
  }

  clear() {
    this.currentOperand = ``;
    this.previousOperand = ``;
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    if (number === `.` && this.currentOperand.includes(`.`)) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = ``;
  }

  compute() {}

  updateDisplay() {
    this.currentEquation.innerText = this.currentOperand;
    this.previousEquation.innerText = this.previousOperand;
  }
}

const previousEquation = document.querySelector(`#previous-equation`);
const currentEquation = document.querySelector(`#current-equation`);
const numberButtons = document.querySelectorAll(`.number-button`);
const operatorButtons = document.querySelectorAll(`.operator-button`);
const clearButton = document.querySelector(`#clear-button`);
const deleteButton = document.querySelector(`#delete-button`);
const equalButton = document.querySelector(`#equal-button`);

const calculator = new Calculator(previousEquation, currentEquation);

numberButtons.forEach((button) => {
  button.addEventListener(`click`, () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener(`click`, () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

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

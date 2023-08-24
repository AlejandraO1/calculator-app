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
    if (this.currentOperand === ``) return;
    if (this.previousOperand !== ``) {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = ``;
  }

  compute() {
    let computation;
    const previous = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(previous) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = previous + current;
        break;
      case "-":
        computation = previous - current;
        break;
      case "*":
        computation = previous * current;
        break;
      case "÷":
        computation = previous / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = ``;
  }

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

equalButton.addEventListener(`click`, (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

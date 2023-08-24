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

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

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
      case "x":
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

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(`.`)[0]);
    const decimalDigits = stringNumber.split(`.`)[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = ``;
    } else {
      integerDisplay = integerDigits.toLocaleString(`en`, {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}. ${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentEquation.innerText = this.getDisplayNumber(this.currentOperand);
    if (this.operation != null) {
      this.previousEquation.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.previousEquation.innerText = ``;
    }
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

clearButton.addEventListener(`click`, (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener(`click`, (button) => {
  calculator.delete();
  calculator.updateDisplay();
});

let currentNum = 0;
let num1 = "";
let num2 = "";
let sum = "";
let statement = [];
let statementPos = 0;
let display = document.querySelector(".screen");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let currentOperator = "";
let currentOperation = [];

function initialize() {
  let buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      if (button.textContent === "Clear") {
        reset();
        clearDisplay();
        return;
      }

      if (currentOperator) {
        if (numbers.includes(+button.textContent)) {
          num2 += button.textContent;
          populateDisplay(num2);
        } else {
          clearDisplay();
          currentOperator = button.textContent;
          currentOperation[2] = num2;
          console.log(currentOperation);
          performCalculations();
        }
      }

      if (button.textContent === "=") {
        populateDisplay(sum);
        reset();
        return;
      }

      if (numbers.includes(+button.textContent)) {
        num1 += button.textContent;
        populateDisplay(num1);
        console.log(num1);
        return;
      } else {
        currentOperator = button.textContent;
        currentOperation[0] = num1;
        num1 = "";
        currentOperation[1] = currentOperator;
        return;
      }
    });
  });

  /*  clearButton.addEventListener("click", function (e) {
    currentNum = 0;
    sum = 0;
    num1 = 0;
    populateDisplay(currentNum);
  }); */
  return;
}

function getNumber() {}

function performCalculations() {
  switch (currentOperation[1]) {
    case "+":
      sum = add();
      num1 = sum;
      num2 = "";
      console.log(sum);
      populateDisplay(sum);
      break;
    case "-":
      sum = subtract();
      num1 = sum;
      num2 = "";
      populateDisplay(sum);
      break;
    case "*":
      sum = multiply();
      num1 = sum;
      num2 = "";
      populateDisplay(sum);
      break;
    case "/":
      sum = divide();
      num1 = sum;
      num2 = "";
      populateDisplay(sum);
      break;
    case "=":
      populateDisplay(sum);
      break;
  }
}

function add() {
  return +currentOperation[0] + +currentOperation[2];
}

function subtract() {
  return +currentOperation[0] - +currentOperation[2];
}

function multiply() {
  return +currentOperation[0] * +currentOperation[2];
}

function divide() {
  return +currentOperation[0] / +currentOperation[2];
}

function equals() {
  return sum;
}

function populateDisplay(displayNum) {
  display.textContent = displayNum;
}

function clearDisplay() {
  display.innerHTML = "&nbsp";
}

function reset() {
  num1 = "";
  num2 = "";
  currentOperator = "";
  sum = "";
  statement.length = 0;
}

initialize();

let currentNum = "";
let currentOperation = [];
let firstNum = true;
let completeSum = false;
let display = document.querySelector(".screen");

function run() {
  populateDisplay(0);
  let buttons = document.querySelectorAll("button");

  let operators = ["+", "-", "*", "/", "="];

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      let input = button.textContent;

      // reset all values and end sequence
      if (input === "Clear") {
        console.log("here");
        reset();
        return;
      }

      // check for existing number
      getNumber(input);
      populateDisplay(currentNum);

      if (firstNum && operators.includes(input)) {
        currentOperation[0] = currentNum;
        if (input === "=") {
          populateDisplay(0);
          reset();
          return;
        }
        currentOperation[1] = input;
        currentNum = "";
        getNumber(input);
        firstNum = false;
      }

      if (firstNum === false && operators.includes(input)) {
        currentOperation[2] = +currentNum;
        performCalculations();
        completeSum = true;
        currentNum = "";
        currentOperation[1] = input;
      }
    });
  });

  return;
}

function performCalculations() {
  console.log(currentOperation);
  switch (currentOperation[1]) {
    case "+":
      console.log(currentOperation);
      currentOperation[0] = add();
      populateDisplay(currentOperation[0]);
      break;
    case "-":
      currentOperation[0] = subtract();
      populateDisplay(currentOperation[0]);
      break;
    case "*":
      if (+currentOperation[2] !== 0) {
        currentOperation[0] = multiply();
        populateDisplay(currentOperation[0]);
      } else {
        currentOperation[2] = multiply();
        populateDisplay(currentOperation[0]);
      }
      break;
    case "/":
      if (+currentOperation[2] !== 0) {
        currentOperation[0] = divide();
        populateDisplay(currentOperation[0]);
      }

      if (
        (+currentOperation[0] === 0 && completeSum) ||
        (+currentOperation[2] === 0 && completeSum)
      ) {
        populateDisplay("error");
        break;
      }

      break;
    case "=":
      populateDisplay(currentOperation[0]);
      break;
  }
}

function add() {
  currentOperation[1] = "";
  return +currentOperation[0] + +currentOperation[2];
}

function subtract() {
  currentOperation[1] = "";
  return +currentOperation[0] - +currentOperation[2];
}

function multiply() {
  currentOperation[1] = "";
  return +currentOperation[0] * +currentOperation[2];
}

function divide() {
  currentOperation[1] = "";
  let sum = +currentOperation[0] / +currentOperation[2];
  if (Number.isInteger(sum)) {
    return sum;
  }
  sum = sum.toString();
  sum = sum.substring(0, 12);
  return +sum.toString();
}

function populateDisplay(displayNum) {
  display.textContent = displayNum;
}

function reset() {
  firstNum = true;
  completeSum = false;
  currentNum = "";
  currentOperation[0] = "";
  currentOperation[1] = "";
  currentOperation[2] = "";
  display.innerHTML = "0";
}

function getNumber(input) {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  if (numbers.includes(+input)) {
    currentNum += input;
  }
}

run();

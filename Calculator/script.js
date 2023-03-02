let result = document.getElementById("result");
let clear = document.getElementById("clear");
let backspace = document.getElementById("backspace");
let equals = document.getElementById("equals");

let operators = document.querySelectorAll(".operator");
let numbers = document.querySelectorAll(".number");

let currentNumber = "";
let previousNumber = "";
let currentOperator = null;

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function() {
    currentNumber += this.innerText;
    result.innerText = currentNumber;
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function() {
    if (currentOperator !== null) {
      previousNumber = calculate(previousNumber, currentNumber, currentOperator);
      result.innerText = previousNumber;
      currentNumber = "";
      currentOperator = null;
    }

    currentOperator = this.innerText;
    previousNumber = currentNumber;
    currentNumber = "";
  });
}

equals.addEventListener("click", function() {
  if (currentOperator !== null) {
    result.innerText = calculate(previousNumber, currentNumber, currentOperator);
    currentNumber = "";
    previousNumber = "";
    currentOperator = null;
  }
});

clear.addEventListener("click", function() {
  currentNumber = "";
  previousNumber = "";
  currentOperator = null;
  result.innerText = "0";
});

backspace.addEventListener("click", function() {
  currentNumber = currentNumber.slice(0, -1);
  result.innerText = currentNumber;
});

function calculate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "x") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else if (operator === "%") {
    return (num1 / 100) * num2;
  }
}


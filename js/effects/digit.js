function calculateDigitSum(inputNumber) {
  const tensDigit = Math.floor(inputNumber / 10);
  const unitsDigit = inputNumber % 10;
  return tensDigit + unitsDigit;
}

export function initdigit() {
  const btn = document.getElementById("calcBtn");

  btn.addEventListener("click", function () {
  const resultMathEl = document.getElementById("resultdigit");
  const numberEl = document.getElementById("numberInput");

    const numberValue = Number(numberEl.value);

    const sum = calculateDigitSum(numberValue);

    resultMathEl.textContent = "Tổng 2 ký số là: " + sum;
    console.log("Số nhập:", numberValue, "-> Tổng:", sum);
  });
}


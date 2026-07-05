function calculateDigitSum(inputNumber) {
  const tensDigit = Math.floor(inputNumber / 10);
  const unitsDigit = inputNumber % 10;
  return tensDigit + unitsDigit;
}

export function initdigit() {
  const numberEl = document.getElementById("numberInput");
  const btn = document.getElementById("calcBtn");
  const resultMathEl = document.getElementById("resultMath");

  btn.addEventListener("click", function () {
    const numberValue = Number(numberEl.value);

    const sum = calculateDigitSum(numberValue);

    resultMathEl.textContent = "Tổng 2 ký số là: " + sum;
    console.log("Số nhập:", numberValue, "-> Tổng:", sum);
  });
}


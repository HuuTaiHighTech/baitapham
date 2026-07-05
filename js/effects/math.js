function calculateArea(length, width) {
    const Area = length * width;
    return `${Area}`;
}
function calculatePerimeter(length, width) {
    const Perimeter = (length + width) * 2;
    return `${Perimeter}`;
}
export function initMath(){
    const lengthEl = document.getElementById('Length-El');
    const widthEl = document.getElementById('Width-El');
    const btnEl = document.getElementById('btn-El');
    const resultMathEl= document.getElementById('resultMath-El');

    btnEl.addEventListener('click', () => {
    const valuelength = Number(lengthEl.value);
    const valuewidth = Number(widthEl.value);
    const  area = calculateArea(valuelength, valuewidth);
    const perimeter = calculatePerimeter(valuelength, valuewidth);
   resultMathEl.textContent = `Diện tích: ${area} - Chu vi: ${perimeter}`;
    
    });
}
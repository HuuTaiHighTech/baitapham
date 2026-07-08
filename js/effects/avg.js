function calculateAVG (num1, num2, num3, num4, num5){
    return (num1 + num2 + num3 + num4 + num5)/5;
}
function validatelogic (num1, num2, num3, num4, num5){
    if(isFinite(num1) && isFinite(num2) && isFinite(num3) 
        && isFinite(num4) && isFinite(num5)){

        if(num1 >= 0 && num2 >= 0 && num3 >= 0 && num4 >= 0 && num5 >= 0){
            return true;
        }else{
            alert("Dữ liệu số không hợp lệ");
            return false;
        }
    }else {
        alert("Input không được chứa ký tự");
        return false;
    }
}
export function mainAVG(){
    let btn = document.getElementById('btnCalculate');
    btn.addEventListener('click', () => {
    let resultEle = document.getElementById('resultele');
    let num1 = Number(document.getElementById('num1ele').value);
    let num2 = Number(document.getElementById('num2ele').value);
    let num3 = Number(document.getElementById('num3ele').value);
    let num4 = Number(document.getElementById('num4ele').value);
    let num5 = Number(document.getElementById('num5ele').value);
    if(validatelogic (num1, num2, num3, num4, num5)){
        let result = calculateAVG (num1, num2, num3, num4, num5);
        console.log(result);
        resultEle.textContent = result;
    }
    })
    
}

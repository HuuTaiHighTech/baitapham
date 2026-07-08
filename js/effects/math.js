function calculateArea(length, width){
    return length * width;
}

function calculatePerimeter(length, width){
    return (length + width)*2
}
function validatelogic(length, width){
    if(isFinite(length) && isFinite(width)){
        if(length >= 0 && width >= 0){
            return true;
        }else{
            alert("Dữ liệu số không hợp lệ");
            return false;
        }
    }else {
        alert("Không được chữa ký tự");
        return false;
    }
}

export function mainRectangle(){
    let btn = document.getElementById('btnele');

   btn.addEventListener('click', () =>{
    let length =parseFloat(document.getElementById('lengthele').value);
    let width = parseFloat(document.getElementById('widthele').value);
    let result = document.getElementById('resultMath');
    if(validatelogic(length, width)){
        let area = calculateArea(length, width);
        let perimeter = calculatePerimeter(length, width);
        result.textContent = "chu vi là" + perimeter + "Diện tích là " + area;
        console.log("chu vi là " + perimeter + "\nDiện tích là " + area);
    }
   }) 
   
}

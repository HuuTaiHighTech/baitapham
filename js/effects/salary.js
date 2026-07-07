function parseVNNumber(str){
    let formatter = new Intl.NumberFormat('vi-VN');
    let parts = formatter.formatToParts(1000000);
    let groupChar = parts.find(p => p.type === 'group').value;
    return Number(str.toString().split(groupChar).join(''));
}

function calculateSalary(dailySalary, workingDate){
    return dailySalary * workingDate;
}

function validateLogic(dailySalary, workingDate){
    if(isFinite(dailySalary) && isFinite(workingDate)){
        if(dailySalary >= 100 && (workingDate >= 1 && workingDate <= 31)){
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

export function initSalary(){
    let btn = document.getElementById('btnCalcSalaryele');
    
    btn.addEventListener('click', () => {
        let dailySalaryEle = document.getElementById('dailySalaryele');
        let workingDateEle = document.getElementById('workingDayele');
        let resultEle = document.getElementById('resultSalaryele');

        let dailySalary = parseVNNumber(dailySalaryEle.value);
        let workingDate = Number(workingDateEle.value);

        if(validateLogic(dailySalary, workingDate)){
            let salary = calculateSalary(dailySalary, workingDate);
            let formatter = new Intl.NumberFormat('vi-VN');
            resultEle.textContent = formatter.format(salary) + " VNĐ";
        }
    });
}
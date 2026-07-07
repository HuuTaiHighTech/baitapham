function parseVNNumber(str){
    let formatter = new Intl.NumberFormat('vi-VN');
    let parts = formatter.formatToParts(1000000);
    let groupChar = parts.find(p => p.type === 'group').value;
    return Number(str.toString().split(groupChar).join(''));
}
function parseUSDNumber(str){
    let formatter = new Intl.NumberFormat('en-US');
    let parts = formatter.formatToParts(1000.1);

    let groupChar = parts.find(p => p.type === 'group').value;
    let decimalChar = parts.find(p => p.type === 'decimal').value;

    let value = str.toString()
        .split(groupChar).join('')
        .replace(decimalChar, '.');

    return Number(value);
}
function calculateUSD(exchangeRateUSD, currentUsdExchangeRate){
    return  exchangeRateUSD * currentUsdExchangeRate
}
function validateLogic(exchangeRateUSD, currentUsdExchangeRate) {
    if(isFinite(exchangeRateUSD) && isFinite(currentUsdExchangeRate)){
        if(exchangeRateUSD >=0 && currentUsdExchangeRate >= 23.500)
            return true;
        else{
            alert("Dữ liệu số không hợp lệ");
            return false;
        }
    }else{
        alert("Dữ liệu đầu vào không được chữa kỹ tự")
        return false
    }
}


export function USDmain(){
    
    let btn = document.getElementById('btnConvert');
    btn.addEventListener('click', () => {
        let stringUSD = document.getElementById('inputUSD');
        let stringVI = document.getElementById('InputRateVI');
        let resultEle = document.getElementById('resultvnd');

    let exchangeRateUSD =  parseUSDNumber(stringUSD.value);
    let currentUsdExchangeRate = parseVNNumber(stringVI.value);
    let exchangeRate = 0;
    if(validateLogic(exchangeRateUSD, currentUsdExchangeRate)){
         exchangeRate = calculateUSD(exchangeRateUSD, currentUsdExchangeRate);
          let formatter = new Intl.NumberFormat('vi-VN');
            resultEle.textContent = formatter.format(exchangeRate) + " VNĐ";
    }
   });
}

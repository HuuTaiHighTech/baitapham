function convertUSDToVND(amountUSD, exchangeRate, formatter) {
    const amountVND = amountUSD * exchangeRate;
    return `${amountUSD} USD = ${formatter.format(amountVND)} VNĐ`;
}

// ============================================================
// HÀM 2: Xử lý DOM - lấy phần tử, gắn sự kiện, gọi hàm 1 để lấy kết quả
// ============================================================
export function initUSD() {
    const inputUSD = document.getElementById('amountUSD');
    const btn = document.getElementById('btnConvert');
    const resultVND = document.getElementById('resultvnd');

    const exchangeRate = 23500;
    const vndFormatter = new Intl.NumberFormat('vi-VN');

    btn.addEventListener('click', () => {
        const eleUSD = Number(inputUSD.value);
        console.log(eleUSD);

        // Gọi hàm 1 để xử lý logic, hàm 2 chỉ lo việc DOM
        resultVND.textContent = convertUSDToVND(eleUSD, exchangeRate, vndFormatter);
    });
}
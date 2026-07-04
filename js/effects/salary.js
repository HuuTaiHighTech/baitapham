// ============================================================
// HÀM 1: Xử lý logic thuần - tính toán, không đụng vào DOM
// Có tham số rõ ràng => dễ test độc lập, dễ đọc, biết ngay cần gì
// ============================================================
function calculateSalary(dailySalary, workingDay) {
    const salary = dailySalary * workingDay;
    return `Tổng lương = ${salary.toLocaleString('vi-VN')} VNĐ`;
}

// ============================================================
// HÀM 2: Xử lý DOM - lấy phần tử, gắn sự kiện, gọi hàm 1 để lấy kết quả
// ============================================================
export function initSalary() {
    const btn = document.getElementById('btnCalcSalary');
    const dailySalaryEl = document.getElementById('dailySalary');
    const workingDayEl = document.getElementById('workingDay');
    const resultEl = document.getElementById('resultSalary');

    btn.addEventListener('click', () => {
        // Kết hợp biến và id để connect đến người dùng => lấy dữ liệu từ form
        // Xác định kiểu dữ liệu => ép kiểu dữ liệu phù hợp (Number)
        const dailySalary = Number(dailySalaryEl.value);
        const workingDay = Number(workingDayEl.value);

        console.log(`Lương 1 ngày: ${dailySalary}, Số ngày làm: ${workingDay}`);

        // Gọi hàm 1 để xử lý logic, hàm 2 chỉ lo việc DOM
        resultEl.textContent = calculateSalary(dailySalary, workingDay);
    });
}
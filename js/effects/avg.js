// ============================================================
// HÀM 1: Xử lý logic thuần - tính toán, không đụng vào DOM
// Có tham số rõ ràng => dễ test độc lập, dễ đọc, biết ngay cần gì
// ============================================================
function calculateAverage(values) {
    let total = 0;
    let n = 0;

    for (let i = 0; i < values.length; i++) {
        let value = values[i];
        n = n + 1;
        total = total + Number(value);
    }

    const avg = total / n;
    return `Tổng = ${total}, Số lượng = ${n}, Trung bình = ${avg}`;
}

// ============================================================
// HÀM 2: Xử lý DOM - lấy phần tử, gắn sự kiện, gọi hàm 1 để lấy kết quả
// ============================================================
export function initAvg() {
    const btn = document.getElementById('btnCalculate');
    const resultEl = document.getElementById('result');

    btn.addEventListener('click', () => {
        // Bước 1: Lấy giá trị từ 5 ô input
        // duyệt lấy + lấy giá trị từng giá trị để duyệt mảng, 
        const inputs = [
            document.getElementById('num1').value,
            document.getElementById('num2').value,
            document.getElementById('num3').value,
            document.getElementById('num4').value,
            document.getElementById('num5').value
        ];

        // Gọi hàm 1 để xử lý logic, hàm 2 chỉ lo việc DOM
        resultEl.textContent = calculateAverage(inputs);
    });
}
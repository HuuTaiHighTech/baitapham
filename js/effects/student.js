// Import thông báo từ file riêng
import { validationMessages } from "../messages.js";



export function initStudent() {
let benchmarkScoreInput = document.getElementById("benchmarkScore");
let regionSelect = document.getElementById("regionSelect");
let targetGroupSelect = document.getElementById("targetGroupSelect");
let subjectScore1Input = document.getElementById("subjectScore1");
let subjectScore2Input = document.getElementById("subjectScore2");
let subjectScore3Input = document.getElementById("subjectScore3");

// Hàm tính điểm riêng
function calculateScore() {
  let score1 = parseFloat(subjectScore1Input.value) || 0;
  let score2 = parseFloat(subjectScore2Input.value) || 0;
  let score3 = parseFloat(subjectScore3Input.value) || 0;
  let region = parseFloat(regionSelect.value) || 0;
  let targetGroup = parseFloat(targetGroupSelect.value) || 0;
  
  let resultscore =(score1 + score2 + score3) + region + targetGroup;
  return resultscore;
}


// Chỉ log khi đang gõ, KHÔNG validate/xóa ở đây
benchmarkScoreInput.addEventListener("input", function () {
  console.log("benchmarkScore input:", benchmarkScoreInput.value);
});

// Validate khi người dùng rời khỏi ô (gõ xong)
benchmarkScoreInput.addEventListener("blur", function () {
  let benchmark = parseFloat(benchmarkScoreInput.value);

  if (isNaN(benchmark)) {
    console.log(validationMessages.notNumber);
  } else if (benchmark > 35) {
    console.log("Điểm chuẩn không được lớn hơn 35");
    alert("Điểm chuẩn không được lớn hơn 35. Vui lòng nhập lại.");
    benchmarkScoreInput.value = "";
    benchmarkScoreInput.focus(); // đưa con trỏ về lại ô để nhập lại
  } else {
    console.log(`Điểm chuẩn hợp lệ: ${benchmark}`);
  }
});
regionSelect.addEventListener("change", function () {
  console.log("regionSelect changed:", regionSelect.value);
//   console.log("Điểm hiện tại:", calculateScore());
});

targetGroupSelect.addEventListener("change", function () {
  console.log("targetGroupSelect changed:", targetGroupSelect.value);
//   console.log("Điểm hiện tại:", calculateScore());
});

subjectScore1Input.addEventListener("input", function () {
  console.log("subjectScore1 input:", subjectScore1Input.value);
});

subjectScore2Input.addEventListener("input", function () {
  console.log("subjectScore2 input:", subjectScore2Input.value);
});

subjectScore3Input.addEventListener("input", function () {
  console.log("subjectScore3 input:", subjectScore3Input.value);
});


// Validate khi rời khỏi ô nhập (blur)
function validateSubjectScore(scoreInput, scoreNumber) {
  let score = parseFloat(scoreInput.value);

  if (isNaN(score)) {
    console.log(validationMessages.notNumber);
  } else if (score < 0 || score > 10) {
    console.log(`Môn ${scoreNumber}: ${validationMessages.outOfRange}`);
    alert(`Điểm môn ${scoreNumber} phải từ 0 đến 10. Vui lòng nhập lại.`);
    scoreInput.value = "";
    scoreInput.focus();
  } else {
    console.log(`Môn ${scoreNumber}: ${validationMessages.success(score)}`);
  }
}

subjectScore1Input.addEventListener("blur", () => validateSubjectScore(subjectScore1Input, 1));
subjectScore2Input.addEventListener("blur", () => validateSubjectScore(subjectScore2Input, 2));
subjectScore3Input.addEventListener("blur", () => validateSubjectScore(subjectScore3Input, 3));

// Xử lý sự kiện click result
document.getElementById("result").addEventListener("click", function() {
    let resultscore = calculateScore();
    let benchmark = parseFloat(benchmarkScoreInput.value) || 0;
    
    let resultAlert = document.getElementById("resultAlert");
    let resultMessage = "";
    let alertClass = "";
    
    console.log("=== KẾT QUẢ ===");
    console.log("Điểm trung bình: " + resultscore);
    console.log("Điểm chuẩn: " + benchmark);
    
    if (resultscore >= benchmark) {
        resultMessage = `✅ <strong>Kết quả: ĐẬU</strong><br>Điểm: ${resultscore.toFixed(2)}<br>Điểm chuẩn: ${benchmark}`;
        alertClass = "alert-success";
        console.log("Kết quả: ĐẬU");
    } else {
        resultMessage = `❌ <strong>Kết quả: RỚT</strong><br>Điểm: ${resultscore.toFixed(2)}<br>Điểm chuẩn: ${benchmark}`;
        alertClass = "alert-danger";
        console.log("Kết quả: RỚT");
    }
    
    // Cập nhật nội dung alert và hiển thị
    resultAlert.innerHTML = resultMessage;
    resultAlert.className = `alert ${alertClass}`;
    resultAlert.style.display = "block";
});

}

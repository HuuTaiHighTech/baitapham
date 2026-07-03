// File chứa các thông báo xác thực
export const validationMessages = {
  // Thông báo lỗi - Để trống
  emptyField: "Không được để trống",

  // Thông báo lỗi - Không phải số
  notNumber: "Không phải là số",

  // Thông báo lỗi - Ngoài khoảng 0-10
  outOfRange: "Điểm phải từ 0 đến 10",

  // Thông báo thành công
  success: (score) => `Hợp lệ - Điểm: ${score}`,

};

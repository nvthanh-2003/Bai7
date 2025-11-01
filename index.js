// BÀI TẬP 1: Tính tổng và trung bình điểm số
function bai1_tinhDiem() {
    console.log("--- Bài 1: Tính tổng và trung bình điểm số ---");

    // Sử dụng prompt để lấy input từ người dùng
    const ly = parseFloat(prompt("Nhập điểm Vật lý:"));
    const hoa = parseFloat(prompt("Nhập điểm Hóa học:"));
    const sinh = parseFloat(prompt("Nhập điểm Sinh học:"));

    if (isNaN(ly) || isNaN(hoa) || isNaN(sinh)) {
        alert("Lỗi: Vui lòng nhập số hợp lệ.");
        return;
    }

    const tongDiem = ly + hoa + sinh;
    const diemTrungBinh = tongDiem / 3;

    const ketQua =
        `Tổng điểm: ${tongDiem.toFixed(2)}\n` +
        `Điểm trung bình: ${diemTrungBinh.toFixed(2)}`;

    alert("Kết quả Bài 1:\n" + ketQua);
    console.log(ketQua);
}

// BÀI TẬP 2: Chuyển đổi nhiệt độ C sang F
function bai2_doiNhietDo() {
    console.log("--- Bài 2: Chuyển đổi nhiệt độ C sang F ---");

    const celsius = parseFloat(prompt("Nhập nhiệt độ (độ C):"));

    if (isNaN(celsius)) {
        alert("Lỗi: Vui lòng nhập số hợp lệ.");
        return;
    }

    // Công thức: F = C * (9/5) + 32
    const fahrenheit = (celsius * 9 / 5) + 32;

    const ketQua = `${celsius.toFixed(2)} độ C tương đương với ${fahrenheit.toFixed(2)} độ F.`;

    alert("Kết quả Bài 2:\n" + ketQua);
    console.log(ketQua);
}

// BÀI TẬP 3: Tính diện tích hình tròn
function bai3_tinhDienTich() {
    console.log("--- Bài 3: Tính diện tích hình tròn ---");

    const banKinh = parseFloat(prompt("Nhập bán kính hình tròn (r):"));

    if (isNaN(banKinh) || banKinh < 0) {
        alert("Lỗi: Bán kính phải là một số không âm hợp lệ.");
        return;
    }

    // Công thức: Diện tích A = pi * r^2
    const PI = Math.PI;
    const dienTich = PI * (banKinh ** 2);

    const ketQua = `Diện tích hình tròn là: ${dienTich.toFixed(2)}`;

    alert("Kết quả Bài 3:\n" + ketQua);
    console.log(ketQua);
}

// BÀI TẬP 4: Tính chu vi hình tròn
function bai4_tinhChuVi() {
    console.log("--- Bài 4: Tính chu vi hình tròn ---");

    const banKinh = parseFloat(prompt("Nhập bán kính hình tròn (r):"));

    if (isNaN(banKinh) || banKinh < 0) {
        alert("Lỗi: Bán kính phải là một số không âm hợp lệ.");
        return;
    }

    // Công thức: Chu vi C = 2 * pi * r
    const PI = Math.PI;
    const chuVi = 2 * PI * banKinh;

    const ketQua = `Chu vi hình tròn là: ${chuVi.toFixed(2)}`;

    alert("Kết quả Bài 4:\n" + ketQua);
    console.log(ketQua);
}

// Gọi hàm để chạy từng bài tập
// bai1_tinhDiem();
// bai2_doiNhietDo();
// bai3_tinhDienTich();
// bai4_tinhChuVi();
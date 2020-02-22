function checkAge() {
    let age = +prompt("Nhập vào số tuổi của bạn");
    if (age < 16) {
        alert("Bạn không đủ tuổi để học lớp 10");
    } else if (age < 19 ) {
        alert("Bạn đủ tuổi để học lớp 10");
    } else {
        alert("Bạn đã quá tuổi học lớp 10");
    }
}
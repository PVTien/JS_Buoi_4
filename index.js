// Bài tập JS buổi 4
console.log("Bài tập JS buổi 4:");

// Bài 1
console.log("Bài 1:");
var n1 = 8;
var n2 = 3;
var n3 = 5;

if (n1 >= n2) {
  if (n1 >= n3) {
    if (n2 >= n3) {
      console.log(n3, n2, n1);
    } else {
      console.log(n2, n3, n1);
    }
  } else {
    console.log(n2, n1, n3);
  }
} else {
  if (n1 >= n3) {
    console.log(n3, n1, n2);
  } else {
    if (n2 >= n3) {
      console.log(n1, n3, n2);
    } else {
      console.log(n1, n2, n3);
    }
  }
}

// Bài 2
console.log("Bài 2:");
var member = "M";

switch (member) {
  case "B":
    console.log("Chào Bố");
    break;
  case "M":
    console.log("Chào Mẹ");
    break;
  case "A":
    console.log("Chào Anh trai");
    break;
  case "E":
    console.log("Chào Em gái");
    break;
  default:
    console.log("Chào Bạn");
}

// Bài 3
console.log("Bài 3:");
var x1 = 5;
var x2 = 8;
var x3 = 1;
var even = 0;
var odd = 0;

if (x1 % 2 === 0) {
  even++;
}
if (x2 % 2 === 0) {
  even++;
}
if (x3 % 2 === 0) {
  even++;
}
odd = 3 - even;
console.log("Có", even, "số chẵn và", odd, "số lẻ");

// Bài 4
console.log("Bài 4:");
var e1 = 4;
var e2 = 2;
var e3 = 9;

if (e1 + e2 > e3 && e1 + e3 > e2 && e2 + e3 > e1) {
  if (e1 === e2 && e2 === e3) {
    console.log("Tam giác đều");
  } else if (e1 === e2 || e1 === e3 || e2 === e3) {
    console.log("Tam giác cân");
  } else if (e1 > e2) {
    if (e1 > e3) {
      if (e1 * e1 === e2 * e2 + e3 * e3) {
        console.log("Tam giác vuông");
      } else {
        console.log("Một tam giác khác");
      }
    } else {
      if (e3 * e3 === e1 * e1 + e2 * e2) {
        console.log("Tam giác vuông");
      } else {
        console.log("Một tam giác khác");
      }
    }
  } else {
    if (e2 > e3) {
      if (e2 * e2 === e1 * e1 + e3 * e3) {
        console.log("Tam giác vuông");
      } else {
        console.log("Một tam giác khác");
      }
    } else {
      if (e3 * e3 === e1 * e1 + e2 * e2) {
        console.log("Tam giác vuông");
      } else {
        console.log("Một tam giác khác");
      }
    }
  }
} else {
  console.log("Độ dài các cạnh không hợp lệ");
}

// Bài tập thêm JS buổi 4
console.log("\n\n\nBài tập thêm JS buổi 4:");

// Bài 1
console.log("Bài 1:");

// Bài 2
console.log("Bài 2:");
var month = 2;
var year = 2000;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Tháng có 31 ngày");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Tháng có 30 ngày");
    break;
  case 2:
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log("Tháng có 29 ngày");
    } else {
      console.log("Tháng có 28 ngày");
    }
    break;
  default:
    console.log("Tháng không hợp lệ");
}

// Bài 3
console.log("Bài 3:");
var number = 115;
var number1 = number % 10;
var number2 = Math.floor(number / 10) % 10;
var number3 = Math.floor(number / 100);

switch (number3) {
  case 1:
    console.log("Một trăm");
    break;
  case 2:
    console.log("Hai trăm");
    break;
  case 3:
    console.log("Ba trăm");
    break;
  case 4:
    console.log("Bốn trăm");
    break;
  case 5:
    console.log("Năm trăm");
    break;
  case 6:
    console.log("Sáu trăm");
    break;
  case 7:
    console.log("Bảy trăm");
    break;
  case 8:
    console.log("Tám trăm");
    break;
  case 9:
    console.log("Chín trăm");
    break;
}
switch (number2) {
  case 1:
    console.log("Mười");
    break;
  case 2:
    console.log("Hai mươi");
    break;
  case 3:
    console.log("Ba mươi");
    break;
  case 4:
    console.log("Bốn mươi");
    break;
  case 5:
    console.log("Năm mươi");
    break;
  case 6:
    console.log("Sáu mươi");
    break;
  case 7:
    console.log("Bảy mươi");
    break;
  case 8:
    console.log("Tám mươi");
    break;
  case 9:
    console.log("Chín mươi");
    break;
}
switch (number1) {
  case 1:
    console.log("Một");
    break;
  case 2:
    console.log("Hai");
    break;
  case 3:
    console.log("Ba");
    break;
  case 4:
    console.log("Bốn");
    break;
  case 5:
    console.log("Lăm");
    break;
  case 6:
    console.log("Sáu");
    break;
  case 7:
    console.log("Bảy");
    break;
  case 8:
    console.log("Tám");
    break;
  case 9:
    console.log("Chín");
    break;
}

// Bài 4
console.log("Bài 4:");
var nameA = "Nguyễn Văn A";
var xA = 4;
var yA = 7;
var nameB = "Trần Văn B";
var xB = 5;
var yB = 3;
var nameC = "Phạm Văn C";
var xC = 8;
var yC = 5;
var xSchool = 9;
var ySchool = 6;

var dA = Math.sqrt((9 - 4) * (9 - 4) + (6 - 7) * (6 - 7));
var dB = Math.sqrt((9 - 5) * (9 - 5) + (6 - 3) * (6 - 3));
var dC = Math.sqrt((9 - 8) * (9 - 8) + (6 - 5) * (6 - 5));
console.log("Đoạn đường từ nhà", nameA, "đến trường:", dA);
console.log("Đoạn đường từ nhà", nameB, "đến trường:", dB);
console.log("Đoạn đường từ nhà", nameC, "đến trường:", dC);

if (dA === dB || dA === dC || dB === dC) {
  console.log("Không có ai xa trường nhất");
} else if (dA > dB) {
  if (dA > dC) {
    console.log(nameA, "xa trường nhất");
  } else {
    console.log(nameC, "xa trường nhất");
  }
} else {
  if (dA > dC) {
    console.log(nameB, "xa trường nhất");
  } else {
    if (dB > dC) {
      console.log(nameB, "xa trường nhất");
    } else {
      console.log(nameC, "xa trường nhất");
    }
  }
}

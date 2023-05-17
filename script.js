// function click_changing() {
//   let click_fromCurrency = document.getElementById('From__Currency').value;
//   let click_toCurrency = document.getElementById('To__Currency').value;
//   let value_user = document.getElementById('element_user').value;

//   if (value_user == ' ') {
//     document.getElementById('result').innerText = `hãy nhập giá trị số`;
//   } else {
//     switch (click_fromCurrency) {
//       case 'VN':
//         click_fromCurrency = 1;
//         break;
//       case 'Mỹ':
//         click_fromCurrency = 23000;
//         break;
//     }

//     switch (click_toCurrency) {
//       case 'VN':
//         click_fromCurrency = 1;
//         break;
//       case 'Mỹ':
//         click_fromCurrency = 23000;
//         break;
//     }
//   }
//   let submit_section_value =
//     value_user * (click_fromCurrency / click_toCurrency);
//   document.getElementById('result').innerHTML = submit_section_value;
// }

// function re_change_currency() {
//   let x = document.getElementById('From__Currency').value;
//   switch (x) {
//     case 'VN':
//       document.getElementById('To__Currency').value = 'Mỹ';
//   }
// }

// function caculate_day() {
//   let value = document.getElementById('value_input').value;
//   let value_mathematics = parseInt(value);

//   let value_month = +prompt('hãy nhập tiếp tháng muốn tìm');

//   if (
//     (value_mathematics % 4 == 0 && value_mathematics % 100 == 0) ||
//     value_mathematics % 400 == 0
//   ) {
//     prompt(
//       `${value_mathematics} là năm nhuận vui lòng nhập tiếp thông tin tháng muốn tra cứu`
//     );
//     switch (value_month) {
//       case 1:
//       case 3:
//       case 5:
//       case 7:
//       case 8:
//       case 10:
//       case 12:
//         document.getElementById(
//           'show_result'
//         ).innerHTML = `tháng ${value_month} có 31 ngày`;
//         break;

//       case 4:
//       case 6:
//       case 9:
//       case 11:
//         document.getElementById(
//           'show_result'
//         ).innerHTML = `tháng ${value_month} có 30 ngày`;
//         break;

//       default:
//         document.getElementById(
//           'show_result'
//         ).innerHTML = `tháng ${value_month} có 29 ngày`;
//         break;
//     }
//   } else {
//     prompt(
//       `${value_mathematics} là năm không nhuận vui lòng nhập tiếp thông tin tháng muốn tra cứu`
//     );
//     switch (value_month) {
//       case 1:
//       case 3:
//       case 5:
//       case 7:
//       case 8:
//       case 10:
//       case 12:
//         document.getElementById(
//           'show_result'
//         ).innerHTML = `tháng ${value_month} có 31 ngày`;
//         break;

//       case 4:
//       case 6:
//       case 9:
//       case 11:
//         document.getElementById(
//           'show_result'
//         ).innerHTML = `tháng ${value_month} có 30 ngày`;
//         break;

//       default:
//         document.getElementById(
//           'show_result'
//         ).innerHTML = `tháng ${value_month} có 28 ngày`;
//         break;
//     }
//   }
// }

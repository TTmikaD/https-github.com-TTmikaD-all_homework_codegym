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

// let x = [1, 2, 3, 4, 5];

// let y = [1, 'b', 'c', 2, { name: 'khánh', age: '18' }];
// // x[1] = 'hố lô';
// // x.length = 'đừng hello';

// let z = new Array('a', 'b', 'c');
// z[1] = 'hello';
// z[2] = 'cái gì';

// z[10] = 'tuổi gì vậy bà già';
// z[z.length] = 'á dduf';
// z[z.length] = 'á dduf';
// console.log(x);
// console.log(x.length);

// console.log(y);
// console.log(z);
// console.log(z[10]);

// let m = new Array('a', 'b', 'c', 'd', 'e');

// m[1] = 'hello';

// m[m.length] = 'bà đi đâu đó';
// m[m.length] = 'có ăn cơm không';

// for (let i = 0; i <= m.length; i++) {
//   console.log('phần tử thứ', i, '=', m[i]);
// }

// for (let index in m) {
//   console.log(index);
// }

// let n = new Array('a', 'b', 'c', 'd');
// for (let i = 0; i <= n.length; i++) {
//   console.log('phần tử thứ', i, '=', n[i]);
// }

// let b = [1, 2, 3, 4, 5];

// b[1] = 'hello';

// console.log(b);

// let newb = b.push('thêm phần tử mới vào mảng');
// console.log(newb);

// let h = new Array('a', 'b', 'c');

// let k = [1, 2, 3, 4, -1, -2, -3, 5, 6, 7, 8, 9];

// let max = k[0];
// let min = k[0];
// let index_max = 0;
// let index_min = 0;
// for (let i = 0; i < k.length; i++) {
//   if (max < k[i]) {
//     max = k[i];
//     index_max = i;
//   }
//   if (min > k[i]) {
//     min = k[i];
//     index_min = i;
//   }
// }
// console.log(max);
// console.log(index_max);

// console.log(min);
// console.log(index_min);
// let x = prompt('hãy nhập mật khẩu')
// do {
//   alert('nhập lại mật khẩu')
// } while(x == 'vừng ơi mở cửa ra') {
//   alert('xin mời bạn vào')
// }

// let passWords = 'vừng ơi mở cửa ra, please!';
// let inputUser = '';
// do {
//   inputUser = prompt('nhập mật khẩu');
// } while (inputUser !== passWords);
// alert('bullshit! thôi mày vào đi');

// let x = [[1, 2, 3, 4, 5, 6, 7][('a', 'b', 'c', 'd', 'e')]];
// let x = [1, 2, 3, 4, 5];

// for (let i = 0; i < x.length; i++) {
//   console.log('phần tử thứ:', i, '=', x[i]);
// }

// let x = [-1, 2, 3, 4, 5, 6, 7];
// let valueEmpty = 0;
// let valueLast = x.length - 1;
// while (valueEmpty < valueLast) {
//   let y = x[valueEmpty];
//   x[valueEmpty] = x[valueLast];
//   x[valueLast] = b;

//   valueEmpty++;
//   valueLast--;
// }
// console.log(x);

// console.log(`ngày 23/5/2023`);

// let x = ['a', 'b', 'c'];

// x[1] = 'chào bạn';
// x[0] = x[1];
// x[0] = x[x.length - 1];

// x[x.length] = 'hello';
// x[x.length] = 'hello';
// console.log(x);

// for (let i = 0; i < x.length; ++i) {
//   console.log(`phần tử thứ ${i} là ${x[i]}`);
// }

// for (const index in x) {
//   console.log(index);
// }

// for (const value of x) {
//   console.log(value);
// }

// x.forEach(y => console.log(y))

// let yy = [1,2,3,4,5,6]
// yy.shift('')

// console.log(`24/5/2023`);

// function sayIntroduce(name) {
//   console.log('xin chào', name);
// }

// sayIntroduce('guys');

// let x = [
//   [1, 2, 3, 4, 5],
//   ['a', 'b', 'c', 'c'],
//   [true, false],
// ];

// for (let i = 0; i < x.length; i++) {
//   // console.log(x);
//   for (let j = 0; j < x[i].length; j++) {
//     console.log(x[i][j]);
//     for (let l = 0; l < x[i][j].length; l++) {
//       console.log(x[l][i][j]);
//     }
//   }
// }

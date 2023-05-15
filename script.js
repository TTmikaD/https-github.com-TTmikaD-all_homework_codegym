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

function re_change_currency() {
  let x = document.getElementById('From__Currency').value;
  switch (x) {
    case 'VN':
      document.getElementById('To__Currency').value = 'Mỹ';
  }
}

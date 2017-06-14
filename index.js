const arr1 = ['I','X','C','M'];
const arr5 = ['V','L','D'];
let str = '';
function to_roman(num) {
  let strNum = num.toString();
  let strLen = strNum.length;
  let firstNum = parseInt(strNum.charAt(0));

  if (firstNum <= 3)
    str += arr1[strLen-1].repeat(firstNum);
  else if (firstNum === 4)
    str += arr1[strLen-1]+arr5[strLen-1];
  else if (firstNum === 5)
    str += arr5[strLen-1];
  else if (firstNum <= 8 && firstNum >= 6) {
    let rep = firstNum - 5;
    str += arr5[strLen-1] + ( arr1[strLen-1].repeat(rep) );
  }
  else if (firstNum === 9)
    str += arr1[strLen-1] + arr1[strLen];

  if (strLen-1 > 0) {
    let nNum = parseInt(strNum.substr(1));
    return to_roman(nNum);
  } else {
    let str2 = str;
    str = '';
    return str2;
  }

}



exports.roman = function(num) {
  return to_roman(num);
}
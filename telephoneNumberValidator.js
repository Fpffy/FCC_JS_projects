"use strict";

function telephoneCheck(str) {
  let validFormats =
    /^1? ?\d{3}-\d{3}-\d{4}$|^1? ?\d{3} \d{3} \d{4}$|^1? ?\d{10}$|^1? ?\(\d{3}\) \d{3}-\d{4}$|^1? ?\(\d{3}\)\d{3}-\d{4}$/
  let isValid = validFormats.test(str);
  return isValid;
}

// RegExper: http://bit.ly/2NmHi3h

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));

console.log(telephoneCheck("(6054756961)"));
console.log(telephoneCheck("2 (757) 622-7382"));
console.log(telephoneCheck("0 (757) 622-7382"));
console.log(telephoneCheck("-1 (757) 622-7382"));
console.log(telephoneCheck("10 (757) 622-7382"));
console.log(telephoneCheck("27576227382"));
console.log(telephoneCheck("2(757)622-7382"));
console.log(telephoneCheck("(555-555-5555"));

"use strict";

function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[\W_]/g, "");
  console.log(str);
  let splitedStr = str.split("");
  for (let i =0; i < splitedStr.length; i++) {
    if (splitedStr[i] !== splitedStr.reverse()[i] ? false : true)
  }
}



console.log(palindrome("0_0 (: /-\ :) 0-0"));

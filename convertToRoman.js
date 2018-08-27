"use strict";

let romanLetters = [
                     ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
                     ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
                     ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
                   ];

function convertToRoman(num) {
  let output = "";
  let howManyK = Math.floor(num / 1000);
  for (let i = 0; i < howManyK; i++){
    output += "M";
  }
  num -= howManyK * 1000;

  function threeDigitRoman(num, div, group) {
    let whatRomanLetter = Math.floor(num / div);
    output += romanLetters[group][whatRomanLetter];
    if (group > 0) {
      threeDigitRoman(num - whatRomanLetter * div, div / 10, group - 1);
    }
  }

  threeDigitRoman(num, 100, 2);
  return output;
}

console.log(convertToRoman(5754));

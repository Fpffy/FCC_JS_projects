"use strict";

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let alphabetArray = alphabet.split("");
let rot13Pairs = [];
for (let i = 0; i < alphabetArray.length / 2; i++) {
  rot13Pairs.push([alphabetArray[i], alphabetArray[i + 13]]);
}

function rot13(str) {
  let strArray = str.split("");
  let decoded = "";

  for (let char of strArray) {
    let isCharLetter = false;
    for (let letter of alphabetArray) {
      if (char === letter) {
        isCharLetter = true;
      }
    }
    if (isCharLetter) {
      for (let pair of rot13Pairs) {
        if (char === pair[0]) {
          decoded += pair[1];
        }
        if (char === pair[1]) {
          decoded += pair[0];
        }
      }
    } else {decoded += char}
  }
  return decoded;
}

console.log(rot13("LBH QVQ VG!"));

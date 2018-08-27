"use strict";

function checkCashRegister(price, cash, cid) {
  let cashInDrawer = 0;
  let changeValue = cash - price;
  let output = {status: "OPEN", change: []};
  let currencyValues = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

  for (let currency of cid) {
    cashInDrawer += currency[1] * 100;
  }
  cashInDrawer /= 100;

  if (cashInDrawer - (cash - price) === 0) {
    output.status = "CLOSED";
    output.change = cid;
  } else {
    for (let i = 0; i < cid.length; i++) {
      cid[i][2] = currencyValues[i];
      cid[i][3] = Math.round(cid[i][1] / cid[i][2]);
    }
    if (changeValue > cashInDrawer) {
      output.status = "INSUFFICIENT_FUNDS";
    } else {
      for (let i = cid.length - 1; i >= 0; i--) {
        if (changeValue >= cid[i][2] && changeValue !== 0 && cid[i][1] > 0) {
          changeValue = (Math.round(changeValue * 1000)) / 1000;
          let howManyBilons = (Math.floor(changeValue / cid[i][2]));
          if (howManyBilons > cid[i][3]) howManyBilons = cid[i][3];
          output.change.push([cid[i][0], cid[i][2] * howManyBilons]);
          changeValue -= cid[i][2] * howManyBilons;
          cid[i][1] -= cid[i][2] * howManyBilons;
          cid[i][3] -= howManyBilons;
        }
      }
      if (changeValue !== 0) {
        output.status = "INSUFFICIENT_FUNDS"
        output.change = [];
      }
    }
  }
  return output;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0],
["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

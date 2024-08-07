"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if(discriminant < 0) {
    return arr;
  } else if(discriminant === 0) {
    const root0 = -b / (2 * a);
    arr.push(root0);
  } else if(discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = (percent / 100) / 12;
  let loanBody = amount - contribution;
  let monthlyPay = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
  let totalAmount = monthlyPay * countMonths;
  return +totalAmount.toFixed(2);
}

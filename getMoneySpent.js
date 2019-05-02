
// Complete the divisibleSumPairs function below.
function getMoneySpent(keyboards, drives, b) {
  let res = -1;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let sum = keyboards[i] + drives[j];
      if (sum <= b && sum > res) {
        res = sum;
      }
    }
  }
  return res;
}

//let res = pageCount(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
let res = getMoneySpent([30, 40, 50, 60], [16, 5, 30], 60 );
//374625
//60
console.log(res);
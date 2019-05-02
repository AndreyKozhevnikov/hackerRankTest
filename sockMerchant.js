
// Complete the divisibleSumPairs function below.
function sockMerchant(n, ar) {
  let cnt = 0;
  let dict = {};
  for (let n of ar) {
    let st = n.toString();
    if (!dict.hasOwnProperty(st)) {
      dict[st] = 1;
    } else {
      dict[st] = dict[st] + 1;
      if (dict[st] == 2) {
        dict[st] = 0;
        cnt = cnt + 1;
      }
    }
  }
  return cnt;

}
let res = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
//3
console.log(res);
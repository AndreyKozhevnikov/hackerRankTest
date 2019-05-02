
// Complete the divisibleSumPairs function below.
function pageCount(n, p) {

  let fldCnt=Math.floor(n/2+1);
  let pFld=Math.floor(p/2+1);

  let f1=Math.abs(1-pFld);
  let f2=Math.abs(fldCnt-pFld);

  let res=Math.min(f1,f2);
  return res;
}

//let res = pageCount(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
let res = pageCount(5,4);
//2
console.log(res);

// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
  let res=[];
  for (let i = 0; i < n - 1; i++) {
    let f1 = ar[i];
    for (let j = i + 1; j < n; j++) {
      let f2 = ar[j];
      let sm = f1+f2;
      if (sm%k==0){
        res.push([f1,f2]);
      }
    }
  }
  console.log(res);
  return res.length;

}

let res = divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])
console.log(res);
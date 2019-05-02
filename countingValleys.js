
// Complete the divisibleSumPairs function below.
function countingValleys(n, s) {
  let currentLevel = 0;
  let res=0;
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    switch (ch) {
      case 'U':
        currentLevel++;
        if (currentLevel==0){
          res++;
        }
        break;
      case 'D':
        currentLevel--;
        break;
    }
  }
  return res;
}

//let res = pageCount(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
let res = countingValleys(5, 'UDDDUDUU');
//2
console.log(res);
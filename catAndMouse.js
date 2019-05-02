
// Complete the divisibleSumPairs function below.
function catAndMouse(x, y, z) {
  let catA = Math.abs(x - z);
  let catB = Math.abs(y - z);
  if (catA > catB) {
    return 'Cat B';
  } else if (catA < catB) {
    return 'Cat A';
  } else {
    return 'Mouse C';
  }
}

//let res = pageCount(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
let res = catAndMouse(1, 2, 3);
//Mouse C
//60
console.log(res);
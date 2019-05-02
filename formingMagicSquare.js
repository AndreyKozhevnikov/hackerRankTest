
// Complete the divisibleSumPairs function below.
function formingMagicSquare(s) {
  let basSq = getBasicSquare();
  let basRow = getRowFromSquare(basSq);
  let allRows = getAllRowsVariants(basRow);

  let min = 45;
  let targetRow = getRowFromSquare(s);
  for (let i = 0; i < allRows.length; i++) {
    let centerDiff = Math.abs(s[1][1] - 5);
    let diff = compareTwoRows(allRows[i], targetRow);
    let res = diff + centerDiff;
    if (res < min) {
      min = res;
    }
  }
 
  return min;
}

function compareTwoRows(s1, s2) {
  let res = 0;
  for (let i = 0; i < s1.length; i++) {
    let r1 = Math.abs(s1[i] - s2[i]);
    res = res + r1;
  }
  return res;
}

function getAllRowsVariants(basRow) {
  let allRows = [];

  allRows.push(basRow);

  for (let i = 0; i < 3; i++) {
    let basClone = [...basRow];
    let ind = 2 * i + 2;
    let newRow = basClone.splice(ind, basClone.length - ind);
    newRow.push(...basClone);
    allRows.push(newRow);

    //debugger;
  }
  let l=allRows.length;
  for (let i = 0; i < l; i++) {
    let row = allRows[i];
    let reverseRow = [];
    reverseRow.push(row[0]);
    for (let j = row.length - 1; j > 0; j--) {
      reverseRow.push(row[j]);
    }
    allRows.push(reverseRow);
  }
  return allRows;
}

function getRowFromSquare(s) {
  let r = [];
  r.push(...s[0]);
  r.push(s[1][2]);
  r.push(s[2][2]);
  r.push(s[2][1]);
  r.push(s[2][0]);
  r.push(s[1][0]);
  return r;
}

function getBasicSquare() {
  let a = 1;
  let b = 3;
  let c = 5;

  let r1 = [];
  r1.push(c - b);
  r1.push(c + (a + b));
  r1.push(c - a);
  let r2 = [];
  r2.push(c - (a - b));
  r2.push(c);
  r2.push(c + (a - b));
  let r3 = [];
  r3.push(c + a);
  r3.push(c - (a + b));
  r3.push(c + b);
  let sq = [];
  sq.push(r1);
  sq.push(r2);
  sq.push(r3);
  return sq;
}

//let res = pageCount(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
let res = formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]]);
//7
console.log(res);
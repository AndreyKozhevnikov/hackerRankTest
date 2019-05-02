
function pickingNumbers(a) {
  // Write your code here
  let arr = {};
  let max = -1;
  for (let i = 0; i < a.length; i++) {
    let stL = a[i].toString() + 'L';
    let stH = a[i].toString() + 'H';


    if (!arr.hasOwnProperty(stL)) {
      arr[stL] = [];
      arr[stH] = [];
    }
    for (let prop in arr) {
      let num = parseInt(prop.substr(0, prop.length - 1));
      let type = prop.substr(prop.length - 1, 1);
      let newNum = a[i];
      let currArr = arr[prop];
      if (num == newNum) {
        currArr.push(newNum);
      } else {
        switch (type) {
          case 'H':
            if (newNum == (num + 1)) {
              currArr.push(newNum);
            }
            break;
          case 'L':
            if (newNum == (num - 1)) {
              currArr.push(newNum);
            }
            break;
        }
      }
      if (currArr.length > max) {
        max = currArr.length;
      }
    }
  }
  return max;
}
//let res = pageCount(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
let res = pickingNumbers([1, 2, 2, 3, 1, 2]);
//5
console.log(res);
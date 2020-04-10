function nonDivisibleSubset(k, s) {
  let res = 0;
  let simpleArr = s.map(x => x % k);
  let simpleArrMap = {};
  for (let i = 0; i < simpleArr.length; i++) {
    let vl = simpleArr[i];
    if (simpleArrMap[vl]) {
      simpleArrMap[vl].Value++;
    } else {
      simpleArrMap[vl] = { Value: 1 };
    }
  }
  for (let key in simpleArrMap) {
    if (key == 0) {
      res++;
      continue;
    }
    if (simpleArrMap[key].IsChecked) {
      continue;
    }
    let oppos = k - key;
    if (oppos == key) {
      res++;
      continue;
    }
    let res1 = simpleArrMap[key].Value;
    let res2 = 0;
    if (simpleArrMap[oppos]) {
      res2 = simpleArrMap[oppos].Value;
      simpleArrMap[oppos].IsChecked = true;
    }
    
    let max = Math.max(res1, res2);
    res = res + max;

  }
  return res;
}

function nonDivisibleSubsetNaive(k, s) {
  // Write your code here
  let res = [];
  for (let i = 0; i < k.length; i++) {
    let firstNum = k[i];
    let tmpRes = [];
    tmpRes.push(firstNum);
    for (let j = 0; j < k.length; j++) {
      if (i != j) {
        let secNum = k[j];
        let isFit = true;
        for (let z = 0; z < tmpRes.length; z++) {
          let tmpFromArr = tmpRes[z];
          let sm = tmpFromArr + secNum;
          if (sm % s == 0) {
            isFit = false;

          }
        }
        if (isFit) {
          tmpRes.push(secNum);
        }
      }
    }
    res.push(tmpRes);
  }
  let nRes = res.map(x => x.length);
  let max = Math.max(...nRes);
  //console.dir(max);
  return max;

}

console.log('3  - ' + nonDivisibleSubset(3, [1, 7, 2, 4]));
console.log('3  - ' + nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22]));
console.log('2  - ' + nonDivisibleSubset(3, [2, 3, 7]));
console.log('3  - ' + nonDivisibleSubset(6, [3, 5, 9, 15, 17, 21]));
console.log('4  - ' + nonDivisibleSubset(6, [3, 5, 9, 15, 17, 21, 35]));
console.log('6  - ' + nonDivisibleSubset(5, [770528134, 663501748, 384261537, 800309024, 103668401, 538539662, 385488901, 101262949, 557792122, 46058493]));

console.log('3  - ' + nonDivisibleSubset(5, [3, 5, 9, 15, 17, 21, 35]));
console.log('5  - ' + nonDivisibleSubset(5, [3, 4, 9, 14, 17, 21, 35]));


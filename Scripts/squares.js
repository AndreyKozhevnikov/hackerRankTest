function squares(a, b) {
  let mSqrt = Math.sqrt(a);
  let bSqrt = Math.sqrt(b);
  let mRound = Math.ceil(mSqrt);
  let bRound = Math.floor(bSqrt);
  //console.log(mRound + ' ' + bRound);
  let res = bRound - mRound;
  if (res >= 0) {
    return res + 1;
  } else {
    return 0;
  }
}

let res1 = squares(3, 9);
let res2 = squares(19, 24);
let res3 = squares(24, 49);

console.log(res1);
console.log(res2);
console.log(res3);
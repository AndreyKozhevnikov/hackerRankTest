function viralAdvertising(n) {
  let curr = 5;
  let cum = 0;
  for (let i = 0; i < n; i++) {
    let res = Math.floor(curr / 2);
    cum = cum + res;
    curr = res * 3;
  }
  return cum;



}


let res = viralAdvertising(5);
//9
console.log(res);



//console.log(res);
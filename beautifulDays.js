function beautifulDays(i, j, k) {
  let res=0;
  for (let l = i; l <= j; l++) {
      let lSt=l.toString();
      let lStRev=lSt.split('').reverse().join('');
      let lRev=parseInt(lStRev);
      let diff=l-lRev;
      let rem = diff%k;
      if (rem==0){
        res++;
      }
  }
  return res;

}


let res = beautifulDays(20, 23, 6);
//2
console.log(res);



//console.log(res);
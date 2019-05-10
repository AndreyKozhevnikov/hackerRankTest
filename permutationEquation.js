function permutationEquation(p) {
  let res = [];
  for (let i = 0; i < p.length; i++) {
    let in1=i+1;
   let r1=p.findIndex(x=>x==in1);
   let r1i=r1+1;
   let r2=p.findIndex(x=>x==r1i)+1;
   res.push(r2);
  }
  return res;
}


//let res = circularArrayRotation([ 1, 2, 3 ],2,[ 0, 1, 2 ]);
//231
let res = permutationEquation([4 ,3 ,5 ,1, 2]);
//13542
console.log(res);

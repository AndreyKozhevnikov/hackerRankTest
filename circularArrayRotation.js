function circularArrayRotation(a, k, queries) {
  let x =k% a.length ;
  let myInd = a.length - x;
  if(x==0){
    myInd=0;
  }
  let res=[];
  let arr1 = a.splice(myInd, a.length - myInd);
  let resArr = arr1.concat(a);
  for (let q of queries) {
        res.push(resArr[q]);
  }
  return res;

}


//let res = circularArrayRotation([ 1, 2, 3 ],2,[ 0, 1, 2 ]);
//231
let res = circularArrayRotation([ 1, 2, 3 ],1,[ 0, 1, 2 ]);
//123
console.log(res);

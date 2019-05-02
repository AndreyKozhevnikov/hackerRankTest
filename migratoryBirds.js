
// Complete the divisibleSumPairs function below.
function migratoryBirds(arr) {
  let dict = {};
  for (let i = 0; i < arr.length; i++) {
    let nm = arr[i].toString();
    if (!dict.hasOwnProperty(nm)) {
      dict[nm] = 1;
    } else {
      dict[nm] = dict[nm] + 1;
    }
  }
  let res=6;
  let max=0;
  for(let k in dict){
   let vl=dict[k];
   let in1=parseInt(k);
   if (vl>max){
     res=in1;
     max=vl;
   }
   if (vl==max){
    if (in1<res){
      res=in1;
    }
   }
  }
  console.log(dict);
  return res;
}

let res = migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])
console.log(res);
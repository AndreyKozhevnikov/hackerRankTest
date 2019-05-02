
// Complete the divisibleSumPairs function below.
function bonAppetit(bill, k, b) {

  let anArr=bill.splice(k,1);
  let sum=bill.reduce((s,x)=>s+x);
  let annSum=sum/2;
  if (annSum==b){
    return 'Bon Appetit'
  }else{
    return b-annSum;
  }



}

let res = bonAppetit([3,10,2,9],1,7);
//5
console.log(res);
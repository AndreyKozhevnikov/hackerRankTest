function utopianTree(n) {
  let res=1;
  for (let i =1;i<=n;i++){
    if (i%2==0){
      res=res+1;
    }else{
      res=res*2;
    }
  }
  return res;
}

let res = utopianTree(4);
//7
console.log(res);
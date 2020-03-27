function cutTheSticks(arr) {

  let cnt=arr.length;
  let res=[];
  res.push(cnt);
  while(cnt>0){
    
    let min =Math.min(...arr);
    arr=arr.map(x=>x>0?x-min:0);
    arr=arr.filter(x=>x>0)
    cnt=arr.length;
    if (cnt>0)
    res.push(cnt);
  }
return res;

}

console.log('3 2 1 - '+ cutTheSticks([1,2,3]));
console.log('6 4 2 1 - '+ cutTheSticks([5, 4, 4, 2, 2, 8]));
console.log('8 6 4 1 - '+ cutTheSticks([1,2,3,4,3,3,2,1]));
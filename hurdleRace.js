function hurdleRace(k, height) {
  let max = k[0];
  for (let i = 1; i < k.length - 1; i++){
      if (k[i] > max)
          max = k[i];
  }
  return max - height;

}
let res = hurdleRace([1,6,3,5,2], 4);
//2
console.log(res);
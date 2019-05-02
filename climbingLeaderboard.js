function climbingLeaderboard(scores, alice) {
  let cleanQueue = []
  let res = [];
  let fNum = alice[0];
  for (let sc of scores) {
    if (sc > fNum) {
      if (cleanQueue.length == 0 || sc < cleanQueue[cleanQueue.length - 1]) {
        cleanQueue.push(sc);
      }
    } else {
      res.push(cleanQueue.length + 1);
      break;
    }
  }
  if (res.length == 0) {
    res.push(cleanQueue.length + 1);
  }
  // let clearnQList = Array.from(cleanQueue);
  if (alice.length > 1) {
    // debugger;
    for (let i = 1; i < alice.length; i++) {
      let aliceSc = alice[i];

      loop2:
      {
        for (let j = 0; j < cleanQueue.length; j++) {
          let sc = cleanQueue[j];
          if (sc <= aliceSc) {
            res.push(j + 1);
            break loop2;
          }
        }
        res.push(cleanQueue.length + 1);
      }
    }
  }
  return res;
}
//let res = pageCount(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
let res=climbingLeaderboard([100,100,50,40,40,20,10],[5,25,50,120]);
//let res = climbingLeaderboard([1, 1], [1, 1]);
//6 4 2 1
console.log(res);
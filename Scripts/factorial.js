


function multi(nSplit, mSplit) {
  let arr = [];

  let currmInd = 0;
  for (let i = mSplit.length - 1; i >= 0; i--) {
    let currMItem = mSplit[i];
    let currNInd = 0;
    for (let j = nSplit.length - 1; j >= 0; j--) {

      let currNItem = nSplit[j];

      let multResul = currMItem * currNItem;

      let multResultSplit = getArrFromInt(multResul);


      // console.log(multResultSplit);
      let realInd = currmInd + currNInd;
      for (let z = multResultSplit.length - 1; z >= 0; z--) {
        let mRes = multResultSplit[z];
        if (arr[realInd]) {
          arr[realInd] = arr[realInd] + mRes;
        } else {
          arr[realInd] = mRes;
        }
        if (arr[realInd] > 9) {
          let arrayArr = getArrFromInt(arr[realInd]);
          arr[realInd] = arrayArr[1];
          if (arr[realInd + 1]) {
            arr[realInd + 1] = arr[realInd + 1] + arrayArr[0];
          } else {
            arr[realInd + 1] = arrayArr[0];
          }

        }
        if (arr[realInd + 1] > 9) {
          let arrayArr = getArrFromInt(arr[realInd + 1]);
          arr[realInd + 1] = arrayArr[1];
          if (arr[realInd + 2]) {
            arr[realInd + 2] = arr[realInd + 2] + arrayArr[0];
          } else {
            arr[realInd + 2] = arrayArr[0];
          }

        }

        realInd = realInd + 1;

      }
    // console.log(arr);
      currNInd = currNInd + 1;
    }
    //  console.log('curr' + currmInd);
    currmInd = currmInd + 1;
  }
 return arr.reverse();
 // console.log('res' + arr);
}

function getArrFromInt(i) {
  let iSplit = (i + '').split('');
  iSplit = iSplit.map(x => parseInt(x));
  return iSplit;
}

//let vv=getArrFromInt(81);
//console.log(vv);

//let testREs=multi(46,73);
//let testREs = multi(99, 99);
//let mSplit = getArrFromInt(76);
//let nSplit = getArrFromInt(39);
//let testREs=multi(mSplit,nSplit);

function myfactorial(init){
  let res=getArrFromInt(init);
  for (let i =init-1;i>0;i--){
     res=multi(res,getArrFromInt(i));
  }
  return res.join('');
  

}

let res=myfactorial(25);
//let testREs=multi(10,15);
console.log('res - ' + res);


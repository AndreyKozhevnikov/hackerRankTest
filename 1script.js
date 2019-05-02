function birthday(s, d, m) {
  let res = [];
  console.log(s.length - m);
  for (let i = 0; i <= s.length - m; i++) {
    if (i == 10) {
     // debugger;
    }
    let newArr = s.slice(i, i + m);
    let sum = newArr.reduce((a, x) => a + x);
    if (sum == d) {
      res.push(newArr);
    }
  }
  console.log(res);
  return res.length;

  //   stack.push(newArr);
  //   if (i == 10) {
  //     //debugger;
  //   }
  //   // console.log('1 '+i +' '+stack.length);
  //   //console.log(stack);
  //   //console.log(res);
  //   for (let j = stack.length - 1; j >= 0; j--) {
  //     let num = s[i];
  //     let arr = stack[j];
  //     arr.push(num);
  //     // console.log(arr) ;
  //     let sum2 = arr.reduce((a, x) => a + x);
  //     // console.log(arr+'  -  '+sum2) ;
  //     if (arr.length == m) {
  //       let sum = arr.reduce((a, x) => a + x);
  //       if (sum == d) {
  //         res.push(arr);
  //       }
  //       stack.splice(j, 1);
  //     }
  //     // console.log(i +' '+j);
  //     // console.log(stack);
  //     // console.log(res);
  //   }
  // }
  // console.log(res);
  // return res.length;

}

let res = birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7)
console.log(res);
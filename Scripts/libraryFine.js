function libraryFine(d1, m1, y1, d2, m2, y2) {
 
  let dt1 = new Date(y1, m1-1, d1);
  let dt2 = new Date(y2, m2-1, d2);
  let diffTime = dt1 - dt2;
  let diff = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  if (diff > 0) {
    if (y1 != y2) {
      return 10000;
    }
    if (m2 != m1) {
      return (m1-m2)*500;
    }else{
      return diff*15;
    }
  }
  return 0;

}

console.log( libraryFine(2, 7, 1014, 1, 1, 1014) + '  3000');
console.log( libraryFine(5, 5, 2014, 23, 2, 2014) + '  1500');



//console.log( libraryFine(6, 6, 2015, 9, 6, 2016));



//console.log('should be 45 ' + res1);

// Complete the divisibleSumPairs function below.
function dayOfProgrammer(year) {
  let isDiv = false;
  if (year < 1918) {
    if (year % 4 == 0) {
      isDiv = true;
    }
  } else {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)){
      isDiv = true;
    }
  }

  let st;
  if (year == 1918) {
    st = '24.08.';
  } else {
    if (isDiv) {
      st = '12.09.'

    } else {
      st = '13.09.';
    }

  }
  st = st + year;
  return st;

}

let res = dayOfProgrammer(1918);
//12.09.2016
console.log(res);
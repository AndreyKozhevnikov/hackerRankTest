function appendAndDelete(s, t, k) {
  let sLen = s.length;
  let tLen = t.length;

  let maxLen = Math.max(sLen, tLen);
  let commonNum = maxLen;
  for (let i = 0; i < maxLen; i++) {
    if (s[i] != t[i]) {
      commonNum = i;
      break;
    }
  }

  let sDiff=sLen-commonNum;
  let tDiff=tLen-commonNum;

  let minValue=sDiff+tDiff;
  
  let maxValue=minValue+commonNum*2;

  if (k<minValue){
    return 'False';
  }
  if (k>=maxValue){
    return 'True';
  }
  if ((k-minValue)%2==0){
    return 'True';
  }
  return 'False';


}


//let res = appendAndDelete('hackerhappy', 'hackerrank', 9);
//let res = appendAndDelete('aba', 'aba', 7);
//let res = appendAndDelete('ashley', 'ash', 2);
//let res = appendAndDelete('trhappy', 'trrank', 8);
let res = appendAndDelete('asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv', 'asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv', 8);

console.log(res);
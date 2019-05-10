function angryProfessor(k, a) {
  let res=0;
  let l=a.length;
  for(let i=0;i<a.length;i++){
    let val=a[i];
    if(a[i]<=0){
      res++;
    }
    if (res>=k){
      return 'NO';
    }
  }
  return 'YES';
}


let res1=angryProfessor(4,[-93,-86,49,-62,-90,-63,40,72,11,67]);
console.log(res1,'NO');
let res2=angryProfessor(10,[23,-35,-2,58,-67,-56,-42,-73,-19,37]);
console.log(res2,'YES');
let res3=angryProfessor(9,[13,91,56,-62,96,-5,-84,-36,-46,-13]);
console.log(res3,'YES');
let res4=angryProfessor(8,[45,67,64,-50,-8,78,84,-51,99,60]);
console.log(res4,'YES');
let res5=angryProfessor(7,[26,94,-95,34,67,-97,17,52,1,86]);
console.log(res5,'YES');
let res6=angryProfessor(2,[19,29,-17,-71,-75,-27,-56,-53,65,83]);
console.log(res6,'NO');
let res7=angryProfessor(10,[-32,-3,-70,8,-40,-96,-18,-46,-21,-79]);
console.log(res7,'YES');
let res8=angryProfessor(9,[-50,0,64,14,-56,-91,-65,-36,51,-28]);
console.log(res8,'YES');
let res9=angryProfessor(6,[-58,-29,-35,-18,43,-28,-76,43,-13,6]);
console.log(res9,'NO');
let res10=angryProfessor(1,[88,-17,-96,43,83,99,25,90,-39,86]);
console.log(res10,'NO');



//console.log(res);
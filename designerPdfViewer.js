function designerPdfViewer(h, word) {
   let m=word.length;
   console.log(m);
   console.log(h)
   let max=0;
   for (let c of word){
      console.log(c);
      let num=c.charCodeAt(0)-97;
      console.log(num);
      let cH = h[num];
      console.log(cH);
      console.log('----');
      if (cH>max){
        max=cH;
      }
      
   }
   return max*m;

}
let res = designerPdfViewer([ 1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ],'abc');
//9
console.log(res);
// arr=[45,4,9,16,25]
// novi=[]
// function a(a){
// if(a>20){
//  novi.push(a)
// }
// }
// arr.forEach(a)
// console.log(novi);
s="DaNas je neSto lepo"
novi=[]
function a(a){
 for(i=0;i<a.length;i++){
  if(i%2==0 && a[i]!==" "){
  novi.push(a[i].toLowerCase())
 }
 else if(a[i]!==" "){
  novi.push(a[i].toUpperCase());
 }
 }
 console.log(novi.join(""));
}
a(s)
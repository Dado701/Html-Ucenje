a=[3,6,0,23,0,9,44,14,1,1,0,83,22,5,0,1]
for(i=0;i<a.length;i++){
 if(a[i]===0){
  a.splice(i,1)
  a.push(0)
 }
 if(a[i]===1){
  a.splice(i,1)
  a.unshift(1)
 }
}
console.log(a)
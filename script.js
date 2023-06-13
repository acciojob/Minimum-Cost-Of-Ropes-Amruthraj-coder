function calculateMinCost() {
  const str = document.getElementById("rope-lengths").value;
	const arr = str.split(",").map(Number);
	let sum=0;
 
while(arr.length>1){
arr.sort(function(a,b){return a-b} )
console.log(arr)
sum+=arr[0]+arr[1];
let n=arr[0]+arr[1];
arr.splice(0,2,n);
}
   document.getElementById("result").innerText =sum;
}  

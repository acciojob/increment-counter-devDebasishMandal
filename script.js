
let x=document.getElementById("counter");
let btn=document.getElementById("incrementBtn");
let count=0;
btn.addEventListener("click",()=>{
	count++;
	x.innerHTML=count;
})
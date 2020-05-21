/*

Antiminiuc Ion

*/

function func1(){   //func 1 for generate list and erase body 
	let counter=0;   //counter 
let max=15;         // level counting 
let boll=0;        // status color marker 
console.log('e')
let intervaler=setInterval(generateList,1000); // create interval for list generator 
	function generateList(){  //function generator list





(counter<=max)? (()=>{    //condition ? argument 1: argument 2

	listings.innerHTML+=`
	<li style="background:${(boll)? '#fe4164':
	'rgba(0,0,0,0)'}">${counter} LISTA</i>` ; // string rendering list 
counter++;   //counter increment 
boll=(boll)?0:1;   //if true add false if false add true ;





})():(()=>{

clearInterval(intervaler); // clear  Interval 
setTimeout(()=>{
document.body.innerHTML=`<center>  //replace data and paste END
<div><h1> END</h1> </div>







</center>`;











},20000)









})()
}








}









 


window.onload=()=>{   // event browser loaded page 
document.bgColor="violet";   //set violet color
setTimeout(()=>{     //create timer 
document.bgColor="green";   //set green color

setTimeout(func1,2000);  //create timer and call func 1




},1000)




}
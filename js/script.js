// js
// ex1
function showDate(){

  document.getElementById('sd').innerHTML=Date();
}
// ex2
function showDate2(){
   document.getElementById('sdate').innerHTML=Date()
}

// ex3
function showT(){
   document.getElementById('stext').innerHTML="Assalamu Walaikum"; 
}
// ex4 
function bulbOn(){
   document.getElementById('bulb').src="image/on.gif";
} 
function bulbOff(){
   document.getElementById('bulb').src="image/off.gif";
}
// ex5
function changeStyle(){
   document.getElementById('cstyle').style.color="green"; 
}
// ex6
function showText(){
   document.getElementById('text').innerHTML="extraordinary";
} 
function hideText(){
   document.getElementById('text').innerHTML="";
}
// ex7
function dWrite(){
   $num1 = 5;
   $num2 = 5;
   document.write( $num1+$num2 );
   
}
// ex8
function walert(){
   $num1 = 5;
   $num2 = 10;
   window.alert( $num1+$num2 );
   
}
function clog(){
   $num1 = 5;
   $num2 = 20;
   console.log( $num1+$num2 );
}
function wprint(){
   window.print();
}

function varoutput(){
   let
   firstName="Full Stack";
   lastName="Web Development";
   years=16;
   document.getElementById('vout').innerHTML
   ="This is "+" "+firstName+" "+lastName+" ."+"It"+" "+"started"+" "+years+" "+"years"+" "+"ago."
}


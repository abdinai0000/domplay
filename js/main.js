   /* function highlight(el){
   // el.style.backgroundColor = 'blue';
   if( el.style.backgroundColor == 'white'){ //white turn to yellow
    el.style.backgroundColor = 'yellow';
   } else {
    el.style.backgroundColor = 'white';
   }
 }
 */
 //let actors = document.querySelectorAll(".godmother");
 function myAlert(){
    alert("I'm clicked!");
 }

 let spans = document.querySelectorAll("#play span");

function highlightActor(actor){
// alert(actor);
let spans = document.querySelectorAll("#play span");

for(const mySpan of spans){  
    if(actor == mySpan.dataset.actor ){ //white turn to yellow
     mySpan.style.backgroundColor = 'yellow';
    } else {
     mySpan.style.backgroundColor = 'white';
 
    }
  }
  
}

for(const mySpan of spans){
    // mySpan.addEventListener("click", myAlert);
     //alert(mySpan.dataset.actor);
 
     mySpan.addEventListener("click", function(ev){
         highlightActor(mySpan.dataset.actor)
     });
  }
 

/*for (let i = 0; i < actors.length; i++) {
    actors[i].style.backgroundColor = "orange"; }
*/


/*
 //https://tinyurl.com/dynamic-html-checker
 document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);
      
 document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 
  
  //set current year in span with id of this-year
  let d = new Date(); let thisYear = d.getFullYear();
  document.getElementById("this-year").innerHTML = thisYear;
 
 //manages mobile nav 
 function myFunction() {
     var x = document.getElementById("myTopnav");
     if (x.className === "topnav") {
         x.className += " responsive";
     } else {
         x.className = "topnav";
     }
 }   
 //let actors = document.querySelectorAll(".godmother");
 
//console.log(actors);
 
 */
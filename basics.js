const dispBtn=document.getElementById("dispBtn");
function dateDisplay(){
  document.getElementById("date").innerHTML=Date();
}
dispBtn.addEventlistener("click",dateDisplay);
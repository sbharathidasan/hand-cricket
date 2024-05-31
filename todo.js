var lst=document.getElementById("listOfTasks");
var input=document.getElementById("input");
function create(){
  var newele=document.createElement("li");
  if(input.value!=""){
  newele.innerHTML=input.value+"<button onclick='del(event)'>done</button>"  
  lst.append(newele);
  input.value='';}
  else{
    alert("list should not be empty!")
  }
}
function del(eve){
  eve.target.parentNode.remove();
}
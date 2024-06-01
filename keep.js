var notes=document.getElementById("writeNotes");
var container=document.getElementById("container");
function create(){
  var divElement=document.createElement('div');
  divElement.innerHTML="<p>"+notes.value+"<button onclick='del(event)'>delete</button></p>";
  container.append(divElement);
  notes.value="";
}
function del(eve){
  eve.target.parentNode.parentNode.remove();
}


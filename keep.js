var notes=document.getElementById("writeNotes");
var container=document.getElementById("container");
var searcharr=["WRITE YOUR NOTES"];
var searchElement=document.getElementById("search");
function create(){
  if(notes.value!==''){
      var divElement=document.createElement('div');
      divElement.innerHTML="<p>"+notes.value+"<button onclick='del(event)'>delete</button></p>";
      var temp=(notes.value).toUpperCase();
      searcharr.push(temp);
      container.append(divElement);
      notes.value="";
    }
    else{
      alert("notes shouldnotbe empty")
    }
}
function search(){
  let j=0;
  for(var i=0;i<searcharr.length;i++){
    if ((searchElement.value).toUpperCase()===searcharr[i]){
      alert("available!");
      j=j+1;
      break;
    }
  }
  if (j===0){
    alert("not available!")
  }
}
function del(eve){
  eve.target.parentNode.parentNode.remove();
}


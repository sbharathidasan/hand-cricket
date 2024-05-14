const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("name");

function getInputVal() {
  document.getElementById('disp').innerHTML=inputEl.value;
}

inputBtn.addEventListener("click", getInputVal);

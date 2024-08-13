let addToDoBtn = document.getElementById("AddToDo");
let inputField = document.getElementById("Input");
let ToDoCont = document.getElementById("toDoCont");

console.log(addToDoBtn);

addToDoBtn.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerHTML = inputField.value;
  ToDoCont.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", function () {
  paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
  ToDoCont.removeChild(paragraph);
  });

});

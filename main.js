



const jsConfetti = new JSConfetti()

let watermelon = document.getElementById("watermelon");
let lemon = document.getElementById("lemon");
let peach = document.getElementById("peach");
let grape = document.getElementById("grape");
let strawberry = document.getElementById("strawberry");
let zone6 = document.getElementById("zone6");
let zone7 = document.getElementById("zone7");
let zone8 = document.getElementById("zone8");
let zone9 = document.getElementById("zone9");
let zone10 = document.getElementById("zone10");

let wtrmln = document.getElementById("watermelon-item");
let lmn = document.getElementById("lemon-item");
let pch = document.getElementById("peach-item");
let grp = document.getElementById("grape-item");
let strwb = document.getElementById("strawberry-item");
let isCorrect;

watermelon.ondragover = allowDrop;
lemon.ondragover = allowDrop;
peach.ondragover = allowDrop;
grape.ondragover = allowDrop;
strawberry.ondragover = allowDrop;
zone6.ondragover = allowDrop;
zone7.ondragover = allowDrop;
zone8.ondragover = allowDrop;
zone9.ondragover = allowDrop;
zone10.ondragover = allowDrop;


function allowDrop(event) {
  event.preventDefault();
}



wtrmln.ondragstart = drag;
lmn.ondragstart = drag;
pch.ondragstart = drag;
grp.ondragstart = drag;
strwb.ondragstart = drag;

function drag(event) {
  event.dataTransfer.setData("id", event.target.id);
}

watermelon.ondrop = drop;
lemon.ondrop = drop;
peach.ondrop = drop;
grape.ondrop = drop;
strawberry.ondrop = drop;
zone6.ondrop = drop;
zone7.ondrop = drop;
zone8.ondrop = drop;
zone9.ondrop = drop;
zone10.ondrop = drop;

function drop(event) {
  let itemId = event.dataTransfer.getData("id");
  event.target.append(document.getElementById(itemId));
  if (itemId.includes(event.target.getAttribute("id"))) {
    event.target.classList.add("bg-green-500");
    jsConfetti.addConfetti()
  } else {
    event.target.classList.add("bg-red-500");
    jsConfetti.addConfetti({
   emojis: ['💩'],
})
  }
}

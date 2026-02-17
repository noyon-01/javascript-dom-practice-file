function bg_purple() {
  document.body.style.backgroundColor = "purple";
}

function bg_blue() {
  document.body.style.backgroundColor = "blue";
}

function bg_skey() {
  document.body.style.backgroundColor = "skyblue";
}

function bg_green() {
  document.body.style.backgroundColor = "green";
}

function bg_yellow() {
  document.body.style.backgroundColor = "yellow";
}

const makeOrangeBtn = document.getElementById("make_orange");
makeOrangeBtn.onclick = function makeOrange() {
  document.body.style.backgroundColor = "orange";
};

const makeRedBtn = document.getElementById("make_red");
makeRedBtn.onclick = makeRed;
function makeRed() {
  document.body.style.backgroundColor = "red";
}

const makeTomato = document.getElementById("make_tomato");
makeTomato.addEventListener("click", function makeTomato() {
  document.body.style.backgroundColor = "tomato";
});

const makeAqua = document.getElementById("make_aqua");
makeAqua.addEventListener("click", function () {
  document.body.style.backgroundColor = "aqua";
});

const paragraphText = document.getElementById("paragraph_text");
const changeTextBtn = document.getElementById("text_change_btn");
changeTextBtn.addEventListener("click", function () {
  paragraphText.innerText = "My Name is Shahadat Hosen Noyon";
});

const paragraph_text1 = document.getElementById("paragraph_text1");

const name_input = document.getElementById("name_input");
console.log();

const name_add_btn = document.getElementById("name_add_btn");

name_add_btn.addEventListener("click", function () {
  const input_value = name_input.value;

  const newParagraph = document.createElement("p");
  newParagraph.innerText = input_value;

  paragraph_text1.appendChild(newParagraph);
  name_input.value = "";
});

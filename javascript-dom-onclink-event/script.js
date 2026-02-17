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

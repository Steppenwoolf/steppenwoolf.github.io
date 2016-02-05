var button = [];
for (var i = 1; i < 10; i++) button[i] = document.getElementById('sq' + i);

var ctx = [];
for (var i = 1; i < 10; i++) ctx[i] = button[i].getContext('2d');

var dis = [];
for (var i = 1; i < 10; i++) dis[i] = false;

var result = false;
var content = [];
var str = [];
// var h1 = content[1];

function pTurne(x) {
  if (!dis[x])
    drawX(x)
  wl();
  setTimeout(cTurn, 500);
}

function wl() {
  var h1 = content[1], h2 = content[2], h3 = content[3];
  var h4 = content[4], h5 = content[5], h6 = content[6];
  var h7 = content[7], h8 = content[8], h9 = content[9];
  str[1] = h1 + h2 + h3;
  str[2] = h4 + h5 + h6;
  str[3] = h7 + h8 + h9;
  str[4] = h1 + h4 + h7;
  str[5] = h2 + h5 + h8;
  str[6] = h3 + h6 + h9;
  str[7] = h1 + h5 + h9;
  str[8] = h3 + h5 + h7;

  setTimeout(winner, 500);
}

function winner() {
  for (var i = 1; i < 9; i++) {
    if (str[i] === "xxx")
      alert("You WIN!");

    if (str[i] === "ooo")
      alert("You Lose.");
  }
}

function cTurn() {
  if (!dis[3])
    drawO(3);
}

function drawO(x) {
  dis[x] = true;
  button[x].style.opacity = .6;
  content[x] = 'o';
  button[x].style.transform = "rotateX(180deg)";
  setTimeout(function() {
    ctx[x].beginPath();
    ctx[x].lineWidth = 10;
    ctx[x].arc(50, 50, 34, 0, Math.PI * 2, false);
    ctx[x].stroke();
    ctx[x].closePath();
  }, 300);
}

function drawX(x) {
  dis[x] = true;
  button[x].style.opacity = .6;
  content[x] = 'x';
  button[x].style.transform = "rotateY(180deg)";
  setTimeout(function() {
    ctx[x].lineWidth = 10;
    ctx[x].beginPath();
    ctx[x].moveTo(15, 15);
    ctx[x].lineTo(85, 85);
    ctx[x].moveTo(85, 15);
    ctx[x].lineTo(15, 85);
    ctx[x].stroke();
    ctx[x].closePath();

  }, 300);
}
// function aaa(argument) {
//   if (b1+b2+b3===xxx) {
//     alert("You WIN!")
//   }else {
//     next argument
//   }
//}

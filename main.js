function DG(str){
    return document.getElementById(str);
}
function init(){
  // moveUpEvent();
  randomNumber();
  gameMapInputer();
}

function gameMapInputer(){
  var width = [];
  var map = [];
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200){
          var textByLine = this.responseText.split("\n");
          for(var i = 0; i<textByLine.length; i++){
              width = Array.from(textByLine[i]);
              map[i] = width;
              for(var j = 0; j<width.length;j++){
                  map[i][j] = parseInt(map[i][j])
              }
          }
          gameBase(map);
          console.log(map[1].length);
      }
  }
  xhttp.open("GET", "input.txt", true);
  xhttp.send();
}


var counter = 0;

function moveUpEvent(){
  if (counter < parseInt(random)){
    var width = [];
    var map = [];
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200){
        var textByLine = this.responseText.split("\n");
        for(var i = 0; i<textByLine.length; i++){
          width = Array.from(textByLine[i]);
          map[i] = width;
          for(var j = 0; j<width.length;j++){
            map[i][j] = parseInt(map[i][j])
          }
        }
        var player1 = new Player(map);
        player1.moveup();
      }
    }
    xhttp.open("GET", "input.txt", true);
    xhttp.send();
    counter+=1;
  }
  else {
    DG("upBtn").disabled = true;
    alert("تعداد حرکات به پایان رسید روی تاس کلیک کنید!")
  }
}

function moveRightEvent(){
if (counter < parseInt(random)){
  var width = [];
  var map = [];
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
      var textByLine = this.responseText.split("\n");
      for(var i = 0; i<textByLine.length; i++){
        width = Array.from(textByLine[i]);
        map[i] = width;
        for(var j = 0; j<width.length;j++){
          map[i][j] = parseInt(map[i][j])
        }
      }
      var player1 = new Player(map);
      player1.moveright();
    }
  }
  xhttp.open("GET", "input.txt", true);
  xhttp.send();
  counter+=1;
}
else {
  DG("rightBtn").disabled = true;
  alert("تعداد حرکات به پایان رسید روی تاس کلیک کنید!")
}
}

function moveLeftEvent(){
  if (counter < parseInt(random)){
    var width = [];
    var map = [];
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200){
        var textByLine = this.responseText.split("\n");
        for(var i = 0; i<textByLine.length; i++){
          width = Array.from(textByLine[i]);
          map[i] = width;
          for(var j = 0; j<width.length;j++){
            map[i][j] = parseInt(map[i][j])
          }
        }
        var player1 = new Player(map);
        player1.moveleft();
        // moveleft(map);

      }
    }
    xhttp.open("GET", "input.txt", true);
    xhttp.send();
    counter+=1;
  }
  else {
    DG("leftBtn").disabled = true;
    alert("تعداد حرکات به پایان رسید روی تاس کلیک کنید!")
  }
}

function moveDownEvent(){
  if (counter < parseInt(random)){
    var width = [];
    var map = [];
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200){
        var textByLine = this.responseText.split("\n");
        for(var i = 0; i<textByLine.length; i++){
          width = Array.from(textByLine[i]);
          map[i] = width;
          for(var j = 0; j<width.length;j++){
            map[i][j] = parseInt(map[i][j])
          }
        }
        var player1 = new Player(map);
        player1.movedown();
        // movedown(map);

      }
    }
    xhttp.open("GET", "input.txt", true);
    xhttp.send();
    counter+=1;
  }
  else {
    DG("downBtn").disabled = true;
    alert("تعداد حرکات به پایان رسید روی تاس کلیک کنید!")
  }
}

function tasRandom(){
  DG("upBtn").disabled = false;
  DG("leftBtn").disabled = false;
  DG("rightBtn").disabled = false;
  DG("downBtn").disabled = false;
  counter = 0;
  var min = 1;
  var max = 7;
  random = Math.random() * (+max - +min) + +min;
  alert(parseInt(random)+"آوردی :D")
}


var playerPosition = [];
var p = 0;
var d = 0;
var playerOne;
playerOne = document.createElement("canvas");
playerOne.style.display = "inline-block";
playerOne.style.backgroundImage = "url('player.svg')";
playerOne.style.width = '28px';
playerOne.style.height = '28px';
playerOne.style.marginTop = '0';
playerOne.style.border=0;
// i.style.marginBottom = '3.5px';

var random;
function randomNumber(){
  DG("upBtn").disabled = false;
  DG("leftBtn").disabled = false;
  DG("rightBtn").disabled = false;
  DG("downBtn").disabled = false;
  counter = 0;
  var min = 1;
  var max = 7;
  random = Math.random() * (+max - +min) + +min;
  console.log(parseInt(random));
}

function startGame(){
  if(parseInt(random) == 6){
      alert(parseInt(random)+"آوردی :D")
      startGameNow();
      tasRandom();
      alert("خب برای جایزه هم"+parseInt(random)+"آوردی :)")
  }
  else {
    alert(parseInt(random)+"آوردی :(")
    alert("متاسفانه برای شروع بازی ۶ نیاوردی");
    randomNumber();
  }
}




function startGameNow(){
  DG("pr"+p+d).appendChild(playerOne);
}

function resetGame(){
  location.reload(true);
}

class Player {
  constructor(map) {
    this.map=map;
  }
  moveup(){
    p-=1;
    if(p<0||d<0){
      alert("کجا داری میری؟؟!");
      p+=1;
      console.log(this.map[p][d]);
    }
    else if(this.map[1].length-1 == d){
      p+=1;
      alert("آفرین برنده شدی");
    }
    else if (this.map[p][d]==1) {
      console.log(p+","+d);
      alert("به دیوار رسیدی");
      p+=1;
    }
    else{
      console.log(p+","+d);
      DG("pr"+p+d).appendChild(playerOne);
    }
  }
  moveright(){
    d+=1;
    if(p<0||d<0){
      alert("کجا داری میری؟؟!");
      d-=1;
      console.log(p+","+d);
      console.log(this.map[p][d]);
    }
    else if(this.map[1].length-1 == d){
      d-=1;
      alert("آفرین برنده شدی");
    }
    else if (this.map[p][d]==1) {
      console.log(p+","+d);
      alert("به دیوار رسیدی");
      d-=1;
    }
    else{
      console.log(p+","+d);
      DG("pr"+p+d).appendChild(playerOne);
    }
  }
  moveleft(){
    d-=1;
    if(p<0||d<0){
      alert("کجا داری میری؟؟!");
      d+=1;
      console.log(p+","+d);
      console.log(this.map[p][d]);
    }
    else if(this.map[1].length-1 == d){
      d+=1;
      alert("آفرین برنده شدی");
    }
    else if (this.map[p][d]==1) {
      alert("به دیوار رسیدی");
      d+=1;
    }
    else{
      console.log(p+","+d);
      DG("pr"+p+d).appendChild(playerOne);
    }
  }
  movedown(){
    p+=1;
    console.log(p+","+d);
    if(p<0||d<0){
      alert("کجا داری میری؟؟!");
      p-=1;
      console.log(this.map[p][d]);
    }
    else if(this.map[1].length-2 == d){
      p-=1;
      alert("آفرین برنده شدی");
    }
    else if (this.map[p][d]==1) {
      alert("به دیوار رسیدی");
      p-=1;
    }
    else{
      console.log(p+","+d);
      DG("pr"+p+d).appendChild(playerOne);
    }
  }
}

function gameBase(map){
    for(var i = 0; i<map.length; i++){
        for(var j = 0; j<map[i].length; j++){
            if (map[i][j]==1){
                var pd = document.createElement("div");
                pd.style.display = "inline-block";
                pd.style.width = '30px';
                pd.style.height = '30px';
                pd.style.backgroundColor = 'black';
                pd.style.border=0;
                pd.style.padding=0;
                pd.style.marginTop = '-4px';
                DG("app").appendChild(pd);
            }
            else if(map[i][j]==0){
                var pr = document.createElement("div");
                pr.style.display = "inline-block";
                pr.style.width = '28px';
                pr.style.height = '28px';
                pr.style.border="1px solid #eee";
                pr.style.padding=0;
                pr.style.marginTop = '-4px';
                pr.style.textAlign = "center";
                pr.id = 'pr'+i+j;
                DG("app").appendChild(pr);
            }
        }
        var br = document.createElement('BR');
        DG('app').appendChild(br);
    }
}

window.onload = init;

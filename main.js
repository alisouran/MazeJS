function DG(str){
    return document.getElementById(str);
}
function init(){
  alert("خب به بازی هزارتو خوش اومدی، برای شروع بازی اول تاس شروع بازی رو بریز و بعد برای هر حرکت یه تاس بریز و شانس خودت رو واس خارج شدن از بازی امتحان کن به این هم دقت کن که تمامی کلیک هات روی دکمه ها به منزله یک حرکت محسوب میشه پس حواست باشی که زیاد کلیک نکنی و برخوردت به دیوار هم حتی جزو حرکت هات محسوب میشه")
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

var playerCounter = 2;

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
        if(playerCounter == 1 && parseInt(startRandom1) == 6){
          var player1 = new Player(map);
          player1.moveup();
          if (counter == parseInt(random)){
            playerCounter+=1;
          }
        }
        else if(playerCounter == 2 && parseInt(startRandom2) == 6){
        var player2 = new Player2(map);
        player2.moveup();
        if (counter == parseInt(random)){
          playerCounter-=1;
        }
        }
      }
    }
    xhttp.open("GET", "input.txt", true);
    xhttp.send();
    counter+=1;
  }
  else {
    DG("upBtn").disabled = true;
    alert("تعداد حرکات به پایان رسید تاس بریز!")
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
      if(playerCounter == 1 && parseInt(startRandom1) == 6){
        var player1 = new Player(map);
        player1.moveright();
        if (counter == parseInt(random)){
          playerCounter+=1;
        }
      }
      else if(playerCounter == 2 && parseInt(startRandom2) == 6){
      var player2 = new Player2(map);
      player2.moveright();
      if (counter == parseInt(random)){
        playerCounter-=1;
      }
    }
    }
  }
  xhttp.open("GET", "input.txt", true);
  xhttp.send();
  counter+=1;
}
else {
  DG("rightBtn").disabled = true;
  alert("تعداد حرکات به پایان رسید تاس بریز!")
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
        if(playerCounter == 1 && parseInt(startRandom1) == 6){
          var player1 = new Player(map);
          player1.moveleft();
          if (counter == parseInt(random)){
            playerCounter+=1;
          }
        }
        else if(playerCounter == 2 && parseInt(startRandom2) == 6){
        var player2 = new Player2(map);
        player2.moveleft();
        if (counter == parseInt(random)){
          playerCounter-=1;
        }
        }

      }
    }
    xhttp.open("GET", "input.txt", true);
    xhttp.send();
    counter+=1;
  }
  else {
    DG("leftBtn").disabled = true;
    alert("تعداد حرکات به پایان رسید تاس بریز!")
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
        if(playerCounter == 1 && parseInt(startRandom1) == 6){
          var player1 = new Player(map);
          player1.movedown();
          if (counter == parseInt(random)){
            playerCounter+=1;
          }
        }
        else if(playerCounter == 2 && parseInt(startRandom2) == 6){
        var player2 = new Player2(map);
        player2.movedown();
        if (counter == parseInt(random)){
          playerCounter-=1;
        }
        }
      }
    }
    xhttp.open("GET", "input.txt", true);
    xhttp.send();
    counter+=1;
  }
  else {
    DG("downBtn").disabled = true;
    alert("تعداد حرکات به پایان رسید تاس بریز!")
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

var q = 0;
var s = 0;
var playerTwo;
playerTwo = document.createElement("canvas");
playerTwo.style.display = "inline-block";
playerTwo.style.backgroundImage = "url('player2.svg')";
playerTwo.style.width = '28px';
playerTwo.style.height = '28px';
playerTwo.style.marginTop = '0';
playerTwo.style.border=0;
// i.style.marginBottom = '3.5px';

var random;
var startRandom1;
var startRandom2;
var z = false;
var z2 = false;
function randomNumber(){
  counter = 0;
  if(playerCounter == 1 && z == false){
    alert("بازیکن شماره 1 روی تاس شروع بازی کلیک کن")
    playerCounter+=1;
    console.log("Player Counter = "+playerCounter)
  }
  else if(playerCounter == 2 && z2 == false){
    playerCounter-=1;
    alert("بازیکن شماره 2 روی تاس شروع بازی کلیک کن")
    console.log("Player Counter = "+playerCounter)
  }
  else if (z == true){
    alert("پلیر 1 تاس بنداز")
  }
  else if (z2 == true){
    alert("پلیر 2 تاس بنداز")
  }
}

function startGame(){
  var min = 1;
  var max = 7;
  if(playerCounter == 1){
    startRandom1 = Math.random() * (+max - +min) + +min;
    console.log(parseInt(startRandom1));
    if(parseInt(startRandom1) == 6){
      DG("upBtn").disabled = false;
      DG("leftBtn").disabled = false;
      DG("rightBtn").disabled = false;
      DG("downBtn").disabled = false;
        alert(parseInt(startRandom1)+"آوردی :D")
        startGameNow();
        tasRandom();
        alert("البته برای جایزه‌ی ۶ قبلی"+parseInt(random)+"آوردی :)")
        z2 = true;
    }
    else {
      alert(parseInt(startRandom1)+"آوردی :(")
      alert("متاسفانه برای شروع بازی ۶ نیاوردی");
      randomNumber();
      console.log("Counter = "+playerCounter)
    }
  }
  else if(playerCounter == 2){
    startRandom2 = Math.random() * (+max - +min) + +min;
    console.log(parseInt(startRandom2));
    if(parseInt(startRandom2) == 6){
      DG("upBtn").disabled = false;
      DG("leftBtn").disabled = false;
      DG("rightBtn").disabled = false;
      DG("downBtn").disabled = false;
        alert(parseInt(startRandom2)+"آوردی :D")
        startGameNow();
        tasRandom();
        alert("البته برای جایزه‌ی ۶ قبلی"+parseInt(random)+"آوردی :)")
        z = true;
    }
    else {
      alert(parseInt(startRandom2)+"آوردی :(")
      alert("متاسفانه برای شروع بازی ۶ نیاوردی");
      randomNumber();
    }
  }
}




function startGameNow(){
  if(playerCounter == 1){
    DG("pr"+p+d).appendChild(playerOne);
  }
  else if(playerCounter == 2){
    DG("pr"+q+s).appendChild(playerTwo);
  }
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
    else if(q==p && d==s){
      var deleteElement = playerTwo;
      deleteElement.parentNode.removeChild(deleteElement);
      q=0;
      s=0;
      console.log(p+","+d);
      DG("pr"+p+d).appendChild(playerOne);
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
    else if(q==p && d==s){
      var deleteElement = playerTwo;
      deleteElement.parentNode.removeChild(deleteElement);
      q=0;
      s=0;
      console.log(p+","+d);
      DG("pr"+p+d).appendChild(playerOne);
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
    else if(q==p && d==s){
      var deleteElement = playerTwo;
      deleteElement.parentNode.removeChild(deleteElement);
      q=0;
      s=0;
      console.log(p+","+d);
      DG("pr"+p+d).appendChild(playerOne);
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
    else if(q==p && d==s){
      var deleteElement = playerTwo;
      deleteElement.parentNode.removeChild(deleteElement);
      q=0;
      s=0;
      console.log(p+","+d);
      DG("pr"+p+d).appendChild(playerOne);
    }
    else{
      console.log(p+","+d);
      DG("pr"+p+d).appendChild(playerOne);
    }
  }
}



class Player2 {
  constructor(map) {
    this.map=map;
  }
  moveup(){
    q-=1;
    if(q<0||s<0){
      alert("کجا داری میری؟؟!");
      q+=1;
      console.log(this.map[q][s]);
    }
    else if(this.map[1].length-1 == s){
      q+=1;
      alert("آفرین برنده شدی");
    }
    else if (this.map[q][s]==1) {
      console.log(q+","+s);
      alert("به دیوار رسیدی");
      q+=1;
    }
    else if(q==p && d==s){
      var deleteElement = playerOne;
      deleteElement.parentNode.removeChild(deleteElement);
      p=0;
      d=0;
      console.log(q+","+s);
      DG("pr"+q+s).appendChild(playerTwo);
    }
    else{
      console.log(q+","+s);
      DG("pr"+q+s).appendChild(playerTwo);
    }
  }
  moveright(){
    s+=1;
    if(q<0||s<0){
      alert("کجا داری میری؟؟!");
      s-=1;
      console.log(q+","+s);
      console.log(this.map[q][s]);
    }
    else if(this.map[1].length-1 == s){
      s-=1;
      alert("آفرین برنده شدی");
    }
    else if (this.map[q][s]==1) {
      console.log(q+","+s);
      alert("به دیوار رسیدی");
      s-=1;
    }
    else if(q==p && d==s){
      var deleteElement = playerOne;
      deleteElement.parentNode.removeChild(deleteElement);
      p=0;
      d=0;
      console.log(q+","+s);
      DG("pr"+q+s).appendChild(playerTwo);
    }
    else{
      console.log(q+","+s);
      DG("pr"+q+s).appendChild(playerTwo);
    }
  }
  moveleft(){
    s-=1;
    if(q<0||s<0){
      alert("کجا داری میری؟؟!");
      s+=1;
      console.log(q+","+s);
      console.log(this.map[q][s]);
    }
    else if(this.map[1].length-1 == s){
      s+=1;
      alert("آفرین برنده شدی");
    }
    else if (this.map[q][s]==1) {
      alert("به دیوار رسیدی");
      s+=1;
    }
    else if(q==p && d==s){
      var deleteElement = playerOne;
      deleteElement.parentNode.removeChild(deleteElement);
      p=0;
      d=0;
      console.log(q+","+s);
      DG("pr"+q+s).appendChild(playerTwo);
    }
    else{
      console.log(q+","+s);
      DG("pr"+q+s).appendChild(playerTwo);
    }
  }
  movedown(){
    q+=1;
    console.log(q+","+s);
    if(q<0||s<0){
      alert("کجا داری میری؟؟!");
      q-=1;
      console.log(this.map[q][s]);
    }
    else if(this.map[1].length-2 == s){
      q-=1;
      alert("آفرین برنده شدی");
    }
    else if (this.map[q][s]==1) {
      alert("به دیوار رسیدی");
      q-=1;
    }
    else if(q==p && d==s){
      var deleteElement = playerOne;
      deleteElement.parentNode.removeChild(deleteElement);
      p=0;
      d=0;
      console.log(q+","+s);
      DG("pr"+q+s).appendChild(playerTwo);
    }
    else{
      console.log(q+","+s);
      DG("pr"+q+s).appendChild(playerTwo);
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

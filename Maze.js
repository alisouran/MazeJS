
var myGamePiece;

function startGame(){
    myGameArea.start();
    myGamePiece = new component(15, 15, 'dodgerblue', 10, 120);
}
var myGameArea = {

    canvas : document.createElement('canvas'),
    start : function()
    {
        this.canvas.width = 600;
        this.canvas.height = 600;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}

window.onload = startGame;
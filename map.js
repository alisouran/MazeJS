var width = [];
var map =[];
    var fs = require("fs");
    var text = fs.readFileSync("input.txt", 'utf8');
    var textByLine = text.split("\n");
    for(var i = 0; i<textByLine.length; i++){
            width = Array.from(textByLine[i]);
            map[i] = width;
            for(var j = 0; j<width.length;j++){
                map[i][j] = parseInt(map[i][j])
            }
        }
module.exports = map;





var map = require('./map');
console.log(map);
gameBase()
function DG(str){
    return document.getElementById(str);
} 
function init(){
    gameBase();
}
function gameBase(){

    for(var i = 0; i<map.length; i++){
        for(var j = 0; j<map[i].length; j++){
            if (map[i][j]==1){
                console.log("divar")
            }
            else if(map[i][j]==0){
                console.log("rah")
            }
        }
    }
}
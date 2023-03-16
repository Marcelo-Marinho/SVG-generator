//draw 01

var text = " ";
var text2 = " ";
var text3 = " ";

var x = 0;
var y = 0;

var x2 = 0;
var y2 = 0;

var x3 = 0;
var y3 = 0;

var x4 = 0;
var y4 = 0;

var x5 = 0;
var y5 = 0;


var escolha = Math.floor(Math.random() * 5);
var escolha2 = Math.floor(Math.random() * 5);
var escolha3 = Math.floor(Math.random() * 5);

for (var i = -250; i < 250; i++){
    x = i;
    x2 = i;
    x3 = i;
    x4 = i;
    x5 = Math.floor(Math.random() * 501);
    y = 0.01 * ((x ** 2) + (50 * x) - 150);
    y4 = - 0.01 * ((x4 ** 2) - (x4 / 50) + 150);
    y2 = 50 * Math.sin(((x2)  + 100) / 10);
    y3 = 50 * Math.cos(((x3)  + 100) / 10);
    y5 = Math.floor(Math.random() * 501);

    if(escolha == 0){
        text = text + (x + 250) + "," + (y + 250) + " ";
    } else if(escolha == 1){
        text = text + (x2 + 250) + "," + (y2 + 250) + " ";
    } else if(escolha == 2){
        text = text + (x3 + 250) + "," + (y3 + 250) + " ";
    } else if(escolha == 3){
        text = text + (x4 + 250) + "," + (y4 + 250) + " ";
    } else if(escolha == 4){
        text = text + (x5) + "," + (y5) + " ";
    }

    if(escolha2 == 0){
        text2 = text2 + (x + 250) + "," + (y + 250) + " ";
    } else if(escolha2 == 1){
        text2 = text2 + (x2 + 250) + "," + (y2 + 250) + " ";
    } else if(escolha2 == 2){
        text2 = text2 + (x3 + 250) + "," + (y3 + 250) + " ";
    } else if(escolha2 == 3){
        text2 = text2 + (x4 + 250) + "," + (y4 + 250) + " ";
    } else if(escolha2 == 4){
        text2 = text2 + (x5) + "," + (y5) + " ";
    }

    if(escolha3 == 0){
        text3 = text3 + (x + 250) + "," + (y + 250) + " ";
    } else if(escolha3 == 1){
        text3 = text3 + (x2 + 250) + "," + (y2 + 250) + " ";
    } else if(escolha3 == 2){
        text3 = text3 + (x3 + 250) + "," + (y3 + 250) + " ";
    } else if(escolha3 == 3){
        text3 = text3 + (x4 + 250) + "," + (y4 + 250) + " ";
    } else if(escolha3 == 4){
        text3 = text3 + (x5) + "," + (y5) + " ";
    }
    
}

document.getElementById('draw01').innerHTML = `<svg width='500' height='500'> <polyline points="` + text + `" style="fill:none;stroke:black;stroke-width:3" /> <polyline points="` + text2 + `" style="fill:none;stroke:red;stroke-width:2" /> <polyline points="` + text3 + `" style="fill:none;stroke:blue;stroke-width:1" /> </svg>`
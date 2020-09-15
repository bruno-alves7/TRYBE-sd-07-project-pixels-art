let pixelBoard = document.getElementById("pixel-board");
let num = 5;
let pixel = [];
let linha = [];
let k = 0;


for(let i = 0; i < num; i += 1){
    linha[i] = document.createElement("div");
    linha[i].className = "linha";
    pixelBoard.appendChild(linha[i]);

    for(let j = 0; j < num ; j += 1) {
        pixel[k] = document.createElement("div");
        pixel[k].className = "pixel";
        linha[i].appendChild(pixel[k]);
        k += 1;
    }
}

let color = document.querySelectorAll(".color");

color[0].addEventListener("click", function(){
    
})

console.log(color);
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
for(let i = 0 ; i <color.length ; i += 1){
    color[i].addEventListener("click", function (event) {
        let selected = document.querySelector(".selected")
        selected.classList.remove("selected");
        event.target.className += " selected"
    })
}

for(let i = 0; i < pixel.length; i += 1){
    pixel[i].addEventListener("click", function (){
        let selected = document.querySelector(".selected");
        pixel[i].style.backgroundColor = window.getComputedStyle(selected).backgroundColor;
        
    })
}

let button = document.getElementById("clear-board");
button.addEventListener("click", function(){
    for(let i = 0; i < pixel.length; i += 1){
        pixel[i].style.backgroundColor = "white"
    }
})


let container = document.querySelector(".container");

let clearGrid = () => {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

let createGrid = (size) => {
    clearGrid();
    let squareSize = 500 / size;
    for (i = 0; i < (size **2); i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
        let randomColor = () => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let color = `rgb(${r}, ${g}, ${b})`;
            square.style.backgroundColor = color;
            
        }
        square.addEventListener('mouseover', randomColor);
    }
}

createGrid(16);

let changeButton = document.querySelector(".changeButton");

changeButton.addEventListener('click', () => {
    input = parseInt(prompt("Ingrese la cantidad de cuadrados (ancho y alto) para crear la cuadrícula"), 10);
    if (input > 0 && input < 100){
        createGrid(input);
    } else{
        alert("Ingrese un número del 1 al 100");  
    }
})
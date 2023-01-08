const backgroundColor = "#121111";
let currentColor = "#8a0101"

let slider = document.getElementById("sizeRange");
let output = document.getElementById("sizeIndicator");
output.innerHTML = `Size: ${slider.value} x ${slider.value}`;

let dimension = slider.value;
let clearbutton = document.querySelector(".clearBtn");
clearbutton.addEventListener("click", reload);

let colorPicker = document.getElementById("colorPicker");
colorPicker.onchange = function () {
    currentColor = colorPicker.value;
    reload();
}

let eraser = document.querySelector(".eraseBtn");
eraser.addEventListener("click", function (){
    currentColor = backgroundColor
})

slider.oninput = function() {
    output.innerHTML = `Size: ${this.value} x ${this.value}`;
}

slider.onchange = function () {
    dimension = slider.value;
    reload();
}

let container = document.querySelector(".sketchContainer");

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


//Function creates the specified amount of divs inside the container
function createSketchPad (dimension) {
    for (let i=0; i<dimension*dimension; i++) {
        let pad = document.createElement("div");
        let width = (1/dimension)*100;
        pad.classList.add("pad");
        pad.style.width = width + "%";
        pad.style.height = width + "%";
        pad.addEventListener('mouseover', changeColor);
        pad.addEventListener('mousedown', changeColor);
        container.appendChild(pad);
    }    
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (e.type === 'mouseover' && mouseDown) {
        e.target.style.backgroundColor = currentColor;
    }
}

function reload () {
    clearGrid()
    createSketchPad(dimension);
}

function clearGrid () {
    let pad = document.getElementsByClassName("pad");
    while (pad.length>0) {
        let singlepad = pad[0];
        container.removeChild(singlepad);
    } 
}

window.onload = createSketchPad(dimension);
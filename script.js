let slider = document.getElementById("sizeRange");
let output = document.getElementById("sizeIndicator");
output.innerHTML = `${slider.value} x ${slider.value}`;


let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


//Function asks for the dimension and creates the amount of divs inside the container based on what's returned in the prompt
function createSketchPad () {
    slider.oninput = function() {
        output.innerHTML = `${this.value} x ${this.value}`;
    }
    let dimension = slider.value;
    let container = document.querySelector(".sketchContainer");
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

createSketchPad();

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (e.type === 'mouseover' && mouseDown) {
        e.target.style.backgroundColor = "white";
    }
}
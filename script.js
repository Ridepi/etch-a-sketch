let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//Function asks for the dimension and creates the amount of divs inside the container based on what's returned in the prompt
function createSketchPad () {
    let dimension = prompt("What size should the sketch pad be?", 16);
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

//The divs change color when the mouse is down and hovers over them
/*document.querySelectorAll(".pad").forEach(pad => {
    pad.addEventListener("mousedown", function () {
        pad.classList.add("sketch")
    })
});*/

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (e.type === 'mouseover' && mouseDown) {
        e.target.style.backgroundColor = "white";
    }
  }

function createSketchPad () {
    let dimension = prompt("What size should the sketch pad be?", 16);
    let container = document.querySelector(".sketchContainer");
    for (let i=0; i<dimension*dimension; i++) {
        let width = (1/dimension)*100;
        console.log(width);
        let pad = document.createElement("div");
        pad.classList.add("pad");
        pad.style.width = width + "%";
        pad.style.height = width + "%";
        container.appendChild(pad);
    }    
}

createSketchPad();
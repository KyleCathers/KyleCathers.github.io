// set etchy size
let etchy = document.querySelector("body");

window.addEventListener('resize', () => {
    let width = window.innerWidth;
    let scaleRatio = width/630;
    etchy.style.setProperty("--scaleRatio", scaleRatio);
});


let buttonState = 'black'; // default black pen
let mouseState = 0; // 0 = up, 1 = down;
let dimension = 16;

const screen = document.querySelector('.screen');
const blackColorButton = document.querySelector('.blackColorButton');
const rainbowColorButton = document.querySelector('.rainbowColorButton');
const eraserButton = document.querySelector('.eraserButton');
const pickColorButton = document.querySelector('.colorSelector');
const clearButton = document.querySelector('.clearButton');
const slider = document.querySelector('.slider');
const sliderValueText = document.querySelector('.sliderValue');

blackColorButton.addEventListener('click', () => {
    buttonState = 'black';
});

rainbowColorButton.addEventListener('click', () => {
    buttonState = 'rainbow';
});

eraserButton.addEventListener('click', () => {
    buttonState = 'white';
});

pickColorButton.addEventListener('input', () => {
    buttonState = pickColorButton.value;
});

function randomHSL() {
    let hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 50%)`;
}

clearButton.addEventListener('click', () => {
    // change each pixel to white
    const screenPixels = document.querySelectorAll('.pixel');

    for(let pixel of screenPixels) {
        pixel.style['background-color'] = 'white';
    }
});

function createScreen(dimension) {
    console.log(`dimensions = ${dimension}`);
    for(let i = 0; i < dimension; i++) {  // create columns
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for(let j = 0; j < dimension; j ++) { // create row
            let pixelDiv = document.createElement('div');
            pixelDiv.classList.add('pixel');
            pixelDiv.style.width = `${500/dimension}px`;
            pixelDiv.style.height = `${500/dimension}px`;
            rowDiv.appendChild(pixelDiv);
        }

        screen.appendChild(rowDiv);
    }

    const screenPixels = document.querySelectorAll('.pixel');
    for(let pixel of screenPixels) {
        pixel.addEventListener('mouseover', pixelColor);
    }
}

function pixelColor() {
    // set color if mousestate is 1 (clicked inside of screen)
    if (mouseState == 1) {
        if (buttonState == 'rainbow') {
            this.style.backgroundColor = randomHSL();
        } else {
            this.style.backgroundColor = buttonState;
        }
    }
}

// if mouse is clicked set mousestate to 1
window.addEventListener('mousedown', () => {
    mouseState = 1;
    console.log('mouseDown');
});

// if mouse is unclicked set mousestate to 0
window.addEventListener('mouseup', () => {
    mouseState = 0;
    console.log('mouseup');
    // todo: remove dragging on screen
})

slider.addEventListener('click', () => {
    console.log(slider.value);
    
    deleteScreen();
    createScreen(slider.value);
    sliderValueText.textContent = `${slider.value} x ${slider.value} pixels`

})

function deleteScreen() {
    const screenPixels = document.querySelectorAll('.pixel');
    screenPixels.forEach((pixel) => pixel.remove());
}


createScreen(dimension);
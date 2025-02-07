const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");
const colorPreview = document.getElementById("colorPreview");
const hexCode = document.getElementById("hexCode");

function updateColor() {
    let r = parseInt(red.value);
    let g = parseInt(green.value);
    let b = parseInt(blue.value);

    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;

    let hex = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
    
    colorPreview.style.backgroundColor = hex;
    hexCode.textContent = hex.toUpperCase();
}

function updateSlider() {
    let r = parseInt(redInput.value) || 0;
    let g = parseInt(greenInput.value) || 0;
    let b = parseInt(blueInput.value) || 0;

    red.value = r;
    green.value = g;
    blue.value = b;
    
    updateColor();
}

red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);

redInput.addEventListener("input", updateSlider);
greenInput.addEventListener("input", updateSlider);
blueInput.addEventListener("input", updateSlider);

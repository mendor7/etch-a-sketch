const grid = document.getElementById('layer1GridID')

let mouseClick = false;
document.body.onmousedown = function() {mouseClick = true;};
document.body.onmouseup = function() {mouseClick = false;};

let colorBar = document.getElementById('layer1ColorBar');
let chosenColor = colorBar.value;
colorBar.onchange = (e) => chosenColor = (e.target.value);

let sizeBar = document.getElementById('layer1SizeBar');
let chosenSize = sizeBar.value;
document.getElementById('titleSize1').innerHTML = chosenSize;
document.getElementById('titleSize2').innerHTML = chosenSize;
sizeBar.oninput = (e) => sizeChange(e.target.value);
sizeBar.onchange = (e) => gridCreate(e.target.value);

function gridCreate(size) {
    if (grid.innerHTML = '') {
        grid.innerHTML = '';
    }
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItemStyle');
        gridItem.addEventListener('mouseover', gridColor);
        gridItem.addEventListener('mousedown', gridColor);
        grid.appendChild(gridItem);
    }
}

function gridColor(event) {
    if (event.type == 'mousedown') {
        event.target.style.background = chosenColor;
    }
    else if (mouseClick == true) {
        event.target.style.background = chosenColor;
    }
}

function sizeChange(size) {
    chosenSize = size;
    document.getElementById('titleSize1').innerHTML = chosenSize;
    document.getElementById('titleSize2').innerHTML = chosenSize;
}

gridCreate(16);
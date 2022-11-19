const container = document.getElementById('container');

function makeGrid(rows, cols) {
    for (i = 0; i<(rows*cols); i++) {
        let cell = document.createElement("div");
        cell.classList.add('grid-item')
        cell.innerHTML = '';
        container.appendChild(cell);
    };
};

makeGrid(16, 16);
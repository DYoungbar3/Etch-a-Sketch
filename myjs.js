const container = document.getElementById('container');

function makeGrid(size) {
    for (i = 0; i<(size*size); i++) {
        let cell = document.createElement("div");
        cell.classList.add('grid-item')
        cell.innerHTML = '';
        container.appendChild(cell);
        container.style.gridTemplateColumns = `repeat(${size}, minmax(0, 1fr))`;
    };
};

function newGrid() {
    container.innerHTML = '';
    let newSize = prompt("Enter desired grid size (<=100)");
    makeGrid(newSize);

    const cells = document.querySelectorAll('.grid-item');
    for (const cell of cells) {
    cell.addEventListener("mouseover", function (){
        cell.style.backgroundColor = "red";
    });
}

}
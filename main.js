const container = document.querySelector('.container')
let rows = 20
let columns = 20
let totalGrids = rows * columns;
container.setAttribute('style', `grid-template-columns: repeat(${columns}, auto); grid-template-rows: repeat(${rows}, auto);`)


function createGridDivs() {
    const gridDiv = document.createElement('div')
    gridDiv.setAttribute('style', 'border-bottom: 1px solid #C7B198;border-right: 1px solid #C7B198; width: 100%; height: 100%;')
    gridDiv.classList.add('all-grid')
    container.appendChild(gridDiv)
}

let i = 0;
while (i < totalGrids) {
    createGridDivs()
    i++
}
const allGrid = document.querySelectorAll('.all-grid')

function addColorToGrid(grids) {
    grids.forEach(grid => {
        grid.addEventListener('mouseover', () => {
            grid.setAttribute('style', 'background: black;')
        })
    });
}

addColorToGrid(allGrid)
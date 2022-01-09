const container = document.querySelector('.container')
const clearButton = document.querySelector('#clear-button')


let rows = 16
let columns = 16
let totalGrids = rows * columns;

container.setAttribute('style', `grid-template-columns: repeat(${columns}, auto); grid-template-rows: repeat(${rows}, auto);`)


function createGridDivs(totalGrids1) {
    // if you need border : border-bottom: 1px solid #C7B198;border-right: 1px solid #C7B198;
    let i = 0;
    while (i < totalGrids1) {
        const gridDiv = document.createElement('div')
        gridDiv.setAttribute('style', 'width: 100%; height: 100%;')
        gridDiv.classList.add('all-grid')
        container.appendChild(gridDiv)
        i++
    }
}

createGridDivs(totalGrids)
const allGrid = document.querySelectorAll('.all-grid')



function randomRgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


function addColorToGrid(grids) {
    grids.forEach(grid => {
        grid.addEventListener('mouseover', () => {
            grid.setAttribute('style', `background: ${randomRgba()};`)
        })
    });
}

function clearColors() {
    allGrid.forEach(grid => {
        clearButton.addEventListener('click', () => {
            grid.setAttribute('style', 'background: transparent;')
        })
    });
}



addColorToGrid(allGrid)
'use strict'

let grid = document.getElementById('grid')

function createGrid() {
    for (let i = 0; i < 6; i++) {
        let row = document.createElement('div')
        for (let j = 0; j < 5; j++) {
            let slot = document.createElement('div')
            slot.className = 'slot'
            slot.textContent = 'A'
            row.appendChild(slot)
        }
        grid.appendChild(row)
    }
}

createGrid()
'use strict'

let wordList = [
    'patio',
    'darts',
    'piano',
    'horse',
    'hello',
    'water',
    'pizza',
    'sushi',
    'crabs'
];

let randomIndex = Math.floor(Math.random() * wordList.length)
let correctWord = wordList[randomIndex]

let currentGuess = ''
let allGuesses = []

let grid = document.getElementById('grid')

function createGrid() {
    for (let i = 0; i < 6; i++) {
        let row = document.createElement('div')
        for (let j = 0; j < 5; j++) {
            let slot = document.createElement('div')
            slot.className = 'slot'
            row.appendChild(slot)
        }
        grid.appendChild(row)
    }
}

function updateGrid() {
    let row = grid.firstChild

}

createGrid()
updateGrid()
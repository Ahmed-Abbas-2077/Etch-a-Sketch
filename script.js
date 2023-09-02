function createGrid(size) {
  let container = document.querySelector('#container');
  let grid = document.createElement('div');
  grid.classList.add('grid');
  container.appendChild(grid); // add grid to container
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // set grid columns
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`; // set grid rows
  // create squares
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
  }
  // add event listener to squares
  squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseover', changeColor);
  });
}

function changeColor(e) {
  // generate random color
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  e.target.style.backgroundColor = '#' + randomColor;
  // add opacity
  let opacity = Number(e.target.style.opacity);
  if (opacity < 1) {
    e.target.style.opacity = opacity + 0.1;
  } else {
    e.target.style.opacity = 1;
  }
}

function clearGrid() {
  let squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.style.backgroundColor = 'white'; // reset color
    square.style.opacity = 0; // reset opacity
  });
}

function resizeGrid() {
  // remove all squares and grid
  let squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.remove();
  });
  grid = document.querySelector('.grid');
  grid.remove();
  askUser(); // ask user for new size
}

function askUser() {
  let size = prompt('How many squares per side?'); // ask user for size
  if (size > 100 || size < 1 || isNaN(size)) {
    alert('Please enter a number less than 100 and more than 0'); // limit size to 100
    askUser();
  } else {
    createGrid(size);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  askUser();
  let controls = document.querySelector('#controls');
  controls.style.display = 'flex';
  let clearButton = document.querySelector('#clear');
  clearButton.addEventListener('click', clearGrid);
  let resizeButton = document.querySelector('#resize');
  resizeButton.addEventListener('click', resizeGrid);
});

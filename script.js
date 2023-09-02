function createGrid() {
  let container = document.querySelector('#container');
  let grid = document.createElement('div');
  grid.classList.add('grid');
  container.appendChild(grid);
  for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
  }
  squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseover', changeColor);
  });
}

function changeColor(e) {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  e.target.style.backgroundColor = '#' + randomColor;
}

document.addEventListener('DOMContentLoaded', () => {});

// declare variables with document elements
const grid = document.getElementById('grid');

const densityButton = document.getElementById('density');

const resetButton = document.getElementById('reset');

const randomButton = document.getElementById('random');

const greenButton = document.getElementById('green');

//declare variable with original color value
let color = '#aac179';

//declare variable that represents number of squares per side of grid
let sideLength = 25;

//generate random color
const getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};
 
const getRandomColor = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);
  return `hsl(${h}deg, ${s}%, ${l}%)`;
};

// add event listeners to buttons
densityButton.addEventListener('click', () => {
  getDensity();
  createGrid(sideLength);
});

resetButton.addEventListener('click', () => {
  resetGrid();
});

randomButton.addEventListener('click', () => {
  const randomColor = getRandomColor();
  color = randomColor;
});

greenButton.addEventListener('click', () => {
  color = '#aac179';
});

/*function to create grid: 
1. remove all existing squares, 
2. loop to create div, add class "square", and append it to grid
3. change grid columns and rows style
4. reset grid
5. add mouseover event listener*/
function createGrid (sideLength) {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.remove();
  });

  for(let i=0; i<(sideLength*sideLength); i++) {
    const box = document.createElement('div');
    box.classList.add('square');
    grid.appendChild(box);
  }

  grid.style.gridTemplateColumns= "repeat(" + sideLength + ", 1fr)";
  grid.style.gridTemplateRows= "repeat(" + sideLength + ", 1fr)";
  
  resetGrid();
  mouseOver();
}

// get user input for number of squares per side of grid
function getDensity(){
  sideLength = (prompt("How many squares per side? (max. 100)"))*1;
  return sideLength;
}

//declare reset function
function resetGrid() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.backgroundColor= 'white';
    color = '#aac179'
  });
}

//declare function to add event listener when mouse is over squares
function mouseOver () {
  const squares = document.querySelectorAll('.square');

  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = color;
    });
  });
}

createGrid(sideLength);
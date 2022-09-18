// declare variable with element #grid
const grid = document.getElementById('grid');

// declare variable with button #density
const densityButton = document.getElementById('density');

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

//declare variable with original color value
let color = '#aac179';

//declare variable that represents number of squares per side of grid
let sideLength = 25;

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

createGrid(sideLength);

// get user input for number of squares per side of grid
function getDensity(){
  sideLength = (prompt("How many squares per side? (max. 100)"))*1;
  return sideLength;
}

// add event listener on click and runs function
densityButton.addEventListener('click', () => {
  getDensity();
  createGrid(sideLength);
});

//add reset function
function resetGrid() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.backgroundColor= 'white';
    color = '#aac179'
  });
}

//declare variable with reset button
const reset = document.getElementById('reset');

//add on click event to reset button
reset.addEventListener('click', () => {
  resetGrid();
});

//declare function to add event listener when mouse is over squares
function mouseOver () {
  //declare variable with nodelist of elements including "square" class
  const squares = document.querySelectorAll('.square');

  //change background color when mouse hovers elements to each element in nodelist
  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = color;
    });
  });
}

//pick random color when clicking rainbow button
const rainbowButton = document.getElementById('rainbow');
rainbowButton.addEventListener('click', () => {
  const randomColor = getRandomColor();
  color = randomColor;
});

//pick original green when clicking green button
const greenButton = document.getElementById('green');
greenButton.addEventListener('click', () => {
  color = '#aac179';
});
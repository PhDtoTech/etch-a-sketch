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

//declare variable that represents number of squares per side of grid
let sideLength = 16;

// get number of squares per side of grid
function getDensity(){
  sideLength = (prompt("How many squares per side?"))*1;
  return sideLength;
}

// add event listener on click and runs function
densityButton.addEventListener('click', () => {
  getDensity();
});

//create boxes based on sideLength through loop by declaring box variable, adding class "square", and appending it to grid
for(let i=0; i<(sideLength*sideLength); i++) {
  const box = document.createElement('div');
  box.classList.add('square');
  grid.appendChild(box);
}

//declare variable with original color value
let color = '#aac179';

//add reset function
function resetGrid() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.className = 'square';
    square.style.backgroundColor= 'white';
    color = '#aac179'
  });
}

//declares variable with reset button
const reset = document.getElementById('reset');

//adds on click event to reset button
reset.addEventListener('click', () => {
  resetGrid();
});

//declare variable with nodelist of elements including "square" class
const squares = document.querySelectorAll('.square');

//add class "hover" when mouse hovers elements to each element in nodelist
squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = color;
  });
});

//pick random color when clicking rainbow button
const rainbowButton = document.getElementById('rainbow');
rainbowButton.addEventListener('click', () => {
  resetGrid();
  const randomColor = getRandomColor();
  color = randomColor;
});

//pick original green when clicking green button
const greenButton = document.getElementById('green');
greenButton.addEventListener('click', () => {
    resetGrid();
});
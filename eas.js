// declares variable with element #grid
const grid = document.getElementById('grid');

//creates 256 boxes through loop by declaring box variable, adding class "square", and appending it to grid
for(let i=0; i<256; i++) {
    const box = document.createElement('div');
    box.classList.add('square');
    grid.appendChild(box);
}

//declares variable with nodelist of elements including "square" class
const squares = document.querySelectorAll('.square');

//adds class "hover" when mouse hovers elements to each element in nodelist
squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    square.classList.add('hover');
  });
});


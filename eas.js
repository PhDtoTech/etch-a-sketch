const grid = document.getElementById('grid');

for(let i=0; i<256; i++) {
    const box = document.createElement('div');
    box.className = "square";
    grid.appendChild(box);
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    square.classList.add('hover');
  });
});

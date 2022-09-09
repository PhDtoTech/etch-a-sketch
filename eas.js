const grid = document.getElementById('grid');

for(let i=0; i<256; i++) {
    const square = document.createElement('div');
    square.className = "square";
    grid.appendChild(square);
    console.log(i);
}


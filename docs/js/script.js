// Add squares

const squares = document.querySelector('.squares');
var total = 1

color_map = {}

for (var i = 1; i <= total; i++) {
    const level = Math.floor(Math.random() * 10);  
    row = parseInt(i / 10)
    col = i % 10
    color_map[`${row}-${col}`] = 0
    squares.insertAdjacentHTML('beforeend', `<li style="background-color:${color[0]}" id="${row}-${col}" data-level="0"></li>`);
}
// window element
window.addEventListener('load', ()=>{

    resize();
    document.addEventListener('mousedown', startPainting);
    document.addEventListener('mouseup', stopPainting);
    document.addEventListener('mousemove', sketch);
    window.addEventListener('resize', resize);
});

// decalre variables
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let coord = {x:0 , y:0};
let paint = false;

// Resizes the canvas to the available size of the window.
function resize(){
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

// Updates the coordinates of the cursor
function getPosition(event) {
    coord.x = event.clientX - canvas.offsetLeft;
    coord.y = event.clientY - canvas.offsetTop;
}

// start and stop drawing
function startPainting(event) {
    paint = true;
    getPosition(event);
}
function stopPainting() {
    paint = false;
}

function sketch(event) {
    if (!paint) return;
    ctx.beginPath();
    ctx.lineWidth = 5;
    // Sets round shape.
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'green';
    // The cursor to start drawing moves to this coordinate
    ctx.moveTo(coord.x, coord.y);
    // The position of the cursor get updated as we move the mouse around.
    getPosition(event);
    ctx.lineTo(coord.x, coord.y);
    // Draws the line.
    ctx.stroke();
}
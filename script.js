canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")
audio = document.getElementById("audio")

cX = 400
cY = 250
function circle(radius, color = 'black') {
    ctx.beginPath()
    ctx.arc(cX, cY, radius, 0, 7)
    ctx.fillStyle = ctx.strokeStyle = color
    ctx.stroke()
    ctx.fill()
}


size = 2 * Math.PI / 20

function sector(radius, number, color = 'white') {
    ctx.beginPath()
    ctx.arc(cX, cY, radius, (number - 5.5) * size, (number - 4.5) * size)
    ctx.lineTo(cX, cY)
    ctx.fillStyle = ctx.strokeStyle = color
    ctx.stroke()
    ctx.fill()
}

board();

function board() {
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,800,500)
    circle(210);
    circle(180, 'red');
    sectors(180, 'green');
    circle(170);
    sectors(170);
    circle(110, 'red');
    sectors(110, 'green');
    circle(100);
    sectors(100);
    circle(18, 'green');
    circle(8, 'red');
}



function text(num, x, y) {
    ctx.fillStyle = "white";
    ctx.font = "bold 15pt Arial";
    ctx.fillText(num, x, y);
}

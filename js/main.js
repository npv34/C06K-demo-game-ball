let ball = new Ball(200, 200, 15, "red")
let bar = new Bar(200, 450, 100, 10, "blue")
ball.draw();

function play() {
    ball.move();
    bar.draw();
    ball.checkVarBar(bar)
    ball.checkVarBorder();
    requestAnimationFrame(play)
}

play();

window.addEventListener("keydown", function (evt) {
    if (evt.key === 'ArrowRight') {
        bar.moveRight();
    } else {
        bar.moveLeft();
    }
})



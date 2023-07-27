
class Ball {
    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.speed = 5;
        this.flag = 'down';
        this.canvas = document.getElementById('main');
        this.ctx = this.canvas.getContext('2d');
        this.number = 0;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    move() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        switch (this.flag) {
            case 'down':
                this.moveDown();
                break;
            case 'upLeft':
                this.moveUpLeft();
                break
            case 'upRight':
                this.moveUpRight();
                break;
            case 'downRight':
                this.moveDownRight();
                break;
            case 'downLeft':
                this.moveDownLeft();
                break;

        }

        // if (this.y + this.r >= this.canvas.height) {
        //     this.flag = 'upLeft';
        // }



        this.draw();
    }

    moveUpLeft() {
        this.x -= this.number;
        this.y -= this.speed;
    }

    moveUpRight() {
        this.x += this.number;
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

    moveDownRight() {
        this.x += this.number;
        this.y += this.speed;
    }

    moveDownLeft() {
        this.x -= this.number;
        this.y += this.speed;
    }
    checkVarBrick(brick) {}
    checkVarBar(bar) {
        if (this.y + this.r >= bar.y
        && this.x >= bar.x && this.x <= bar.x + bar.width) {
            this.flag = 'upLeft';
            this.number = Math.floor(Math.random() * 10)
        }
    }

    checkVarBorder() {
        if (this.x - this.r <= 0) {
            this.flag = 'upRight';
            this.number = Math.floor(Math.random() * 10)
        }

        if (this.y - this.r <= 0) {
            this.flag = 'downRight';
            this.number = Math.floor(Math.random() * 10)
        }

        if (this.x + this.r >= this.canvas.width) {
            this.flag = 'downLeft';
            this.number = Math.floor(Math.random() * 10)
        }
    }
}

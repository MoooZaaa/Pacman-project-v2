class Pacman {
    constructor (x, y, width, height, speed) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = speed
        this.direction = DIRECTION_RIGHT
    }

    // [ DEPLACEMENTS ]

    moveProcess() {
        this.changeDirectionIfPossible();
        this.moveForwards();
        if (this.checkCollision()) {
            this.moveBackwars();
        }
    }

    eat() {}

// [ RECULER ]

    moveBackwars() {
        switch(this.direction) {
            case DIRECTION_RIGHT:
                this.x -= this.speed
                break;
            case DIRECTION_UP:
                this.y += this.speed
                break;
            case DIRECTION_LEFT:
                this.x += this.speed
                break;
            case DIRECTION_DOWN:
                this.y -= this.speed
                break;
        }
    }

// [ AVANCER ]

    moveForwards() {
        switch(this.direction) {
            case DIRECTION_RIGHT:
                this.x += this.speed
                break;
            case DIRECTION_UP:
                this.y -= this.speed
                break;
            case DIRECTION_LEFT:
                this.x -= this.speed
                break;
            case DIRECTION_DOWN:
                this.y += this.speed
                break;
        }
    }

    checkCollision() {}

    checkGhostCollision() {}

    changeDirectionIfPossible() {}

    changeAnimation() {}

    draw() {}

    // Timecode de la vidéo : 23:55
    // Lien : https://www.youtube.com/watch?v=GXlckaGr0Eo&ab_channel=ServetGulnaroglu

}
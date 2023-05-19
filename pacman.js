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

    checkCollision() {
        let isCollided = false
        if(map[this.getMapY()][this.getMapX()] == 1 ||
            map[this.getMapYRightSide()][this.getMapX()] == 1 ||
            map[this.getMapY()][this.getMapXRightSide()] == 1 ||
            map[this.getMapYRightSide()][this.getMapXRightSide()] == 1
        ) {
            return true;
        }
        return false;
    }



    checkGhostCollision() {}

    changeDirectionIfPossible() {}

    changeAnimation() {}

    draw() {}

    getMapX() {
        return parseint(this.x / oneBlockSize)
    }

    getMapY() {
        return parseint(this.y / oneBlockSize)
    }

    getMapXRightSide() {
        return parseint((this.x + 0.9999 * oneBlockSize  )/ oneBlockSize)
    }

    getMapYRightSide() {
        return parseint((this.y + 0.9999 * oneBlockSize  )/ oneBlockSize)
    }

}
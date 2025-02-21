class Projectile {
    leftDirection
    x
    y
    div
    speed
    idx

    static Width = 25
    static Height = 25

    constructor(div, leftDirection, x, y, projectileSpeed) {
        this.div = div
        this.leftDirection = leftDirection
        this.x = x + (leftDirection ? (-Player.Width) : Player.Width)
        this.y = y

        this.speed = projectileSpeed

        this.setPosition()
    }

    setPosition() {
        this.div.style.left = `${this.x}px`;
        this.div.style.top = `${this.y}px`;
    }

    move() {
        this.x = this.x + (this.leftDirection ? (-this.speed) : this.speed)
        this.div.style.left = `${this.x}px`
    }

    changePlayer() {
        let imgSrc = this.div.child[0].src
        let opponentImgSrc = imgSrc.swap() // TODO
        imgSrc = opoonentImgSrc
    }

}
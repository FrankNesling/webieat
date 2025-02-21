class Player {
    playerID
    x
    y
    div
    movementSpeed
    projectileSpeed
    lives
    projectiles = new Set()
    shootCoolOff = false
    hitCoolOff = false


    // effects
    doubleShoot = false
    shootingCoolOffTime
    shotgun = false

    static StartingLives = 3
    static StandardMovementSpeed = 1.2
    static StandardProjectileSpeed = 1.6
    static Height = 50
    static Width = 50
    static StandardShootingCoolOffTime = 800
    static StandardHitCoolOffTime = 2000

    static ShotgunOffset = 35

    constructor(playerID, x, y) {
        this.playerID = playerID
        this.x = x
        this.y = y
        this.div = document.getElementById("player" + playerID)
        this.setPosition()

        this.movementSpeed = Player.StandardMovementSpeed
        this.projectileSpeed = Player.StandardProjectileSpeed
        this.lives = Player.StartingLives
        this.shootingCoolOffTime = Player.StandardShootingCoolOffTime

        let livesDiv = document.getElementById("player" + playerID + "-lives")
        livesDiv.textContent = this.lives
    }

    setPosition(x, y) {
        this.div.style.left = `${this.x}px`;
        this.div.style.top = `${this.y}px`;
    }

    shoot() {
        if (!this.shootCoolOff) {
            let container = document.createElement('div');
            container.className = 'projectile';

            let img = document.createElement('img')
            img.src = "projectile" + this.playerID + ".png"


            container.appendChild(img)
            document.getElementById("game-field").appendChild(container);
            let newProjectile = new Projectile(container, this.playerID - 1, this.x, this.y + (Player.Height/4), this.projectileSpeed)
            this.projectiles.add(newProjectile)

            if (this.doubleShoot) {
                setTimeout(() => {
                    let container3 = document.createElement('div');
                    container3.className = 'projectile';

                    let img3 = document.createElement('img')
                    img3.src = "projectile" + this.playerID + ".png"


                    container3.appendChild(img3)
                    document.getElementById("game-field").appendChild(container3);
                    let newProjectile = new Projectile(container3, this.playerID - 1, this.x, this.y + (Player.Height / 4), this.projectileSpeed)
                    this.projectiles.add(newProjectile)
                }, 300)
            }
            if (this.shotgun) {
                // upper projectile
                if ((this.y + (Player.Height / 4)) - Player.ShotgunOffset > Game.BounderyTop) {
                    let container1 = document.createElement('div');
                    container1.className = 'projectile';

                    let img1 = document.createElement('img')
                    img1.src = "projectile" + this.playerID + ".png"


                    container1.appendChild(img1)
                    document.getElementById("game-field").appendChild(container1);
                    let upperLane = (this.y + (Player.Height / 4)) - Player.ShotgunOffset
                    let newProjectile = new Projectile(container1, this.playerID - 1, this.x, upperLane, this.projectileSpeed)
                    this.projectiles.add(newProjectile)
                }
                

                // lower projectile
                if ((this.y + (Player.Height / 4)) + Player.ShotgunOffset + Projectile.Height < Game.BounderyBottom) {
                    let container2 = document.createElement('div');
                    container2.className = 'projectile';

                    let img2 = document.createElement('img')
                    img2.src = "projectile" + this.playerID + ".png"


                    container2.appendChild(img2)
                    document.getElementById("game-field").appendChild(container2);
                    let lowerLane = (this.y + (Player.Height / 4)) + Player.ShotgunOffset
                    let newProjectile = new Projectile(container2, this.playerID - 1, this.x, lowerLane, this.projectileSpeed)
                    this.projectiles.add(newProjectile)
                }                
            }

            // cool off
            this.shootCoolOff = true
            setTimeout(() => {
                this.shootCoolOff = false
            }, this.shootingCoolOffTime);
        }
    }

    moveUp() {
        if (this.y - this.movementSpeed >= Game.BounderyTop) {
            this.y = this.y - this.movementSpeed
            this.div.style.top = `${this.y}px`;
        }
    }

    moveDown() {
        if (this.y + this.movementSpeed <= Game.BounderyBottom - Player.Height) {
            this.y = this.y + this.movementSpeed
            this.div.style.top = `${this.y}px`;
        }
    }

    loseLife() {
        if (!this.hitCoolOff) {
            this.lives = this.lives - 1
            let livesDiv = document.getElementById("player" + this.playerID + "-lives")
            livesDiv.textContent = this.lives

            // hit cool off
            this.invincibility(true)
            setTimeout(() => {
                this.invincibility(false)
            }, Player.StandardHitCoolOffTime);
        }    
    }

    activateDoubleShoot() {
        this.doubleShoot = true

        setTimeout(() => {
            this.doubleShoot = false
        }, 9000)
    }

    activateShotgun() {
        this.shotgun = true

        setTimeout(() => {
            this.shotgun = false
        }, 7000)
    }

    addLife() {
        this.lives = this.lives + 1
        let livesDiv = document.getElementById("player" + this.playerID + "-lives")
        livesDiv.textContent = this.lives
    }

    changeShootingSpeed(newSpeed) {
        this.shootingCoolOffTime = newSpeed

        setTimeout(() => {
            this.shootingCoolOffTime = Player.StandardShootingCoolOffTime
        }, 14000)
    }

    changeMovementSpeed(newSpeed) {
        this.movementSpeed = newSpeed

        setTimeout(() => {
            this.movementSpeed = Player.StandardMovementSpeed
        }, 12000)
    }

    changeProjectileSpeed(newSpeed) {
        this.projectileSpeed = newSpeed

        setTimeout(() => {
            this.projectileSpeed = Player.StandardProjectileSpeed
        }, 7000)
    }

    invincibility(activate) {
        this.hitCoolOff = activate
        this.div.style.opacity = activate ? "50%" : "100%"
    }

    activateInvincibility() {
        this.invincibility(true)

        setTimeout(() => {
            this.invincibility(false)
        }, 4000)
    }
}
class Game {
    players = []
    powerups = new Set()
    gameOver = false

    keysPressed = new Set();

    static Border = 1
    static BounderyTop = 0
    static BounderyBottom = 300
    static BounderyLeft = 0
    static BounderyRight = 800

    static PowerUpBounderyLeft = 250
    static PowerUpBounderyRight = 550

    static WaitTillFirstPowerUp = 5000     // default 10sec
    static TimeTillNextPowerUpUpperLimit = 7000
    static TimeTillNextPowerUpLowerLimit = 4000
    static PowerUpDespawnTimeUpperLimit = 20000
    static PowerUpDespawnTimeLowerLimit = 5000

    static Effects = [
        "AddLife",
        "Artillery",
        "DoubleShoot",
        "FastMove",
        "FastProjectile",
        "FastShoot",
        "Invincibility",
        "Shotgun",
        "SlowMove",
        "SlowProjectile"
    ]

    boundKeyDown
    boundKeyUp

    constructor() {
        // this bindings
        this.boundKeyDown = this.keyDown.bind(this);
        this.boundKeyUp = this.keyUp.bind(this);

        let player1 = new Player(1, 0, 0)
        let player2 = new Player(2, 750, 0)

        this.players.push(player1)
        this.players.push(player2)

        this.addEventListener()

        setTimeout(() => {
            this.spawnPowerUp()
        }, Game.WaitTillFirstPowerUp);

        this.gameLoop = this.gameLoop.bind(this);       // bind for correct this instance
        this.gameLoop()
    }

    addEventListener() {
        document.addEventListener('keydown', this.boundKeyDown);
        document.addEventListener('keyup', this.boundKeyUp);
    }

    removeEventListener() {
        document.removeEventListener('keydown', this.boundKeyDown)
        document.removeEventListener('keyup', this.boundKeyUp)
    }

    keyDown(event) {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 's' || event.key === 'w') {
            this.keysPressed.add(event.key);
        }
    }

    keyUp(event) {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 's' || event.key === 'w') {
            this.keysPressed.delete(event.key);
        }
        if (event.key === 'r') {
            this.players[0].shoot()
        }

        if (event.key == 'm') {
            this.players[1].shoot()
        }
    }

    spawnPowerUp() {
        let randomX = getRandomInt(Game.PowerUpBounderyLeft, Game.PowerUpBounderyRight - PowerUp.Size)
        let randomY = getRandomInt(Game.BounderyTop, Game.BounderyBottom - PowerUp.Size)
        let despawnTime = getRandomInt(Game.PowerUpDespawnTimeLowerLimit, Game.PowerUpDespawnTimeUpperLimit)
        let nextSpawnTime = getRandomInt(Game.TimeTillNextPowerUpLowerLimit, Game.TimeTillNextPowerUpUpperLimit)
        let randomEffect = getRandomInt(0, Game.Effects.length - 1)

        let newPowerUp = new PowerUp(randomX, randomY, Game.Effects[randomEffect], despawnTime, this.powerups)
        this.powerups.add(newPowerUp)

        setTimeout(() => {
            if(!this.gameOver) this.spawnPowerUp()
        }, nextSpawnTime);
    }


    gameLoop() {
        if (this.keysPressed.has('ArrowUp')) this.players[1].moveUp();
        if (this.keysPressed.has('ArrowDown')) this.players[1].moveDown();
        if (this.keysPressed.has('w')) this.players[0].moveUp();
        if (this.keysPressed.has('s')) this.players[0].moveDown();

        this.players.forEach(player => {
            player.projectiles.forEach(projectile => {
                projectile.move()
                this.checkProjectileCollision(projectile, player.playerID - 1)
                this.checkPowerupCollision(projectile, player.playerID - 1)
            })
        })

        if (this.players[0].lives == 0 || this.players[1].lives == 0) {
            alert("Game over. Congratulations.")
            this.gameOver = true
            this.removeEventListener()

            // remove remaining projectiles
            this.players.forEach(player => {
                player.projectiles.forEach(projectile => {
                    projectile.div.remove()
                })
            })
        }

        if (!this.gameOver) requestAnimationFrame(this.gameLoop);
    }

    checkPowerupCollision(projectile, playerID) {
        let player = this.players[playerID]
        let opponent = this.players[+(!playerID)]

        this.powerups.forEach(powerup => {
            if (!projectile.leftDirection) {
                if (projectile.x + Projectile.Width >= powerup.x
                    && projectile.y + Projectile.Height >= powerup.y
                    && projectile.y <= powerup.y + PowerUp.Size)
                    powerup.consume(player, opponent)
            } else if (projectile.leftDirection) {
                if (projectile.x <= powerup.x + PowerUp.Size
                    && projectile.y + Projectile.Height >= powerup.y
                    && projectile.y <= powerup.y + PowerUp.Size)
                    powerup.consume(player, opponent)
            }
        })
    }

    checkProjectileCollision(projectile, playerID) {
        let opponentID = +(!playerID)
        let opponentPlayer = this.players[opponentID]
        if (!projectile.leftDirection) {
            if (projectile.x + Projectile.Width > opponentPlayer.x
                && projectile.y + Projectile.Height >= opponentPlayer.y &&
                projectile.y <= opponentPlayer.y + Player.Height) {

                this.players[opponentID].loseLife()

                // remove projectile on div and array
                projectile.div.remove()
                this.players[playerID].projectiles.delete(projectile)
            } else if (projectile.x + Projectile.Width > Game.BounderyRight) {
                // remove projectile on div and array
                projectile.div.remove()
                this.players[playerID].projectiles.delete(projectile)
            }
        } else if (projectile.leftDirection) {
            if (projectile.x < opponentPlayer.x + Player.Width
                && projectile.y + Projectile.Height >= opponentPlayer.y &&
                projectile.y <= opponentPlayer.y + Player.Height) {

                this.players[opponentID].loseLife()

                // remove projectile on div and array
                projectile.div.remove()
                this.players[playerID].projectiles.delete(projectile)
            } else if (projectile.x < Game.BounderyLeft) {
                // remove projectile on div and array
                projectile.div.remove()
                this.players[playerID].projectiles.delete(projectile)
            }
        }

        
    }
}



function getRandomInt(min, max) {
    min = Math.ceil(min); // Ensure min is an integer
    max = Math.floor(max); // Ensure max is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min; // Generate random integer
}

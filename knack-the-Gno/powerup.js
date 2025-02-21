class PowerUp {
    effect
    disappearInterval
    x
    y
    div
    gamePowerUps

    static Size = 25

    constructor(x, y, effect, disappearTime, powerUps) {
        this.x = x
        this.y = y
        this.gamePowerUps = powerUps
        this.effect = effect

        // DIV
        let container = document.createElement('div');
        container.className = 'powerup';

        let img = document.createElement('img')
        img.src = effect + ".svg"

        container.appendChild(img)
        document.getElementById("game-field").appendChild(container);

        this.div = container

        this.setPosition()

        // DESPAWN
        this.disappearInterval = setTimeout(() => {
            this.remove()
        }, disappearTime);
    }

    setPosition() {
        this.div.style.left = `${this.x}px`;
        this.div.style.top = `${this.y}px`;
    }

    consume(player, opponent) {
        console.log(this.effect)
        switch (this.effect) {
            case "AddLife":
                player.addLife()
                break;
            case "Artillery":
                opponent.changeShootingSpeed(1100)
                break;
            case "DoubleShoot":
                player.activateDoubleShoot()
                break;
            case "FastMove":
                player.changeMovementSpeed(2)
                break;
            case "FastProjectile":
                player.changeProjectileSpeed(2.5)
                break;
            case "FastShoot":
                player.changeShootingSpeed(500)
                break;
            case "Invincibility":
                player.activateInvincibility()
                break;
            case "Shotgun":
                player.activateShotgun()
                break;
            case "SlowMove":
                opponent.changeMovementSpeed(1)
                break;
            case "SlowProjectile":
                opponent.changeProjectileSpeed(1.1)
                break;       
            default:
                break
        }

        this.remove()

    }

    remove() {
        clearTimeout(this.disappearInterval)
        this.div.remove()
        this.gamePowerUps.delete(this)
    }



}


/*

IDEAS

faster move up/down (shoes) -> FasterMove
faster projectiles (f1) -> FastProjectile
slower enemey projectiles (physics) -> SlowerProjectile
slow down enemy up down (sand clock) -> SlowerMove
three different lanes (shotgun) -> Shotgun
plus one life (anatomic heart) -> addLife
TODO: projectiles change direction and/not color (tennis) -> MirrorProjectiles
double shoot (beer) -> DoubleShoot
faster shoot (pump) -> FastShoot
invincibility (bicycle helmet) -> Invicibility

TODO added artillery



*/
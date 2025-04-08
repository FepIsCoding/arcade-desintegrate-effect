namespace desintegrate {
    export function desintegrate_random_ammount(ammount: number, time: number, sprite: Sprite) {
        sprite.startEffect(effects.disintegrate, ammount / time)
    }
}
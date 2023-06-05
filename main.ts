input.onButtonPressed(Button.A, function () {
    jugador_arrib.change(LedSpriteProperty.Y, -1)
    jugador_abajo.change(LedSpriteProperty.Y, -1)
    basic.pause(500)
    jugador_arrib.change(LedSpriteProperty.Y, 1)
    jugador_abajo.change(LedSpriteProperty.Y, 1)
})
let jugador_abajo: game.LedSprite = null
let jugador_arrib: game.LedSprite = null
jugador_arrib = game.createSprite(1, 3)
jugador_abajo = game.createSprite(1, 4)
let obstaculo = game.createSprite(4, 4)
basic.forever(function () {
    obstaculo.change(LedSpriteProperty.X, -1)
    basic.pause(500)
    if (obstaculo.get(LedSpriteProperty.X) == 0) {
        obstaculo.set(LedSpriteProperty.X, 4)
    }
})

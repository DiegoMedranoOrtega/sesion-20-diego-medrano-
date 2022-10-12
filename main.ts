let Velocidad = 200
for (let index = 0; index < 3; index++) {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(y, x)
            basic.pause(Velocidad)
            basic.clearScreen()
        }
    }
    basic.showIcon(IconNames.Yes)
    Velocidad += -80
}

keyboard.startKeyboardService()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        if (pins.digitalReadPin(DigitalPin.P12) == 0) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            keyboard.sendString("q")
        } else {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            keyboard.sendString("b")
        }
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})

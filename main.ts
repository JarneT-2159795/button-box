function joystick () {
    if (pins.analogReadPin(AnalogPin.P0) < 100) {
        keyboard.sendString("l")
    }
    if (pins.analogReadPin(AnalogPin.P0) > 950) {
        keyboard.sendString("r")
    }
    if (pins.analogReadPin(AnalogPin.P1) < 100) {
        keyboard.sendString("u")
    }
    if (pins.analogReadPin(AnalogPin.P1) > 950) {
        keyboard.sendString("d")
    }
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        keyboard.sendString("j")
    }
}
function switches () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        keyboard.sendString("p")
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        keyboard.sendString("s")
    }
}
function encoder () {
    if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        if (pins.digitalReadPin(DigitalPin.P12) == 0) {
            keyboard.sendString("q")
        } else {
            keyboard.sendString("b")
        }
    }
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        keyboard.sendString("e")
    }
}
keyboard.startKeyboardService()
basic.forever(function () {
    encoder()
    joystick()
    switches()
})

function joystick () {
    y = pins.analogReadPin(AnalogPin.P0)
    y = pins.analogReadPin(AnalogPin.P1)
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        gamepad.send(
        gamepad._buttons(GameButton.X, true),
        input.rotation(Rotation.Pitch),
        y,
        gamepad._dpad(GameDirection.noDirection),
        z,
        rx
        )
    } else {
        gamepad.send(
        gamepad._buttons(GameButton.X, false),
        input.rotation(Rotation.Pitch),
        y,
        gamepad._dpad(GameDirection.noDirection),
        z,
        rx
        )
    }
}
function switches () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        gamepad.send(
        gamepad._buttons(GameButton.A, true),
        input.rotation(Rotation.Pitch),
        y,
        gamepad._dpad(GameDirection.noDirection),
        z,
        rx
        )
    } else {
        gamepad.send(
        gamepad._buttons(GameButton.A, false),
        input.rotation(Rotation.Pitch),
        y,
        gamepad._dpad(GameDirection.noDirection),
        z,
        rx
        )
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        gamepad.send(
        gamepad._buttons(GameButton.B, true),
        input.rotation(Rotation.Pitch),
        y,
        gamepad._dpad(GameDirection.noDirection),
        z,
        rx
        )
    } else {
        gamepad.send(
        gamepad._buttons(GameButton.B, false),
        input.rotation(Rotation.Pitch),
        y,
        gamepad._dpad(GameDirection.noDirection),
        z,
        rx
        )
    }
}
function encoder () {
    if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        if (pins.digitalReadPin(DigitalPin.P12) == 0) {
            gamepad.send(
            gamepad._buttons(GameButton.leftShoulder, true),
            input.rotation(Rotation.Pitch),
            y,
            gamepad._dpad(GameDirection.noDirection),
            z,
            rx
            )
        } else {
            gamepad.send(
            gamepad._buttons(GameButton.rightShoulder, true),
            input.rotation(Rotation.Pitch),
            y,
            gamepad._dpad(GameDirection.noDirection),
            z,
            rx
            )
        }
    } else {
        gamepad.send(
        gamepad._buttons(GameButton.leftShoulder, false),
        input.rotation(Rotation.Pitch),
        y,
        gamepad._dpad(GameDirection.noDirection),
        z,
        rx
        )
        gamepad.send(
        gamepad._buttons(GameButton.rightShoulder, false),
        input.rotation(Rotation.Pitch),
        y,
        gamepad._dpad(GameDirection.noDirection),
        z,
        rx
        )
    }
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        gamepad.send(
        gamepad._buttons(GameButton.leftStick, true),
        input.rotation(Rotation.Pitch),
        y,
        gamepad._dpad(GameDirection.noDirection),
        z,
        rx
        )
    } else {
        gamepad.send(
        gamepad._buttons(GameButton.leftStick, false),
        input.rotation(Rotation.Pitch),
        y,
        gamepad._dpad(GameDirection.noDirection),
        z,
        rx
        )
    }
}
let rx = 0
let z = 0
let y = 0
gamepad.startGamepadService()
basic.forever(function () {
    encoder()
    joystick()
    switches()
    gamepad.send(
    gamepad._buttons(GameButton.none, true),
    input.rotation(Rotation.Pitch),
    y,
    gamepad._dpad(GameDirection.noDirection),
    z,
    rx
    )
})

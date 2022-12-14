def joystick():
    global y
    y = pins.analog_read_pin(AnalogPin.P0)
    y = pins.analog_read_pin(AnalogPin.P1)
    if pins.digital_read_pin(DigitalPin.P5) == 0:
        gamepad.send(gamepad._buttons(GameButton.X, True),
            input.rotation(Rotation.PITCH),
            y,
            gamepad._dpad(GameDirection.NO_DIRECTION),
            z,
            rx)
    else:
        gamepad.send(gamepad._buttons(GameButton.X, False),
            input.rotation(Rotation.PITCH),
            y,
            gamepad._dpad(GameDirection.NO_DIRECTION),
            z,
            rx)
def switches():
    if pins.digital_read_pin(DigitalPin.P2) == 1:
        gamepad.send(gamepad._buttons(GameButton.A, True),
            input.rotation(Rotation.PITCH),
            y,
            gamepad._dpad(GameDirection.NO_DIRECTION),
            z,
            rx)
    else:
        gamepad.send(gamepad._buttons(GameButton.A, False),
            input.rotation(Rotation.PITCH),
            y,
            gamepad._dpad(GameDirection.NO_DIRECTION),
            z,
            rx)
    if pins.digital_read_pin(DigitalPin.P8) == 1:
        gamepad.send(gamepad._buttons(GameButton.B, True),
            input.rotation(Rotation.PITCH),
            y,
            gamepad._dpad(GameDirection.NO_DIRECTION),
            z,
            rx)
    else:
        gamepad.send(gamepad._buttons(GameButton.B, False),
            input.rotation(Rotation.PITCH),
            y,
            gamepad._dpad(GameDirection.NO_DIRECTION),
            z,
            rx)
def encoder():
    if pins.digital_read_pin(DigitalPin.P11) == 0:
        if pins.digital_read_pin(DigitalPin.P12) == 0:
            gamepad.send(gamepad._buttons(GameButton.LEFT_SHOULDER, True),
                input.rotation(Rotation.PITCH),
                y,
                gamepad._dpad(GameDirection.NO_DIRECTION),
                z,
                rx)
        else:
            gamepad.send(gamepad._buttons(GameButton.RIGHT_SHOULDER, True),
                input.rotation(Rotation.PITCH),
                y,
                gamepad._dpad(GameDirection.NO_DIRECTION),
                z,
                rx)
    else:
        gamepad.send(gamepad._buttons(GameButton.LEFT_SHOULDER, False),
            input.rotation(Rotation.PITCH),
            y,
            gamepad._dpad(GameDirection.NO_DIRECTION),
            z,
            rx)
        gamepad.send(gamepad._buttons(GameButton.RIGHT_SHOULDER, False),
            input.rotation(Rotation.PITCH),
            y,
            gamepad._dpad(GameDirection.NO_DIRECTION),
            z,
            rx)
    if pins.digital_read_pin(DigitalPin.P16) == 1:
        gamepad.send(gamepad._buttons(GameButton.LEFT_STICK, True),
            input.rotation(Rotation.PITCH),
            y,
            gamepad._dpad(GameDirection.NO_DIRECTION),
            z,
            rx)
    else:
        gamepad.send(gamepad._buttons(GameButton.LEFT_STICK, False),
            input.rotation(Rotation.PITCH),
            y,
            gamepad._dpad(GameDirection.NO_DIRECTION),
            z,
            rx)
rx = 0
z = 0
y = 0
gamepad.start_gamepad_service()

def on_forever():
    encoder()
    joystick()
    switches()
    gamepad.send(gamepad._buttons(GameButton.NONE, True),
        input.rotation(Rotation.PITCH),
        y,
        gamepad._dpad(GameDirection.NO_DIRECTION),
        z,
        rx)
basic.forever(on_forever)

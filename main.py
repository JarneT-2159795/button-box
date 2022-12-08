def joystick():
    if pins.analog_read_pin(AnalogPin.P0) < 100:
        keyboard.send_string("l")
    if pins.analog_read_pin(AnalogPin.P0) > 950:
        keyboard.send_string("r")
    if pins.analog_read_pin(AnalogPin.P1) < 100:
        keyboard.send_string("u")
    if pins.analog_read_pin(AnalogPin.P1) > 950:
        keyboard.send_string("d")
    if pins.digital_read_pin(DigitalPin.P5) == 0:
        keyboard.send_string("j")
def switches():
    if pins.digital_read_pin(DigitalPin.P2) == 1:
        keyboard.send_string("p")
    if pins.digital_read_pin(DigitalPin.P8) == 1:
        keyboard.send_string("s")
def encoder():
    if pins.digital_read_pin(DigitalPin.P11) == 0:
        if pins.digital_read_pin(DigitalPin.P12) == 0:
            keyboard.send_string("q")
        else:
            keyboard.send_string("b")
    if pins.digital_read_pin(DigitalPin.P16) == 1:
        keyboard.send_string("e")
keyboard.start_keyboard_service()

def on_forever():
    encoder()
    joystick()
    switches()
basic.forever(on_forever)

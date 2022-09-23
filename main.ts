basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        basic.showString("white")
    } else {
        basic.showString("Black")
    }
})

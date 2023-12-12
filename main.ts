radio.onReceivedNumber(function (receivedNumber) {
    if (faze == 0) {
        if (receivedNumber == 1) {
            basic.showIcon(IconNames.Pitchfork)
        } else if (receivedNumber == 2) {
            basic.showIcon(IconNames.Giraffe)
        } else if (receivedNumber == 3) {
            basic.showIcon(IconNames.EighthNote)
        } else if (receivedNumber == 4) {
            basic.showIcon(IconNames.Umbrella)
        } else if (receivedNumber == 5) {
            basic.showIcon(IconNames.Skull)
        } else if (receivedNumber == 6) {
            basic.showIcon(IconNames.TShirt)
        } else if (receivedNumber == 7) {
            basic.showIcon(IconNames.Rollerskate)
        } else if (receivedNumber == 8) {
            basic.showIcon(IconNames.House)
        } else if (receivedNumber == 9) {
            basic.showIcon(IconNames.Target)
        } else if (receivedNumber == 10) {
            basic.showIcon(IconNames.Heart)
        }
        faze = 1
    }
    if (receivedNumber == 99) {
        for (let index = 0; index < 50; index++) {
            basic.showString("KLIC JE NA SPODNI STRANE TRUHLY")
        }
    } else if (receivedNumber == 88) {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.showIcon(IconNames.SmallSquare)
        faze = 0
    }
})
input.onButtonPressed(Button.A, function () {
    if (faze == 1) {
        zadejcislo()
    }
})
input.onButtonPressed(Button.B, function () {
    if (faze == 1) {
        radio.sendNumber(zadanecislo)
        zadanecislo = 0
        basic.showIcon(IconNames.SmallSquare)
        faze = 0
    }
})
function zadejcislo () {
    if (zadanecislo == 9) {
        zadanecislo = 1
    } else {
        zadanecislo += 1
    }
    basic.showNumber(zadanecislo)
}
let zadanecislo = 0
let faze = 0
radio.setGroup(11)
basic.showIcon(IconNames.Square)
basic.pause(2000)
basic.showIcon(IconNames.SmallSquare)
faze = 0

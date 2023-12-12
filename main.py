def on_received_number(receivedNumber):
    global Obel
    Obel = receivedNumber
    porovnej()
radio.on_received_number(on_received_number)

def porovnej():
    global cisloukolu
    if cisloukolu == 9 and (Aster == 9 and Obel == 9):
        pass
    elif cisloukolu == 1 and (Aster == 1 and Obel == 1):
        cisloukolu += 1
        basic.show_icon(IconNames.HAPPY)
        basic.pause(1000)
        basic.show_icon(IconNames.GIRAFFE)
    else:
        cisloukolu = 1
        basic.show_icon(IconNames.SAD)
        basic.pause(1000)
        basic.show_icon(IconNames.PITCHFORK)

def on_button_pressed_a():
    if faze == 0:
        zadejcislo()
    elif faze == 5:
        pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Aster, zadanecislo, faze
    if faze == 5:
        pass
    elif faze == 0:
        Aster = zadanecislo
        zadanecislo = 0
        faze = 1
        radio.send_number(11)
        basic.show_icon(IconNames.SMALL_SQUARE)
    else:
        pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def zadejcislo():
    global zadanecislo
    if zadanecislo == 9:
        zadanecislo = 0
    else:
        zadanecislo += 1
    basic.show_number(zadanecislo)
zadanecislo = 0
Aster = 0
Obel = 0
cisloukolu = 0
faze = 0
radio.set_group(11)
faze = 0
cisloukolu = 1
basic.show_icon(IconNames.HEART)
basic.pause(2000)
basic.show_icon(IconNames.PITCHFORK)
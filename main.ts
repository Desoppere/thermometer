let temperatuur = 0
input.onButtonPressed(Button.A, function () {
    temperatuur = input.temperature()
    basic.showNumber(temperatuur)
})
basic.forever(function () {
	
})

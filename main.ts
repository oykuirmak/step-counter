input.onGesture(Gesture.Shake, function () {
    adım += 1
    led.stopAnimation()
})
let adım = 0
basic.forever(function () {
    basic.showNumber(adım)
})

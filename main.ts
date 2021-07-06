radio.onReceivedString(function (receivedString) {
    if (receivedString == "move lefter") {
        basic.showArrow(ArrowNames.West)
    } else if (receivedString == "move righter") {
        basic.showArrow(ArrowNames.East)
    } else if (receivedString == "move forwarder") {
        basic.showArrow(ArrowNames.North)
    } else if (receivedString == "move downer") {
        basic.showArrow(ArrowNames.South)
    }
})
let steps = 0
radio.setGroup(2)

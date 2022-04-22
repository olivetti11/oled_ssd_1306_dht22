input.onButtonPressed(Button.A, function () {
    OLED.clear()
    OLED.writeStringNewLine("hello mr. microbit!")
})
input.onButtonPressed(Button.B, function () {
    OLED.clear()
    OLED.writeStringNewLine("sensor data dht22")
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P0,
    true,
    false,
    true
    )
    OLED.newLine()
    OLED.writeString("temp ")
    OLED.writeNum(dht11_dht22.readData(dataType.temperature))
    OLED.writeStringNewLine(" C")
    OLED.writeString("hum  ")
    OLED.writeNum(dht11_dht22.readData(dataType.humidity))
    OLED.writeStringNewLine(" %")
})
OLED.init(128, 64)
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)

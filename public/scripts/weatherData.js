function weather() {
    let maxTemp = document.querySelector(".max-temp")
    let minTemp = document.querySelector(".min-temp")
    getLocation()
    socket.on("weatherData" , (data) => {
        max_temp = Math.ceil(parseFloat(data.main.feels_like))
        min_temp = Math.ceil(parseFloat(data.main.temp_min))
        max_temp_celsius = max_temp - 273.15
        min_temp_celsius = min_temp - 273.15
        maxTemp.value = Math.ceil(max_temp_celsius)
        minTemp.value = Math.ceil(min_temp_celsius)     
    })
}
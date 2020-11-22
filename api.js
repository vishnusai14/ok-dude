require("dotenv").config()

const API = process.env.API_KEY
module.exports = {
     getWeather : (latitude , longitude) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API}`
        return url
    },
    
}
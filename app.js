const express = require("express")
const socketio = require("socket.io")
const bodyParser = require("body-parser")
const api = require("./api")
const newsApi = require("newsapi")
const PORT =  process.env.PORT || 3000
const https = require("https")
const app = express()
app.use(bodyParser.urlencoded({extended : true}))

const news = new newsApi(process.env.NEWS_KEY)

app.use(express.static("public"))

app.get("/" , (req,res) => {
    res.send("index.html")
})

const server = app.listen(PORT , () => {
  console.log("Server Started")
})
const io = socketio(server)

io.on("connect" , (socket) => {
  news.v2.topHeadlines({
    sources : 'bbc-news,the-verge'
  }).then(responses => {
    socket.emit("news-title" , responses)
  })
  // console.log(socket)
  socket.on("pos" , (position)=>{
    const url = api.getWeather(position.poslat , position.poslang)
    // console.log(url)
    https.get(url , (res) => {
      res.on("data" , (data) => {
                weatherData = JSON.parse(data)
                socket.emit("weatherData" , weatherData)
            })
        })
    // socket.emit("weatherData" , weatherData)
  })
})

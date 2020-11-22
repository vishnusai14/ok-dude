const btn = document.querySelector(".talk")
const speech = window.SpeechRecognition || window.webkitSpeechRecognition
const reader = window.speechSynthesis
const reco = new speech()
let title = []
let socket = io()
reco.onstart = () => {
    weather()
}
reco.onresult = (event) => {
    reply(event)
}
btn.addEventListener("click" , () => {
    reco.start()
})
const readAloud = (msg) => {   
    let utterThis = new SpeechSynthesisUtterance(msg)
    reader.speak(utterThis)
}
document.querySelector(".read-news").addEventListener("click" , () => {
    readOnlyNews()
})
document.querySelector(".stop").addEventListener("click" , () => {
    stopReading()
})
function stopReading() {
    reader.cancel()
}
function reply(event) {
    let msgToRead = getAnswer(event.results[0][0].transcript)
    if(msgToRead === "I cannot UnderStand What You Say"){
        let searchEventWhenNotUnderstand = event.results[0][0].transcript
        window.open(`https://www.google.com/search?q=${searchEventWhenNotUnderstand}` , "_blank")
        msgToRead = "Here are some Results From Google"
    }

    readAloud(msgToRead)
    if(msgToRead === "Getting the News"){
        readOnlyNews()
    }

    if(event.results[0][0].transcript.includes("pictures") || event.results[0][0].transcript.includes("photos") || event.results[0][0].transcript.includes("images") || event.results[0][0].transcript.includes("padangal") ||event.results[0][0].transcript.includes("images") || event.results[0][0].transcript.includes("padangal")||event.results[0][0].transcript.includes("image") || event.results[0][0].transcript.includes("photo") || event.results[0][0].transcript.includes("images") || event.results[0][0].transcript.includes("picture") ){
        let imageEvent = event.results[0][0].transcript
        window.open(`https://www.google.com/search?tbm=isch&q=${imageEvent}`)
    }
   
    if(event.results[0][0].transcript.includes("open YouTube")){
        window.open("https://www.youtube.com" ,"_blank")
    }
    if(event.results[0][0].transcript.includes("open Google")){
        window.open("https://www.google.com" ,"_blank")
    }
    if(event.results[0][0].transcript.includes("open Twitter")){
        window.open("https://www.twitter.com" ,"_blank")
    }
    if(event.results[0][0].transcript.includes("open Instagram")){
        window.open("https://www.instagram.com" ,"_blank")
    }
    if(event.results[0][0].transcript.includes("open Facebook")){
        window.open("https://www.facebook.com" ,"_blank")
    }
    if(event.results[0][0].transcript.includes("play")){
        let playEvent = event.results[0][0].transcript.slice(5,event.results[0][0].transcript.length)
        window.open(`https://www.youtube.com/results?search_query=${playEvent}` , "_blank")
    }
    if(event.results[0][0].transcript.includes("search")){
        let searchEvent = event.results[0][0].transcript.slice(6)
        // console.log(searchEvent)
        window.open(`https://www.google.co.in/search?q=${searchEvent}` , "_blank")
    }
    if(event.results[0][0].transcript.includes("google news")){
        let query = event.results[0][0].transcript.slice(11)
        // console.log(searchEvent)
        window.open(`https://news.google.com/search?q=${query}` , "_blank")
    }
}
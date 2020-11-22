const getAnswer = (msg) => {
    var readMsg = "I cannot UnderStand What You Say"
    if(msg.includes("weather")){
        const temp1 = document.querySelector(".max-temp").value
        const temp2 = document.querySelector(".min-temp").value
        readMsg = `Maximum Temperature is ${temp1} celsius and minimum temperature is ${temp2} celsius`
    }else if(msg.includes("play")){
        // console.log("play")
        readMsg = "playing"
    }else if(msg.includes("search")){
        // console.log("search")
        readMsg = "searching"
    }else if(msg.includes("picture") || msg.includes("images") || msg.includes("image") || msg.includes("photos") || msg.includes("pictures") || msg.includes("photo") ||msg.includes("photos")){
        readMsg = "Searching in Google Photo"
    }else if(msg.includes("google news")){
        readMsg = "The Result From Google News"
    }
    else{
        // console.log("else")
        answers.forEach((answer) => {
            // console.log(answer)
            if(answer.ques.includes(msg)){
                readMsg = answer.ans[Math.floor(Math.random()*answer.ans.length)]
            }
           
        })
    
    }
    
        // console.log(readMsg)
    return readMsg
}

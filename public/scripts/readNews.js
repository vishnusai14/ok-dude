socket.on("news-title" , (data) => {
    data.articles.forEach((dataTitle) => {
        title.push(dataTitle.title)
    })
})

function readOnlyNews(){
    readAloud("Here are some Latest News")
    title.forEach((news) => {
        readAloud(news)
    })
}
const Pornhub = require("pornhub-api")
const Videos = new Pornhub.Videos()
 
Videos.search({
    search: "Hard"
}).then(videos => {
    console.log(videos)
})
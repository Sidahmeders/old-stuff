//* watch tutorial CallBack *//

const userLeft = false
const userWatchingCatMeme = false

function watchTutorialCallback(callback, errorCallbcak) {
    if(userLeft) {
        errorCallbcak({
            name: "user Left",
            message: ':('
        })
    } else if(userWatchingCatMeme) {
        errorCallbcak({
            name: "user Watching Cat Meme",
            message: "web dev is fullStack"
        })
    } else{
        callback("Im going FullStack No Matter What")
    }
}


watchTutorialCallback(message => {
    console.log('success is ', message)
}, error => {
    console.log('Failure is', error.name)
})




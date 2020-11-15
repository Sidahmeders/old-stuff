//* Simple Promise *//

let P = new Promise((resolve, reject) => {
    let a = 1+1
    if(a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

P.then(message => {
    console.log('This is In the Then', message)
}).catch(error => {
    console.log('This Is in The catch', error)
})


//* watch tutorial Promise *//

const userLeft = false
const userWatchingCatMeme = false

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
    if(userLeft) {
        reject({
            name: "user Left",
            message: ':('
        })
    } else if(userWatchingCatMeme) {
        reject({
            name: "user Watching Cat Meme",
            message: "web dev is fullStack"
        })
    } else{
        resolve("Im going FullStack No Matter What")
    }
    })
}


watchTutorialPromise().then(message =>{
    console.log('success is ', message)
}).catch(error => {
    console.log('error is ', error.name)
}) 

//* Promise .Dot All *//

const goToWork = new Promise((resolve, reject) => {
    resolve('I Woke Up And gone to my job')
})

const studyJavaScript = new Promise((resolve, reject) => {
    resolve('Im allways studying javascript and css')
})

const doMyWorkOut = new Promise((resolve, reject) => {
    resolve('Im all in the Pullup & parallel bar')
})

Promise.all([
    goToWork,
    studyJavaScript,
    doMyWorkOut
]).then(messages => {
    console.log(messages)
})


//* Promise To fulfill my promise *//

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if(location === "Google") {
            resolve('Google Says hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('process received');
        resolve(`Extra Information: ${response}`);
    })
}

makeRequest('Google').then(response => {
    console.log('process recevied');
    return processRequest(response);
}).then(processRs => {
    console.log(processRs)
}).catch(err => {
    console.log(err)
})





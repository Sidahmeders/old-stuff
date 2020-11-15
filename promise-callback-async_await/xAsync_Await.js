//* async await *//

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

async function doWork(){
    try {
    const resopnse = await makeRequest('Google');
    console.log('response recevied');
    const processedResponse = await processRequest(resopnse);
    console.log(processedResponse);
    } catch(err) {
        console.log(err)
    }
}
doWork()




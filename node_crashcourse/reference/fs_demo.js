const fs = require("fs");
const path = require("path");

// // create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) console.log(err);
//     console.log('folder created...')
// })

// // create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'he who thinks he can', err => {
//     if (err) console.log(err);
//     console.log('file written to...')

//     // callback
//     // append to file
// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' and he who thinks he can not are both usaully right', err => {
//     if (err) console.log(err);
//     console.log('file written to...')
// })
// })

// read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) console.log(err);
//     console.log(data)
// })

// rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloRenamed.txt'), (err) => {
    if (err) console.log(err);
    console.log('file renamed...')
})


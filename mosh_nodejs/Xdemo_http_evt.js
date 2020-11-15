//* EventEmitter Methods *//

const EventEmitter = require('events')

const url = 'http://mylogger.io/log'

class Log extends EventEmitter {
    log(message) {
      console.log(message)
      this.emit('love', { id: 77, message: "message emitted"})
    } 
}

logger = new Log();

logger.on('love', arg => {
    console.log('this is your ', arg)
})

logger.log('king raganar')

//* The Http Methods *//

const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('<h1>Im Not Gonna Give Up</h1>')
        res.end()
    }
    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]))
        res.end()
    }
})

server.listen(2200)

console.log('listening on port 2200')



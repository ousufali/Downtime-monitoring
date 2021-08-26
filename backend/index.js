const http = require('http')
const app = require('./app')
const PORT = require('./secrets/config').PORT

// console.log(PORT)



const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`t14 app is listening on locahost:${PORT}.`)
})
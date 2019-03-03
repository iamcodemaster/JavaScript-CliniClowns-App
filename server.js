const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const path = require('path')
const port = process.env.PORT || 5000
// development // production
const env = process.env.NODE_ENV || 'production';

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

var Users = require('./routes/Users')
var Clowns = require('./routes/Clowns')

app.use('/users', Users)
app.use('/clowns', Clowns)


// Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

// production mode
if(env === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
}

// build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})

// Socket io videochat

// create server for websockets
const server = require('http').Server(app);
// connect websockets to server
const io = require('socket.io')(server);
// start server
server.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
})

// Send emit to client function
const sendTo = (io, message) => {
  io.emit('message', JSON.stringify(message))
}
let users = {}
let clowns = {}

// On connection with the server
io.on('connection', io => {
  console.log('User connected')

  // On client message
  io.on('message', message => {

    // get data from client message
    let data = null
    try {
      data = JSON.parse(message)
    } catch (error) {
      console.error('Invalid JSON', error)
      data = {}
    }

    // check data type
    switch (data.type) {
      // on user active
      case 'login':
        console.log('User active:', data.username)
        if (users[data.username]) {
          sendTo(io, { type: 'login', success: false })
        } else {
          users[data.username] = io
          io.username = data.username
          sendTo(io, { type: 'login', success: true })
        }
        break
      case 'offer':
        console.log('Sending offer to: ', data.otherUsername)
        console.log(users);
        if (users[data.otherUsername] != null) {
          io.otherUsername = data.otherUsername
          sendTo(users[data.otherUsername], {
            type: 'offer',
            offer: data.offer,
            username: io.username
          })
        }
        break
      case 'answer':
        console.log('Sending answer to: ', data.otherUsername)
        if (users[data.otherUsername] != null) {
          io.otherUsername = data.otherUsername
          sendTo(users[data.otherUsername], {
            type: 'answer',
            answer: data.answer
          })
        }
        break
      case 'candidate':
        console.log('Sending candidate to:', data.otherUsername)
        if (users[data.otherUsername] != null) {
          sendTo(users[data.otherUsername], {
            type: 'candidate',
            candidate: data.candidate
          })
        }
        break
      case 'close':
        console.log('Disconnecting from', data.otherUsername)
        users[data.otherUsername].otherUsername = null

        if (users[data.otherUsername] != null) {
          sendTo(users[data.otherUsername], { type: 'close' })
        }

        break

      default:
        sendTo(io, {
          type: 'error',
          message: 'Command not found: ' + data.type
        })

        break
    }
  })

  io.on('close', () => {
    if (io.username) {
      delete users[io.username]

      if (io.otherUsername) {
        console.log('Disconnecting from ', io.otherUsername)
        users[io.otherUsername].otherUsername = null

        if (users[io.otherUsername] != null) {
          sendTo(users[io.otherUsername], { type: 'close' })
        }
      }
    }
  })
})

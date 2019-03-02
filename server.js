const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const path = require('path')
const port = process.env.PORT || 5000
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

// start server
app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
})




// Websockets videochat //

var io = require('socket.io')();

io.on('connection', (client) => {
  console.log("hello");
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});

const ioPort = 5050;
io.listen(ioPort);
console.log('listening on port ', ioPort);

// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });

// const WebSocket = require('ws')
// const wss = new WebSocket.Server({ port: 5050 })
// let users = {}

// const sendTo = (ws, message) => {
//   ws.send(JSON.stringify(message))
// }

// wss.on('connection', ws => {
//   console.log('User connected')

//   ws.on('message', message => {
//     let data = null

//     try {
//       data = JSON.parse(message)
//     } catch (error) {
//       console.error('Invalid JSON', error)
//       data = {}
//     }

//     switch (data.type) {
//       case 'login':
//         console.log('User logged', data.username)
//         if (users[data.username]) {
//           sendTo(ws, { type: 'login', success: false })
//         } else {
//           users[data.username] = ws
//           ws.username = data.username
//           sendTo(ws, { type: 'login', success: true })
//         }
//         break
//       case 'offer':
//         console.log('Sending offer to: ', data.otherUsername)
//         if (users[data.otherUsername] != null) {
//           ws.otherUsername = data.otherUsername
//           sendTo(users[data.otherUsername], {
//             type: 'offer',
//             offer: data.offer,
//             username: ws.username
//           })
//         }
//         break
//       case 'answer':
//         console.log('Sending answer to: ', data.otherUsername)
//         if (users[data.otherUsername] != null) {
//           ws.otherUsername = data.otherUsername
//           sendTo(users[data.otherUsername], {
//             type: 'answer',
//             answer: data.answer
//           })
//         }
//         break
//       case 'candidate':
//         console.log('Sending candidate to:', data.otherUsername)
//         if (users[data.otherUsername] != null) {
//           sendTo(users[data.otherUsername], {
//             type: 'candidate',
//             candidate: data.candidate
//           })
//         }
//         break
//       case 'close':
//         console.log('Disconnecting from', data.otherUsername)
//         users[data.otherUsername].otherUsername = null

//         if (users[data.otherUsername] != null) {
//           sendTo(users[data.otherUsername], { type: 'close' })
//         }

//         break

//       default:
//         sendTo(ws, {
//           type: 'error',
//           message: 'Command not found: ' + data.type
//         })

//         break
//     }
//   })

//   ws.on('close', () => {
//     if (ws.username) {
//       delete users[ws.username]

//       if (ws.otherUsername) {
//         console.log('Disconnecting from ', ws.otherUsername)
//         users[ws.otherUsername].otherUsername = null

//         if (users[ws.otherUsername] != null) {
//           sendTo(users[ws.otherUsername], { type: 'close' })
//         }
//       }
//     }
//   })
// })

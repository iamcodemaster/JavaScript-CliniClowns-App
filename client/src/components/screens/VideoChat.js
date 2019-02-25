import React, { Component } from 'react'
import { requireAuth } from '../../functions/AuthFunctions'

class VideoChat extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            nickname: '',
            firstName: '',
            lastName: '',
            email: '',
            ws: new WebSocket('ws://localhost:8000'),
            connection: new RTCPeerConnection({
                iceServers: [{ url: 'stun:stun2.1.google.com:19302' }]
            }),
            name: null,
            otherUsername: null
        }
    }

    componentDidMount () {
        // get data of loggedin user
        let auth = requireAuth();
        // if user logged in stay on the page
        if(auth.res === true) {
            if(auth.user.type === 'user') {
                this.setState({
                    id: auth.user.id,
                    firstName: auth.user.firstName,
                    lastName: auth.user.lastName,
                    email: auth.user.email
                })
            } else if(auth.user.type === 'clown') {
                this.setState({
                    id: auth.user.id,
                    nickname: auth.user.nickname,
                    firstName: auth.user.firstName,
                    lastName: auth.user.lastName,
                    email: auth.user.email
                })
            }
        } else {
            this.props.history.push(`/login`)
        }

        // Websockets
        this.state.ws.onopen = () => {
            console.log('Connected to the signaling server')
        }
          
        this.state.ws.onerror = err => {
            console.error(err)
        }
          
        this.state.ws.onmessage = msg => {
            console.log('Got message', msg.data)
          
            const data = JSON.parse(msg.data)
          
            switch (data.type) {
              case 'login':
                handleLogin(data.success)
                break
              case 'offer':
                handleOffer(data.offer, data.username)
                break
              case 'answer':
                handleAnswer(data.answer)
                break
              case 'candidate':
                handleCandidate(data.candidate)
                break
              case 'close':
                handleClose()
                break
              default:
                break
            }
        }

        const sendMessage = message => {
            if (this.state.otherUsername) {
                message.otherUsername = this.state.otherUsername
            }
          
            this.state.ws.send(JSON.stringify(message))
        }

        document.querySelector('div#call').style.display = 'none'

        document.querySelector('button#login').addEventListener('click', event => {
            let username = document.querySelector('#username').value

            if (username.length < 0) {
                alert('Please enter a username 🙂')
                return
            }

            sendMessage({
                type: 'login',
                username: auth.user.firstName
            })
        })

        const handleLogin = async success => {
            if (success === false) {
                alert('😞 Username already taken')
            } else {
                document.querySelector('div#login').style.display = 'none'
                document.querySelector('div#call').style.display = 'block'
            
                let localStream
                try {
                    localStream = await navigator.mediaDevices.getUserMedia({
                        video: { facingMode: "user" },
                        audio: true
                    })
                } catch (error) {
                    alert(`${error.name}`)
                    console.error(error)
                }
            
                document.querySelector('video#local').srcObject = localStream
            
                this.state.connection.addStream(localStream)
            
                this.state.connection.onaddstream = event => {
                    document.querySelector('video#remote').srcObject = event.stream
                }
            
                this.state.connection.onicecandidate = event => {
                    if (event.candidate) {
                    sendMessage({
                        type: 'candidate',
                        candidate: event.candidate
                    })
                    }
                }
            }
        }

        document.querySelector('button#call').addEventListener('click', () => {
            const callToUsername = document.querySelector('input#username-to-call').value
        
            if (callToUsername.length === 0) {
                alert('Enter a username 😉')
                return
            }
            
            this.setState({
                otherUsername: callToUsername
            })
        
            this.state.connection.createOffer(
                offer => {
                    sendMessage({
                        type: 'offer',
                        offer: offer
                    })
            
                    this.state.connection.setLocalDescription(offer)
                },
                error => {
                    alert('Error when creating an offer')
                    console.error(error)
                }
            )
        })

        const handleOffer = (offer, username) => {
            this.setState({
                otherUsername: username
            })

            this.state.connection.setRemoteDescription(new RTCSessionDescription(offer))
            this.state.connection.createAnswer(
                answer => {
                    this.state.connection.setLocalDescription(answer)
                    sendMessage({
                        type: 'answer',
                        answer: answer
                    })
                },
                error => {
                    alert('Error when creating an answer')
                    console.error(error)
                }
            )
        }
        
        const handleAnswer = answer => {
            this.state.connection.setRemoteDescription(new RTCSessionDescription(answer))
        }
        
        const handleCandidate = candidate => {
            this.state.connection.addIceCandidate(new RTCIceCandidate(candidate))
        }
        
        document.querySelector('button#close-call').addEventListener('click', () => {
                sendMessage({
                    type: 'close'
                })
                handleClose()
            })
            
        const handleClose = () => {
            this.setState({
                otherUsername: null
            })
            document.querySelector('video#remote').src = null
            this.state.connection.close()
            this.state.connection.onicecandidate = null
            this.state.connection.onaddstream = null
        }


    }

    render () {
        return (
            <div>
                <div id="login">
                    <label htmlFor="username">Login</label>
                    <input id="username" placeholder="Login" required="" autoFocus="" />
                    <button id="login">Login</button>
                </div>

                <div id="call">
                    <video id="local" autoPlay></video>
                    <video id="remote" autoPlay></video>

                    <div>
                        <input id="username-to-call" placeholder="Username to call" />
                        <button id="call">Call</button>
                        <button id="close-call">Close call</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoChat
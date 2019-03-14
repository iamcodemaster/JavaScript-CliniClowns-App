import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { requireAuth } from '../../functions/AuthFunctions'
import ScreenNav from '../navigation/ScreenNav'
import './Settings.css'

class Settings extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            nickname: '',
            firstName: '',
            lastName: '',
            email: ''
        }
    }

    logOut = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        this.props.history.push(`/`)
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
        }
    }

    render () {
        const dataLoggedIn = (
            <div>
                <p>Name: {this.state.firstName} {this.state.lastName}</p>
                <p>Email: {this.state.email}</p>
                <a href="#" onClick={this.logOut.bind(this)}>Logout</a>
            </div>
        );
        const data = (
            <div>
                <Link to="/login">Login</Link>
            </div>
        );
        return (
            <div>
                <ScreenNav 
                    title={'Instellingen'} />
                <div className="container">
                    <h1>Instellingen</h1>
                </div>
                {localStorage.token ? dataLoggedIn : data}
            </div>
        )
    }
}

export default Settings
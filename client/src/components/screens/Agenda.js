import React, { Component } from 'react'
import ScreenNav from '../navigation/ScreenNav'
import { requireAuth } from '../../functions/AuthFunctions'
import '../../main.css'

class Agenda extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
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
    }   

    render () {
        return (
            <div>
                <ScreenNav
                    title={'Agenda'} />
                <div className="container">
                    <div>
                        <h1 className="text-center">Agenda</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Agenda
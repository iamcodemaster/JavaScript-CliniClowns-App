import React, { Component } from 'react'
import { requireAuth } from '../../functions/AuthFunctions'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            nickname: '',
            first_name: '',
            last_name: '',
            email: ''
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
                    first_name: auth.user.first_name,
                    last_name: auth.user.last_name,
                    email: auth.user.email
                })
            } else if(auth.user.type === 'clown') {
                this.setState({
                    id: auth.user.id,
                    nickname: auth.user.nickname,
                    first_name: auth.user.first_name,
                    last_name: auth.user.last_name,
                    email: auth.user.email
                })
            }
        } else {
            this.props.history.push(`/login`)
        }
    }

    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>Id</td>
                                <td>{this.state.id}</td>
                            </tr>
                            <tr>
                                <td>First Name</td>
                                <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile
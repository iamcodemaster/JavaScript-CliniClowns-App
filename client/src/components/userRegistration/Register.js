import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../../functions/UserFunctions'
import ScreenNav from '../navigation/ScreenNav'
import '../../main.css'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onBack = e => {
        e.preventDefault();
        this.props.history.push(`/`);
    };

    onHome = e => {
        e.preventDefault();
        this.props.history.push(`/`);
    };

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }

        register(user).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render () {
        return (
            <div>
                <nav className="screen--navigation">
                    <ul className="screen--navigation--list">
                        <li className="screen--navigation--item-left"><a href="#" onClick={this.onBack}>Terug</a></li>
                        <li className="screen--navigation--item-center">Register</li>
                        <li className="screen--navigation--item-right"><a href="#" onClick={this.onHome}>Home</a></li>
                    </ul>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form noValidate onSubmit={this.onSubmit}>
                                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text"
                                        className="form-control"
                                        name="firstName"
                                        placeholder="Enter Fist Name"
                                        value={this.state.firstName}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text"
                                        className="form-control"
                                        name="lastName"
                                        placeholder="Enter Last Name"
                                        value={this.state.lastName}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Enter Email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Enter Password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button type="submit"
                                    className="btn btn-lg btn-primary btn-block">
                                    Register
                                </button>
                                <Link to="/login">Login</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
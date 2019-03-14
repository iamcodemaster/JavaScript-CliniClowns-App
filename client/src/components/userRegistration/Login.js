import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../../functions/UserFunctions'
import ScreenNav from '../navigation/ScreenNav'
import '../../main.css'

class Login extends Component {
    constructor() {
        super()
        this.state = {
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

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (res) {
                this.props.history.push(`/`)
            }
        })
    }

    render () {
        return (
            <div>
                <nav className="screen--navigation">
                    <ul className="screen--navigation--list">
                        <li className="screen--navigation--item-left"><a href="#" onClick={this.onBack}>Terug</a></li>
                        <li className="screen--navigation--item-center">Login</li>
                        <li className="screen--navigation--item-right"><a href="#" onClick={this.onHome}>Home</a></li>
                    </ul>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form noValidate onSubmit={this.onSubmit}>
                                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
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
                                <button type="submit">Sign in</button>
                                <Link to="/register">Register</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
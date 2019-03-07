import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('token')
        this.props.history.push(`/`)
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/clowns" className="nav-link">
                        Clowns
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/videos" className="nav-link">
                        Videos
                    </Link>
                </li>
            </ul>
        )
        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        User
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/videochat" className="nav-link">
                        Video Chat
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="#" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )

        return (
            <nav>    
                {localStorage.token ? userLink : loginRegLink}
            </nav>
        )
    }
}

export default withRouter(Navbar)
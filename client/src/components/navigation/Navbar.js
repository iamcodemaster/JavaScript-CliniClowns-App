import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { requireAuth } from '../../functions/AuthFunctions'
import './Navbar.css'

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            clown: false
        }
    }

    componentDidMount() {
        // get data of loggedin user
        let auth = requireAuth();
        // if user logged in stay on the page
        if(auth.res === true) {
            if(auth.user.type === 'clown') {
                this.setState({
                    clown: true
                })
            }
        }
    }

    render() {
        const userNav = (
            <ul className="navbar-nav">
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
                <li className="nav-item">
                    <Link to="/videochat" className="nav-link">
                        Video Chat
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/agenda" className="nav-link">
                        Agenda
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/guestbook" className="nav-link">
                        Gastenboek
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/settings" className="nav-link">
                        Instellingen
                    </Link>
                </li>
            </ul>
        )
        const clownNav = (
            <ul className="navbar-nav">
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
                <li className="nav-item">
                    <Link to="/videochat" className="nav-link">
                        Video Chat
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/agenda" className="nav-link">
                        Agenda
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/guestbook" className="nav-link">
                        Gastenboek
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/settings" className="nav-link">
                        Instellingen
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin" className="nav-link">
                        Admin
                    </Link>
                </li>
            </ul>
        )
        return (
            <nav>    
                {this.state.clown ? clownNav : userNav}
            </nav>
        )
    }
}

export default withRouter(Navbar)
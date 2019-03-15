import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { requireAuth } from '../../functions/AuthFunctions'
import '../../main.css'

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
                    <Link to="/clowns" className="nav-link nav-clown">
                        <img src="/assets/icons/clown.png" alt="navigatie clowns"></img>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/videos" className="nav-link nav-videos">
                        <img src="/assets/icons/videos.png" alt="navigatie video's"></img>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/videochat" className="nav-link nav-cam">
                        <img src="/assets/icons/cam.png" alt="navigatie webcam"></img>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/agenda" className="nav-link nav-agenda">
                        <img src="/assets/icons/agenda.png" alt="navigatie agenda"></img>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/guestbook" className="nav-link nav-gastenboek">
                        <img src="/assets/icons/gastenboek.png" alt="navigatie gastenboek"></img>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/settings" className="nav-link nav-settings">
                        <img src="/assets/icons/settings.png" alt="navigatie instellingen"></img>
                    </Link>
                </li>
            </ul>
        )
        const clownNav = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/clowns" className="nav-link nav-clown">
                        <img src="/assets/icons/clown.png" alt="navigatie clowns"></img>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/videos" className="nav-link nav-videos">
                        <img src="/assets/icons/videos.png" alt="navigatie video's"></img>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/videochat" className="nav-link nav-cam">
                        <img src="/assets/icons/cam.png" alt="navigatie webcam"></img>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/agenda" className="nav-link nav-agenda">
                        <img src="/assets/icons/agenda.png" alt="navigatie agenda"></img>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/guestbook" className="nav-link nav-gastenboek">
                        <img src="/assets/icons/gastenboek.png" alt="navigatie gastenboek"></img>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/settings" className="nav-link nav-settings">
                        <img src="/assets/icons/gastenboek.png" alt="navigatie instellingen"></img>
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
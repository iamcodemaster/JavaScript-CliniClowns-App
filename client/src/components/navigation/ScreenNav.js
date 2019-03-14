import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './ScreenNav.css'

class ScreenNav extends Component {
    constructor() {
        super()
        this.state = {

        }

    }

    onBack = e => {
        e.preventDefault();
        this.props.history.goBack();
    };

    onHome = e => {
        e.preventDefault();
        this.props.history.push(`/`);
    };

    render() {
        return (
            <nav className="screen--navigation">
                <ul className="screen--navigation--list">
                    <li className="screen--navigation--item-left"><a href="#" onClick={this.onBack}>Terug</a></li>
                    <li className="screen--navigation--item-center">{this.props.title}</li>
                    <li className="screen--navigation--item-right"><a href="#" onClick={this.onHome}>Home</a></li>
                </ul>
            </nav>
        )
    }
}

export default withRouter(ScreenNav)
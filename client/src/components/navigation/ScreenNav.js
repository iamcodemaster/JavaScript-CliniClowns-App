import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class ScreenNav extends Component {
    constructor() {
        super()
        this.state = {

        }

    }

    onClick = e => {
        e.preventDefault();
        this.props.history.goBack();
    };

    render() {
        return (
            <nav>
                <a href="#" onClick={this.onClick}> Click me</a>
            </nav>
        )
    }
}

export default withRouter(ScreenNav)
import React, { Component } from 'react'
import ScreenNav from '../navigation/ScreenNav'
import './Videos.css'

class Videos extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    componentDidMount() {
    }

    render () {
        return (
            <div className="container">
                <ScreenNav/>
                <div>
                    <h1 className="text-center">Videos</h1>
                </div>
            </div>
        )
    }
}

export default Videos
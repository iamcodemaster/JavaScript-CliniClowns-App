import React, { Component } from 'react'
import ScreenNav from '../navigation/ScreenNav'
import './Agenda.css'

class Agenda extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
    }   

    render () {
        return (
            <div className="container">
            <ScreenNav/>
                <div>
                    <h1 className="text-center">Agenda</h1>
                </div>
            </div>
        )
    }
}

export default Agenda
import React, { Component } from 'react'
import Navbar from '../navigation/Navbar'

class Home extends Component {
    render () {
        return (
            <div className="container">
                <Navbar />
                <div>
                    <h1 className="text-center">Map</h1>
                </div>
            </div>
        )
    }
}

export default Home
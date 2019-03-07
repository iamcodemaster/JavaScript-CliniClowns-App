import React, { Component } from 'react'
import Navbar from '../navigation/Navbar'
import './Home.css'

class Home extends Component {
    render () {
        return (
            <div className="container">
            <header>
                <a href="/" class="logo">
                    <p>Home</p>
                </a>
                <Navbar />
            </header>
                <div>
                </div>
            </div>
        )
    }
}

export default Home
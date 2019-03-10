import React, { Component } from 'react'
import Navbar from '../navigation/Navbar'
import './Home.css'

class Home extends Component {
    render () {
        return (
            <div className="container">
            <div class="background">
                <img src="/assets/map/map.png" alt="achtergrond"></img>
            </div>
            <header>
                <a href="/" class="logo">
                    <p>Home</p>
                </a>
                <Navbar />
            </header>
                <div class="map">
                    <div class="map-element" id="clowns">
                        <a href="/clowns">
                            <img src="/assets/map/clownstent.png" alt="ontdek de clowns"></img>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
import React, { Component } from 'react'
import Navbar from '../navigation/Navbar'
import '../../main.css'

class Home extends Component {
    render () {
        return (
            <div className="container home">
            <div className="background">
                <img src="/assets/map/map.png" alt="achtergrond"></img>
            </div>
            <header>
                <a href="/" className="logo">
                    <p>Home</p>
                </a>
                <Navbar />
            </header>
                <div className="map">
                    <div className="map-element" id="clowns">
                        <a href="/clowns">
                            <img src="/assets/map/clowns.png" alt="ontdek de clowns"></img>
                        </a>
                    </div>
                    <div className="map-element" id="tipi">
                        <a href="/videos">
                            <img src="/assets/map/tipi.png" alt="bekijk onze video's"></img>
                        </a>
                    </div>
                    <div className="map-element" id="airballoon">
                        <a href="/videochat">
                            <img src="/assets/map/airballoon.png" alt="videocammen"></img>
                        </a>
                    </div>
                    <div className="map-element" id="caravan">
                        <a href="/agenda">
                            <img src="/assets/map/caravan.png" alt="bekijk hier je agenda"></img>
                        </a>
                    </div>
                    <div className="map-element" id="parasol">
                        <a href="/gastenboek">
                            <img src="/assets/map/parasol.png" alt="bekijk het gastenboek"></img>
                        </a>
                    </div>
                    <div className="map-element" id="tent">
                        <a href="/instellingen">
                            <img src="/assets/map/tent.png" alt="instellingen"></img>
                        </a>
                    </div>
                    <div className="map-element" id="sign">
                        <a href="/">
                            <img src="/assets/map/sign.png" alt="terug naar boven"></img>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
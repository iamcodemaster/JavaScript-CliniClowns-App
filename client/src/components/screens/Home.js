import React, { Component } from 'react'
import Navbar from '../navigation/Navbar'
import './Home.css'

class Home extends Component {
    render () {
        return (
            <div className="container home">
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
                            <img src="/assets/map/clowns.png" alt="ontdek de clowns"></img>
                        </a>
                    </div>
                    <div class="map-element" id="tipi">
                        <a href="/clowns">
                            <img src="/assets/map/tipi.png" alt="weet ik nog nie"></img>
                        </a>
                    </div>
                    <div class="map-element" id="airballoon">
                        <a href="/clowns">
                            <img src="/assets/map/airballoon.png" alt="ontdek de clowns"></img>
                        </a>
                    </div>
                    <div class="map-element" id="caravan">
                        <a href="/clowns">
                            <img src="/assets/map/caravan.png" alt="ontdek de clowns"></img>
                        </a>
                    </div>
                    <div class="map-element" id="parasol">
                        <a href="/clowns">
                            <img src="/assets/map/parasol.png" alt="ontdek de clowns"></img>
                        </a>
                    </div>
                    <div class="map-element" id="tent">
                        <a href="/clowns">
                            <img src="/assets/map/tent.png" alt="ontdek de clowns"></img>
                        </a>
                    </div>
                    <div class="map-element" id="sign">
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
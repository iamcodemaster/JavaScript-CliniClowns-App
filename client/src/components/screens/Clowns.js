import React, { Component } from 'react'
import { getAllClowns } from '../../functions/Functions'
import ScreenNav from '../navigation/ScreenNav'
import '../../main.css'

class Clowns extends Component {
    constructor() {
        super()
        this.state = {
            clowns: [],
        }
    }

    componentDidMount() {
        // get all clowns 
        getAllClowns().then(res => {
            this.setState({
                clowns: res.data
            })
        });
    }   

    render () {
        const listClowns = this.state.clowns.map((clown) =>
            <li key={clown.id}>
                <img src={window.location.origin + clown.image} alt={"foto " + clown.nickname}></img>
                <a href={"clowns/" + clown.id}>{clown.nickname}</a>
            </li>
        );

        return (
            <div>
                <ScreenNav
                    title={"Clowns"}/>
                <div className="container">
                    <div className="container--content">
                        <h1>Clowns</h1>
                        <ul className="container--flex">{listClowns}</ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Clowns
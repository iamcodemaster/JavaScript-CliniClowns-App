import React, { Component } from 'react'
import { getAllClowns } from '../../functions/Functions'

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
                <img src={clown.image} alt={"foto " + clown.first_name}></img>
                <a href={"clowns/" + clown.id}>{clown.first_name}</a>
            </li>
        );

        return (
            <div className="container">
                <div>
                    <h1 className="text-center">Clowns</h1>
                    <ul>{listClowns}</ul>
                </div>
            </div>
        )
    }
}

export default Clowns
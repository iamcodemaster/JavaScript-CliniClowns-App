import React, { Component } from 'react'
import { getClown } from '../../functions/Functions'
import ScreenNav from '../navigation/ScreenNav'

class Clowns extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            imageUrl: '',
        }
    }

    componentDidMount() {
        // get param from url query with -> this.props.match.params.id
        getClown(this.props.match.params.id).then(res => {
            this.setState({
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                imageUrl: '../src/logo.svg',
            })
        });
    }

    render () {
        return (
            <div className="container">
                <ScreenNav/>
                <div>
                    <h1 className="text-center">{this.state.firstName} {this.state.lastName}</h1>
                </div>
            </div>
        )
    }
}

export default Clowns
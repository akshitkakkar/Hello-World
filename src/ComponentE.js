import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

export class ComponentE extends Component {

    static contextType = UserContext

    render() {
        return (
            <div>
            Hello Component E {this.context}
            <ComponentF/>
            </div>
        )
    }
}

//ComponentE.contextType = UserContext

export default ComponentE

import React, { Component } from 'react'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Akshit'
        }
        console.log('Lifecycle A constructor');
    }

    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle A getDerivedStateFromProps');
        console.log('Lifecycle A getDerivedStateFromProps ==========>', this)
        return null;
    }
    

    componentDidMount(){
        console.log('Lifecycle A componentDidMount');   
    }

    render() {
        console.log('Lifecycle A render');
        return (
            <div>
                Lifecycle A
            </div>
        )
    }
}

export default LifecycleA

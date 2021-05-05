import React, { Component } from 'react'
import RegularComponent from '../RegularComponent'
import PureComp from './PureComponent'
import MemoComp from '../MemoComp'

class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Akshit'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Akshit'
            })
        },2000)
    }
    

    render() {
        console.log('Parent render')
        return (
            <div>
                Parent Comp
                <MemoComp name={this.state.name}/>
                <RegularComponent name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp

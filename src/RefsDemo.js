import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
        this.cbRef = null;
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }
    
    componentDidMount() {
        console.log('********** ', this.inputRef);
        this.inputRef.current.focus()

        if(this.cbRef) {
            this.cbRef.focus();
        }
    }

    render() {
        return (
            <div>
               <input type="text" ref={this.inputRef}></input>
               <input type="text" ref={this.setCbRef}></input> 
            </div>
        )
    }
}

export default RefsDemo

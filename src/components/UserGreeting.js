import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false 
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>Welcome Akshit</div>
        
        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome Akshit</div>:
        //     <div>Welcome Guest</div>
        // )

        //****************** */


        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Akshit</div>
        //     )
        // }
        // else {
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }

         //****************** */

    //     let message
    //     if(this.state.isLoggedIn)
    //     message = <div>Welcome Akshit</div>
    //     else
    //     message = <div>Welcome Guest</div>

    //     return <div>{message}</div>

     //****************** */


        // return (
        //     <div>
        //         <div>Welcome Akshit</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting

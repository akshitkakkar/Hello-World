import React from 'react'

const Hello = () => {
    // return (
    //     <div className="dummyClass">
    //         <h1>Hello Again!</h1>
    //     </div>
    // )

    //to write without JSX, use this method that accepts min 3 parameters
    return React.createElement('div',null,React.createElement('h1', {id: 'hello', className: 'test'}, 'Hello Again'))
}

export default Hello;
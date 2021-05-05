import React from 'react' //must

const Greet = (props) => {
    console.log(props);
    const {name, heroName} = props;
    return (
    <div>
    <h1>Hello {name}</h1>
    {props.children}
    </div>
    )
}

//to connect with rest of app - export
export default Greet;
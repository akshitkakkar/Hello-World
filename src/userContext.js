import React from 'react'

const UserContext = React.createContext('Default')
//every context obj created using createContext comes with a provider and consumer react component

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer }
export default UserContext
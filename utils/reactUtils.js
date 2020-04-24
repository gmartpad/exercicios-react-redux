import React from 'react'

function childrenMap(children, props){
    return React.Children.map( children,
        child => ( React.cloneElement(child, {...props}) ) ) 
}

export { childrenMap }
import React from 'react'
import { childrenMap } from '../utils/reactUtils'

export default props => (
    <div>
        {/* { React.Children.map( props.children,
            child => ( React.cloneElement(child, {...props}) ) ) } */}
        { childrenMap(props.children, props) }
    </div>
)
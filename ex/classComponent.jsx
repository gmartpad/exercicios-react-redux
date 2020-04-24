import React from 'react'

export default class Componente extends React.Component {
    render(){
        return(
            <h1>{this.props.value}</h1>
        )
    }
}
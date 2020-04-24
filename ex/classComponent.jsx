import React from 'react'

export default class Componente extends React.Component {
    
    constructor(props){
        super(props)
        this.state = { value: props.initialValue }
  
        // this.varia = this.varia.bind(this)
    }
    
    varia(delta) {
        this.setState({ value: this.state.value + delta })
    }

    render(){
        return(
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.varia(+1)}>Inc</button>
                <button onClick={() => this.varia(-1)}>Dec</button>
            </div>
        )
    }
}
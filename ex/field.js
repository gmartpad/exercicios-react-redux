import React from 'react'

class Field extends React.Component {

    constructor(props){
        super(props)
        this.state = { value: props.initialValue }

        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event){
        this.setState( { value: event.target.value })
    }

    render() {
        return (
            <div>
                <label>{this.state.value}</label>
                <input onChange={this.handleChange} value={this.state.value}/>
            </div>
        )
    }
 
}

export default Field
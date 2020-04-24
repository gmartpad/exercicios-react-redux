import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro, { Segundo } from './component'


ReactDOM.render(
    <div>
        <Primeiro msg="é galerinha"/>
        <Segundo msg="Tomamo no cu"/>
    </div>
, document.getElementById('app'))
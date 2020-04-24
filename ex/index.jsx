import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro, { Segundo } from './component'
//import SilvaFamily from './silvaFamily'
import Family from './family'
import Member from './member'


ReactDOM.render(
    <Family>
        <Member name="Jorge" lastName="Josias"/>
    </Family>
    //<SilvaFamily/>
    // <div>
    //     <Primeiro msg="é galerinha"/>
    //     <Segundo msg="Tomamo no cu"/>
    // </div>
, document.getElementById('app'))
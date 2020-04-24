import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro, { Segundo } from './component'
//import SilvaFamily from './silvaFamily'
// import Family from './family'
// import Member from './member'
import Componente from './classComponent'


ReactDOM.render(
    <Componente label="Contador" initialValue={10}/>
    // <Family lastName="Josias">
    //     <Member name="Jorge"/>
    //     <Member name="Julia"/>
    //     <Member name="Rafael"/>
    // </Family>
    //<SilvaFamily/>
    // <div>
    //     <Primeiro msg="é galerinha"/>
    //     <Segundo msg="Tomamo no cu"/>
    // </div>
, document.getElementById('app'))
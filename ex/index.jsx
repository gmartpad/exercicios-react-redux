import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro, { Segundo } from './component'
//import SilvaFamily from './silvaFamily'
// import Family from './family'
// import Member from './member'
// import Componente from './classComponent'
import Field from './field'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

const reducers = combineReducers({
    field: () => ({ value: 'Opa' })
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue="mano"/>
    </Provider>
    // <Componente label="Contador" initialValue={10}/>
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
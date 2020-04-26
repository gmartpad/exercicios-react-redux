import React from 'react'

export default props => (
    <h1>Mensagem do Primeiro Componente: {props.msg}</h1>
)

export const Segundo = props => <h1>Mensagem do Segundo Componente: {props.msg}</h1>

//export { Primeiro, Segundo }
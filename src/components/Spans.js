import React from 'react'
import Span from './Span'

const Spans = ({spans}) => {
    return (
        <>
           {spans.map((span) => (
               <Span 
               key={span.id}
               span={span}
               />))} 
        </>
    )
}

export default Spans

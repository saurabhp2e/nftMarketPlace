import React from 'react'
import './Heading.css'

export default function Heading(props:any) {
  return (
    <>
    <div className="heading">
    <h3>{props.head}</h3>
    <p>{props.foot}</p>
    </div>
    </>
 
  )
}

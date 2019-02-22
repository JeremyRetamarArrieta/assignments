import React from 'react'

const Place = props =>{
    
    return(
        <div style ={{border: '1px solid blue', margin: 5, padding: 5}}>
        <h1> Destination: {props.place}</h1>
        <h2> Price: {props.price}</h2>
        <h3> timeToGo: {props.timeToGo}</h3>
        </div>
    )
}

export default Place 
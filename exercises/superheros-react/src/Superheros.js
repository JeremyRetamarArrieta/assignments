import React from 'react'
import { prependOnceListener } from 'cluster';

const Superheros = props =>{
    const styleObj = {
        backgroundImage: 'url(${})'
    }
    return(
        <div onClick= {() => props.sayCatchPhrase(props.sayCatchPhrase)} style={styleObj}>
            <h1>{props.name}</h1>
        </div>
    )
}
import React from 'react'

import Header from './Header.js'
import Body from './Body.js'
import NewBody from './NewBody.js'
import Footer from './Footer.js'

import {Switch, Route} from 'react-router-dom'

const App = () =>{

    return(
        <div>
            <Header />
            <Navbar/>  {/*This is outside Switch, so it will always render*/}
            <Switch>
                <Route path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/services" component={Services}/>
            </Switch>
            <Footer />
        </div>
    )

}


export default App
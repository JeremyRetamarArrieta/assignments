import React from 'react'
import Boxes from './Boxes.js'
import Nav from './Nav.js'

function App(){
    return(
        <div>

            <header className='nav'> 
                <Nav />
            </header>

            <main>
                
                <Boxes />

                <Boxes />

                <Boxes />

                <Boxes />
            </main>

            <footer>
            </footer>
            
        </div>
    )
}




export default App
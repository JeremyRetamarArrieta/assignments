import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props)=>{
 return(
     <div>
         <Link to="/">Home</Link>
         <Link to="/products">Products</Link>
         <Link to="/subscriptions">Subscribe</Link>
         <Link to="/aboutus">About Us</Link>
     </div>
 )
    

}

export default Navbar
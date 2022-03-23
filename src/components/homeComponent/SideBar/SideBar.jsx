import React from 'react'
import "./SideBar.css"

const SideBar = ({show}) => {

    let classes = "sidebar"
    if(show){
        classes = "sidebar open"
    }

    return (
        <nav className={classes}>
            <ul>
              <li><a href="#!">Products</a></li>
              <li><a href="#!">Sign In</a></li>
            </ul>  
        </nav>
    )
}

export default SideBar

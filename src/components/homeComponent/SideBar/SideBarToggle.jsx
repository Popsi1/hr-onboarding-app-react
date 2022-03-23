import React from 'react'
import "./SideBarToggle.css"

const SideBarToggle = ({onClick}) =>(
    <button className='sidebar-toggle' onClick={onClick}>
        <div className='toggle-bar' />
        <div className='toggle-bar' />
        <div className='toggle-bar' />
    </button>
)


export default SideBarToggle

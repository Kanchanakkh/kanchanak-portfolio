import React from 'react'
import "./topbar.css"
import kittyLogoLeft from './../../Images/kitty.png'
import kittyLogoRight from './../../Images/kitty-computer.png'
export default function topbar() {
    return (
        <div className="top">
            <div className="topLeft">
                <img className="topImgLeft" src={kittyLogoLeft} alt="Little cat hero logo"/>
                    
                
                <span>Kanchanak</span>
                <i className="topIcon fab fa-github-square"></i>
                <i className="topIcon fab fa-linkedin"></i>
        
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">RESUME</li>
                    <li className="topListItem">BLOG</li>
                    <li className="topListItem">CONTACT</li>

                </ul>
            
            </div>
            
            <div className="topRight">

            <span>👋 Hello there!</span>
            <img className="topImgRight" src={kittyLogoRight} alt="Little cat with computer logo"/>
            

            </div>
        </div>
    )
}

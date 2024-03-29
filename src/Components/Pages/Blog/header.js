import React from 'react'
import "./styles.css"
import lotusHeader from './../../../Images/lotus-header.jpg'
import lotus1 from './../../../Images/lotus1.png'
import lotus2 from './../../../Images/lotus2.png'


const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <img className="headerImgLogo" src={lotus1} alt="Little lotus logo1"/>

                <span className="headerTitleLg">Blog</span>
                <img className="headerImgLogo" src={lotus2} alt="Little lotus logo2"/>

            </div>
            <img className="headerImg" src={lotusHeader} alt=""></img>
        </div>
    )
}
export default Header

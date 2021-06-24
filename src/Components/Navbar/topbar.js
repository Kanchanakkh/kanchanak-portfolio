import React from 'react'
import "./topbar.css"
import {Nav,Navbar, Container} from 'react-bootstrap'
import kittyLogoLeft from './../../Images/kitty.png'
import kittyLogoRight from './../../Images/kitty-computer.png'


const Topbar = () => {
    
    return (     
        
            <div>
            <header>
            <Navbar collapseOnSelect bg="light" fixed="top" expand="lg" variant='light'>
                <Container>
                <div className="topLeft">
                    <Navbar.Brand>
                        <div className="Name">
                        <img className="topImgLeft" src={kittyLogoLeft} alt="Little cat hero logo"/>
                    
                        <Nav.Link style={{color: 'black'}}href="/">Kanchanak</Nav.Link>
                        </div>
                {/* <a href="../Pages/About/about.js" style={{textDecoration: 'none', color: 'black'}}>Kanchanak</a> */}
                    </Navbar.Brand>
                {/* <i className="topIcon fab fa-github-square"></i>
                <i className="topIcon fab fa-linkedin"></i> */}
        
                </div>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
            <div >
                <ul className="topList">
                    <Nav.Link href="/resume" className="topListItem">RESUME</Nav.Link>
                    <Nav.Link href="let's code" className="topListItem">LET'S CODE</Nav.Link>
                    <Nav.Link href="/blog" className="topListItem">BLOG</Nav.Link>
                    <Nav.Link href="contact" className="topListItem">CONTACT</Nav.Link>

                </ul>
            
            </div>
            <div className="topRight">

            <span>👋 Hello there!</span>
            <img className="topImgRight" src={kittyLogoRight} alt="Little cat with computer logo"/>
            

            </div>
            </Nav>
            </Navbar.Collapse>
            </Container>

            
            
        </Navbar>
        </header>
        </div>
    )
}
export default Topbar;
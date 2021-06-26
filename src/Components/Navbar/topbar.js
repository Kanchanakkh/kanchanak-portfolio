import React from 'react'
import "./topbar.css"
import {Nav,Navbar, Container} from 'react-bootstrap'
import kittyLogoLeft from './../../Images/kitty.png'
import kittyLogoRight from './../../Images/kitty-computer.png'
import {Link ,useLocation} from 'react-router-dom'

const Topbar = () => {
    
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    
    return (     
        
        <div>
            <header>
                <Navbar className= "nav-style" collapseOnSelect bg="light" fixed="top" expand="lg" variant='light'>
                    <Container>
                        <div className="topLeft">
                            <Navbar.Brand>
                                <div className="Name">
                                    <img className="topImgLeft" src={kittyLogoLeft} alt="Little cat hero logo"/>
                        
                                    <Nav.Link style={{color: 'black'}}href="/">Kanchanak</Nav.Link>
                                </div>
                             </Navbar.Brand>
                
        
                        </div>
                        <Navbar.Toggle  aria-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav>
            {/* <div >
                <ul className="topList">
                    <li className={splitLocation[1] === "resume" ? "active" : ""}>
                    <Nav.Link className="topListItem " href="/resume" className="topListItem">RESUME</Nav.Link>
                    </li>
                    <li className={splitLocation[1] === "let's code" ? "active" : ""}>
                    <Nav.Link className="topListItem "  href="/let's code" className="topListItem">LET'S CODE</Nav.Link>
                    </li>
                    <li className={splitLocation[1] === "blog" ? "active" : ""}>
                    <Nav.Link className="topListItem " href="/blog" className="topListItem">BLOG</Nav.Link>
                    </li>
                    <li className={splitLocation[1] === "contact" ? "active" : ""}>
                    <Nav.Link className="topListItem" href="/contact" className="topListItem">CONTACT</Nav.Link>
                    </li>
                </ul>
                </div> */}
                                <div >
                                    <ul className="topList">
                                        <li className={splitLocation[1] === "resume" ? "active" : ""}>
                                        <Link  to="/resume" className="topListItem">RESUME</Link>
                                        </li>
                                        <li className={splitLocation[1] === "letuscode" ? "active" : ""}>
                                        <Link  to="/letuscode" className="topListItem">LET'S CODE</Link>
                                        </li>
                                        <li className={splitLocation[1] === "blog" ? "active" : ""}>
                                        <Link  to="/blog" className="topListItem">BLOG</Link>
                                        </li>
                                        <li className={splitLocation[1] === "contact" ? "active" : ""}>
                                        <Link  to="/contact" className="topListItem">CONTACT</Link>
                                        </li>
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
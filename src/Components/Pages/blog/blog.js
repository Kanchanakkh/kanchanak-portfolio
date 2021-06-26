import React from 'react'
import Header from "./header.js"
import catImage from '../../../Images/catwithwool.png'

const Blog = () => {
    return (
        <>
        <div >
            <Header />
            <div style={{marginTop: '100px'}}>           
                <img style={{display: 'block',
                            marginLeft: 'auto', 
                            marginRight: 'auto',
                            width: '300px'}} src={catImage} alt='sticker of a cat plays with wool '></img>

                <h4>Blog is coming soon... Thank you for visiting! 🙏</h4>
            </div>
        </div>
        </>
    )
}
export default Blog

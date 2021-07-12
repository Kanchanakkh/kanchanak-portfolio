import React, {useState, useEffect} from 'react'
import Header from "./header.js"
import sanityClient from '../../../client'
import { Card,Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'


// import catImage from '../../../Images/catwithwool.png'


const Blog = () => {

    const [postData, setPost] = useState(null)

    useEffect(() =>{
        sanityClient
            .fetch(
                `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setPost(data))
            .catch(console.error)
    },[])
    return (
        <>
        
            <Header />
            {/* <div style={{marginTop: '100px'}}>           
                <img style={{display: 'block',
                            marginLeft: 'auto', 
                            marginRight: 'auto',
                            width: '300px'}} src={catImage} alt='sticker of a cat plays with wool '></img>

                <h4>Blog is coming soon... Thank you for visiting! 🙏</h4>
            </div> */}
            <div className='blog-section-container'>  
              <Row xs={1} md={2} lg={3}  className="g-4">
                {postData && postData.map((post,index) => (
                  <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
                    <Col key={index} >
                      <Card className="blog-section-col">
                        <Card.Img variant="top" src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                        <Card.Body>
                          <Card.Title>{post.title}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Link>
                ))}
              </Row>
            </div>
        </>
    )
}
export default Blog

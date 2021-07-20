import React from 'react'
import {Row,Col,Card} from 'react-bootstrap'
import ProjectsList from './projects_list'
import './resume.css'
const Projects = () => {
    return (
        <>
        <h4><u>List of my projects</u></h4> 
        <div className='projects-section-container'>
            <Row xs={1} md ={3} className="g-4 ">
                {ProjectsList.map((item,index) => (
                    <Col >
                        <div className='card-container'>
                            <Card className="content" key={index} >
                                <section className='section-first'>
                                    <Card.Img variant="top" src={item.src} style={{width: '100%',
                                    height: '30vw',
                                    objectFit: 'cover'}}/>
                                    
                                    <Card.Body>
            
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                    </Card.Body>       
                                </section>

                                <section className='section-second'>
                                    <Card.Body>
                                        <Card.Text>
                                            Programming Languages: {item.programmingLang}
                                        </Card.Text>  
                                        <Card.Text>
                                            Status: {item.status}
                                        </Card.Text>  
                                        <Card.Text>
                                            {item.link && item.link !=null? <a  href={item.link}>Go To Project!</a>:null}
                                        
                                        </Card.Text>
                                    </Card.Body>
                                </section>        
                            </Card>
                            <div className='cursor'></div>
                        </div>
      
                     </Col>
                ))}
            </Row>

        </div>
    </>
    )
}

export default Projects

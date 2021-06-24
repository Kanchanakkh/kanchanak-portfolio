import React, {useState} from 'react'
import { Container, Row, Col, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators, CarouselCaption} from 'reactstrap'
import './about.css'

import welcomeSign from '../../../Images/welcome.png'
import profileImage from '../../../Images/profile-image.JPG'
import pic1 from '../../../Images/Picture1.jpg'
import pic2 from '../../../Images/Picture2.jpg'
import pic3 from '../../../Images/Picture3.jpg'
import pic4 from '../../../Images/Picture4.jpeg'
import pic5 from '../../../Images/Picture5.jpg'
import pic6 from '../../../Images/Picture6.jpeg'

const items = [
    {
      src: pic1,
      caption: "Sketches of myself (1) and my good friend's sister (2)",
      
    },
    {
        src: pic2,
        
        caption: 'Another sketch of isolated hut near a mountain',
        
      },
      {
        src: pic3,
        
        caption: 'Slide 1',
        
      },
      {
        src: pic4,
        
        caption: 'Slide 1',
        
      },
      {
        src: pic5,
        
        caption: 'Slide 1',
        
      },
      {
        src: pic6,
        
        caption: 'Slide 1',
        
      },
              
    
  ];
const About = () => {
    
      const [activeIndex, setActiveIndex] = useState(0);
      const [animating, setAnimating] = useState(false);
    
      const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }
    
      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
    
      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }
    
      const slides = items.map((item) => {
        return (
          <CarouselItem
            className="custom-tag"
            tag="div"
            key={item.src}
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
          >
               <div className='carouselCont'>
          <div className='ImgCont'>
               <img width='100%' className="img" src={item.src} alt={item.altText} />
               </div>
               <div className='TextCont'>
            <CarouselCaption className="text-danger" captionText={item.caption}  />
          </div>
          </div>
          </CarouselItem>
        );
      });
    
    return (
        <>
        <div className="banner">
        <h2 >Welcome to Kanchanak's Website! </h2>
        
        <img id="welcomeSign" src={welcomeSign} alt="Little welcome sign"/>

        </div>
                
<hr id='horizontalBorder' />
        
        <Container className="container"> 
                
            
           

        <Row>
        <Col xs="6" className="aboutMeBackground verticalBorder" >
            <h4>About Me:</h4>
            <p>
                Hello, I am Kanchanak Khat. I graduated from San Jose State University with a Bachelor's Degree in Computer Science in December, 2020.
                <br/>
                I started out my journey into Computer Science with a curious mindset after remembering the time that I first used computer when I was 12 year-old.
                My vivid memory with my first desktop was playing with Microsoft Windows 2003 without any Internet connection. I would play around with both application and system software
                for hours and that's how I began wearing glasses, my friend.
            </p>
        </Col>

        <Col xs="6">
            <h4>Images</h4>
            <img className="profileImage"src={profileImage}></img>
            <caption id="caption">This is me in front of SJSU's Tower Hall</caption>

        </Col>
      </Row>
      <div>
      {/* <style>
        {
          `.custom-tag {
            // width:100%; 
            // height: 500px 
//             height: auto;
//   width: auto;
            //   object-fit: contain;
            //   height: 100vh;
            max-height: 100%;
    max-width: 100%;
              background: black;
            //   overflow: hidden;

            }`
        }
      </style> */}
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators className='carousel' items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
      <footer>
          THE END!!!
      </footer>
        </Container>
        </>
    )
}

export default About

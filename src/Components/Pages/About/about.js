import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
// import YouTube from 'react-youtube'
import Carousel from 'react-bootstrap/Carousel'
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
      caption: "\"Sketches of myself (1) and my good friend's sister (2)\"",
      altText: "Two sketches of myself and my good friend's sister"
    },
    {
        src: pic2,  
        caption: '"Another sketch of isolated hut near a mountain"',
        altText: "A sketch of a hut"
      },
      {
        src: pic3, 
        caption: '"Beautiful seaside in Monterey, CA featured clear light-blue sky"',
        altText: "Beautiful Seaside in Montery, CA captured under nice blue sky "
      },
      {
        src: pic4,
        caption: '"My kind kitty who enjoys stretching its furry body"',
        altText: "My kitty stretched its body"
      },
      {
        src: pic5,       
        caption: '"An oil painting of my hands that I did few years ago"',
        altText: "An oil painting of my hands on canvas"
      },
      {
        src: pic6,   
        caption: '"Took a break after skiing at Lake Tahoe skiing resort "',
        altText: "I sat on the bench, relaxing after skiing at Lake Tahoe skiing resort"
      },
              
    
  ];
//   const opts ={
//     height: '390',
//     width: '640',
//     playerVars: {
//       // https://developers.google.com/youtube/player_parameters
//       autoplay: 1,
//     },
//   }
const About = () => {
     
    return (
        <>
            <div className="banner">
                <h2 >Welcome to Kanchanak's Website! </h2>
        
                <img id="welcomeSign" src={welcomeSign} alt="Little welcome sign"/>

            </div>
                
            <hr id='horizontalBorder' />
        
            <Container fluid> 
                <Row>
                    <Col md="11" className="aboutMeBackground verticalBorder" >
                        <h4>About Me:</h4>
                        <p>
                        Hello, I am Kanchanak Khat. I graduated from San Jose State University (SJSU) with a Bachelor's Degree in Computer Science in December 2020.
                        I started my journey into Computer Science with a curious mindset after remembering the time that I first used a computer when I was 12-year-old. 
                        One of my most nostalgic memories was playing with Microsoft Windows XP without any Internet connection on my first DELL desktop. I would spend time playing with application and system software 
                        for hours and that's how I began wearing glasses (occasionally), my friend. I recalled the time that I enjoyed listening to Microsoft pre-selected music on its playlist from Windows Media Player.
                        I found this software to be impressive as I could burn music or video into and from my CD/DVD and I was also fascinated by how it enabled me to change patterns of visualization of music that I played; it was really fun. 
                        <br/><br/>
                        This reminds me of this song that I played nonstop, called "Like Humans Do" by David Byrne.
                        My favorite thing to do that I had been doing for a while was pencil-drawing random things mostly, portraits & sceneries. When it comes to art, I love working on an oil painting the most. I think this is because of its smooth, glossy colors 
                        and it feels satisfying every time I apply oil paints on a blank canvas. Looking at wonderfully stunning sceneries that our mother-earth offers to us does make me feel wholeheartedly thankful to be alive that's why I also enjoy walking and immersing myself in nature. 
                        Ah! You must have also wondered why there are some kitty icons on my site. 
                        Well, you can tell that I am a big fan of cats. Yes, I also own a very adorable cat who loves looking at birds so much. Well, what else can I say about myself?. Oh, I just realized that skiing is fun after all the several attempts of fallings and hurting my legs. 
                        Here's a touching quote I know from one of my favorite tv shows: <i>"Pain is the proof that you are alive"</i>
                        <br/><br/>
                        Feel free to check out my image carousel down below and other pages. Thank you for visiting my site! 🙂

                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Profile image</h4>
                        <img className="profileImage" src={profileImage} alt="Kanchanak profile"/>
                        <caption id="caption"><h6>This is me in front of SJSU's Tower Hall</h6></caption>

                    </Col>
                </Row>
                <Row>
                    <h4>A tiny glimpse of my life on the slideshow</h4>

                    <Carousel classNam="carousel">
                        {items.map((item) => (
                            <Carousel.Item interval={5000} key={item.src}>
                                <img className="d-block w-100" src={item.src} alt={item.altText} />
                                <Carousel.Caption>
                                <h6 id="captionText"> <i>{item.caption}</i></h6>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Row>
      
     
{/* <Row className="youtube">
<YouTube videoId="CzyeBTjRg6A" opts={opts}  />
</Row> */}
            </Container>
        
        </>
    )
}

export default About

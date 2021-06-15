import React from 'react';
import {Carousel} from "react-bootstrap";
import image1_1 from './image/1-1.jpg';
import image1_2 from './image/1-2.jpg';
import image1_3 from './image/1-3.jpg';
import image2_1 from './image/2-1.jpg';
import image3_1 from './image/3-1.jpg';
import image4_1 from './image/4-1.jpg';
import image5_1 from './image/5-1.jpg';



const Firstcontent = () => {

    return (
    <Carousel>
        <Carousel.Item interval={2500} style={{height: 600}} >
            <img
                className="d-block w-100"
                src={image1_1}
                alt="First slide"
            />
        <Carousel.Caption>
            
            <p></p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2500} style={{height: 600}}>
        <img
        className="d-block w-100"
        src={image1_2}
        alt="Second slide"
        />
        <Carousel.Caption>
        
        <p></p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2500} style={{height: 600}}>
        <img
        className="d-block w-100"
        src={image1_3}
        alt="Third slide"
        />
        <Carousel.Caption>
        
        <p></p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2500} style={{height: 600}}>
        <img
        className="d-block w-100"
        src={image2_1}
        alt="Fourth slide"
        />
        <Carousel.Caption>
        
        <p></p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2500} style={{height: 600}}>
        <img
        className="d-block w-100"
        src={image3_1}
        alt="Fifth slide"
        />
        <Carousel.Caption>
        
        <p></p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2500} style={{height: 600}}>
        <img
        className="d-block w-100"
        src={image4_1}
        alt="Sixth slide"
        />
        <Carousel.Caption>
        
        <p></p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2500} style={{height: 600}}>
        <img
        className="d-block w-100"
        src={image5_1}
        alt="Seventh slide"
        />
        <Carousel.Caption>
        
        <p></p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    )
}

export default Firstcontent

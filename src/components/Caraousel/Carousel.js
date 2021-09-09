import React from 'react';
import banner from '../../image/caraousel.jpeg'
import {Carousel} from 'react-bootstrap';
import './Carousel.css';
const Carausel = () => {
    return (
      <Carousel variant='dark'>
        <Carousel.Item>
          <img
            className='d-block w-100 caraousel'
            src={banner}
            alt='First slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 caraousel'
            src={banner}
            alt='Second slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 caraousel'
            src={banner}
            alt='Third slide'
          />
        </Carousel.Item>
      </Carousel>
    );
}
export default Carausel;
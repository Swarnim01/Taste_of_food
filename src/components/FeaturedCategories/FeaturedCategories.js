import React from 'react';
import food from '../../image/Food.jpeg';
import './FeaturedCategories.css'
const FeaturedCategories = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '4rem auto' }}>
      <h3
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
          fontWeight: 'bold',
        }}
      >
        Featured Categories
      </h3>
      <div
        className='row'
        style={{ margin: '0.5rem'}}
      >
        <div
          className='col-md-4 col-sm-4 col-6'
          style={{ padding: '0.5rem'}}
        >
          <img
            className='food'
            src={food}
            alt='menu'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div
          className='col-md-4 col-sm-4 col-6'
          style={{ padding: '0.5rem' }}
        >
          <img
            className='food'
            src={food}
            alt='menu'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div
          className='col-md-4 col-sm-4 col-6'
          style={{ padding: '0.5rem' }}
        >
          <img
            className='food'
            src={food}
            alt='menu'
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};
export default FeaturedCategories;

import React from 'react';
const Contact = () => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <div
        style={{
          padding: '2rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <div className='row' style={{ color: 'white' }}>
          <div
            className='col-md-4 col-sm-4 col-6'
            style={{ padding: '0.5rem' }}
          >
            <h6>Useful Links</h6>
            <h6>Terms & Conditions</h6>
            <h6>Refund Policy</h6>
          </div>
          <div
            className='col-md-4 col-sm-4 col-6'
            style={{ padding: '0.5rem' }}
          >
            <h6>MIG-29</h6>
            <h6>In Front of B.T.I Ground</h6>
            <h6>Beside Kolgawan Thana , Rewa Road , Satna</h6>
            <h6>Mob - 9343236845</h6>
          </div>
          <div
            className='col-md-4 col-sm-4 col-6'
            style={{ padding: '0.5rem' }}
          >
            <h6>Payment Methods</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

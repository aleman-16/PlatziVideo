import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <div className='body'>
    <h1>404</h1>
    <div className='cloak__wrapper'>
      <div className='cloak__container'>
        <div className='cloak' />
      </div>
    </div>
    <div className='info'>
      <h2>Regresa al Home</h2>
    </div>
  </div>
);

export default NotFound;

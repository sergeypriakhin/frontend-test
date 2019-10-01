import React from 'react';
import loader from './loader.svg';
import './Spin.css';

function Spin({ spinning = false, children }) {
  return (
    <div className='spin'>
      {spinning && <div className='spin__wrap'><img src={loader} alt='loader' className='spin__loader' /></div>}
      {children}
    </div>
  );
}

export default Spin;
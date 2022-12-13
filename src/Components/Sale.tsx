import React from 'react';
import image from'../images/sale/back.jpg'
import './Sale.css';

export default function Sale() {
  return (
    <div className='sale-container'>
        <img src={image} alt={image} className="back-img"/>
    </div>
  )
}

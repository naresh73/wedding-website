import React from 'react';
import './card.css';

export default function Card({ data }) {
  return (
    <div class="main">
      <div class="main_content">
        {
          data.map((serviceItem, serviceIndex) => {
            return (
              <div key={serviceIndex + 1} class="picture_wrapper">
                <img src={`http://localhost:8001/${serviceItem?.imageUrl}`} alt='img' />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
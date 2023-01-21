import React ,{useState}from 'react';
import './gallery.css';
import axios from 'axios';

export default function Photos({data}) {
  
  return (
<div class="main">
  <div class="main_content">
  
    {
        data.map((serviceItem, serviceIndex) => {
            return (
                <div  key={serviceIndex + 1} class="picture_wrapper">
                  {/* <p>{serviceItem?.type}</p> */}
                  <img src={`http://localhost:8001/${serviceItem?.imageUrl}`} />
                    {/* <img src={src} alt={event} /> */}
                </div>
            )
        })
    }
  </div>
</div>
  )
}

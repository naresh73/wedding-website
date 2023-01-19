import React from 'react';
import './gallery.css';

export default function Photos({data}) {
  return (
<div class="main">
  <div class="main_content">
    {
        data.map((elem) => {
            const { src, event } = elem;
            return (
                <div class="picture_wrapper">
                    <img src={src} alt={event} />
                </div>
            )
        })
    }
  </div>
</div>
  )
}

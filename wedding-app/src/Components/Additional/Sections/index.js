import React, { useState } from 'react';
import Photos from '../Gallery';
import Images from './images';


export default function GallerySection() {
    const [items, setItems] = useState(Images);
    const filterItem = (categItem) => {
        const updatedItems = Images.filter((curElem) => {
            return curElem.event === categItem;
        });
        setItems(updatedItems);
    }
    return (
        <div>
            <div className="section_title text-center pb-30">
            <div className="section_title text-center pb-30"></div>
                <h3 className="title">Gallery</h3>
                <img src="assets/images/section_shape.png" alt="Shape" />
              </div>
              <div className="section_title text-center pb-30"></div>
              <div className="section_title text-center pb-30"></div>
              <div className="section_title text-center pb-30"></div>
            
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                <div className="section_tsitle text-center pb-30">
                    <div className="title" onClick={() => filterItem('tilak')}>Tilak</div>
                    <img src="assets/images/section_shape.png" alt="Shape" />
                </div>

                <div className="section_tsitle text-center pb-30">
                    <div className="title" onClick={() => filterItem('ff')}>Family function</div>
                    <img src="assets/images/section_shape.png" alt="Shape" />
                </div>
                <div className="section_tsitle text-center pb-30">
                    <div className="title" onClick={() => filterItem('baarat')}>Baarat</div>
                    <img src="assets/images/section_shape.png" alt="Shape" />
                </div>
                <div className="section_tsitle text-center pb-30">
                    <div className="title" onClick={() => filterItem('haldi')}>Haldi</div>
                    <img src="assets/images/section_shape.png" alt="Shape" />
                </div>
                <div className="section_tsitle text-center pb-30">
                    <div className="title" onClick={() => filterItem('mehandi')}>Mehandi</div>
                    <img src="assets/images/section_shape.png" alt="Shape" />
                </div>
                <div className="section_tsitle text-center pb-30">
                    <div className="title" onClick={() => filterItem('wedding')}>Wedding</div>
                    <img src="assets/images/section_shape.png" alt="Shape" />
                </div>
                <div className="section_tsitle text-center pb-30">
                    <div className="title" onClick={() => setItems(Images)}>All</div>
                    <img src="assets/images/section_shape.png" alt="Shape" />
                </div>
                    
                    {/* <button className="btn btn-warning" </button> */}
                    {/* <button className="btn btn-warning" onClick={() => filterItem('jtok')}>Baarat</button> */}
                    {/* <button className="btn btn-warning" onClick={() => filterItem('haldi')}>Haldi</button> */}
                    {/* <button className="btn btn-warning" onClick={() => filterItem('mehndi')}>Mehndi</button> */}
                    {/* <button className="btn btn-warning" onClick={() => filterItem('wedding')/}>Wedding</button> */}
                    {/* <button className="btn btn-warning" onClick={() => setItems(Images)}>All</button> */}
                </div>
            </div>
            <Photos data={items} />
        </div >
    )
}
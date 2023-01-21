import React, { useState } from 'react';
import Photos from '../Gallery';
import data from './images';
import axios from 'axios';


export default function GallerySection() {
    const [data, setData] = useState([])
    const [sectionData, setSectionData] = useState([])
    const filterItem = (categItem) => {
        const updatedItems = sectionData.filter((curElem) => {
            return curElem.type === categItem;
        });
        setData(updatedItems);
    }


  async function getAllImages() {
    await axios.get('http://localhost:8001/images')
    .then(res => {
        console.log(res.data.data); 
        setSectionData(res.data.data)
        setData(res.data.data)
        // console.log(data)
    })
    .catch(err => {
        console.log(err);
    })
}
    return (
        <div>
            <div className="section_title text-center pb-30">
            <div className="section_title text-center pb-30"></div>
                <h3 className="title">Gallery</h3>
                <img src="assets/images/section_shape.png" alt="Shape" />
              </div>
              <span style={{ fontSize : "40px",  fontWeight : 'bold' ,content: "21A1" }} >&#8650; </span>
              <hr style={{ color : 'black', backgroundColor : 'black', height : "10px" }} ></hr>
              <div className="section_title text-center pb-30"></div>
                <button type='button' onClick={getAllImages} >See data</button>
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
                    <div className="title" onClick={() => setData(sectionData)}>All</div>
                    <img src="assets/images/section_shape.png" alt="Shape" />
                </div>
                    
                    {/* <button className="btn btn-warning" </button> */}
                    {/* <button className="btn btn-warning" onClick={() => filterItem('jtok')}>Baarat</button> */}
                    {/* <button className="btn btn-warning" onClick={() => filterItem('haldi')}>Haldi</button> */}
                    {/* <button className="btn btn-warning" onClick={() => filterItem('mehndi')}>Mehndi</button> */}
                    {/* <button className="btn btn-warning" onClick={() => filterItem('wedding')/}>Wedding</button> */}
                    {/* <button className="btn btn-warning" onClick={() => setItems(data)}>All</button> */}
                </div>
            </div>
            <Photos data={data} />
        </div >
    )
}
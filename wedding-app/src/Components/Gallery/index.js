import React, { useState } from 'react';
import './gallery.css';
import { Icon } from 'react-icons-kit';
import { arrow_down } from 'react-icons-kit/ikons/arrow_down';
import { arrow_up } from 'react-icons-kit/ikons/arrow_up';
import axios from 'axios';
import UploadButton from '../UploadButton';
import Card from './card';

export default function Gallery() {
    const [type, setType] = useState('hide');
    const [icon, setIcon] = useState(arrow_down);
    const [data, setData] = useState([])
    const [sectionData, setSectionData] = useState([])

    function togglePasswordVisibility() {
        getAllImages()
        if (type === 'hide') {
            setIcon(arrow_up);
            setType('show');
        }
        else {
            setIcon(arrow_down);
            setType('hide');
        }
    }

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
            <section className="our_love_area pt-120"></section>
            <section id="gallery" className="our_love_area pt-120"></section>
            <section className="coming_soon_area pt-20 pb-70">
                <div className="coming_soon_shape_1">
                    <img src="assets/images/shape-1.png" alt="shape" />
                </div>

                <div className="container">
                    <div className="section_title text-center pb-30">
                        <div className="section_title text-center pb-30"></div>
                        <h3 className="title">Gallery</h3>
                        <img src="assets/images/section_shape.png" alt="Shape" />
                    </div>
                    
                        <div className='conaitner'>
                    <Icon id='icons' onClick={togglePasswordVisibility} icon={icon} />
                    </div>
                    
                    <hr className='hr' ></hr>
                </div>

                <div className="coming_soon_shape_2">
                    <img src="assets/images/shape-2.png" alt="shape" />
                </div>
            {
                type === 'show' ?
                    <div>
                        <div className="menu-tabs container">
                            <div className="menu-tab d-flex justify-content-around">
                                <div className="section_tsitle text-center pb-30">
                                    <div className="title" onClick={() => filterItem('tilak')}>Tilak</div>
                                    <img src="assets/images/section_shape.png" alt="Shape" />
                                </div>
                                <div className="section_tsitle text-center pb-30">
                                    <div className="title" onClick={() => filterItem('jodhpur')}>Jodhpur</div>
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
                                    <div className="title" onClick={() => filterItem('mehndi')}>Mehndi</div>
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
                            </div>
                        </div>
                        <Card data={data} />
                    </div >

                    :

                    null

            }
            </section>
            <UploadButton />
        </div>
    )
}

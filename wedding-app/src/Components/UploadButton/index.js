import './uploadButton.css';
import React, { useState } from 'react';
import axios from 'axios';
import downCloud from './downCloud.png';


export default function UploadButton() {
    const [type, setType] = useState("")
    const [image, setImage] = useState()

    async function PostImages() {
        const formData = new FormData();
        formData.append('type', type)    
        formData.append('image', image) 
        await axios.post('http://localhost:8001/uploads', formData)
        setType("")
        setImage("")
    }

    return (
        
        
        <div id='upload-photo' className='cont'>
            <div className="section_title text-center pb-30">
                        <div className="section_title text-center pb-30"></div>
                        <h3 className="title">Upload-Photo</h3>
                        <img src="assets/images/section_shape.png" alt="Shape" />
                    </div>
        <div className="container" >
                    <div className="conatiner">
                        <form>
                            <hr></hr>
                            <div className='container'>
                                <span style={{ paddingRight : "20px" }}>Type of Event :</span>
                                <select value={type} onChange={(e) => setType(e.target.value)} >
                                    <option></option>
                                    <option>tilak</option>
                                    <option>jodhpur</option>
                                    <option>baarat</option>
                                    <option>haldi</option>
                                    <option>mehndi</option>
                                    <option>wedding</option>
                                </select>
                            </div>
                            <hr></hr>
                            <div className="fordm-group">
                                <label htmlFor='img' id='label'>
                                <input
                                // multiple
                                id='img'
                                type="file" 
                                name='myFile'
                                accept='.jpeg, .JPG, .png'
                                onChange={(e) => setImage(e.target.files[0])}
                                />{
                                    (image) ? image.name : <div><img src={downCloud} alt="file" />
                                    <p>CLICK HERE</p>
                                    </div>
                                }
                                </label>
                                
                            </div>
                            <div className="form-group">
                                <button className="btnn title" type="button"
                                onClick={PostImages}
                                >Upload</button>
                            </div>
                        </form>
                    </div>
        </div>
        </div>
        
    )
}

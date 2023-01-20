import './uploadButton.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import axios from 'axios';

export default function UploadButton() {
    const [image, setImage] = useState()
    const [data, setData] = useState([])
    
    async function PostImages() {
        console.log(image);
        const formData = new FormData();
        formData.append('image', image)    

        await axios.post('http://localhost:8001/uploads', formData)
    }

    async function getAllImages() {
        await axios.get('http://localhost:8001/images')
        .then(res => {
            console.log(res.data); 
            setData(res.data.data)
            console.log(data)
        })
        .catch(err => {
            console.log(err);
        })
    }

  return (
    <div className="container">
                <div className="row">
                    <form>
                        <h3>React File Upload</h3>
                        <div className="form-group">
                            <input 
                            // multiple
                            type="file" 
                            name='myFile'
                            accept='.jpeg, .JPG, .png'
                            onChange={(e) => setImage(e.target.files[0])}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="button"
                            onClick={PostImages}
                            >Upload</button>
                        </div>
                    </form>
                </div>
                
                <div className='flex'>
                <button type='button' 
                        onClick={getAllImages}
                    >
                        See Images
                    </button>
                    {
                        data.map((serviceItem, serviceIndex) => {
                            return (
                                <div key={serviceIndex + 1} className="card">
                                    <img src={`http://localhost:8001/${serviceItem?.imageUrl}`} />
                                    { console.log(`http://localhost:8001/${serviceItem?.imageUrl}`)}
                                </div>
                            )
                        })
                    }

                </div>
            </div>
  )
}

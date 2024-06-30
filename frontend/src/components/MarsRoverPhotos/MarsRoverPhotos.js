import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./MarsRoverPhotos.css"

function MarsPhotos() {
    const [earthDate, setEarthDate] = useState('');
    const [camera, setCamera] = useState('all');
    const [photos, setPhotos] = useState([]);

    const handleChange = (event) => {
        if (event.target.id === 'earthDate') {
            setEarthDate(event.target.value);
        } else if (event.target.id === 'camera') {
            setCamera(event.target.value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchPhotos();
    };

    const fetchPhotos = () => {
        const apiKey = 'ajgRpg2TuuJgNs98eK8iZTUICVGpkrDbQVNO92Z8';
        const baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';
        const url = `${baseUrl}?earth_date=${earthDate}&camera=${camera}&api_key=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => setPhotos(data.photos))
            .catch(error => console.error('Error fetching photos:', error));
    };

    return (
        <>
        <div className="m-header">
            <Header/>
        </div>
        
        <div>
            <h1 className="paddings primaryText m-heading">Mars Rover Photos</h1>
            <div style={{ marginBottom: '30px' }}>
            <form onSubmit={handleSubmit}>

                <label htmlFor="earthDate" style={{ marginLeft: '30px' }}>Select Earth Date:</label>
                <input type="date" id="earthDate" className="earth-dropdown" style={{ marginLeft: '10px' }} value={earthDate} onChange={handleChange} required />

                <label htmlFor="camera" style={{ marginLeft: '40px' }}>Select Camera:</label>
                <select id="camera" className="camera-dropdown" style={{ marginLeft: '10px' }} value={camera} onChange={handleChange}>
                    <option value="all">All</option>
                    <option value="FHAZ">Front Hazard Avoidance Camera</option>
                    <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                    <option value="MAST">Mast Camera</option>
                    <option value="CHEMCAM">Chemistry and Camera Complex</option>
                    <option value="MAHLI">Mars Hand Lens Imager</option>
                    <option value="MARDI">Mars Descent Imager</option>
                    <option value="NAVCAM">Navigation Camera</option>
                    <option value="PANCAM">Panoramic Camera</option>
                    <option value="MINITES">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
                </select>

                <button type="submit" className="btn btn-primary search-button">Search</button>
            </form>
            </div>
            <div className="photo-container">
                {photos.length > 0 ? (
                    <div>
                        {photos.map((photo, index) => (
                            <img key={index} src={photo.img_src} alt="Mars Rover Photo" className="rover-photo"/>
                        ))}
                    </div>
                ) : (
                    <div className="secondaryText m-text">
                        <p>No photos available....</p>
                    </div>
                )}
            </div>
        </div>

        <div className="m-Footer">
            <Footer/>
        </div>
    </>
    );
}

export default MarsPhotos;

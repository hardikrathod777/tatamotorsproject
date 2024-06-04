import React, { useState } from 'react';
import './Harrier.css';
import tornado_blue from '../../assets/sunlit-yellow-left.png';
import flame_red from '../../assets/coral-red-left.png';
import daytona_gray from '../../assets/pebble-grey-left.png';
import opal_white from '../../assets/lunar-white-left.png';
import home_hero_2 from'../../assets/harrier-product-lifestyle-resized.jpg';
import home_hero_1 from'../../assets/terrain-repsonse.jpg'

function Harrier() {
    const [bgColor, setBgColor] = useState('rgb(210, 201, 36)');
    const [imageUrl, setImageUrl] = useState(tornado_blue);

    const handleColorChange = (color, image) => {
        setBgColor(color);
        setImageUrl(image);
    };

    return (
        <>
            <div className='container' style={{ paddingTop: '40px' }}>
                <div className='row'>
                    <div className='col-xxl-12 d-flex justify-content-center'>
                        <div className='car-details-h'>
                            <div className='text-car-h'>
                                <h3 style={{fontSize:'60px',color:'#383737',marginBottom:'20px'}}>Harrier</h3>
                                <h6 style={{fontSize:'20px',color:'#383737',marginBottom:'12px'}}>We are Warriors, We are Harriers</h6>
                                <p style={{fontSize:'18px',color:'#7a8084'}}>The New Harrier symbolizes the unwavering<br/> spirit of young achievers in its latest avatar </p>
                                <span><a href='#'>Learn More<i className="fa-solid fa-arrow-right"></i></a><a href='#'>Learn More<i className="fa-solid fa-arrow-right"></i></a></span>
                            </div>
                        </div>
                        <div className='car-img-h d-flex align-items-center' style={{ backgroundColor: bgColor }}>
                            <img src={imageUrl} alt="Car" />
                            <span>
                                <i className="fa-solid fa-arrows-rotate"></i>
                            </span>
                            <div className='img-color-h d-flex'>
                                <div className='select-option-style-h' style={{ background: 'linear-gradient(90deg, rgb(210, 201, 36) 50%, rgb(0, 0, 0) 50%)' }} onClick={() => handleColorChange('rgb(210, 201, 36)', tornado_blue)}></div>
                                <div className='select-option-style-h' style={{ backgroundColor: 'rgb(110, 22, 24)' }} onClick={() => handleColorChange('rgb(110, 22, 24)', flame_red)}></div>
                                <div className='select-option-style-h' style={{ backgroundColor: 'rgb(141, 142, 147)' }} onClick={() => handleColorChange('rgb(141, 142, 147)', daytona_gray)}></div>
                                <div className='select-option-style-h' style={{ background: 'linear-gradient(90deg, rgb(224, 228, 220) 50%, rgb(0, 0, 0) 50%)' }} onClick={() => handleColorChange('rgb(224, 228, 220)', opal_white)}></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-12 d-flex justify-content-center'>
                        <div className='home-hero-2-h'>
                            <img src={home_hero_2}/>
                        </div>
                        <div className='home-hero-1-h'>
                            <img src={home_hero_1}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Harrier;

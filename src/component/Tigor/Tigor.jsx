import React, { useState } from 'react';
import './Tigor.css';
import tornado_blue from '../../assets/meteor-bronze-right-13.png';
import flame_red from '../../assets/magnetic-red-right-2.png';
import daytona_gray from '../../assets/daytona-grey-right-44.png';
import opal_white from '../../assets/arizona-blue-right-12.png';
import tornado_blue_dt from '../../assets/opal-white-right-2.png';
import home_hero_1 from'../../assets/home-hero-tigor-01.jpg';
import home_hero_2 from'../../assets/home-hero-tigor-02.jpg'

function Tigor() {
    const [bgColor, setBgColor] = useState('rgb(160, 127, 82)');
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
                        <div className='car-img-t d-flex align-items-center' style={{ backgroundColor: bgColor }}>
                            <img src={imageUrl} alt="Car" />
                            <span>
                                <i className="fa-solid fa-arrows-rotate"></i>
                            </span>
                            <div className='img-color d-flex'>
                                <div className='select-option-style-t' style={{ backgroundColor: 'rgb(160, 127, 82)' }} onClick={() => handleColorChange('rgb(160, 127, 82)', tornado_blue)}></div>
                                <div className='select-option-style-t' style={{ backgroundColor: 'rgb(135, 83, 86)' }} onClick={() => handleColorChange('rgb(135, 83, 86)', flame_red)}></div>
                                <div className='select-option-style-t' style={{ backgroundColor: 'rgb(56, 57, 59)' }} onClick={() => handleColorChange('rgb(56, 57, 59)', daytona_gray)}></div>
                                <div className='select-option-style-t' style={{ backgroundColor: 'rgb(16, 61, 110)' }} onClick={() => handleColorChange('rgb(16, 61, 110)', opal_white)}></div>
                                <div className='select-option-style-t' style={{ background: 'rgb(254, 254, 254)' }} onClick={() => handleColorChange('rgb(254, 254, 254)', tornado_blue_dt)}></div>
                            </div>
                        </div>
                        <div className='car-details-t'>
                            <div className='text-car-t'>
                                <h3 style={{fontSize:'60px',color:'#383737',marginBottom:'20px'}}>Tigor</h3>
                                <h6 style={{fontSize:'20px',color:'#383737',marginBottom:'12px'}}>Sedan for the Stars</h6>
                                <p style={{fontSize:'18px',color:'#7a8084'}}>Stunning style, state-of-the-art features,<br/> comprehensive safety and seamlessly<br/> smooth drives of the New Tigor ensure you<br/> are in your element while exploring the city.</p>
                                <span><a href='#'>Learn More<i className="fa-solid fa-arrow-right"></i></a><a href='#'>Learn More<i className="fa-solid fa-arrow-right"></i></a></span>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-12 d-flex justify-content-center'>
                        <div className='home-hero-1-t'>
                            <img src={home_hero_1}/>
                        </div>
                        <div className='home-hero-2-t'>
                            <img src={home_hero_2}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tigor;

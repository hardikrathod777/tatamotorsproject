import React, { useState } from 'react';
import './Nexon.css';
import tornado_blue from '../../assets/twilight-purple-right.png';
import flame_red from '../../assets/calgury-white-right.png';
import daytona_gray from '../../assets/daytona-grey-right-42.png';
import opal_white from '../../assets/flame-red-right-11.png';
import home_hero_1 from'../../assets/GrandFloorConsoleWithLeatheretteArmrest.jpg';
import home_hero_2 from'../../assets/ConnectedVehicleTechnologyWithiRA20.jpg'

function Nexon() {
    const [bgColor, setBgColor] = useState('rgb(38,24,102)');
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
                        <div className='car-img-n d-flex align-items-center' style={{ backgroundColor: bgColor }}>
                            <img src={imageUrl} alt="Car" />
                            <span>
                                <i className="fa-solid fa-arrows-rotate"></i>
                            </span>
                            <div className='img-color-n d-flex'>
                                <div className='select-option-style-n' style={{ background: 'linear-gradient(90deg, rgb(38, 24, 102) 50%, rgb(0, 0, 0) 50%)' }} onClick={() => handleColorChange('rgb(38,24,102)', tornado_blue)}></div>
                                <div className='select-option-style-n' style={{ backgroundColor: 'rgb(254,254,254)' }} onClick={() => handleColorChange('rgb(254,254,254)', flame_red)}></div>
                                <div className='select-option-style-n' style={{ backgroundColor: 'rgb(56,57,59)' }} onClick={() => handleColorChange('rgb(56,57,59)', daytona_gray)}></div>
                                <div className='select-option-style-n' style={{ backgroundColor: 'rgb(110,22,24)' }} onClick={() => handleColorChange('rgb(110,22,24)', opal_white)}></div>
                            </div>
                        </div>
                        <div className='car-details-n'>
                            <div className='text-car-n'>
                                <h3 style={{fontSize:'60px',color:'#383737',marginBottom:'20px'}}>Nexon</h3>
                                <h6 style={{fontSize:'20px',color:'#383737',marginBottom:'12px'}}>Its #WayAhead</h6>
                                <p style={{fontSize:'18px',color:'#7a8084'}}>Nexon in its new avatar is now here with<br/> multiple combinations of design, powertrain<br/> and features with the philosophy of<br/> personalisation and A Nexon for Everyone </p>
                                <span><a href='#'>Learn More<i className="fa-solid fa-arrow-right"></i></a><a href='#'>Learn More<i className="fa-solid fa-arrow-right"></i></a></span>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-12 d-flex justify-content-center'>
                        <div className='home-hero-1-n'>
                            <img src={home_hero_1}/>
                        </div>
                        <div className='home-hero-2-n'>
                            <img src={home_hero_2}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nexon;

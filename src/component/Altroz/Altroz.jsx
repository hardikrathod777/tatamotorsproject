import React, { useState } from 'react';
import './Altroz.css';
import tornado_blue from '../../assets/OperaBlueLeft.png';
import flame_red from '../../assets/DowntownRedLeft.png';
import daytona_gray from '../../assets/HarbourBlueLeft.png';
import opal_white from '../../assets/AvenueWhiteLeft.png';
import tornado_blue_dt from '../../assets/HighstreetGoldLeft.png';
import opal_white_dt from '../../assets/ArcadeGreyLeft.png';
import home_hero_2 from'../../assets/home-hero-altroz-1.jpg';
import home_hero_1 from'../../assets/home-hero-altroz-2.jpg'

function Altroz() {
    const [bgColor, setBgColor] = useState('rgb(0, 40, 111)');
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
                        <div className='car-details-a'>
                            <div className='text-car-a'>
                                <h3 style={{fontSize:'60px',color:'#383737',marginBottom:'20px'}}>Altroz</h3>
                                <h6 style={{fontSize:'20px',color:'#383737',marginBottom:'12px'}}>The Gold Standard</h6>
                                <p style={{fontSize:'18px',color:'#7a8084'}}>Looking for a hatchback that offers the best of everything? ALTROZ is the gold standard of hatchbacks. It has it all – Style, Safety, Performance and Technology. Whether you choose the petrol, diesel, i-Turbo or the iCNG, ALTROZ offers smooth and comfortable drives. Experience the thrill of driving an ALTROZ today.</p>
                                <span><a href='#'>Learn More<i className="fa-solid fa-arrow-right"></i></a><a href='#'>Learn More<i className="fa-solid fa-arrow-right"></i></a></span>
                            </div>
                        </div>
                        <div className='car-img-a d-flex align-items-center' style={{ backgroundColor: bgColor }}>
                            <img src={imageUrl} alt="Car" />
                            <span>
                                <i className="fa-solid fa-arrows-rotate"></i>
                            </span>
                            <div className='img-color-a d-flex'>
                                <div className='select-option-style-a' style={{ backgroundColor: 'rgb(0, 40, 111)' }} onClick={() => handleColorChange('rgb(0, 40, 111)', tornado_blue)}></div>
                                <div className='select-option-style-a' style={{ backgroundColor: 'rgb(110, 22, 24)' }} onClick={() => handleColorChange('rgb(110, 22, 24)', flame_red)}></div>
                                <div className='select-option-style-a' style={{ backgroundColor: 'rgb(13, 109, 189)' }} onClick={() => handleColorChange('rgb(13, 109, 189)', daytona_gray)}></div>
                                <div className='select-option-style-a' style={{ backgroundColor: 'rgb(224, 228, 220)' }} onClick={() => handleColorChange('rgb(224, 228, 220)', opal_white)}></div>
                                <div className='select-option-style-a' style={{ background: 'rgb(208, 165, 62)' }} onClick={() => handleColorChange('rgb(208, 165, 62)', tornado_blue_dt)}></div>
                                <div className='select-option-style-a' style={{ background: 'rgb(69, 70, 75)' }} onClick={() => handleColorChange('rgb(69, 70, 75)', opal_white_dt)}></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-12 d-flex justify-content-center'>
                        <div className='home-hero-2-a'>
                            <img src={home_hero_2}/>
                        </div>
                        <div className='home-hero-1-a'>
                            <img src={home_hero_1}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Altroz;

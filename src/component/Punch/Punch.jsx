import React, { useState } from 'react';
import './Punch.css';
import tornado_blue from '../../assets/TormadoBlueLeft.png';
import flame_red from '../../assets/DaytonaGreyLeft.png';
import daytona_gray from '../../assets/TropicalMistLeft.png';
import opal_white from '../../assets/OrcusWhiteLeft.png';
import tornado_blue_dt from '../../assets/AtomicOrangeLeft.png';
import opal_white_dt from '../../assets/MeteorBronzeLeft.png';
import claypso_red from'../../assets/CalypsoRedLeft.png';
import home_hero_2 from'../../assets/home-hero-punch-1.jpg';
import home_hero_1 from'../../assets/home-hero-punch-2.jpg'

function Punch() {
    const [bgColor, setBgColor] = useState('rgb(24,100,179)');
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
                        <div className='car-details-p'>
                            <div className='text-car-p'>
                                <h3 style={{fontSize:'60px',color:'#383737',marginBottom:'20px'}}>Punch</h3>
                                <h6 style={{fontSize:'20px',color:'#383737',marginBottom:'12px'}}>The no-compromise SUV</h6>
                                <p style={{fontSize:'18px',color:'#7a8084'}}>Offering an exciting mix of tough utility with<br/> sporty dynamics that Optimizes what a<br/> characterful SUV should be. The world will<br/> take notice of two showstoppers. You and<br/> the Punch.</p>
                                <span><a href='#'>Learn More<i className="fa-solid fa-arrow-right"></i></a><a href='#'>Learn More<i className="fa-solid fa-arrow-right"></i></a></span>
                            </div>
                        </div>
                        <div className='car-img-p d-flex align-items-center' style={{ backgroundColor: bgColor }}>
                            <img src={imageUrl} alt="Car" />
                            <span>
                                <i className="fa-solid fa-arrows-rotate"></i>
                            </span>
                            <div className='img-color-p d-flex'>
                                <div className='select-option-style-p' style={{ backgroundColor: 'linear-gradient(90deg, rgb(24, 100, 179) 50%, rgb(254, 254, 254) 50%)' }} onClick={() => handleColorChange('rgb(24,100,179)', tornado_blue)}></div>
                                <div className='select-option-style-p' style={{ backgroundColor: 'rgb(56,57,59)' }} onClick={() => handleColorChange('rgb(56,57,59)', flame_red)}></div>
                                <div className='select-option-style-p' style={{ backgroundColor: 'rgb(116,145,169)' }} onClick={() => handleColorChange('rgb(116,145,169)', daytona_gray)}></div>
                                <div className='select-option-style-p' style={{ backgroundColor: 'rgb(254,254,254)' }} onClick={() => handleColorChange('rgb(254,254,254)', opal_white)}></div>
                                <div className='select-option-style-p' style={{ background: 'rgb(245,64,24)' }} onClick={() => handleColorChange('rgb(245,64,24)', tornado_blue_dt)}></div>
                                <div className='select-option-style-p' style={{ background: 'linear-gradient(90deg, rgb(160, 127, 82) 50%, rgb(17, 17, 17) 50%)' }} onClick={() => handleColorChange('rgb(160,127,82)', opal_white_dt)}></div>
                                <div className='select-option-style-p' style={{ background: 'linear-gradient(90deg, rgb(195, 34, 40) 50%, rgb(254, 254, 254) 50%)' }} onClick={() => handleColorChange('rgb(195, 34, 40)', claypso_red)}></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-12 d-flex justify-content-center'>
                        <div className='home-hero-2-p'>
                            <img src={home_hero_2}/>
                        </div>
                        <div className='home-hero-1-p'>
                            <img src={home_hero_1}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Punch;

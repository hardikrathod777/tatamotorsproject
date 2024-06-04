import React, { useState } from 'react';
import './Safari.css';
import tornado_blue from '../../assets/CosmicGold-right.png';
import flame_red from '../../assets/StellarFrost-right.png';
import daytona_gray from '../../assets/StardustAsh-right.png';
import opal_white from '../../assets/Galacticsapphire-right.png';
import home_hero_1 from'../../assets/safari-interior-lifestyle-resized-new.jpg';
import home_hero_2 from'../../assets/safari-product-lifestyle-resized.jpg'

function Safari() {
    const [bgColor, setBgColor] = useState('rgb(202, 172, 124)');
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
                        <div className='car-img-s d-flex align-items-center' style={{ backgroundColor: bgColor }}>
                            <img src={imageUrl} alt="Car" />
                            <span>
                                <i className="fa-solid fa-arrows-rotate"></i>
                            </span>
                            <div className='img-color-s d-flex'>
                                <div className='select-option-style-s' style={{ background: 'linear-gradient(90deg, rgb(202, 172, 124) 50%, rgb(0, 0, 0) 50%)' }} onClick={() => handleColorChange('rgb(202, 172, 124)', tornado_blue)}></div>
                                <div className='select-option-style-s' style={{ backgroundColor: 'rgb(254,254,254)' }} onClick={() => handleColorChange('rgb(254, 254, 254)', flame_red)}></div>
                                <div className='select-option-style-s' style={{ backgroundColor: 'rgb(108,115,121)' }} onClick={() => handleColorChange('rgb(108,115,121)', daytona_gray)}></div>
                                <div className='select-option-style-s' style={{ backgroundColor: 'rgb(0, 97, 170)' }} onClick={() => handleColorChange('rgb(0, 97, 170)', opal_white)}></div>
                            </div>
                        </div>
                        <div className='car-details-s'>
                            <div className='text-car-s'>
                                <h3 style={{fontSize:'60px',color:'#383737',marginBottom:'20px'}}>New Safari</h3>
                                <h6 style={{fontSize:'20px',color:'#383737',marginBottom:'12px'}}>Reclaim Your Life</h6>
                                <p style={{fontSize:'18px',color:'#7a8084'}}>The New Safari epitomizes premium luxury<br/> with its opulent interiors,Plush Upholstery &<br/> advanced infotainment system.  Get ready<br/> to Reclaim Your Life with the New – Safari.</p>
                                <span><a href='#'>Learn More<i className="fa-solid fa-arrow-right"></i></a><a href='#'>Learn More<i className="fa-solid fa-arrow-right"></i></a></span>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-12 d-flex justify-content-center'>
                        <div className='home-hero-1-s'>
                            <img src={home_hero_1}/>
                        </div>
                        <div className='home-hero-2-s'>
                            <img src={home_hero_2}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Safari;

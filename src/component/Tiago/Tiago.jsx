import React, { useState } from 'react';
import './Tiago.css';
import tornado_blue from '../../assets/tornado-blue-right-6.png';
import flame_red from '../../assets/flame-red-right-73.png';
import daytona_gray from '../../assets/daytona-grey-right-139.png';
import opal_white from '../../assets/opal-white-right-21.png';
import tornado_blue_dt from '../../assets/tornado-blue-dt-right.png';
import opal_white_dt from '../../assets/opal-white-dt-right.png';
import home_hero_1 from'../../assets/home-hero-tiago-01.jpg';
import home_hero_2 from'../../assets/home-hero-tiago-02.jpg'

function Tiago() {
    const [bgColor, setBgColor] = useState('#1864b3');
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
                        <div className='car-img d-flex align-items-center' style={{ backgroundColor: bgColor }}>
                            <img src={imageUrl} alt="Car" />
                            <span>
                                <i className="fa-solid fa-arrows-rotate"></i>
                            </span>
                            <div className='img-color d-flex'>
                                <div className='select-option-style' style={{ backgroundColor: '#1864b3' }} onClick={() => handleColorChange('#1864b3', tornado_blue)}></div>
                                <div className='select-option-style' style={{ backgroundColor: 'rgb(172, 18, 10)' }} onClick={() => handleColorChange('rgb(172, 18, 10)', flame_red)}></div>
                                <div className='select-option-style' style={{ backgroundColor: 'rgb(56, 57, 59)' }} onClick={() => handleColorChange('rgb(56, 57, 59)', daytona_gray)}></div>
                                <div className='select-option-style' style={{ backgroundColor: 'rgb(220, 221, 223)' }} onClick={() => handleColorChange('rgb(220, 221, 223)', opal_white)}></div>
                                <div className='select-option-style' style={{ background: 'linear-gradient(90deg, rgb(24, 100, 179) 50%, rgb(0, 0, 0) 50%)' }} onClick={() => handleColorChange('rgb(24, 100, 179)', tornado_blue_dt)}></div>
                                <div className='select-option-style' style={{ background: 'linear-gradient(90deg, rgb(220, 221, 223) 50%, rgb(0, 0, 0) 50%)' }} onClick={() => handleColorChange('rgb(220, 221, 223)', opal_white_dt)}></div>
                            </div>
                        </div>
                        <div className='car-details'>
                            <div className='text-car'>
                                <h3 style={{fontSize:'60px',color:'#383737',marginBottom:'20px'}}>Tiago</h3>
                                <h6 style={{fontSize:'20px',color:'#383737',marginBottom:'12px'}}>Its Seriously Fun</h6>
                                <p style={{fontSize:'18px',color:'#7a8084'}}>Younger than ever. Bolder than ever.<br/> Inspired by the spirited youth, the All-new<br/> Tiago is hard to ignore. Drive around the city<br/> and watch heads turn towards you.</p>
                                <span><a href='#'>Learn More<i className="fa-solid fa-arrow-right"></i></a><a href='#'>Learn More<i className="fa-solid fa-arrow-right"></i></a></span>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-12 d-flex justify-content-center'>
                        <div className='home-hero-1'>
                            <img src={home_hero_1}/>
                        </div>
                        <div className='home-hero-2'>
                            <img src={home_hero_2}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tiago;

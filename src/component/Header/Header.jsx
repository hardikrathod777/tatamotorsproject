import React, { useState, useEffect } from 'react';
import './Header.css';
import white_logo  from '../../assets/logo-new-white.png';
import black_logo from '../../assets/logo-new-black.png';
import navigation_1 from'../../assets/navigation-1.png';
import navigation_2 from'../../assets/tiago-ev-xz-tropical-mist.png';
import navigation_3 from'../../assets/altroz-navigation.png';
import navigation_4 from'../../assets/navigation.png';
import navigation_5 from'../../assets/tigor-ve-xz-magnetic-red.png';
import navigation_6 from'../../assets/punch-navigation.png';
import navigation_7 from'../../assets/punch-ev-empowered-oxide.png';
import navigation_8 from'../../assets/nexon-navigation.png';
import navigation_9 from'../../assets/oxide.png';
import navigation_10 from'../../assets/harrier-navigation.png';
import navigation_11 from'../../assets/safari-navigation.png';
import { Link } from 'react-router-dom'

function Header(){


    const [scrolled, setScrolled] = useState(false);
    const [logo, setLogo] = useState(white_logo);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const isScrolled = scrollTop > 0;
        setScrolled(isScrolled);

        if (isScrolled) {
            setLogo(black_logo);
        } else {
            setLogo(white_logo);
        }
    };

    // Add event listener when component mounts
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(
        <>
            <div className={`container-fluid header-style ${scrolled ? 'scrolled' : ''}`}>
                <div className='row'>
                    <div className='col-xxl-12 d-flex justify-content-between'>
                        <div className='logo-style'>
                            <img src={logo} />
                        </div>
                        <div className={`menu-bar-i ${scrolled ? 'scrolled' : ''}`}>
                            <i className={"fa-solid fa-bars"} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></i>
                        </div>
                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div className="offcanvas-body col-xxl-12 d-flex">
                                <div className='offcanvas_menu'>
                                    <div className='of-logo'>
                                        <img src={black_logo}></img>
                                    </div>
                                    <div style={{paddingLeft:'93px'}}>
                                        <div className='sign'>
                                            <a href='#'>Sign in <i className="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                        <ul className='off_menu'>
                                            <li>
                                                <Link to={'/digital-showroom'}><a>Digital Showroom</a></Link>
                                            </li>
                                            <li>
                                                <a href='#'>Test Drive</a>
                                            </li>
                                            <li>
                                                <a href='#'>Accessories</a>
                                            </li>
                                            <li className='service-drop'>
                                                <a href='#'>Service <i className="fa-solid fa-chevron-right"></i></a>
                                                <div className='service_menu'>
                                                    <ul>
                                                        <li><a href='#'>Service Products</a></li>
                                                        <li><a href='#'>Book a Service</a></li>
                                                        <li><a href='#'>Service Connect App</a></li>
                                                        <li><a href='#'>Owners Manual</a></li>
                                                        <li><a href='#'>Bluetooth Compatibility</a></li>
                                                        <li><a href='#'>General Tips</a></li>
                                                        <li><a href='#'>Fuel Saving Tips</a></li>
                                                        <li><a href='#'>Recall Information</a></li>
                                                        <li><a href='#'>Android Auto User Guide</a></li>
                                                        <li><a href='#'>Information On Warranty</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href='#'>Exchange Car</a>
                                            </li>
                                            <li>
                                                <a href='#'>Rewards</a>
                                            </li>
                                            <li>
                                                <a href='#'>Account</a>
                                            </li>
                                            <li>
                                                <a href='#'>Dealer Locator</a>
                                            </li>
                                            <li>
                                                <a href='#'>Sitemap</a>
                                            </li>
                                            <li className='about-drop'>
                                                <a href='#'>About Us <i className="fa-solid fa-chevron-right"></i></a>
                                                <div className='about_menu'>
                                                    <ul>
                                                        <li><a href='#'>Our Story</a></li>
                                                        <li><a href='#'>News And Events</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='offcanvas_body'>
                                    <div className='close'>
                                        <button type="button" className='close-btn' data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                                    </div>
                                    <div className='col-xxl-12 models-d' style={{ height: 'calc(100vh - 100px)' }}>
                                        <div>
                                            <h4>Our Models</h4>
                                            <p>Drive NEW FOREVER. A whole new range of cars<br/> from Tata Motors.</p>
                                            <div className=''>
                                                <div className='col-xxl-12 d-flex'>
                                                    <div className='col-xxl-4' style={{padding:'32px 10px'}}>
                                                        <div className='nav-box'>
                                                            <img src={navigation_1}></img>
                                                            <h6 className='navigation-h6'>Tiago</h6>
                                                            <a href='#'>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className='col-xxl-4' style={{padding:'32px 10px'}}>
                                                        <div className='nav-box'>
                                                            <img src={navigation_2}></img>
                                                            <h6 className='navigation-h6'>Tiago.ev</h6>
                                                            <a href='#'>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className='col-xxl-4' style={{padding:'32px 10px'}}>
                                                        <div className='nav-box'>
                                                            <img src={navigation_3}></img>
                                                            <h6 className='navigation-h6'>Altroz</h6>
                                                            <a href='#'>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-xxl-12 d-flex'>
                                                    <div className='col-xxl-4' style={{padding:'32px 10px'}}>
                                                        <div className='nav-box'>
                                                            <img src={navigation_4}></img>
                                                            <h6 className='navigation-h6'>Tigor</h6>
                                                            <a href='#'>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className='col-xxl-4' style={{padding:'32px 10px'}}>
                                                        <div className='nav-box'>
                                                            <img src={navigation_5}></img>
                                                            <h6 className='navigation-h6'>Tigor.ev</h6>
                                                            <a href='#'>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className='col-xxl-4' style={{padding:'32px 10px'}}>
                                                        <div className='nav-box'>
                                                            <img src={navigation_6}></img>
                                                            <h6 className='navigation-h6'>Punch</h6>
                                                            <a href='#'>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-xxl-12 d-flex'>
                                                    <div className='col-xxl-4' style={{padding:'32px 10px'}}>
                                                        <div className='nav-box'>
                                                            <img src={navigation_7}></img>
                                                            <h6 className='navigation-h6'>Punch.ev</h6>
                                                            <a href='#'>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className='col-xxl-4' style={{padding:'32px 10px'}}>
                                                        <div className='nav-box'>
                                                            <img src={navigation_8}></img>
                                                            <h6 className='navigation-h6'>Nexon</h6>
                                                            <a href='#'>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className='col-xxl-4' style={{padding:'32px 10px'}}>
                                                        <div className='nav-box'>
                                                            <img src={navigation_9}></img>
                                                            <h6 className='navigation-h6'>Nexon,ev</h6>
                                                            <a href='#'>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-xxl-12 d-flex'>
                                                    <div className='col-xxl-4' style={{padding:'32px 10px'}}>
                                                        <div className='nav-box'>
                                                            <img src={navigation_10}></img>
                                                            <h6 className='navigation-h6'>Harrier</h6>
                                                            <a href='#'>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className='col-xxl-4' style={{padding:'32px 10px'}}>
                                                        <div className='nav-box'>
                                                            <img src={navigation_11}></img>
                                                            <h6 className='navigation-h6'>Safari</h6>
                                                            <a href='#'>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className='col-xxl-4' style={{padding:'32px 10px'}}>
                                                        {/* <div className='nav-box'>
                                                            <img src={navigation_6}></img>
                                                            <h6 className='navigation-h6'>Altroz</h6>
                                                            <a href='#'>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}

    export default Header
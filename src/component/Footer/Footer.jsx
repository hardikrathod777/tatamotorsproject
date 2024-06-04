import './Footer.css';
import tatasons from'../../assets/Tata_Sons_Logo_48_32.png'
import fb from'../../assets/fb.png'
import ig from'../../assets/inst.png'
import tw from'../../assets/tw.png'
import yt from'../../assets/yt.png'
function Footer() {
    return (
        <>
        <div className=' footer_style'>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 d-flex">
                        <div className="col-xxl-8 tata_logo">
                            <img src={tatasons}></img>
                            <div>
                                <li><a href='#'>TATA<i className="fa-solid fa-arrow-right"></i></a></li>
                            </div>
                        </div>
                        <div className="col-xxl-2 quick_link">
                                <p>Quick Links</p>
                                <ul>
                                    <li><a href='#'>Contact us<i className="fa-solid fa-arrow-right"></i></a></li>
                                    <li><a href='#'>Privacy Policy<i className="fa-solid fa-arrow-right"></i></a></li>
                                    <li><a href='#'>Terms & Condition<i className="fa-solid fa-arrow-right"></i></a></li>
                                    <li><a href='#'>TATA.ev<i className="fa-solid fa-arrow-right"></i></a></li>
                                </ul>
                        </div>
                        <div className="col-xxl-2 social">
                            <p>Quick Links</p>
                            <ul>
                                <li><a href='#'><img src={fb}></img>Facebook</a></li>
                                <li><a href='#'><img src={tw}></img>Twitter</a></li>
                                <li><a href='#'><img src={ig}></img>Instagram</a></li>
                                <li><a href='#'><img src={yt}></img>Youtube</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-xxl-12'>
                        <p style={{color:'#eaeaec', marginBottom:'0%',fontSize:'14px'}}>Copyright © 2024 TATA Motors. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer
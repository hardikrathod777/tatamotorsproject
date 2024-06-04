// import React from 'react'
import './S_t_drive.css';
import Test_drive from'../../assets/digital-showroom-2.jpeg'
function S_t_drive() {
    return (
    <>
        <div className='container' data-aos="fade-up" data-aos-duration="2000" style={{ paddingTop: '40px' }}>
            <div className='row'>
                <div className='col-xxl-12 d-flex justify-content-center'>
                        <div className='car-drive-img d-flex'>
                            <img src={Test_drive} alt="Car" />
                        </div>
                        <div className='car-details-drive' style={{width:'614px',backgroundColor:'rgb(248,248,248)'}}>
                            <div className='text-drive'>
                                <h5>Schedule a Test Drive</h5>
                                <p>We know youll love our vehicles which is why you<br/> can try them now for an hour, a day, or a<br/> weekend. When you decide this is the car for you,<br/> you can buy it online and its yours</p>
                            </div>
                            <span><a href='#'>Schedule Now<i className="fa-solid fa-arrow-right"></i></a></span>
                        </div>
                </div>
                <div className='col-xxl-12'>
                    <div className='prize_info'>
                        <p>* Prices indicated are Ex-showroom prices. Prices are subject to change without prior information at the discretion of Tata Motors. Contact your nearest Tata Motors dealer for exact prices.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default S_t_drive
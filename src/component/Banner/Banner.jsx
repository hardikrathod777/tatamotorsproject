import './Banner.css';
import safari_dark from  '../../assets/safari-dark-banner-march-2024.webp';
import nexon_dark from  '../../assets/nexon-dark-banner-march-2024.webp';
import harrier_dark from  '../../assets/harrier-dark-banner-march-2024.webp';

function Banner(){
    return(
        <>
            <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={nexon_dark} className="d-block w-100" alt="..."/>
                    <div className='nexon-banner-text'>
                        <div className='padd-bann'>
                            <div>
                                <h3>Nexon #DARK</h3>
                                <p>#Dark Rules</p>
                            </div>
                            <div className='l-arrow'>
                                <p style={{'margin-bottom':'0px'}}>Learn more   <i className="fa-solid fa-arrow-right"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={harrier_dark} className="d-block w-100" alt="..."/>
                    <div className='nexon-banner-text'>
                        <div className='padd-bann'>
                            <div>
                                <h3>Harrier #DARK</h3>
                                <p>#Dark Rules</p>
                            </div>
                            <div className='l-arrow'>
                                <p style={{'margin-bottom':'0px'}}>Learn more   <i className="fa-solid fa-arrow-right"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={safari_dark} className="d-block w-100" alt="..."/>
                    <div className='nexon-banner-text'>
                        <div className='padd-bann'>
                            <div>
                                <h3>Safari #DARK</h3>
                                <p>#Dark Rules</p>
                            </div>
                            <div className='l-arrow'>
                                <p style={{'margin-bottom':'0px'}}>Learn more   <i className="fa-solid fa-arrow-right"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            {/* scroll */}
            <div className='container-fluid Scroll'>
                <div className='row'>
                    <div className='col-xxl-12 d-flex justify-content-center'>
                        <div>
                            <p style={{"margin-bottom":"0px","color":"#fff"}}>Scroll</p>
                        </div>
                    </div>
                    <div className='col-xxl-12 d-flex justify-content-center'>
                        <div className='scroll-arrow'>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            
        </>
    )
}

export default Banner
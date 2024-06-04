import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import './Digital.css';
import mainVideo from'../../assets/intro-video.mp4';
import tiago_entry from'../../assets/entryvideo.mp4'
function Digital() {

    const [mainVideoPlayed, setMainVideoPlayed] = useState(false);

    useEffect(() => {
            const videoPlayedBefore = sessionStorage.getItem('mainVideoPlayed');

        if (!videoPlayedBefore) {
            setMainVideoPlayed(true);
            sessionStorage.setItem('mainVideoPlayed', true);
        }
    }, []);

    return (
        <>
            <Header />
            <div>
                <div>
                    {mainVideoPlayed && <video className='intro-video' autoPlay src={mainVideo}></video>}
                </div>
                <div className='tiago-videos'>
                    <video className='tiago_entry' autoPlay src={tiago_entry} ></video>
                </div>
            </div>
        </>
        
    )
}

export default Digital
import React from 'react';
import { ReactComponent as WixLogo } from '../assets/svg-icons/wixStudio-icon.svg';
import { Link } from 'react-router-dom';
import arrowicon from '../assets/images/wix-link-arrow-8f0466c1e5b205f07bf5dca616aa21fe6e3d6f9931a50729cdf25612eda73377.png';

function LogInLogOutComp(props) {
    return (
        <div className='max-w-[400px] min-h-full flex-col justify-between bg-[#1c1d21] hidden media-945:flex'>
            <div className='w-full flex-1 flex flex-col justify-between py-12 px-8'>
                <div className='w-full justify-center items-center'>
                    <Link to={'https://wix.com'}>
                        <WixLogo width="190px"/>
                    </Link>
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <h1 className='text-3xl text-white font-light'>Explore what Eliran Vahdi built on Wix Studio</h1>
                    <Link className='text-white text-base flex items-center' to={'https://www.wix.com/studio/design/inspiration/blendmode?utm_campaign=pa_media_buying_studio_brnd_1/25_dribbble%5Esign-in&experiment_id=%5Ebrand%5E%5Eblend-mode'}>
                        <span className='underline'>Get inspired</span>
                        <img src={arrowicon} alt="icon" className='w-[16px] h-[10px] ml-2'/>
                    </Link>
                </div>
            </div>
            <div className='w-full flex-1'>
                <video src="https://cdn.dribbble.com/uploads/60139/original/796e1b621a6d76807c14fa26b4004195.mp4?1736290998" loop muted autoPlay playsInline className='min-w-full min-h-full'></video>
            </div>
        </div>
    );
}

export default LogInLogOutComp;
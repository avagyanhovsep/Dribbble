import React from 'react';
import info from '../data/footer.json';
import {ReactComponent as DribbleIcon} from '../assets/svg-icons/dribbble-logo-icon.svg';
import {ReactComponent as TwitterIcon} from '../assets/svg-icons/twitter-icon.svg';
import {ReactComponent as FacebookIcon} from '../assets/svg-icons/facebook-icon.svg';
import {ReactComponent as InstagramIcon} from '../assets/svg-icons/instagram-icon.svg';
import {ReactComponent as PinterestIcon} from '../assets/svg-icons/pinterest-icon.svg';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

function Footer(props) {
    const data = [...info, ...info];
    return (
        <div className='w-full flex flex-col items-center py-24 overflow-hidden'>
            <div className='w-full flex'>
                <Marquee speed={50} pauseOnHover={true} gradientWidth={50} className='footer-marquee'>
                    {data.map((item, index) => (
                        <div key={index} className="w-[200px] group">
                            <Link to="/">
                                <div className="w-full h-[150px] relative">
                                    <img src={item.avatar} className="w-full h-full object-cover rounded-md border-2 border-solid border-white" alt={item.title}/>
                                        {item.back_overlay.map((color, index) => (
                                            <div key={index} style={{ backgroundColor: color }} className={`w-[200px] h-[150px] rounded-xl absolute -z-10 border-2 border-solid border-white duration-200 ${index === 0 ? "delay-100 -z-10 top-[-5px] right-[-5px] group-hover:top-[-7px] group-hover:right-[-7px]" : "top-[-10px] -z-20 right-[-10px] group-hover:top-[-14px] group-hover:right-[-14px]"}`}></div>
                                        ))}
                                </div>
                                <div className="w-full py-3">
                                    <p className="text-sm text-link-color">{item.title}</p>
                                </div>
                            </Link>
                        </div>
                    ))}   
                </Marquee>
            </div>
            <div className='max-w-[1300px] w-full py-20 px-3 media-1161:px-10'>
                <ul className='flex justify-between items-center gap-6 flex-col media-1161:flex-row media-1161:gap-4'>
                    <div>
                        <li className='flex justify-center items-center'>
                            <Link to={'/'}>
                                <DribbleIcon className='w-[110px]'/>
                            </Link>
                        </li>
                    </div>
                    <div className='flex flex-wrap justify-center'>
                    {["For designers", "Hire talent", "Inspiration", "Advertising", "Blog", "About", "Careers", "Support"].map((item, index) => (
                        <li key={index} className='px-4 py-2'>
                            <Link to='/' className='text-link-color text-sm font-semibold'>
                                {item}
                            </Link>
                        </li>
                    ))}

                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        {[
                            { icon: <TwitterIcon width="20" height="20" fill="#000000" />, link: 'https://x.com/' },
                            { icon: <FacebookIcon width="20" height="20" fill="#000000" />, link: 'https://facebook.com/' },
                            { icon: <InstagramIcon width="20" height="20" fill="#000000" />, link: 'https://instagram.com/' },
                            { icon: <PinterestIcon width="20" height="20" fill="#000000" />, link: 'https://pinterest.com/' }
                        ].map((item, index) => (
                            <li key={index}>
                                <Link to={item.link}>
                                    {item.icon}
                                </Link>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
            <div className='max-w-[1300px] w-full px-3 media-1161:px-10 flex justify-between items-center flex-col media-1204:flex-row'>
                <ul className='flex justify-center items-center gap-2 flex-wrap'>
                    <span className='p-2 text-[#9e9ea7] text-sm'>© 2024 Dribbble</span>
                    {["Terms", "Privacy", "Cookies"].map((item, index) => (
                        <li className='p-2' key={index}>
                            <Link to={'/'} className='text-[#9e9ea7] text-sm'>{item}</Link>
                        </li>
                    ))}
                </ul>
                <ul className='flex justify-center items-center gap-2 flex-wrap'>
                    {["Jobs", "Designers", "Freelancers", "Tags", "Places", "Resources"].map((item, index) => (
                        <li className='p-2' key={index}>
                            <Link to={'/'} className='text-[#9e9ea7] text-sm'>{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Footer;
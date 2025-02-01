import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as  SearchIcon } from '../assets/svg-icons/browse-search-icon.svg';
import { ReactComponent as ArrowIcon } from '../assets/svg-icons/dropdown-arrowDown.svg';
import data from '../data/mainTags.json';
import { Link } from 'react-router-dom';

function Main(props) {
    const formFn = (e) => {
        e.preventDefault();
    }

    const [mainShotsAction, setMainShotsAction] = useState(false);
    const mainShotsDrRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mainShotsDrRef.current && !mainShotsDrRef.current.contains(event.target)) {
                setMainShotsAction(false);
            }
        };
  
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const [headerSearchText, setHeaderSearchText] = useState("Shots");
    const [activeheaderSearchIndex, setActiveheaderSearchIndex] = useState(0);
    const handleHeaderSearch = (e, index) => {
        setHeaderSearchText(e.target.innerText);
        setActiveheaderSearchIndex(index);
    }
    
    return (
        <div className={`w-full flex justify-center items-center py-20 px-3`}>
            <div className='flex flex-col gap-6 items-center text-center'>
                <p className='max-w-[600px] w-full font-source font-bold leading-[1] text-[#0D0C22] text-[32px] media-md:text-[62px] tracking-wider'>Discover the world’s top designers</p>
                <p className='max-w-[550px] w-full text-[14px] media-md:text-[18px]'>Explore work from the most talented and accomplished designers ready to take on your next project</p>
                <form className='max-w-[750px] w-full relative' onSubmit={formFn}>
                    <label htmlFor="mainSearch" className='w-full h-[50px] flex items-center outline outline-[3px] outline-[#f3f3f6] bg-[#f3f3f6] rounded-full duration-300 hover:outline-[#faebf9] hover:bg-white'>
                        <input type="text" id='mainSearch' placeholder='What are you looking for?' className='bg-transparent w-full h-full px-3 media-sm:px-5 text-sm placeholder:text-link-color duration-200'/>
                        <button ref={mainShotsDrRef} onClick={() => setMainShotsAction(!mainShotsAction)} className='relative px-4 h-full text-sm flex justify-center items-center gap-1 text-[#3A3546] hover:text-site-nav-link-hover-color'>
                            {headerSearchText}
                            <ArrowIcon />
                            {mainShotsAction && (
                                <div className={`flex flex-col absolute min-w-[140px] top-[30px] left-0 duration-200 z-50 ${mainShotsAction ? 'visible opacity-100 -mt-2' : 'invisible opacity-0 -mt-3'}`}>
                                    <div className='w-full h-5'></div>
                                    <ul className='w-full flex flex-col whitespace-nowrap py-3 px-6 bg-white rounded-md border border-solid border-neutral-100 shadow-xl'>
                                        <li>
                                            <Link to={'/shots'} onClick={(e) => handleHeaderSearch(e, 0)} className={`${activeheaderSearchIndex === 0 ? 'font-semibold' : 'font-normal'} py-2.5 flex items-center gap-2 text-sm text-link-color duration-100 hover:text-site-nav-link-hover-color`}>
                                                Shots
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/shots'} onClick={(e) => handleHeaderSearch(e, 1)} className={`${activeheaderSearchIndex === 1 ? 'font-semibold' : 'font-normal'} py-2.5 flex items-center gap-2 text-sm text-link-color duration-100 hover:text-site-nav-link-hover-color`}>
                                                Designers
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </button>
                        <Link to={'/'} className='min-w-[40px] min-h-[40px] flex justify-center items-center mx-1 rounded-full bg-main-search-btn-bg-color hover:bg-main-search-btn-bg-color-hover text-white'>
                            <SearchIcon />
                        </Link>
                    </label>
                </form>
                <div className='flex flex-wrap justify-center items-center gap-5 py-4'>
                    <span className='text-sm text-[#9890AC] tracking-wide'>Trending searches</span>
                    <ul className='flex flex-wrap justify-center gap-2'>
                        {data.map((item) => (
                            <li key={item.id} className='bg-[#f3f3f6] rounded-full border border-solid border-[#f3f3f6] hover:bg-[#faf9fb]'>
                                <Link to={'/'} className='text-sm px-4 text-[#0D0C22]'>{item.tag_name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Main;
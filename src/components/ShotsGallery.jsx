import React, { useEffect, useRef, useState } from 'react';
import data from "../data/shotsGallery.json";
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../assets/svg-icons/dropdown-arrowDown.svg';
import { ReactComponent as FilterIcon } from '../assets/svg-icons/filter-icon.svg';
import { ReactComponent as  SearchIcon } from '../assets/svg-icons/main-tags-search-icon.svg';
import { ReactComponent as  ColorIcon } from '../assets/svg-icons/color-icon.svg';
import { ReactComponent as  HeartIcon } from '../assets/svg-icons/heart-icon.svg';
import { ReactComponent as  ViewIcon } from '../assets/svg-icons/eye-icon.svg';
import { ReactComponent as  SaveIcon } from '../assets/svg-icons/save-icon.svg';
import { ReactComponent as  CheckIcon } from '../assets/svg-icons/check-icon.svg';
import { ReactComponent as  CloseIcon } from '../assets/svg-icons/close-icon.svg';
import { ReactComponent as  EnvelopeIcon } from '../assets/svg-icons/envelope-icon.svg';

function ShotsGallery(props) {
    const [shotsPopularAction, setShotsPopularAction] = useState(false);
    const shotsPopularDrRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (shotsPopularDrRef.current && !shotsPopularDrRef.current.contains(event.target)) {
                setShotsPopularAction(false);
            }
        };
  
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    

    const [menuDropdownAction1, setMenuDropdownAction1] = useState(false);
    const menuRef1 = useRef(null);
    
    useEffect(() => {
        const updateDropdownAttributes = (menuRef, isExpanded) => {
          if (menuRef.current) {
            if (isExpanded) {
              menuRef.current.setAttribute('data-expanded', 'true');
              menuRef.current.removeAttribute('data-collapsed');
            } else {
              menuRef.current.setAttribute('data-collapsed', 'true');
              menuRef.current.removeAttribute('data-expanded');
            }
          }
        };
      
        updateDropdownAttributes(menuRef1, menuDropdownAction1);
      
    }, [menuDropdownAction1]);


    const [categoryBtnText, setCategoryBtnText] = useState("Popular");
    const [activeBtnIndex, setActiveBtnIndex] = useState(0);
    const handleCategoryBtnFn = (e, index) => {
        setCategoryBtnText(e.target.innerText);
        setActiveBtnIndex(index);
    };

    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const handleCategoryFn = (e, index) => {
        setActiveCategoryIndex(index);
    };

    const subCategories = [
        "Discover",
        "Animation",
        "Branding",
        "Illustration",
        "Mobile",
        "Print",
        "Product Design",
        "Typography",
        "Web Design",
    ];


    const [handleShotsAction, setHandleShotsAction] = useState(false);
    const [shot, setShot] = useState(0);
    const handleShots = (shot) => {
        setShot(shot);
        setHandleShotsAction(!handleShotsAction);
    }

    if (handleShotsAction) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "visible";
    }


    const [tagFilter, setTagFilter] = useState('');
    const [colorFilter, setColorFilter] = useState('');
    const [timeframeFilter, setTimeframeFilter] = useState('');

    const handleTagChange = (e) => {
        setTagFilter(e.target.value);
    };

    const handleColorChange = (e) => {
        setColorFilter(e.target.value);
    };

    const handleTimeframeChange = (e) => {
        setTimeframeFilter(e.target.value);
    };

    const filteredData = data.filter((item) => {
        const tagMatch = tagFilter ? item.tags.tag.includes(tagFilter) : true;
        const colorMatch = colorFilter ? item.tags.color === colorFilter : true;
        const timeframeMatch = timeframeFilter ? item.tags.date.includes(timeframeFilter) : true;

        if (activeBtnIndex === 0 && activeCategoryIndex !== 0) {
            return (
                item.category === 'Popular' &&
                item.sub_category === subCategories[activeCategoryIndex] &&
                tagMatch &&
                colorMatch &&
                timeframeMatch
            );
        } else if (activeBtnIndex === 1 && activeCategoryIndex !== 0) {
            return (
                item.category === 'New & Networthy' &&
                item.sub_category === subCategories[activeCategoryIndex] &&
                tagMatch &&
                colorMatch &&
                timeframeMatch
            );
        } else {
            return (
                ((activeBtnIndex === 0 && item.category === 'Popular') ||
                (activeBtnIndex === 1 && item.category === 'New & Networthy')) &&
                tagMatch && colorMatch && timeframeMatch
            );
        }
    });

    return (
        <div className='w-full flex justify-center py-10 px-3 media-790:px-10 media-1204:px-20'>
            <div className='w-full flex flex-col'>
                <div className={`w-full h-screen bg-black overflow-y-scroll bg-opacity-70 z-50 fixed left-0 top-0 duration-300 ${handleShotsAction ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                    <div className='w-full flex justify-end items-center p-2 bg-white media-616:bg-transparent'>
                        <CloseIcon className='text-black media-616:text-white cursor-pointer' width="25" height="25" onClick={handleShots}/>
                    </div>
                    <div className='w-full h-full media-790:h-fit flex flex-col items-center bg-white rounded-none py-10 media-616:rounded-xl'>
                        <div className='max-w-[900px] w-full flex flex-col py-6  media-616:py-16'>
                            <div className='w-full px-3'>
                                <p className='text-2xl font-semibold'>{shot.overlay_title}</p>
                            </div>
                            <div className='w-full flex justify-between items-center py-6 gap-3 px-3'>
                                <div className='flex'>
                                    <div className='w-[30px] h-[30px] media-616:w-[50px] media-616:h-[50px] rounded-full overflow-hidden'>
                                        <img src={shot.profile_pic} className='w-full h-full object-cover'/>
                                    </div>
                                    <div className='flex flex-col gap-[0.5] justify-center px-2'>
                                        <p className='text-[12px] media-616:text-sm font-semibold'>{shot.username}</p>
                                        <span className='text-[10px] media-616:text-[12px] text-green-500'>Available for work <span className='text-[12px] cursor-pointer text-[#9e9ea7] ml-2'>Follow</span></span>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center gap-3'>
                                    <button className='border-[1.5px] border-solid border-[#cccccc] p-2 media-616:p-3 rounded-full duration-300 hover:border-[#9e9ea7]'>
                                        <HeartIcon width="15" height="15" className='text-black'/>
                                    </button>
                                    <button className='border-[1.5px] border-solid border-[#cccccc] p-2 media-616:p-3 rounded-full duration-300 hover:border-[#9e9ea7]'>
                                        <SaveIcon width="15" height="15" className='text-black'/>
                                    </button>
                                    <button className='border-[1.5px] border-solid border-black bg-black text-white text-sm p-2 media-616:p-3 media-616:px-4 media-616:py-2 media-790:py-3 rounded-full duration-300 hover:bg-[#cccccc] hover:border-[#cccccc]'>
                                        <span className='hidden media-616:flex'>Get in touch</span>
                                        <EnvelopeIcon width="15" height="15" className='flex media-616:hidden text-white'/>
                                    </button>
                                </div>
                            </div>
                            <div className='w-full min-h-[700px] h-min px-0 media-790:px-3'>
                                {shot.avatar ? ( <img src={shot.avatar} alt='img' className='w-full h-full object-cover rounded-none media-790:rounded-lg'/> ) : ( <video src={shot.avatar_video} muted autoPlay loop playsInline className='w-full h-full object-cover pointer-events-none rounded-none media-790:rounded-lg'></video> )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='w-full flex justify-between items-center gap-5 flex-col pb-10 media-790:flex-row'>
                        <button ref={shotsPopularDrRef} onClick={() => setShotsPopularAction(!shotsPopularAction)} className='relative border-[1.5px] border-solid border-neutral-200 px-6 py-2 whitespace-nowrap rounded-md w-full media-790:w-fit h-full text-sm flex justify-center items-center gap-2 font-medium text-[#3A3546] duration-200 hover:shadow-sm'>
                            {categoryBtnText}
                            <ArrowIcon className={`${shotsPopularAction ? 'rotate-180' : 'rotate-0'} duration-200`} />
                            {shotsPopularAction && (
                                <div className={`flex flex-col absolute min-w-[180px] top-[40px] left-0 duration-200 z-50 ${shotsPopularAction ? 'visible opacity-100 -mt-2' : 'invisible opacity-0 -mt-3'}`}>
                                    <div className='w-full h-5'></div>
                                    <ul className='w-full flex flex-col whitespace-nowrap py-3 px-3 bg-white border-[1.5px] border-solid border-neutral-200 shadow-xl rounded-md'>
                                        <li>
                                            <Link to={'/shots/popular'} onClick={(e) => handleCategoryBtnFn(e, 0)} className={`py-2.5 px-3 flex items-center justify-between gap-2 text-[12px] rounded-md duration-100 ${activeBtnIndex === 0 ? 'bg-neutral-100' : 'hover:bg-[#f3f3f6] text-link-color'}`}>
                                                Popular
                                                {activeBtnIndex === 0 ? <CheckIcon stroke='#060318'/> : null}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/shots/recent'} onClick={(e) => handleCategoryBtnFn(e, 1)} className={`py-2.5 px-3 flex items-center justify-between gap-2 text-[12px] rounded-md duration-100 ${activeBtnIndex === 1 ? 'bg-neutral-100' : 'hover:bg-[#f3f3f6] text-link-color'}`}>
                                                New & Noteworthy
                                                {activeBtnIndex === 1 ? <CheckIcon stroke='#060318'/> : null}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </button>
                        <div className='z-10 w-full media-790:w-[75%] relative before:absolute before:top-0 before:left-0 before:w-[50px] before:h-full before:bg-gradient-to-l before:from-transparent before:via-white before:to-white after:absolute after:top-0 after:right-0 after:w-[50px] after:h-full after:bg-gradient-to-r after:from-transparent after:via-white after:to-white'>
                            <ul className="w-full flex items-center mx-auto gap-4 overflow-x-scroll scrollbar-hide p-5">
                                {["Discover", "Animation", "Branding", "Illustration", "Mobile", "Print", "Product Design", "Typography", "Web Design"].map((link, index) => (
                                    <button
                                        onClick={(e) => handleCategoryFn(e, index)}
                                        key={index} 
                                        className={`whitespace-nowrap py-2.5 px-4 flex items-center gap-2 text-sm font-semibold rounded-full duration-100 ${
                                            activeCategoryIndex === index ? 'bg-neutral-100' : 'text-link-color no-touch-hover:hover:text-neutral-400'
                                        }`}>
                                        {link}
                                    </button>
                                ))}
                            </ul>
                        </div>
                        <button className='relative border-[1.5px] border-solid border-neutral-200 px-6 py-2 rounded-full w-full media-790:w-fit h-full text-sm flex justify-center items-center gap-2 font-medium text-[#3A3546] duration-200 hover:shadow-sm' onClick={() => setMenuDropdownAction1(!menuDropdownAction1)}>
                            <FilterIcon className='w-[16px] fill-[#3A3546]' />
                            Filters
                        </button>
                    </div>
                </div>
                <div className={`main-filter-menu w-full ${menuDropdownAction1 ? 'flex' : 'hidden'} duration-500 grid grid-cols-1 media-960:grid-cols-3 gap-10 pb-10`} ref={menuRef1} data-expanded={menuDropdownAction1 ? 'true' : undefined} data-collapsed={menuDropdownAction1 ? undefined : 'true'}>
                    <div className="flex flex-col gap-3">
                        <span className="text-link-color font-semibold text-sm">Tags</span>
                        <label className="w-full flex h-[55px] bg-white items-center rounded-xl px-3 border-[1.5px] border-solid border-[#e7e7e9] outline outline-0 outline-[#FDEFFB] duration-150 hover:outline-4 focus-within:border-[#EA64D9] focus-within:outline-4">
                            <SearchIcon className="w-[15px] fill-[#9e9ea7]" />
                            <input
                                type="text"
                                className="w-full h-full px-4"
                                value={tagFilter}
                                onChange={handleTagChange}
                            />
                        </label>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-link-color font-semibold text-sm">Color</span>
                        <label className="w-full flex h-[55px] bg-white items-center rounded-xl px-3 border-[1.5px] border-solid border-[#e7e7e9] outline outline-0 outline-[#FDEFFB] duration-150 hover:outline-4 focus-within:border-[#EA64D9] focus-within:outline-4">
                            <ColorIcon />
                            <input
                                type="text"
                                className="w-full min-h-full rounded-none bg-transparent px-4"
                                value={colorFilter}
                                onChange={handleColorChange}
                            />
                        </label>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-link-color font-semibold text-sm">Timeframe</span>
                        <label className="w-full flex h-[55px] bg-white items-center rounded-xl px-3 border-[1.5px] border-solid border-[#e7e7e9] outline outline-0 outline-[#FDEFFB] duration-150 hover:outline-4 focus-within:border-[#EA64D9] focus-within:outline-4">
                            <input
                                type="text"
                                className="w-full h-full px-4"
                                value={timeframeFilter}
                                onChange={handleTimeframeChange}
                            />
                        </label>
                    </div>
                </div>
                <div className='w-full grid grid-cols-1 media-616:grid-cols-2 media-945:grid-cols-3 media-1331:grid-cols-4 media-1968:grid-cols-5 media-2340:grid-cols-6 gap-8'>
                    {filteredData.map((item) => (
                        <div key={item.id} className='flex flex-col'>
                            <Link to={'/'} className='group' onClick={() => handleShots(item)}>
                                <div className='w-full aspect-[1.40] flex rounded-lg overflow-hidden relative'>
                                    <div className='invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-300 no-touch-hover:group-hover:invisible no-touch-hover:group-hover:opacity-0 w-full h-full z-10 absolute top-0 left-0 bg-gradient-to-t from-black/70 via-black/10 via-40% to-transparent flex'>
                                        <div className='z-50 w-full py-6 absolute bottom-0 left-0 px-5 flex justify-between items-center'>
                                            <p className='text-white text-lg w-[60%] truncate'>{item.overlay_title}</p>
                                            <div className='flex justify-center items-center gap-2'>
                                                <button className='bg-white p-3 rounded-full hover:text-[#9e9ea7]'>
                                                    <HeartIcon width="18" height="18" className='duration-200'/>
                                                </button>
                                                <button className='bg-white p-3 rounded-full hover:text-[#9e9ea7]'>
                                                    <SaveIcon width="18" height="18" className='duration-200'/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {item.avatar ? ( <img src={item.avatar} alt='img' className='w-full h-full object-cover'/> ) : ( <video src={item.avatar_video} muted autoPlay loop playsInline className='w-full h-full object-cover pointer-events-none'></video> )}
                                </div>
                            </Link>
                            <div className='w-full flex justify-between py-1.5 gap-2'>
                                <div className='flex items-center gap-2'>
                                    <img src={item.profile_pic} alt='img' className='w-[25px] rounded-full'/>
                                    <p className='text-sm'>{item.username}</p>
                                    {item.pro_subscription ? ( <button className='bg-[#cccccc] text-white font-semibold uppercase px-1 text-[12px] rounded-sm duration-200 hover:bg-black'>Pro</button>) : item.team_subscription ? (<button className='bg-[#cccccc] text-white font-semibold uppercase px-1 text-[12px] rounded-sm duration-200 hover:bg-black'>Team</button>) : null}
                                </div>
                                <div className='flex items-center gap-2'>
                                    <p className='text-sm flex items-center justify-center'>
                                        <HeartIcon fill="#9e9ea7" className='mr-1 text-[#9e9ea7] cursor-pointer duration-200 hover:text-pink-500 hover:fill-pink-500'/>
                                        {item.likes >= 1000 ? `${(item.likes / 1000).toFixed(1)}k` : item.likes}
                                    </p>
                                    <p className='text-sm flex items-center justify-center'>
                                        <ViewIcon fill="#9e9ea7" role="img" className='mr-1 text-[#9e9ea7]'/>
                                        {item.views >= 1000 ? `${(item.views / 1000).toFixed(1)}k` : item.views}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ShotsGallery;
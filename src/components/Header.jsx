import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as  DribbleIcon } from '../assets/svg-icons/dribbble-logo-icon.svg';
import { ReactComponent as ArrowIcon } from '../assets/svg-icons/dropdown-arrowDown.svg';
import { ReactComponent as  PopularIcon } from '../assets/svg-icons/popular-icon.svg';
import { ReactComponent as  NoteworthyIcon } from '../assets/svg-icons/noteworthy-icon.svg';
import { ReactComponent as  SearchIcon } from '../assets/svg-icons/browse-search-icon.svg';
import { ReactComponent as  DocumentIcon } from '../assets/svg-icons/post-document-icon.svg';
import { ReactComponent as  IIcon } from '../assets/svg-icons/hiring-i-icon.svg';

function Header({ sendHeightToParent, isHeaderSearch }) {
    const divRef = useRef();
    useEffect(() => {
        const updateHeight = () => {
            if (divRef.current) {
                const height = divRef.current.offsetHeight;
                sendHeightToParent(height);
            }
        };
        
        const observer = new ResizeObserver(() => {
            updateHeight();
        });

        if (divRef.current) {
            observer.observe(divRef.current);
        }
        return () => {
            observer.disconnect();
        };
    }, [sendHeightToParent]);

    const [menuAction, setMenuAction] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
      
    if (menuAction) {
        document.body.style.overflow = 'hidden'; 
    } else {
        document.body.style.overflow = 'unset'; 
    }

    useEffect(() => {
        const header = document.querySelector('.header');
        if (header) {
            const resizeObserver = new ResizeObserver(() => {
            setHeaderHeight(header.offsetHeight);
        });
        resizeObserver.observe(header);
        return () => resizeObserver.disconnect();
        }
    }, []);
    
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1204px)');
        const handleMediaChange = (e) => {
            if (e.matches) {
                setMenuAction(false);
            }
        };
        mediaQuery.addEventListener('change', handleMediaChange);
        return () => mediaQuery.removeEventListener('change', handleMediaChange);
    }, []);

    const [menuDropdownAction1, setMenuDropdownAction1] = useState(false);
    const [menuDropdownAction2, setMenuDropdownAction2] = useState(false);
    const menuRef1 = useRef(null);
    const menuRef2 = useRef(null);
    
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
        updateDropdownAttributes(menuRef2, menuDropdownAction2);
      
    }, [menuDropdownAction1, menuDropdownAction2]);
      

    const [scrollAnim, setScrollAnim] = useState(false);
    const handleScroll = () => {
        const position = window.scrollY;
        if (position >= 350) {
            setScrollAnim(!scrollAnim);
        } else {
            setScrollAnim(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


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

    const [headerSearchAnim, setHeaderSearchAnim] = useState(false);
    const handleSearchAnim = () => {
        setHeaderSearchAnim(!headerSearchAnim);
    }

    const [headerSearchText, setHeaderSearchText] = useState("Shots");
    const [activeheaderSearchIndex, setActiveheaderSearchIndex] = useState(0);
    const handleHeaderSearch = (e, index) => {
        setHeaderSearchText(e.target.innerText);
        setActiveheaderSearchIndex(index);
    }


    return (
        <div ref={divRef} className={`${scrollAnim ? 'fixed top-0 left-0' : 'relative'} whitespace-nowrap w-full header bg-white flex justify-center items-center z-50 px-3 media-790:px-10`}>
            <div className={`w-full bg-black bg-opacity-50 absolute top-[${headerHeight}px] z-10 duration-500 ${menuAction ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}}`} style={{top: `${headerHeight}px`, minHeight: `calc(100vh - ${headerHeight}px)`}}>
                {menuAction && (
                    <div className={`w-full bg-white absolute border-0 border-t border-solid border-neutral-200 ${menuAction ? 'opacity-100' : 'opacity-0'}`} style={{ maxHeight: '100vh' }}>
                        <ul className='w-full flex flex-col px-3 media-790:px-10 py-4' style={{ maxHeight: `calc(100vh - ${headerHeight}px)`, overflowY: 'auto' }}>
                            <li className='w-full'>
                                <span className='w-fit cursor-pointer select-none py-3 leading-8 flex items-center text-lg text-link-color font-semibold duration-300' onClick={() => setMenuDropdownAction1(!menuDropdownAction1)}>
                                    Explore
                                    <ArrowIcon className='ml-1'/>
                                </span>
                                <ul ref={menuRef1} className={`responsive-menu w-full`} data-expanded={menuDropdownAction1 ? 'true' : undefined} data-collapsed={menuDropdownAction1 ? undefined : 'true'}>
                                    <li>
                                        <Link to={'/shots/popular'} className='py-3 flex items-center gap-2 text-md text-link-color font-semibold duration-100 hover:text-site-nav-link-hover-color'>
                                            <PopularIcon />
                                            Popular
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/shots/recent'} className='py-3 flex items-center gap-2 text-md text-link-color font-semibold duration-100 hover:text-site-nav-link-hover-color'>
                                            <NoteworthyIcon />
                                            New and Noteworthy
                                        </Link>
                                    </li>
                                    <li className='py-3'>
                                        <div className='w-full border-0 border-b border-solid border-neutral-300'></div>
                                    </li>
                                    <li>
                                        <Link to={'/shots'} className='py-3 flex items-center text-link-color font-light text-sm duration-100 hover:text-site-nav-link-hover-color'>Product Design</Link>
                                    </li>
                                    <li>
                                        <Link to={'/shots'} className='py-3 flex items-center text-link-color font-light text-sm duration-100 hover:text-site-nav-link-hover-color'>Web Design</Link>
                                    </li>
                                    <li>
                                        <Link to={'/shots'} className='py-3 flex items-center text-link-color font-light text-sm duration-100 hover:text-site-nav-link-hover-color'>Animation</Link>
                                    </li>
                                    <li>
                                        <Link to={'/shots'} className='py-3 flex items-center text-link-color font-light text-sm duration-100 hover:text-site-nav-link-hover-color'>Branding</Link>
                                    </li>
                                    <li>
                                        <Link to={'/shots'} className='py-3 flex items-center text-link-color font-light text-sm duration-100 hover:text-site-nav-link-hover-color'>Illustration</Link>
                                    </li>
                                    <li>
                                        <Link to={'/shots'} className='py-3 flex items-center text-link-color font-light text-sm duration-100 hover:text-site-nav-link-hover-color'>Mobile</Link>
                                    </li>
                                    <li>
                                        <Link to={'/shots'} className='py-3 flex items-center text-link-color font-light text-sm duration-100 hover:text-site-nav-link-hover-color'>Typography</Link>
                                    </li>
                                    <li>
                                        <Link to={'/shots'} className='py-3 flex items-center text-link-color font-light text-sm duration-100 hover:text-site-nav-link-hover-color'>Print</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className='w-full'>
                                <span className='w-fit cursor-pointer select-none py-3 leading-8 flex items-center text-lg text-link-color font-semibold duration-300' onClick={() => setMenuDropdownAction2(!menuDropdownAction2)}>
                                    Hire a Designer
                                    <ArrowIcon className='ml-1'/>
                                </span>
                                <ul ref={menuRef2} className={`responsive-menu w-full`} data-expanded={menuDropdownAction2 ? 'true' : undefined} data-collapsed={menuDropdownAction2 ? undefined : 'true'}>
                                    <li>
                                        <Link to={'/designers'} className='py-2.5 flex items-center gap-2 text-sm text-link-color font-semibold duration-100 hover:text-site-nav-link-hover-color'>
                                            <SearchIcon />
                                            Browse Designers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/jobs'} className='py-2.5 flex items-center gap-2 text-sm text-link-color font-semibold duration-100 hover:text-site-nav-link-hover-color'>
                                            <DocumentIcon />
                                            Post a Job
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/hiring'} className='py-2.5 flex items-center gap-2 text-sm text-link-color font-semibold duration-100 hover:text-site-nav-link-hover-color'>
                                            <IIcon />
                                            Hiring on Dribbble
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className='w-full'>
                                <Link to={'/jobs'} className='w-fit py-3 leading-8 flex items-center text-lg text-link-color font-semibold duration-300'>Find Jobs</Link>
                            </li>
                            <li className='w-full'>
                                <Link to={'/stories'} className='w-fit py-3 leading-8 flex items-center text-lg text-link-color font-semibold duration-300'>Blog</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <div className='w-full flex justify-between items-center py-5 media-790:py-8'>
                <div className='flex gap-4'>
                    <ul className='flex justify-center gap-8'>
                        <div className='flex justify-center gap-2'>
                            <li className='flex media-1204:hidden justify-center items-center'>
                                <div className={`flex flex-col justify-between w-8 h-4 cursor-pointer space-y-1 z-50 ${menuAction ? 'open' : ''}`} onClick={() => setMenuAction(!menuAction)}>
                                    <div className={`h-[3px] rounded-full bg-link-color transition-transform duration-300 ${menuAction ? 'rotate-[49deg] translate-y-2 w-[20px]' : 'w-[24px]'}`}></div>
                                    <div className={`w-[18px] h-[3px] rounded-full bg-gray-800 transition-opacity duration-300 ${menuAction ? 'opacity-0' : ''}`}></div>
                                    <div className={`h-[3px] rounded-full bg-link-color transition-transform duration-300 ${menuAction ? '-rotate-[49deg] -translate-y-1.5 w-[20px]' : 'w-[12px]'}`}></div>
                                </div>
                            </li>
                            <li className='flex justify-center items-center'>
                                <Link to={'/'}>
                                    <DribbleIcon className='w-[90px]'/>
                                </Link>
                            </li>
                        </div>
                        <form className={`${isHeaderSearch ? 'flex' : `${scrollAnim ? '' : 'media-790:hidden'}`} relative hidden media-790:flex`} onSubmit={formFn}>
                            <label htmlFor="mainSearch" className='h-[50px] flex flex-1 items-center outline outline-[3px] outline-[#f3f3f6] bg-[#f3f3f6] rounded-full duration-300 hover:outline-[#faebf9] hover:bg-white'>
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
                        <div className='gap-2 hidden media-1204:flex relative'>
                            <li className='flex justify-center items-center relative group'>
                                <Link to={'/shots/popular'} className='px-4 leading-8 flex justify-center items-center text-sm text-link-color font-semibold duration-300 hover:text-site-nav-link-hover-color'>
                                    Explore
                                    <ArrowIcon className='ml-1'/>
                                </Link>
                                <div className={`flex flex-col absolute top-[40px] left-0 duration-200 invisible opacity-0 -mt-3 group-hover:opacity-100 group-hover:visible group-hover:-mt-2`}>
                                    <div className='w-full h-5'></div>
                                    <ul className='w-full flex flex-col whitespace-nowrap py-3 px-6 bg-white rounded-md border border-solid border-neutral-100 shadow-xl'>
                                        <li>
                                            <Link to={'/shots/popular'} className='py-2.5 flex items-center gap-2 text-sm text-link-color font-semibold duration-100 hover:text-site-nav-link-hover-color'>
                                                <PopularIcon/>
                                                Popular
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/shots/recent'} className='py-2.5 flex items-center gap-2 text-sm text-link-color font-semibold duration-100 hover:text-site-nav-link-hover-color'>
                                                <NoteworthyIcon/>
                                                New and Noteworthy
                                            </Link>
                                        </li>
                                        <li className='py-2.5'>
                                            <div className='w-full border-0 border-b border-solid border-neutral-300'></div>
                                        </li>
                                        <li>
                                            <Link to={'/shots'} className='py-2.5 flex items-center text-link-color font-light text-sm duration-100 hover:text-site-nav-link-hover-color'>Product Design</Link>
                                        </li>
                                        <li>
                                            <Link to={'/shots'} className='py-2.5 flex items-center text-link-color font-light text-sm duration-100 hover:text-site-nav-link-hover-color'>Web Design</Link>
                                        </li>
                                        <li>
                                            <Link to={'/shots'} className='py-2.5 flex items-center text-link-color font-light text-sm duration-100 hover:text-site-nav-link-hover-color'>Animation</Link>
                                        </li>
                                        <li>
                                            <Link to={'/shots'} className='py-2.5 flex items-center text-link-color font-light text-sm duration-100 hover:text-site-nav-link-hover-color'>Branding</Link>
                                        </li>
                                        <li>
                                            <Link to={'/shots'} className='py-2.5 flex items-center text-link-color font-light text-sm duration-100 hover:text-site-nav-link-hover-color'>Illustration</Link>
                                        </li>
                                        <li>
                                            <Link to={'/shots'} className='py-2.5 flex items-center text-link-color font-light text-sm duration-100 hover:text-site-nav-link-hover-color'>Mobile</Link>
                                        </li>
                                        <li>
                                            <Link to={'/shots'} className='py-2.5 flex items-center text-link-color font-light text-sm duration-100 hover:text-site-nav-link-hover-color'>Typography</Link>
                                        </li>
                                        <li>
                                            <Link to={'/shots'} className='py-2.5 flex items-center text-link-color font-light text-sm duration-100 hover:text-site-nav-link-hover-color'>Print</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='flex justify-center items-center relative group'>
                                <Link to={'/designers'} className='px-4 leading-8 flex justify-center items-center text-sm text-link-color font-semibold duration-300 hover:text-site-nav-link-hover-color'>
                                    Hire a Designer
                                    <ArrowIcon className='ml-1'/>
                                </Link>
                                <div className={`flex flex-col absolute top-[40px] left-0 duration-200 invisible opacity-0 -mt-3 group-hover:opacity-100 group-hover:visible group-hover:-mt-2`}>
                                    <div className='w-full h-5'></div>
                                    <ul className='w-full flex flex-col whitespace-nowrap py-3 pl-4 pr-10 bg-white rounded-md border border-solid border-neutral-100 shadow-xl'>
                                        <li>
                                            <Link to={'/designers'} className='py-2.5 flex items-center gap-2 text-sm text-link-color font-semibold duration-100 hover:text-site-nav-link-hover-color'>
                                                <SearchIcon />
                                                Browse Designers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/jobs'} className='py-2.5 flex items-center gap-2 text-sm text-link-color font-semibold duration-100 hover:text-site-nav-link-hover-color'>
                                                <DocumentIcon />
                                                Post a Job
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/hiring'} className='py-2.5 flex items-center gap-2 text-sm text-link-color font-semibold duration-100 hover:text-site-nav-link-hover-color'>
                                                <IIcon />
                                                Hiring on Dribbble
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='flex justify-center items-center'>
                                <Link to={'/jobs'} className='px-4 leading-8 flex justify-center items-center text-sm text-link-color font-semibold duration-300 hover:text-site-nav-link-hover-color'>Find Jobs</Link>
                            </li>
                            <li className='flex justify-center items-center'>
                                <Link to={'/stories'} className='px-4 leading-8 flex justify-center items-center text-sm text-link-color font-semibold duration-300 hover:text-site-nav-link-hover-color'>Blog</Link>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className='flex justify-center items-center'>
                    <ul className='flex gap-4 media-790:gap-0'>
                        <li className={`${scrollAnim ? 'media-790:flex' : 'hidden'} justify-center items-center group`}>
                            <SearchIcon className='flex cursor-pointer media-790:hidden group-hover:text-[#9e9ea7] duration-200' width="23" height="23" onClick={handleSearchAnim}/>
                        </li>
                        <li className='hidden media-790:flex'>
                            <Link to={'/signup'} className='text-btn-bg-color h-full text-sm font-semibold px-6 rounded-full duration-300 hover:text-site-nav-link-hover-color'>Sign up</Link>
                        </li>
                        <li>
                            <Link to={'/session'} className='bg-btn-bg-color h-full text-sm font-semibold text-white py-3 media-790:py-4 px-6 rounded-full duration-300 hover:bg-btn-bg-color-hover'>Log in</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`${scrollAnim ? 'media-790:flex' : 'hidden'} w-full py-4 px-3 bg-white absolute duration-200 ${headerSearchAnim ? "top-[65px] visible opacity-100" : 'top-[50px] invisible opacity-0'} flex -z-30 media-790:hidden`}>
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
            </div>
        </div>
    );
}

export default Header;
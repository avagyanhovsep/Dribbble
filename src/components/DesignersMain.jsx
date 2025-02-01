import React, { useMemo, useState } from 'react';
import { ReactComponent as DollarIcon } from '../assets/svg-icons/dollar-icon.svg';
import { ReactComponent as SearchIcon } from '../assets/svg-icons/browse-search-icon.svg';
import { ReactComponent as CheckIcon } from '../assets/svg-icons/check-icon.svg';
import { ReactComponent as IIcon } from '../assets/svg-icons/i-icon.svg';
import { ReactComponent as SaveIcon } from '../assets/svg-icons/save-icon.svg';
import { ReactComponent as LocationIcon } from '../assets/svg-icons/location-icon.svg';
import { ReactComponent as ClockIcon } from '../assets/svg-icons/clock-icon.svg';
import { ReactComponent as DocumentIcon } from '../assets/svg-icons/availability-icon.svg';
import { ReactComponent as PriceIcon } from '../assets/svg-icons/price-icon.svg';
import { ReactComponent as FilterIcon } from '../assets/svg-icons/filter2-icon.svg';
import { ReactComponent as CloseIcon } from '../assets/svg-icons/close-icon.svg';
import data from '../data/designersMain.json';

function DesignersMain({ headerHeight }) {
    const [expandedItems, setExpandedItems] = useState({});
    const toggleShowAll = (id) => {
        setExpandedItems((prev) => ({
            ...prev,
            [id]: !prev[id] 
        }));
    };

    const [filterMenuAction, setFilterMenuAction] = useState(false);
    const handleFilter = () => {
        setFilterMenuAction(!filterMenuAction);
    }

    if (filterMenuAction) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "visible";
    }


    const [switchBtnAction, setSwitchBtnAction] = useState(false);
    const handleSwitch = () => {
        setSwitchBtnAction(prevState => !prevState);
    };
        
    const getResponseCategory = (respondTime) => {
        if (respondTime <= 24) return "within a day";
        if (respondTime <= 168) return "within a week";
        if (respondTime <= 720) return "within a month";
        if (respondTime <= 8760) return "within a year";
        return "more than a year";
      };
          
    const [checkPro, setCheckPro] = useState(false);
    const handleProCheckbox = () => {
        setCheckPro((prev) => !prev);
    };

    const categories = ["All", "Product Design", "Web Design", "Illustration", "Branding", "Animation", "Mobile", "Typography", "Print"];
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    
    const handleCategoryFn = (index) => {
        setActiveCategoryIndex(index);
    };

    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
  
    const handlePriceChange = (e) => {
      setPrice(e.target.value);
    };
  
    const handleLocationChange = (e) => {
      setLocation(e.target.value.toLowerCase());
    };
  
    const filteredData = useMemo(() => {
        const selectedCategory = categories[activeCategoryIndex];
        return data.filter((item) => {
            const itemPrice = parseFloat(item.pricing[1]);
            const inputPrice = parseFloat(price);

            const matchesPrice =
                price === "" || (itemPrice >= inputPrice && itemPrice < inputPrice + 100);

            const matchesLocation =
                location === "" ||
                (item.location[1] && item.location[1].toLowerCase().includes(location));
            const matchesServiceAvailability = !switchBtnAction || item.service_availability[0];
            const matchesProStatus = !checkPro || item.subscription === "Pro";
            const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;

            return (
                matchesPrice &&
                matchesLocation &&
                matchesServiceAvailability &&
                matchesProStatus &&
                matchesCategory
            );
        }).map((user) => ({
            ...user,
            response_duration: getResponseCategory(user.respond_time),
        }));
    }, [data, price, location, switchBtnAction, checkPro, activeCategoryIndex, categories]);
    
    
    return (    
        <div className='w-full flex flex-col items-center'>
            <div className='w-full bg-white flex flex-col items-center'>
                <div className={`w-full h-screen bg-black bg-opacity-60 fixed top-0 left-0 z-50 duration-200 ${filterMenuAction ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                    <div className={`w-full media-sm:w-[400px] h-fit media-sm:h-full bg-white absolute top-0 right-0 z-50 duration-200 pt-3 pb-7 media-sm:pb-3 px-3 media-sm:px-8 flex flex-col gap-4 rounded-b-2xl media-sm:rounded-none`}>
                        <div className='w-full flex justify-end items-center py-2'>
                            <CloseIcon onClick={handleFilter} width="20" height="20" className='text-link-color cursor-pointer'/>
                        </div>
                        <div className='w-full flex flex-col justify-between items-center'>
                            <div className='w-full flex flex-col items-center gap-6 media-sm:gap-4'>
                                <label htmlFor="a" className='bg-white w-full flex items-center px-4 border border-solid border-neutral-300 rounded-lg duration-200 focus-within:border-neutral-400 focus-within:shadow-sm'>
                                    <DollarIcon className='size-5 text-neutral-500'/>
                                    <input type="number" id='a' placeholder='Enter Budget' value={price} onChange={handlePriceChange} className='w-full py-2.5 px-3 placeholder:font-light placeholder:text-neutral-500'/>
                                </label>
                                <label htmlFor="b" className='bg-white w-full flex items-center px-4 border border-solid border-neutral-300 rounded-lg duration-200 focus-within:border-neutral-400 focus-within:shadow-sm'>
                                    <SearchIcon className='size-5 text-neutral-500'/>
                                    <input type="text" id='b' placeholder='Enter Location' value={location} onChange={handleLocationChange} className='w-full py-2.5 px-3 placeholder:font-light placeholder:text-neutral-500'/>
                                </label>
                                <div className='w-full'>
                                    <label className="w-full flex items-center space-x-2 relative cursor-pointer select-none">
                                        <input type="checkbox" className="appearance-none w-5 h-5 border border-solid border-neutral-200 rounded-[4px] checked:bg-[#b8509a] checked:border-[#994683]" checked={checkPro} onChange={handleProCheckbox}/>
                                        <CheckIcon className='size-3 absolute left-[-4px]' stroke='white'/>
                                        <p className='flex items-center text-sm text-link-color font-light'>
                                            <span className='uppercase font-semibold mr-1'>Pro</span>Designers <IIcon className='ml-1.5'/>
                                        </p>
                                    </label>
                                </div>
                            </div>
                            <div className="w-full flex items-center space-x-4 py-5">
                                <label htmlFor="toggle" className="flex gap-3 items-center cursor-pointer select-none group">
                                    <div className="relative">
                                        <input type="checkbox" id="toggle" className="hidden" checked={switchBtnAction} onChange={handleSwitch} />
                                        <div className={`w-[34px] h-[20px] rounded-full shadow-inner duration-200 group-hover:brightness-90 ${switchBtnAction ? 'bg-[#b8509a]' : 'bg-[#9e9ea7]'}`} ></div>
                                        <div className={`dot absolute left-1 top-[3px] bg-white w-[14px] h-[14px] rounded-full shadow-md transition-transform ${switchBtnAction ? "translate-x-3" : "" }`} ></div>
                                    </div>
                                    <span className='text-sm text-link-color'>Available for work</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-[1500px] w-full pt-10 px-3 media-790:px-10'>
                    {["All Designers", "Product Designers", "Web Designers", "Illustrators", "Branding Designers", "Animators", "Mobile Designers", "Type Designers", "Print Designers"].map((title, index) => (
                        <div key={index}>
                            {activeCategoryIndex === index ? (<h1 className="text-link-color font-bold text-2xl">{title}</h1>) : null}
                        </div>
                    ))}
                    <p className='text-[13px] text-link-color font-light'>
                        <span>Trending: 
                            {[
                                "landing page, ux designer, dashboard, app design",
                                "SaaS UI, wireframing, user research, design systems", 
                                "responsive web, ecommerce, landing page, css", 
                                "vector, character design, infographics, digital illustration", 
                                "logo design, visual identity, social media, brand assets", 
                                "motion graphics, 2D animation, explainer, logo animation", 
                                "mobile app, iOS, Android, app prototype", 
                                "custom fonts, font pairing, typeface design, hand lettering", 
                                "packaging, brochure, business cards, print design"
                            ].map((description, index) => (
                                <span key={`${description}-${index}`}>
                                    {activeCategoryIndex === index ? (<span className="text-[12px] text-neutral-500 font-light"> {description}</span>) : null}
                                </span>
                            ))}
                        </span>
                    </p>
                </div>
                <div className={`max-w-[1500px] w-full mx-auto flex flex-col items-center gap-6 bg-white sticky top-[${headerHeight}px] left-0 z-40 py-10 px-3 media-790:px-10`}>
                    <div className='w-full flex justify-between items-center'>
                        <ul className="max-w-[1420px] w-full flex flex-nowrap items-center gap-4 overflow-x-scroll scrollbar-hide">
                            {categories.map((link, index) => (
                                <button onClick={() => handleCategoryFn(index)} key={index} className={`whitespace-nowrap py-2.5 px-4 flex items-center gap-2 text-sm font-semibold rounded-full duration-100 ${activeCategoryIndex === index ? 'bg-neutral-100' : 'text-link-color no-touch-hover:hover:text-neutral-400'}`}> 
                                    {link}
                                </button>
                            ))}
                        </ul>
                        <div className='p-3 cursor-pointer flex media-960:hidden' onClick={handleFilter}>
                            <FilterIcon width="20" height="20"/>
                        </div>
                    </div>
                    <div className='max-w-[1420px] w-full hidden media-960:flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <label htmlFor="price" className="bg-white flex items-center px-4 border border-solid border-neutral-300 rounded-lg duration-200 focus-within:border-neutral-400 focus-within:shadow-sm">
                                <DollarIcon className='size-5 text-neutral-500'/>
                                <input type="number" id="price" placeholder="Enter Budget" value={price} onChange={handlePriceChange} className="py-2.5 px-3 placeholder:font-light placeholder:text-neutral-500 w-full" />
                            </label>
                            <label htmlFor="location" className="bg-white flex items-center px-4 border border-solid border-neutral-300 rounded-lg duration-200 focus-within:border-neutral-400 focus-within:shadow-sm">
                                <SearchIcon className='size-5 text-neutral-500'/>
                                <input type="text" id="location" placeholder="Enter Location" value={location} onChange={handleLocationChange} className="py-2.5 px-3 placeholder:font-light placeholder:text-neutral-500 w-full"/>
                            </label>
                            <div className='ml-10'>
                                <label className="flex items-center space-x-2 relative cursor-pointer select-none">
                                    <input type="checkbox" className="appearance-none w-5 h-5 border border-solid border-neutral-200 rounded-[4px] checked:bg-[#b8509a] checked:border-[#994683]" checked={checkPro} onChange={handleProCheckbox}/>
                                    <CheckIcon className='size-3 absolute left-[-4px]' stroke='white'/>
                                    <p className='flex items-center text-sm text-link-color font-light'>
                                        <span className='uppercase font-semibold mr-1'>Pro</span>Designers <IIcon className='ml-1.5'/>
                                    </p>
                                </label>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <label htmlFor="toggle" className="flex gap-3 items-center cursor-pointer select-none group">
                                <div className="relative">
                                    <input type="checkbox" id="toggle" className="hidden" checked={switchBtnAction} onChange={handleSwitch} />
                                    <div className={`w-[34px] h-[20px] rounded-full shadow-inner duration-200 group-hover:brightness-90 ${switchBtnAction ? 'bg-[#b8509a]' : 'bg-[#9e9ea7]'}`} ></div>
                                    <div className={`dot absolute left-1 top-[3px] bg-white w-[14px] h-[14px] rounded-full shadow-md transition-transform ${switchBtnAction ? "translate-x-3" : "" }`} ></div>
                                </div>
                                <span className='text-sm text-link-color'>Available for work</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1500px] w-full py-10 flex flex-col gap-8 px-3 media-790:px-10">
                    {filteredData.map((item) => (
                        <div key={item.id} className='w-full border border-solid border-neutral-100 p-8 rounded-xl cursor-pointer duration-200 hover:shadow-xl'>
                            <div className='w-full flex justify-between items-center'>
                                <div className='flex'>  
                                    <div className='min-w-[60px] h-[60px] overflow-hidden rounded-full'>
                                        <img src={item.avatar} alt='img' className='w-full h-full object-cover'/>
                                    </div>
                                    <div className='flex flex-col px-4'>
                                        <div className='flex items-center'>
                                            <h1 className='text-xl font-medium'>{item.username}</h1>
                                            <button className='ml-3 h-fit bg-link-color text-white uppercase text-[11px] font-bold rounded-md px-1 py-0.5'>{item.subscription}</button>
                                        </div>
                                        <div className='flex items-center gap-2 media-616:gap-6 flex-wrap'>
                                            {item.pricing && (<span className='flex items-center gap-1 text-sm font-light text-link-color'>
                                                <PriceIcon className='size-4'/>
                                                From ${item.pricing}/project
                                            </span>)}
                                            {item.location && (<span className='flex items-center gap-1 text-sm font-light text-link-color'>
                                                <LocationIcon className='size-4'/>
                                                {item.location}
                                            </span>)}
                                            <span className='flex items-center gap-1 text-sm font-light text-link-color'>
                                                <ClockIcon className='size-4'/>
                                                Responds {item.response_duration}
                                            </span>
                                            {item.service_availability && (<span className='flex items-center gap-1 text-sm font-light text-link-color'>
                                                <DocumentIcon className='size-4'/>
                                                {item.service_availability[1] > 1 ? `${item.service_availability[1]} Services Available` : `${item.service_availability[1]} Service Available`}
                                            </span>)}
                                        </div>
                                    </div>
                                </div>
                                <div className='hidden justify-between media-790:flex'>
                                    <div className='flex items-center justify-center gap-4'>
                                        <button className='border-[1.5px] border-solid border-[#cccccc] p-3 rounded-full duration-300 hover:border-[#9e9ea7]'>
                                            <SaveIcon width="13" height="13" className='text-black'/>
                                        </button>
                                        <button className='bg-link-color text-white text-sm px-5 py-2.5 rounded-full duration-300 hover:bg-btn-bg-color-hover'>
                                            <span className='hidden media-616:flex'>Get in touch</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-nowrap gap-4 py-5 overflow-x-scroll scrollbar-hide'>
                                {item.images.map((img, index) => (
                                    <div key={`${index}-${img}`} className='min-w-[270px] h-[200px] overflow-hidden rounded-lg group'>
                                        <img src={img} alt='img' className='w-full h-full object-cover duration-500 group-hover:scale-105'/>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <ul key={item.id} className="flex items-center gap-2 flex-wrap mb-4">
                                    {(expandedItems[item.id] ? item.skills_tags : item.skills_tags.slice(0, 6)).map((skill, index) => (
                                        <li key={`${item.id}-${skill}-${index}`} className="cursor-pointer bg-slate-50 px-4 py-0.5 rounded-full duration-200 hover:bg-neutral-50">
                                            <span className="font-light text-[12px] text-link-color">{skill}</span>
                                        </li>
                                    ))}
                                    {item.skills_tags.length > 6 && !expandedItems[item.id] && (
                                        <li onClick={() => toggleShowAll(item.id)} className="cursor-pointer px-2 py-1 rounded-full font-medium text-[12px] underline text-blue-500">
                                            Show more
                                        </li>
                                    )}
                                    {item.skills_tags.length > 6 && expandedItems[item.id] && (
                                        <li onClick={() => toggleShowAll(item.id)} className="cursor-pointer px-2 py-1 rounded-full font-medium text-[12px] text-blue-500">
                                            Show less
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <div className='w-full flex gap-3 py-5 media-790:hidden'>
                                <button className='w-full flex justify-center px-5 py-2.5 rounded-full duration-300 bg-link-color hover:bg-btn-bg-color-hover'>
                                    <span className='text-white text-sm'>Get in touch</span>
                                </button>
                                <button className='border-[1.5px] border-solid border-[#cccccc] p-3 rounded-full duration-300 hover:border-[#9e9ea7]'>
                                    <SaveIcon width="13" height="13" className='text-black'/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DesignersMain;
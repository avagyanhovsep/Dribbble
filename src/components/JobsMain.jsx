import React, { useState } from 'react';
import { ReactComponent as ArrowIcon } from '../assets/svg-icons/dropdown-arrowDown.svg';
import { ReactComponent as CheckIcon } from '../assets/svg-icons/check-icon.svg';

function JobsMain() {
    const dropdownData = [
        {
            label: "Workplace type",
            items: ["Remote", "On-site", "Hybrid"],
        },
        {
            label: "What type of designer are you looking for?",
            items: [
                "Animation",
                "Brand / Graphic Design",
                "Illustration",
                "Leadership",
                "Mobile Design",
                "UI / Visual Design",
                "Product Design",
                "UX Design / Research",
                "Web Design",
            ],
        },
        {
            label: "Employment type",
            items: ["Full-time employee", "Freelance / Contract hire"],
        },
    ];

    const [dropdownStates, setDropdownStates] = useState(
        dropdownData.map(() => ({
            isOpen: false,
            selected: null,
        }))
    );

    const handleToggle = (index) => {
        setDropdownStates((prev) =>
            prev.map((state, i) =>
                i === index ? { ...state, isOpen: !state.isOpen } : { ...state, isOpen: false }
            )
        );
    };

    const handleSelect = (index, item) => {
        setDropdownStates((prev) =>
            prev.map((state, i) =>
                i === index ? { ...state, selected: item, isOpen: false } : state
            )
        );
    };

    return (
        <div className='w-full flex flex-col items-center'>
            <div className='w-full h-[360px] bg-jobs-gradient-bg flex justify-center'>
                <div className='max-w-[1200px] w-full py-20 px-3 flex flex-col justify-center media-790:text-center text-left media-790:px-10'>
                    <h1 className='text-3xl media-790:text-5xl font-semibold text-link-color'>Post a job on Dribbble</h1>
                    <p className='text-base text-link-color font-light mt-3'>The #1 job board for hiring designers and creative professionals.</p>
                </div>
            </div>
            <div className='max-w-[760px] w-full min-h-screen'>
                <div className='w-full bg-white rounded-lg px-3 py-12 media-790:px-12 flex flex-col gap-6'>
                    <div className='w-full flex justify-between items-center gap-2 flex-wrap pb-4'>
                        <p className='text-2xl font-semibold text-link-color'>Tell us about your role</p>
                        <span>1 / 4</span>
                    </div>
                    <div className='w-full flex flex-col gap-6'>
                        <label className='w-full flex flex-col'>
                            <span className='py-3 font-medium text-base'>Job title <span className='text-red-500'>*</span></span>
                            <input type="text" placeholder='e.g. Senior Product Designer' className='bg-transparent w-full h-[55px] px-3 media-sm:px-5 text-sm font-light placeholder:text-neutral-600 duration-200 border-[1.5px] border-solid border-neutral-200 bg-white rounded-lg focus-within:border-[#ffa1f9] outline outline-0 outline-[#faebf9] hover:outline-[5px]'/>
                        </label>
                        <label className='w-full flex flex-col'>
                            <span className='py-3 font-medium text-base'>Add your job description <span className='text-red-500'>*</span></span>
                            <textarea className='bg-transparent w-full min-h-[200px] p-3 media-sm:px-5 text-sm font-light placeholder:text-neutral-600 duration-200 border-[1.5px] border-solid border-neutral-200 bg-white rounded-lg focus-within:border-[#ffa1f9] outline outline-0 outline-[#faebf9] hover:outline-[5px]'></textarea>
                        </label>
                        <label className='w-full flex flex-col'>
                            <span className='py-3 font-medium text-base'>Job location <span className='text-red-500'>*</span></span>
                            <input type="text" placeholder='e.g. "New York City" or "San Francisco"' className='bg-transparent w-full h-[55px] px-3 media-sm:px-5 text-sm font-light placeholder:text-neutral-600 duration-200 border-[1.5px] border-solid border-neutral-200 bg-white rounded-lg focus-within:border-[#ffa1f9] outline outline-0 outline-[#faebf9] hover:outline-[5px]'/>
                            <span className='text-sm text-link-color font-light py-3'>If left blank, location will be set to "Remote"</span>
                        </label>
                        <div className="w-full flex flex-col gap-6">
                            {dropdownData.map((dropdown, index) => (
                                <label key={index} className="w-full flex flex-col">
                                    <span className="py-3 font-medium text-base">
                                        {dropdown.label} <span className="text-red-500">*</span>
                                    </span>
                                    <div className="relative w-full h-[55px] text-sm font-light placeholder:text-neutral-600 duration-200 border-[1.5px] border-solid border-neutral-200 bg-white rounded-lg">
                                        <div
                                            className="w-full h-full flex justify-between items-center px-4 cursor-pointer"
                                            onClick={() => handleToggle(index)}
                                        >
                                            <span className="text-sm font-medium text-link-color">
                                                {dropdownStates[index].selected || "Select an option"}
                                            </span>
                                            <ArrowIcon
                                                className={`${
                                                    dropdownStates[index].isOpen ? "rotate-180" : "rotate-0"
                                                } duration-200 mr-3 size-2.5 text-gray-400`}
                                            />
                                        </div>
                                        {dropdownStates[index].isOpen && (
                                            <ul className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                                <div className="p-3">
                                                    {dropdown.items.map((item, itemIndex) => (
                                                        <li
                                                            key={itemIndex}
                                                            className={`flex items-center justify-between cursor-pointer px-2 py-3 rounded-md text-[12px] font-medium ${
                                                                dropdownStates[index].selected === item
                                                                    ? "bg-neutral-100"
                                                                    : "hover:bg-neutral-50 text-link-color"
                                                            }`}
                                                            onClick={() => handleSelect(index, item)}
                                                        >
                                                            {item}
                                                            {dropdownStates[index].selected === item && (
                                                                <CheckIcon className="ml-2" stroke="#060318" />
                                                            )}
                                                        </li>
                                                    ))}
                                                </div>
                                            </ul>
                                        )}
                                    </div>
                                </label>
                            ))}
                        </div>
                        <label className='w-full flex flex-col'>
                            <span className='py-3 font-medium text-base'>Where can people apply? <span className='text-red-500'>*</span></span>
                            <input type="text" placeholder='e.g. https://greenhouse.io/f73jf7wh' className='bg-transparent w-full h-[55px] px-3 media-sm:px-5 text-sm font-light placeholder:text-neutral-600 duration-200 border-[1.5px] border-solid border-neutral-200 bg-white rounded-lg focus-within:border-[#ffa1f9] outline outline-0 outline-[#faebf9] hover:outline-[5px]'/>
                            <span className='text-sm text-link-color font-light py-3'>This is where people go to apply for your job.</span>
                        </label>
                        <div className='w-full border border-solid border-neutral-200 rounded-xl p-7'>
                            <p className='uppercase text-[12px] font-medium text-neutral-500 pb-4'>Company Information</p>
                            <label className='w-full flex flex-col'>
                                <span className='py-3 font-medium text-base'>What's your company name? <span className='text-red-500'>*</span></span>
                                <input type="text" className='bg-transparent w-full h-[55px] px-3 media-sm:px-5 text-sm font-light placeholder:text-neutral-600 duration-200 border-[1.5px] border-solid border-neutral-200 bg-white rounded-lg focus-within:border-[#ffa1f9] outline outline-0 outline-[#faebf9] hover:outline-[5px]'/>
                            </label>
                            <label className='w-full flex flex-col justify-center'>
                                <span className='py-3 font-medium text-base'>Your company logo <span className='text-red-500'>*</span></span>
                                <input type="file" className='bg-transparent w-full text-sm font-light placeholder:text-neutral-600 duration-200 bg-white'/>
                                <span className='text-sm text-link-color font-light py-3'>Recommended dimensions: 144x144 px</span>
                            </label>
                            <label className='w-full flex flex-col'>
                                <span className='py-3 font-medium text-base'>Your company website? <span className='text-red-500'>*</span></span>
                                <input type="text" placeholder='e.g. https://domain.com' className='bg-transparent w-full h-[55px] px-3 media-sm:px-5 text-sm font-light placeholder:text-neutral-600 duration-200 border-[1.5px] border-solid border-neutral-200 bg-white rounded-lg focus-within:border-[#ffa1f9] outline outline-0 outline-[#faebf9] hover:outline-[5px]'/>
                            </label>
                        </div>
                        <div className='w-full flex justify-end items-center'>
                            <div className='flex justify-center items-center gap-2'>
                                <button className='px-6 py-2.5 text-sm font-medium text-link-color bg-white border border-solid border-neutral-300 duration-200 rounded-full hover:border-neutral-400'>Cancel</button>
                                <button className='px-6 py-2.5 text-sm font-medium text-white bg-link-color rounded-full duration-200 hover:bg-btn-bg-color-hover'>Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobsMain;



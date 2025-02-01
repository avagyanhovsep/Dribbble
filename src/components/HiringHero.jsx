import React from 'react';
import { ReactComponent as CheckIcon } from '../assets/svg-icons/check-icon.svg';

function HiringHero(props) {
    const plans = [
        {
            "id": 1,
            "title": "Hire a freelancer",
            "description": "Hire and pay designers — no payment needed until project terms are final.",
            "price": "Free",
            "btn_textContent": "Find a designer",
            "plan_features": ["World-class talent", "Payments, data, and intellectual property are safe and secure", "We hold project payment until project is final", "No hidden costs - 7.5% platform fee"],
            "cancel_membership": false,
            "isNew": true
        },
        {
            "id": 2,
            "title": "Post a job",
            "description": "Tap into our community and hire for full-time or part-time roles.",
            "price": 150,
            "btn_textContent": "Post a job",
            "plan_features": ["No placement fees", "Hire for full-time, part-time, or contract roles", "Hire for remote, onsite, or hybrid roles"],
            "cancel_membership": true,
            "isNew": false
        },
        {
            "id": 3,
            "title": "Hiring Suite",
            "description": "Make finding and hiring designers easier than ever with premium access.",
            "price": 300,
            "btn_textContent": "Get started",
            "plan_features": ["Post, highlight, and pin your job listing for 7 days", "Ad-free browsing experience", "VIP Customer Support"],
            "cancel_membership": true,
            "isNew": false
        }
    ];

    return (
        <div className='w-full flex flex-col items-center px-3 media-790:px-10'>
            <div className='max-w-[800px] w-full flex flex-col items-center gap-8 text-center py-20 px-3'>
                <p className='font-source font-semibold leading-[1] text-[#0D0C22] text-[32px] media-md:text-[62px] tracking-wider'>Find the perfect designer for your business.</p>
                <p className='max-w-[550px] w-full text-[14px] text-link-color font-light media-md:text-[16px]'>Work with the most talented and accomplished designers in the world on a freelance, contract, part-time, or full-time basis.</p>
            </div>
            <div className='max-w-[1300px] w-full bg-[linear-gradient(269deg,#e5fce0,#ebfaf7)] rounded-[40px] px-4 media-616:px-16 py-4 media-616:py-28 grid grid-cols-1 media-1161:grid-cols-3 gap-5'>
                {plans.map((item, index) => (
                    <div key={item.id} className='bg-white px-4 py-10 rounded-3xl flex flex-col justify-between gap-4 text-center relative'>
                        {item.isNew ? <button className='absolute top-[-10px] left-[50%] translate-x-[-50%] bg-[#d86ad4] uppercase text-white text-sm font-semibold px-4 py-[2px] rounded-full'>New</button> : ''}
                        <div className='flex flex-col gap-6 items-center '>
                            <p className='text-2xl font-semibold'>{item.title}</p>
                            <p className='text-md text-link-color font-light'>{item.description}</p>
                            <p className='text-6xl font-semibold'>
                                {item.price !== "Free" ? (<>${item.price}<sub className='text-base font-light text-link-color'>/month</sub></>) : (item.price)}
                            </p>
                            <button className={`px-12 py-3 text-white rounded-full text-md duration-200 ${index !== 2 ? 'bg-black hover:shadow-xl' : 'bg-pink-400 hover:bg-pink-300'}`}>{item.btn_textContent}</button>
                            <ul className='max-w-[80%] w-full flex flex-col gap-4 text-left'>
                                {item.plan_features.map((feature, index) => (
                                    <li key={feature} className='flex items-center gap-2 text-sm font-light text-link-color'>
                                        <div className='min-w-[20px] min-h-[20px] flex justify-center items-center bg-neutral-100 rounded-full'>
                                            <CheckIcon stroke='#ea4c89'/>
                                        </div>
                                    {   feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <span className='text-sm text-neutral-500 font-light'>{item.cancel_membership ? 'Cancel at any time' : ''}</span>
                    </div>
                ))}
            </div>
            <div className="max-w-[1200px] w-full flex flex-col py-40">
                <div className='flex flex-col-reverse gap-10 media-1204:flex-row items-center py-10'>
                    <div className="w-full media-1204:w-fit flex flex-col gap-4 pr-0 media-1204:pr-16">
                        <h1 className='text-3xl media-1204:text-4xl media-1204:max-w-[300px] w-full text-link-color font-semibold'>Post on the #1 job board for hiring designers.</h1>
                        <p className='text-base media-1204:max-w-[300px] w-full font-light text-link-color'>Gain access to the most talented and accomplished designer pool in the world.</p>
                        <p className='text-base media-1204:max-w-[350px] w-full font-light text-link-color'>Link directly to your application form or website for ease of access.</p>
                    </div>
                    <div className="w-full media-1204:max-w-[700px] h-auto media-1204:h-[400px] rounded-3xl overflow-hidden flex justify-center items-center">
                        <img src="https://framerusercontent.com/images/OJPtXbPbzMRJzrChG2EpA565dI.png" alt="img" className='w-full min-h-full object-cover'/>
                    </div>
                </div>
                <div className='flex flex-col gap-10 media-1204:flex-row items-center py-10'>
                    <div className="w-full media-1204:max-w-[700px] h-auto media-1204:h-[400px] rounded-3xl overflow-hidden flex justify-center items-center">
                        <img src="https://framerusercontent.com/images/AbnQAeNcZH4brj7R7VR3bF9KKpE.png" alt="img" className='w-full min-h-full object-cover' />
                    </div>
                    <div className="w-full media-1204:w-fit flex flex-col gap-4 pl-0 media-1204:pl-16">
                        <h1 className='text-3xl text-link-color font-semibold'>Stand out in the crowd.</h1>
                        <p className='text-sm font-light text-link-color'>Hiring Suite subscribers get access to:</p>
                        <ul className='max-w-[80%] w-full flex flex-col gap-4 text-left'>
                            {["Featured and pinned job posts", "Featured and pinned messages", "Ad-free browsing"].map((feature, index) => (
                                <li key={feature} className='flex items-center gap-2 text-sm font-semibold text-link-color'>
                                    <div className='w-[20px] h-[20px] flex justify-center items-center bg-neutral-100 rounded-full'>
                                        <CheckIcon stroke='#ea4c89'/>
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-full py-10 flex flex-col items-center'>
                <div className='max-w-[850px] w-full flex flex-col gap-6 text-center'>
                    <h1 className='text-4xl font-semibold text-link-color'>The most design-forward companies on the planet hire designers from Dribbble.</h1>
                    <p className='text-base font-light text-link-color'>Our community partners with some of the most valuable companies on the planet.</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1300px] w-full bg-[linear-gradient(269deg,#e5fce0,#ebfaf7)] rounded-[40px] p-4 media-616:p-16 grid grid-cols-1 media-1161:grid-cols-3 gap-5'>
                {plans.map((item, index) => (
                    <div key={item.id} className='bg-white px-4 py-10 rounded-3xl flex flex-col justify-between gap-4 text-center relative'>
                        {item.isNew ? <button className='absolute top-[-10px] left-[50%] translate-x-[-50%] bg-[#d86ad4] uppercase text-white text-sm font-semibold px-4 py-[2px] rounded-full'>New</button> : ''}
                        <div className='flex flex-col gap-6 items-center '>
                            <p className='text-2xl font-semibold'>{item.title}</p>
                            <p className='text-md text-link-color font-light'>{item.description}</p>
                            <p className='text-6xl font-semibold'>
                                {item.price !== "Free" ? (<>${item.price}<sub className='text-base font-light text-link-color'>/month</sub></>) : (item.price)}
                            </p>
                            <button className={`px-12 py-3 text-white rounded-full text-md duration-200 ${index !== 2 ? 'bg-black hover:shadow-xl' : 'bg-pink-400 hover:bg-pink-300'}`}>{item.btn_textContent}</button>
                        </div>
                        <span className='text-sm text-neutral-500 font-light'>{item.cancel_membership ? 'Cancel at any time' : ''}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HiringHero;
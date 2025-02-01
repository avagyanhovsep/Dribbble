import React from 'react';
import image from '../assets/images/8-01.png';
import postsData from '../data/blogPosts.json';

function BlogMain(props) {
    return (
        <div className='w-full flex justify-center py-20 px-3 media-790:px-10'>
            <div className='max-w-[1100px] w-full flex flex-col gap-5'>
                <div className='py-5'>
                    <h1 className='text-5xl font-bold tracking-normal'>Courtside: <br></br> The Dribbble Blog</h1>
                </div>
                <div className='w-full flex flex-col gap-4'>
                    <div className='flex flex-col'>
                        <span className='text-base text-neutral-400'>Dec 17, 2024</span>
                        <h1 className='text-3xl text-link-color font-semibold'>Work In Progress, Part 6 🚧</h1>
                    </div>
                    <div className='max-w-[800px] w-full overflow-hidden cursor-pointer rounded-md relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-neutral-200 before:bg-opacity-0 hover:before:bg-opacity-20'>
                        <img src={image} alt="img" className='w-full h-full object-cover'/>
                    </div>
                    <p className='max-w-[800px] w-full text-xl font-light text-link-color'>Last week, we released Services, allowing designers to sell freelance services that can be purchased instantly on Dribbble. Designers outline the work offered and set the price, completion time, number of revisions, and any other specifications they want to include.</p>
                </div>
                <div className='max-w-[800px] w-full flex flex-col'>
                    {postsData.map((post) => (
                        <div key={post.id} className='w-full flex flex-col media-790:flex-row py-8 border-0 border-b-2 border-solid border-neutral-200'>
                            <div className='w-full media-790:w-[200px] media-790:h-[150px]'>
                                <img src={post.avatar} alt='img' className='w-full h-full object-cover rounded-md'/>
                            </div>
                            <div className='max-w-[600px] w-full flex flex-col px-4 py-6 media-790:py-0'>
                                <span className='uppercase text-sm text-neutral-400 font-medium'>{post.date}</span>
                                <h1 className='text-2xl text-link-color font-medium'>{post.title}</h1>
                                <p className='mt-2 text-lg text-link-color font-light'>{post.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogMain;
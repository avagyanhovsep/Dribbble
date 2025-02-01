import React, { useEffect } from 'react';
import LogInLogOutComp from '../components/LogInLogOutComp';
import { Link } from 'react-router-dom';
import { ReactComponent as GoogleBtnIcon } from '../assets/svg-icons/google-btn-icon.svg';

function Login(props) {
    useEffect(() => {
        document.title = "Sign In | Dribbble";
    }, []);
    return (
        <div>
            <div className='w-full min-h-screen flex'>
                <LogInLogOutComp />
                <div className='w-full min-h-full flex justify-center items-center px-4'>
                    <div className='max-w-[400px] w-full flex flex-col gap-5'>
                        <h1 className='text-2xl font-bold text-link-color'>Sign in to Dribbble</h1>
                        <div className='flex flex-col gap-5'>
                            <button className='w-full p-4 border border-solid border-neutral-200 rounded-full flex justify-center items-center gap-4 text-sm font-semibold duration-200 hover:border-neutral-300'>
                                <GoogleBtnIcon />
                                Sign in with Google
                            </button>
                            <div className='flex justify-center items-center p-2 text-sm text-neutral-500'>
                                <span className='flex-1 h-[1px] bg-neutral-200'></span>
                                <span className='mx-4'>or sign in with email</span>
                                <span className='flex-1 h-[1px] bg-neutral-200'></span>
                            </div>   
                        </div>
                        <div className='flex flex-col gap-4'>
                            <form className='flex flex-col gap-2'>
                                <label htmlFor="username" className='w-full flex flex-col'>
                                    <span className='py-3 font-semibold text-base'>Username or Email</span>
                                    <input type="text" id='username' className='bg-transparent w-full h-[55px] px-3 media-sm:px-5 text-sm font-light placeholder:text-neutral-600 duration-200 border-[1.5px] border-solid border-neutral-200 bg-white rounded-xl focus-within:border-[#ffa1f9] outline outline-0 outline-[#faebf9] hover:outline-[5px]'/>
                                </label>
                                <label htmlFor="password" className='w-full flex flex-col'>
                                    <span className='py-3 font-semibold text-base'>Password</span>
                                    <input type="password" id='password' className='bg-transparent w-full h-[55px] px-3 media-sm:px-5 text-sm font-light placeholder:text-neutral-600 duration-200 border-[1.5px] border-solid border-neutral-200 bg-white rounded-xl focus-within:border-[#ffa1f9] outline outline-0 outline-[#faebf9] hover:outline-[5px]'/>
                                </label>
                            </form>
                            <button className='w-full mt-5 p-4 bg-btn-bg-color text-sm font-semibold text-white rounded-full duration-300 hover:bg-btn-bg-color-hover'>Sign in</button>
                            <div className='flex justify-center items-center'>
                                <span className='text-sm text-neutral-500 font-light'>Don't have an account?</span>
                                <Link to={'/signup'} className='ml-1 text-sm underline'>Sign up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
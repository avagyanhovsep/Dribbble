import React, { useEffect } from 'react';
import LogInLogOutComp from '../components/LogInLogOutComp';
import { ReactComponent as GoogleBtnIcon } from '../assets/svg-icons/google-btn-icon.svg';
import { Link } from 'react-router-dom';

function Signup(props) {
    useEffect(() => {
        document.title = "Sign Up | Dribbble";
    }, []);
    return (
        <div>
            <div className='w-full min-h-screen flex'>
                <LogInLogOutComp />
                <div className='w-full min-h-full flex justify-center items-center px-4'>
                    <div className='max-w-[400px] w-full flex flex-col gap-8'>
                        <h1 className='text-2xl font-bold text-link-color'>Sign up to Dribbble</h1>
                        <div className='flex flex-col gap-4'>
                            <button className='w-full p-4 bg-btn-bg-color rounded-full flex justify-center items-center gap-4 text-sm text-white font-semibold duration-200 hover:bg-btn-bg-color-hover'>
                                <GoogleBtnIcon />
                                Sign up with Google
                            </button>
                            <div className='flex justify-center items-center p-2 text-sm text-neutral-500'>
                                <span className='flex-1 h-[1px] bg-neutral-200'></span>
                                <span className='mx-4'>or</span>
                                <span className='flex-1 h-[1px] bg-neutral-200'></span>
                            </div>   
                            <button className='w-full p-4 border border-solid border-neutral-200 rounded-full flex justify-center items-center gap-4 text-sm font-semibold duration-200 hover:border-neutral-300'>
                                Continue with email
                            </button>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <span className='text-[12px] font-light text-neutral-700 text-center'>By creating an account you agree with our <span className='underline cursor-pointer'>Terms of Service</span>, <span className='underline cursor-pointer'>Privacy Policy</span>, and our default <span className='underline cursor-pointer'>Notification Settings</span>.</span>
                            <div className='flex justify-center items-center'>
                                <span className='text-sm text-neutral-500 font-light'>Already have an account?</span>
                                <Link to={'/session'} className='ml-1 text-sm underline'>Sign in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
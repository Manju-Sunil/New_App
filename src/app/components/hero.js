'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter, faWhatsapp, faArrowDown } from '@fortawesome/free-brands-svg-icons';
import Lottie from 'react-lottie-player';
import menu from '../components/JSON/menu.json';
import star from '../components/JSON/star.json';
import bulb from '../components/JSON/bulb.json';
import dice from '../components/JSON/dice.json';
import adver from '../components/JSON/adver.json';
import camera from '../components/JSON/camera.json';
import apple from '../components/JSON/apple.json';
import { useSpring, animated } from 'react-spring';


function Hero() {



    return (

<>
        <div className="container">
            <div className="row social-icons-container mt-[90px] ml-[190px]">
                <div className='col-md-1 ml-[-120px]  jump-container' style={{ display: 'flex', flexDirection: 'column' }}>
                    <a target="_blank" rel="noopener noreferrer" class="mb-[20px] font-bold text-[50px] jump text-with-border">
                        D
                    </a>

                    <a target="_blank" rel="noopener noreferrer" className="mb-[20px] font-bold text-[50px] jump"  >
                        I
                    </a>
                    <a target="_blank" rel="noopener noreferrer" className="mb-[20px] font-bold text-[50px] mr-[12px] jump">
                        G
                    </a>
                    <a target="_blank" rel="noopener noreferrer" className="mb-[20px] font-bold text-[50px] jump">
                        I
                    </a>
                    <a target="_blank" rel="noopener noreferrer" className="mb-[20px] font-bold text-[50px] jump">
                        T
                    </a>
                    <a target="_blank" rel="noopener noreferrer" className="mb-[20px] font-bold text-[50px] jump">
                        A
                    </a>
                    <a target="_blank" rel="noopener noreferrer" className="mb-[20px] font-bold text-[50px] jump">
                        L
                    </a>
                </div>
                <div className="container relative">
                    <div className="row ">
                        {/* Video Background */}
                        <video
                            src="video1.mp4"
                            autoPlay="video1.mp4"
                            muted
                            loop
                            playsInline
                            className="w-full h-auto object-cover absolute inset-0 top-[-100]"
                        ></video>

                        {/* Text Content */}
                        <div className='col-md-11 absolute inset-0 flex flex-col justify-center items-center text-center   text-black '>
                            <h3 className='text-[50px] text-[black] font-bold '>WE ARE</h3>
                            <h1 className='text-[130px] text-[black] font-bold '>DIGITAL</h1>
                            <h2 className='text-[50px] text-[black]  font-bold '>MARKETER</h2>
                            <button type="button" className="py-2.5 px-5 text-sm font-medium text-black focus:outline-none rounded-full border border-black hover:text-blue-700 mt-[30px]">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container text-[50px] text-[black] font-bold text-center'>
                <h >DRIVING BUSINESS SUCCESS
                    FOR GLOBAL PIONEERS & LEADERS</h>

            </div>
            <div class="brand-images">
                <img className="brand-image" alt="Brand Logo" width="183" height="89" data-v-6ca10297="" data-src="https://web.wisoftsolutions.com/assets/media/1-damac.webp" src="https://web.wisoftsolutions.com/assets/media/1-damac.webp" lazy="loaded"></img>
                <img className="brand-image" alt="Brand Logo" width="183" height="89" data-v-6ca10297="" data-src="https://web.wisoftsolutions.com/assets/media/2-al-futtaim.webp" src="https://web.wisoftsolutions.com/assets/media/2-al-futtaim.webp" lazy="loaded"></img>
                <img className="brand-image" alt="Brand Logo" width="183" height="89" data-v-6ca10297="" data-src="https://web.wisoftsolutions.com/assets/media/3-bits.webp" src="https://web.wisoftsolutions.com/assets/media/3-bits.webp" lazy="loaded"></img>
                <img className="brand-image" alt="Brand Logo" width="183" height="89" data-v-6ca10297="" data-src="https://web.wisoftsolutions.com/assets/media/4-nmc.webp" src="https://web.wisoftsolutions.com/assets/media/4-nmc.webp" lazy="loaded"></img>
                <img className="brand-image" alt="Brand Logo" width="183" height="89" data-v-6ca10297="" data-src="https://web.wisoftsolutions.com/assets/media/5-makita_5.webp" src="https://web.wisoftsolutions.com/assets/media/5-makita_5.webp" lazy="loaded"></img>
                <img className="brand-image" alt="Brand Logo" width="183" height="89" data-v-6ca10297="" data-src="https://web.wisoftsolutions.com/assets/media/henrywiltshire.webp" src="https://web.wisoftsolutions.com/assets/media/henrywiltshire.webp" lazy="loaded"></img>

            </div>


            <div>

                <img className="googlereviews ml-[600px]" src="google.png" alt="google Image" width="75" height="31" data-v-5125d9b4=""></img>
            </div>

            <div>
                <h className='font-bold text-black text-[40px] '>SERVICES :</h>
            </div>

            <div className='ml-[200px]'>
                <div className="card bg-gradient-to-r from-cyan-500 to-blue-500  text-white  relative card-animation">
                    <div className=' bg-gradient-to-r from-cyan-500 to-blue-500  w-[150px] rounded-xl '>
                        <Lottie
                            loop
                            animationData={menu}
                            play
                            style={{ width: 50 }}
                        />
                        <h2 className='font-bold'>Social media</h2>
                    </div>

                    <div className=' bg-gradient-to-r from-cyan-500 to-blue-500  w-[150px] rounded-xl mt-[20px]'>
                        <Lottie
                            loop
                            animationData={star}
                            play
                            style={{ width: 50 }}
                        />
                        <h2 className=''>Influencer</h2>
                        <h2 className='font-bold'>Management</h2>
                    </div>
                </div>



                <div className="card bg-gradient-to-r from-cyan-500 to-blue-500  text-white  relative card-animation">

                    <div className=' bg-gradient-to-r from-cyan-500 to-blue-500 w-[150px] rounded-xl'>
                        <Lottie
                            loop
                            animationData={bulb}
                            play
                            style={{ width: 50 }}
                        />
                        <h2 className='font-bold'>Digital Strategy</h2>
                    </div>

                    <div className=' bg-gradient-to-r from-cyan-500 to-blue-500  w-[150px] rounded-xl mt-[20px] '>
                        <Lottie
                            loop
                            animationData={dice}
                            play
                            style={{ width: 50 }}
                        />
                        <h2 className=''>Argumented</h2>
                        <h2 className='font-bold'>Reality</h2>
                    </div>
                </div>
                <div className="card  bg-gradient-to-r from-cyan-500 to-blue-500  text-white  relative card-animation">
                    <div className=' bg-gradient-to-r from-cyan-500 to-blue-500  w-[150px] rounded-xl '>
                        <Lottie
                            loop
                            animationData={adver}
                            play
                            style={{ width: 50 }}
                        />
                        <h2 className='font-bold'>Advertising</h2>
                    </div>

                    <div className=' bg-gradient-to-r from-cyan-500 to-blue-500  w-[150px] rounded-xl mt-[20px]'>
                        <Lottie
                            loop
                            animationData={camera}
                            play
                            style={{ width: 50 }}
                        />
                        <h2 className=''>Multimedia</h2>
                        <h2 className='font-bold'>Production</h2>
                    </div>
                </div>

                <div className="card  bg-gradient-to-r from-cyan-500 to-blue-500  text-white  relative card-animation">
                    <div className=' bg-gradient-to-r from-cyan-500 to-blue-500  w-[150px] rounded-xl'>
                        <Lottie
                            loop
                            animationData={menu}
                            play
                            style={{ width: 50 }}
                        />
                        <h2 className='font-bold'>Branding</h2>
                    </div>

                    <div className=' bg-gradient-to-r from-cyan-500 to-blue-500 w-[150px] rounded-xl mt-[20px]'>
                        <Lottie
                            loop
                            animationData={star}
                            play
                            style={{ width: 50 }}
                        />
                        <h2 className=''>Search Engine</h2>
                        <h2 className='font-bold'>Optimization</h2>
                    </div>
                </div>
            </div>


            </div>


           


            </>

    )
}

export default Hero
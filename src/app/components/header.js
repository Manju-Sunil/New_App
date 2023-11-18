'use client'
import React from 'react';
import Lottie from 'react-lottie-player'
import animation from '../components/JSON/animation.json';


const Header = () => {

    return (
        <div className="bg-white">

            <header className="bg-white text-black p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className='row'>
                        <div className='col'>
                        <Lottie
                            loop
                            animationData={animation}
                            play
                            style={{ width: 200 }}
                        /></div>
                        <div className='col'>
                        <h className="hover:text-gray-300 font-bold">GLIMPSE</h></div>
                    </div>
                    <nav>
                        <ul className="flex space-x-4 h-[20px]  font-bold mt-[20px]">
                            <li><a href="#" className="hover:text-blue-500">HOME</a></li>
                            <li><a href="#" className="hover:text-blue-500">SERVICES</a></li>
                           
                            <li><a href="#" className="hover:text-blue-500">PORTFOLIO</a></li>
                          
                            <li><a href="#" className="hover:text-blue-500">DEVELOPMENT</a></li>
                            <li><a href="#" className="hover:text-blue-500">CONTACT US</a></li>

                        </ul>
                    </nav>

                </div>
            </header>
        </div>

    );
};

export default Header;

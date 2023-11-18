'use client'
import React from 'react';
import { useSpring, animated } from 'react-spring';

function Frame() {

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }, // Adjust the duration as needed
  });
  return (
    <>
      <div className='mt-[300px] mr-[150px] text-[40px] font-bold'>Portfolio</div>


      <div className='ml-200px flex'>
        <div className='w-150px h-350px rounded-xl mr-10 card-animation1'>
          <img src='d1.png' alt='Card 1' />
        </div>
        <div className='w-150px h-350px rounded-xl mr-10 card-animation2'>
          <img src='d2.png' alt='Card 2' />
        </div>
        <div className='w-150px h-350px rounded-xl mr-10 card-animation3'>
          <img src='d3.jpeg' alt='Card 3' />
        </div>
        <div className='w-150px h-350px rounded-xl mr-10 card-animation4'>
          <img src='d4.png' alt='Card 4' />
        </div>
        <div className='w-150px h-350px rounded-xl mr-10 card-animation5'>
          <img src='d8.png' alt='Card 5' />
        </div>
        <div className='w-150px h-350px rounded-xl mr-10 card-animation6'>
          <img src='d6.png' alt='Card 6' />
        </div>
      </div>

      <h className='font-bold text-[40px] mb-[60px]'>What Client Say</h>
      <div>
        <div class="card6 bg-gradient-to-r from-pink-300 to-pink-800 ">
          <div className='row'>
            <img src='/d1.png' className='w-[60px] h-[60px] rounded-full' />
            <div className='ml-[80px] mb-[50px]'>
              <p className=''>Lavanya.</p>
              <p className=''>Lavanya.</p>
            </div></div></div>
        <div class="card6 bg-gradient-to-r from-pink-300 to-pink-800 ">
          <div className='row'>
            <img src='/d1.png' className='w-[60px] h-[60px] rounded-full' />
            <div>
              <p className=''>Lavanya.</p>
              <p className=''>Lavanya.</p>
            </div></div></div>
        <div class="card6 bg-gradient-to-r from-pink-300 to-pink-800 ">
          <div className='row'>
            <img src='/d1.png' className='w-[60px] h-[60px] rounded-full' />
            <div>
              <p className=''>Lavanya.</p>
              <p className=''>Lavanya.</p>
            </div></div></div>
        <div class="card6 bg-gradient-to-r from-pink-300 to-pink-800 ">
          <div className='row'>
            <img src='/d1.png' className='w-[60px] h-[60px] rounded-full' />
            <div>
              <p className=''>Lavanya.</p>
              <p className=''>Lavanya.</p>
            </div></div></div>
        <div class="card6 bg-gradient-to-r from-pink-300 to-pink-800 ">
          <div className='row'>
            <img src='/d1.png' className='w-[60px] h-[60px] rounded-full' />
            <div>
              <p className=''>Lavanya.</p>
              <p className=''>Lavanya.</p>
            </div></div></div>



      </div>
    </>
  );
}

export default Frame;










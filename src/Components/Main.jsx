"use client"
import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

// import required modules
import {Autoplay, Pagination } from 'swiper/modules';
import { Press_Start_2P } from 'next/font/google';
function Main() {
  const [activeButton, setActiveButton] = useState('trending');

  // Function to toggle the active state
  const toggleActive = () => {
    setIsActive(current => !current);
  }
  return (
    <div className='h-screen w-screen flex flex-col gap-3 p-3 ' style={{ 
      backgroundImage: `url('/v602-nunoon-04-rippednotes.webp')`,
      backgroundPosition: 'center', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat'
    }}>
    
        <div className='text-[#f52239] mt-[90px] text-2xl text-center font-bold font-warfame'style={{fontFamily : "PressStart2P"}}>EVM WARFARE</div>
        
        <Swiper  autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }} pagination={true} modules={[Autoplay,Pagination]} className="mySwiper w-full h-[200px] rounded-2xl bg-black">
        <SwiperSlide>
          <Image
          className='rounded-2xl'
          src='/TaikoxEVM.png'
          alt=''
          height={500}
          width={500}
          />
        </SwiperSlide>
        <SwiperSlide>
           <Image
          className='rounded-2xl'
          src='/x_1.png'
          alt=''
          height={200}
          width={500}
          /></SwiperSlide>
      </Swiper>
      
       
       
        <div className=' text-xl font-semibold mt-4 ' >
          <div className='flex flex-row gap-2 dark:text-white text-white'>
           <div style={{fontFamily : "PressStart2P"}}>Play and Win </div> <div className='text-xl'>!</div></div>
            <div className='font-thin text-md dark:text-white text-white'>Select the game you wanna play : </div>
         </div>
         <div className=' w-full flex gap-4 mt-3'>
            <button  onClick={() => setActiveButton('trending')}
                className={`h-[40px] w-[110px] rounded-md border-red-600 border-2 font-bold dark:text-white text-white  ${
                    activeButton === 'trending' ? 'bg-[#f52239] dark:text-white text-white' : 'bg-transparent'
                }`}>
                TRENDING
                </button>
            <button onClick={() => setActiveButton('mostPlayed')}
                className={`h-[40px] w-[140px] rounded-md border-red-600 border-2  font-bold dark:text-white text-white ${
                    activeButton === 'mostPlayed' ? 'bg-[#f52239] dark:text-white text-white' : 'bg-transparent'
                }`}>MOST PLAYED</button>
         </div>
         {activeButton === 'trending' && (
                <div className='mt-5 flex flex-col gap-5'>
                  
                   <div className='ml-2 mr-2  h-[50px] w-auto flex justify-between items-center'>
                    <div className='flex gap-2 h-full'>
                    <div className='h-full rounded-md  w-[50px] bg-red-600'>
                      <Image
                      src='/game/vNQdsn.png'
                      alt='game immage'
                      height={60}
                      width={60}
                      />
                    </div>
                    <div className='font-bold h-full flex justify-center dark:text-white text-white items-center'>Flappy Bird</div>
                    </div>
                    <div className=' '>
                        <Link href='https://saintdevelopergames.github.io/FlappyBird/'>
                      <button className='h-[35px] rounded-md w-[80px] dark:text-white text-white bg-red-600 font-bold'>
                        PLAY
                        </button>
                        </Link>
                        
                    </div>
                   </div>
                   <div className='ml-2 mr-2  h-[50px] w-auto flex justify-between items-center'>
                    <div className='flex gap-2 h-full'>
                    <div className='h-full rounded-md  w-[50px] bg-gray-600'>
                      <Image
                      src='/game/file-nKv9DWllpeerZm3psT0UChtm.png'
                      alt='game immage'
                      height={60}
                      width={60}
                      />
                    </div>
                    <div className='font-bold h-full dark:text-white text-white flex justify-center items-center'>Farming Simulator</div>
                    </div>
                    <div className=' '>
                        <Link href='https://harshitsiwach.github.io/webgl/'>
                      <button className='h-[35px] rounded-md w-[80px] dark:text-white text-white  bg-red-600 font-bold'>
                        PLAY
                        </button>
                        </Link>
                        
                    </div>
                   </div>
                   
                </div>
            )}

            {activeButton === 'mostPlayed' && (
                <div>
                    {/* Content shown when 'Most Played' is clicked */}
                    <h2>Most Played Games</h2>
                   
                </div>
            )}
    </div>
  )
}

export default Main

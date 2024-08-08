"use client"
import React,{useState} from 'react'

import Image from 'next/image';

import Link from 'next/link';
import Swiperr from './Swiper';
// import required modules
import { Press_Start_2P } from 'next/font/google';
function Main() {
  const [activeButton, setActiveButton] = useState('trending');

  // Function to toggle the active state
  const toggleActive = () => {
    setIsActive(current => !current);
  }
  return (
    <div className='h-[1500px]  sm:h-[1200px] w-full flex flex-col gap-3 p-3 bg-white' style={{ 
      backgroundImage: `url('/bg/Ice Cream.png')`,
      backgroundSize: 'cover', // Optional: Adjust as needed
      backgroundPosition: 'center', // Optional: Adjust as needed
    }}>
    
        <div className='text-[#E91898] mt-[90px] text-2xl text-center font-bold font-warfame'style={{fontFamily : "PressStart2P"}}>EVM WARFARE</div>
       <div className='z-0'>
       <Swiperr/>
       </div> 
       
       
        <div className=' text-xl font-semibold mt-4 ' >
          <div className='flex flex-row gap-2 dark:text-black text-white'>
           <div style={{fontFamily : "PressStart2P"}}>Play and Win </div> <div className='text-xl'>!</div></div>
            <div className='font-thin text-md dark:text-[#E91898] text-[#E91898]'>Select the game you wanna play : </div>
         </div>
         <div className=' w-full flex gap-4 mt-3'>
            <button  onClick={() => setActiveButton('trending')}
                className={`h-[40px] w-[110px] rounded-md border-red-600 border-2 font-bold dark:text-white text-white  ${
                    activeButton === 'trending' ? 'bg-[#E91898] dark:text-black text-black' : 'bg-transparent'
                }`}>
                TRENDING
                </button>
            <button onClick={() => setActiveButton('mostPlayed')}
                className={`h-[40px] w-[140px] rounded-md border-[#E91898] border-2  font-bold dark:text-black text-black ${
                    activeButton === 'mostPlayed' ? 'bg-[#E91898] dark:text-black text-black' : 'bg-transparent'
                }`}>MOST PLAYED</button>
         </div>
         {activeButton === 'trending' && (
                <div className='mt-5 flex flex-col gap-5 sm:gap-10 sm:flex-row sm:w-[1000px] sm:items-center sm:justify-center'>
                  
                   <div className='ml-2 mr-2  h-[50px] w-auto sm:w-full flex justify-between items-center'>
                    <div className='flex gap-2 h-full'>
                    <div className='h-full rounded-md  w-[50px] bg-red-600'>
                      <Image
                      src='/game/vNQdsn.png'
                      alt='game immage'
                      height={60}
                      width={60}
                      />
                    </div>
                    <div className='font-bold h-full flex justify-center dark:text-black text-black items-center'>Flappy Bird</div>
                    </div>
                    <div className=' '>
                        <Link href='https://saintdevelopergames.github.io/FlappyBird/'>
                      <button className='h-[35px] rounded-md w-[80px] dark:text-black text-black bg-[#E91898] font-bold'>
                        PLAY
                        </button>
                        </Link>
                        
                    </div>
                   </div>
                   <div className='ml-2 mr-2  h-[50px] sm:w-full  w-auto flex justify-between items-center'>
                    <div className='flex gap-2 h-full'>
                    <div className='h-full rounded-md  w-[50px] bg-gray-600'>
                      <Image
                      src='/game/file-nKv9DWllpeerZm3psT0UChtm.png'
                      alt='game immage'
                      height={60}
                      width={60}
                      />
                    </div>
                    <div className='font-bold h-full dark:text-black text-black flex justify-center items-center'>Farming Simulator</div>
                    </div>
                    <div className=' '>
                        <Link href='https://harshitsiwach.github.io/webgl/'>
                      <button className='h-[35px] rounded-md w-[80px] dark:text-black text-black  bg-[#E91898] font-bold'>
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

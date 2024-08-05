import React from 'react'
import Image from 'next/image'
function Footer() {
  return (
    <>
    <div className='fixed bottom-0 bg-transparent p-4 flex justify-center items-center w-full gap-2'>
    <Image
        src='/discord-alt-5-svgrepo-com.png'
        alt='game immage'
        className=''
        height={40}
        width={40}
        />
    <Image
        src='/twitter-svgrepo-com.png'
        alt='game immage'
        className=''
        height={40}
        width={40}
        />
        <Image
        src='/twitter-svgrepo-com.png'
        alt='game immage'
        className=''
        height={40}
        width={40}
        />
    
    </div>
    </>
  )
}

export default Footer
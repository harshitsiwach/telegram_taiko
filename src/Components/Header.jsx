"use client"
import React from 'react'
import Image from 'next/image';
import { createThirdwebClient } from "thirdweb";
import { ConnectButton, darkTheme  } from "thirdweb/react";

import { createWallet,inAppWallet  } from "thirdweb/wallets";
const wallets = [
  createWallet("io.metamask"), // Add your wallet in wallet list
  
  createWallet("walletConnect"), // add other wallets...
];

const client = createThirdwebClient({ clientId: "63b98dbe94cbbf8ed2913e5ab5d566a4" });
function Header() {
  return (
    <div className='bg-transparent w-full absolute top-0 flex justify-between items-center p-2 text-black h-[70px] z-10'>
    <div className='flex items-center'>
     <Image
     src='/evm.png'
     alt=''
     height={60}
     width={60}
     />
     <div className='text-md text-bold'>X</div>
    <Image
    className='pt-5 p-4'
     src='/idrvDcv7Hh.png'
     alt=''
     height={75}
     width={75}
     />

    </div>
    
    <div className='w-[200px] h-full flex justify-end items-end'>
      <div>
        <ConnectButton 
        wallets={wallets}
        client={client}
         theme={darkTheme({
          colors: {
            
            accentButtonBg: "#f52239",
            borderColor: "#f52239",
            separatorLine: "#f52239",
           
            secondaryButtonText: "#ededef",
            modalBg: "",
            dropdownBg: "",
            secondaryButtonBg: "",
            connectedButtonBg: "#f52239",
            accentButtonText: "white",
            primaryButtonBg: "#E91898",
            primaryButtonText: "black",
          },
        })}
        connectModal={{ size: "compact" }}
      />
      </div>
      
  
       
     
    </div>
  </div>

  )
}

export default Header
'use client';
import React from 'react'
import Image from 'next/image';
import { logo } from "../public/assets";
import { Modal } from '@components';
import { useState } from 'react';


const Nav = () => {
  const [visible, setVisible] = useState(false)
  const handler = () => {
    setVisible(visible?false:true);
  }
  return (
    <div>
      <div className="bg-blue-400 w-full h-2"></div>
      <div className="p-2 border-b bg-white">
        <div className="flex justify-between items-center">
          <div>
            <a href="/dashboard">
              <Image src={logo} width="100" />
            </a>
          </div>
          <div className='notification flex gap-x-5'>
            <a href="/notification" className="text-gray-700 hover:text-blue-900 text-[25px]"><ion-icon name="notifications-sharp" width="100"></ion-icon></a>
            <button onClick={handler} className="text-gray-700 hover:text-blue-900 lg:hidden text-[25px]"><ion-icon name="menu-sharp" width="100"></ion-icon></button>
            <a href="/" className="text-red-700 hover:text-red-900 text-[25px] hidden lg:block"><ion-icon name="exit-outline" width="100"></ion-icon></a>
          </div>
        </div>
      </div>
      {visible ? <Modal/> : <></>}
    </div>
  )
}

export default Nav

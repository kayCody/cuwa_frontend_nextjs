'use client';
import React from 'react'

const ConfirmationModal = ({ isVisible, onClose, }) => {
  if (!isVisible) return null;
  return (
    <div className='modal fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm border-2 flex justify-center items-center' id='mod_id'>
      <div className='bg-white p-2 rounded-lg w-[330px] lg:w-[500px] h-[150px] flex justify-center items-center '>
        <div>
          <h1>Please click to confirm your payment or cancel if made a mistake</h1>
          <div className='flex justify-center items-center pt-2 gap-x-3'>
            <button className='flex items-center justify-center gap-x-2 text-white p-2 rounded bg-red-600 hover:bg-red-800 lg:hidden' onClick={() => onClose()}><ion-icon name="close"></ion-icon> cancel</button>
            <button className='flex items-center justify-center gap-x-2 text-white p-2 rounded bg-green-600 hover:bg-green-800'><ion-icon name="checkmark-sharp" onClick={() => { }}></ion-icon> confirm</button>
            <div className='absolute top-[240px] right-[20px] lg:top-[465px] lg:right-[700px] md:top-[470px] md:right-[700px] md:hidden hidden lg:block'>
              <button className='text-red-600 hover:text-red-800 text-4xl' onClick={() => onClose() }><ion-icon name="close-circle"></ion-icon></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal

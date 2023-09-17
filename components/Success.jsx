import React from 'react'

const Success = ({message}) => {
  return (
    <div className='success lg:container lg:mx-auto lg:px-[400px]'>
      <div className='flex justify-center items-center bg-yellow-200'>
        <h1 className='text-white'>{message} <ion-icon className="text-green-600" name="checkmark-done"></ion-icon></h1>
      </div>
    </div>
  )
}

export default Success

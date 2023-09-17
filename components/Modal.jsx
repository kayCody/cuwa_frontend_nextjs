import React from 'react'

const modal = () => {
  return (
    <div className=' absolute top-12 right-2 bg-white shadow-sm rounded-lg h-[90px] w-[120px] p-2 flex justify-center items-center'>
      <div className=''>
        <a href="/profile" className="text-[20px] lg:hidden flex items-center gap-x-2"><ion-icon name="person-outline" width="100"></ion-icon>Profile</a>
        <a href="/" className="text-red-700 hover:text-red-900 text-[20px] lg:hidden flex items-center gap-x-2"><ion-icon name="exit-outline" width="100"></ion-icon>Logout</a>
      </div>
      
    </div>
  )
}

export default modal

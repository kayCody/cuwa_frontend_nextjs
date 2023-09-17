import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { Nav, Tables } from "../../components";



const Home = () => {

  return (
    <section className="min-h-screen">
      <title>Cuwa Field Systems - Home</title>
      <Nav />
      <div className='flex-col lg:flex lg:justify-center mt-5 lg:container lg:mx-auto lg:px-[200px] px-2'>
        <div className='mt-3'>
          <div className=' border-b border-black w-[250px] p-1 px-1'>
            <form action="" metho="POST" className='flex items-center gap-x-1'>
              <ion-icon name="search-sharp" className="ml-2" width="200"></ion-icon>
              <input type="number" className='focus:outline-none w-[300px]' placeholder='search by id, name, accounts' name='search' />
            </form>
          </div>
        </div>
        <div className='mt-2 overflow-x-scroll  w-[370px]  lg:w-full'>
          <h1 className='text-center'></h1>
          <Tables />
        </div>
      </div>
    </section>
  )
}
export default Home

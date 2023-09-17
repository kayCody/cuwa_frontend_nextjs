'use client';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { logo } from "../public/assets";
import { useReducer } from 'react';
import { Success } from '@components';

const formReducer = (state, event) => {
  return {
    ...state, 
    [event.target.name]: event.target.value
  }
}
const Loginform = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData) == 0) return console.log("Don't have any data");
    console.log(formData);
  }
  if (Object.keys(formData)>0) return <Success message={ 'Data Added Successfully' } />
  return (
    <div>
      <div class=" bg-gray-100 flex flex-col justify-center items-center lg:px-2 px-5 mt-[100px] lg:mt-[300px]">
        <div className="image">
          <div className="border-r px-5 border-black h-[100px] flex items-center"><h1 className="font-bold text-[40px] text-gray-800">Login</h1></div>
          <Image src={logo} />
        </div>
        <div class="max-w-md w-full mx-auto">
        </div>
        <div class="max-w-md w-full  shadow-lg mx-auto mt-4 bg-white rounded-md p-8 border border-gray-300">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="">
              <label className="font-bold text-sm text-gray-600 block">Username: </label>
              <input type="text" required onChange={setFormData} name="username" className=" w-full p-2 border border-gray-300 round-lg mt-1" />
            </div>
            <div className="">
              <label className="font-bold text-sm text-gray-600 block">Password: </label>
              <input type="password" onChange={setFormData} name='password' required className=" w-full p-2 border border-gray-300 round-lg mt-1" />
            </div>
            <div className="flex justify-center">
              <button type='submit' onClick="" className="w-full py-2 px-4 bg-gray-700 hover:bg-gray-800 rounded border border-gray-300 p-2 text-white">Login</button>
            </div>
          </form>
          <div className=" mt-3 flex gap-x-2 items-center">
            <input type="checkbox" name="" /><h1>Remember me</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginform

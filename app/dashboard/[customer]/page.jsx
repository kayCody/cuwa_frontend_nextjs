'use client';
import React, { Fragment, useEffect, useState, useReducer } from 'react'
import { Nav, ConfirmationModal } from '@components'
import Image from 'next/image';
import { profile } from '@public/assets';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value
  }
}

const page = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useReducer(formReducer, {});
  const handleSubmit = (e) => {
    // e.preventDefault();
    // keypress = addEventListener('keydown');
    if (keypress == 'enter') return <ConfirmationModal isVisible={showModal} onClose={() => setShowModal(false)} val={formData} />
    if (Object.keys(formData) == 0) return console.log("Don't have any data");
    console.log(formData);
  }
  if (Object.keys(formData) > 0) return <Success message={'Data Added Successfully'} />
  return (
    <Fragment>
      <div>
        <title>CUA Field System - </title>
        <Nav />
        <div className='lg:container lg:mx-auto lg:px-[400px] px-2'>
          <h1 className='text-center font-bold text-xl p-2 border-b-2 border-black'>Customer's Brief Details </h1>
          <div className='flex justify-start px-3 py-4 w-full'>
            <div className=''>
              <div className='flex justify-start w-full'>
                <Image src={profile} width={150} className="object-cover" />
              </div>
              <h1 className=' text-xl'>Client ID: <span className='text-blue-600'>110000</span>  </h1>
              <h1 className='text-xl'>Accounts Number: <span className='text-blue-600'>110000202010</span>  </h1>
              <h1 className='text-xl'>Client Name: <span className='text-blue-600'>Ama Amoanimaah</span>  </h1>
              <h1 className='text-xl'>Client Name: <span className='text-blue-600'>Ama Amoanimaah</span>  </h1>
            </div>
          </div>
          <div className='form mt-3 px-3 w-full border-t-2 border-black'>
            <div className='p-3 flex gap-x-3 justify-center w-full items-center'>
              <button className='btn_customer active'  >Payment Form</button>
              <button className='btn_customer'  >Payment Records</button>
            </div>
            <div className='payment_form hidden' id='payment_form'>
              <h1 className='text-xl font-bold text-center'>Payment Form</h1>
              <h1 className='text-center mb-2 text-blue-600'>Ama Amoanimaah - [110000202010] </h1>
              <form action="#" onSubmit={handleSubmit} className='space-y-4'>
                <div className=''>
                  <h1 className="font-bold px-2">Payment for: </h1>
                  <div className='px-2 gap-x-2 flex items-center border rounded-md p-2 '>
                    <select name="payment_type" id="payment_type" onChange={setFormData} className='w-full focus:outline-none'  >
                      <option value=""> ........................................................................ </option>
                      <option value="susu">Susu</option>
                      <option value="loan">Loan</option>
                    </select>
                  </div>
                </div>
                <div className=''>
                  <h1 className="px-2 font-bold">Amount Paying: </h1>
                  <div className='px-2 gap-x-2 flex items-center border rounded-md p-2'>
                    <h1 className="text-xl border-r border-black px-2"><ion-icon name="wallet-sharp"></ion-icon></h1>
                    <input type="number" onChange={setFormData} name='amount' className='focus:outline-none w-full' placeholder='eg: 100.00' />
                  </div>
                </div>
                <h1 className='font-bold mt-4'>Amount to pay: <span className='text-blue-800'></span>.00 </h1>
                <ConfirmationModal isVisible={showModal} onClose={() => setShowModal(false)} val={formData} />
              </form>
              <div className='mt-4'>
                <button onClick={() => setShowModal(true)} className='w-full rounded bg-blue-700 hover:bg-blue-900 text-white p-2 font-bold flex justify-center items-center gap-x-2'><ion-icon name="add"></ion-icon> Add Fund</button>
              </div>
            </div>
            <div className='payment_records' id='payment_records'>
              <h1 className='text-xl font-bold text-center'>Payment Records</h1>

            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default page

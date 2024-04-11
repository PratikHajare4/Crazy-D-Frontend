import React from 'react';
import Image from 'next/image'
import logo from '../../../public/logo.png'

export default function Footer() {
  return (
    <>
    <div className='flex flex-row  mx-auto mt-10 border-t border-gray-300 p-10 '>
      <div className=" ml-10">
      <Image src={logo} width="100" height="100" placeholder='blur' alt='logo'  />
      <p className='text-gray-500 mt-5 mr-10'>We have a special purpose to improve the quality of human life. Our products
        bring reassuring comfort to people. We have a portfolio of trusted, market-
        leading brands Reckitt Benckiser, HUL, P&G, Dabur, etc. We've been
        championing innovation, compassion, and grit over the years.</p>
        
      </div>
      <div className="flex flex-row gap-11 mr-10">
        <div className="">
            <h1 className='text-2xl'>Information</h1>
            <p className='text-gray-500'>About CrazyD</p>
            <p className='text-gray-500'>FAQ</p>
            <p className='text-gray-500'>Contact Us</p>
        </div>

        <div className="">
            <h1 className='text-2xl'>Customer Service</h1>
            <p className='text-gray-500'>Track Your Order</p>
            <p className='text-gray-500'>Help</p>
            <p className='text-gray-500'>Terms & Conditions</p>
            <p className='text-gray-500'>Privacy Policy</p>
        </div>

        <div className="">
            <h1 className='text-2xl'>My Account</h1>
            <p className='text-gray-500'>Sign In</p>
            <p className='text-gray-500'>View Cart</p>
            <p className='text-gray-500'>My Wishlist</p>
        </div>
      </div>


      
    </div>

<div className=" ml-10 border-t border-gray-300 p-5">
Copyright @ Crazy D India Pvt. Ltd. 2023. All Rights Reserved.
</div>

</>
  )
}

import React from 'react';
import Image from 'next/image'
import skin from '../../../public/skin.jpg'

export default function Product() {
  return (
    <div className='flex flex-row gap-5 justify-between'>
      <div className="flex flex-col ">
      <Image src={skin} width="300" height="400" placeholder='blur' alt='logo'  />
      <p className='text-gray-500'>Personal Care, Skin Care</p>
      <h1>St Ives Apricot Smooth Skin </h1>
      <h1>Face Wash I For Deep Pore...</h1>
      <p className='text-[#00d8e3]'>360.OO(incI. of GST)</p>
      <p className='text-gray-500'>⭐⭐⭐⭐⭐ ( 5 Reviews)</p>
      </div>

      <div className="flex flex-col ">
      <Image src={skin} width="300" height="400" placeholder='blur' alt='logo'  />
      <p className='text-gray-500'>Personal Care, Skin Care</p>
      <h1>St Ives Apricot Smooth Skin </h1>
      <h1>Face Wash I For Deep Pore...</h1>
      <p className='text-[#00d8e3]'>360.OO(incI. of GST)</p>
      <p className='text-gray-500'>⭐⭐⭐⭐⭐ ( 5 Reviews)</p>
      </div>

      <div className="flex flex-col ">
      <Image src={skin} width="300" height="400" placeholder='blur' alt='logo'  />
      <p className='text-gray-500'>Personal Care, Skin Care</p>
      <h1>St Ives Apricot Smooth Skin </h1>
      <h1>Face Wash I For Deep Pore...</h1>
      <p className='text-[#00d8e3]'>360.OO(incI. of GST)</p>
      <p className='text-gray-500'>⭐⭐⭐⭐⭐ ( 5 Reviews)</p>
      </div>

      
      <div className="flex flex-col ">
      <Image src={skin} width="300" height="400" placeholder='blur' alt='logo'  />
      <p className='text-gray-500'>Personal Care, Skin Care</p>
      <h1>St Ives Apricot Smooth Skin </h1>
      <h1>Face Wash I For Deep Pore...</h1>
      <p className='text-[#00d8e3]'>360.OO(incI. of GST)</p>
      <p className='text-gray-500'>⭐⭐⭐⭐⭐ ( 5 Reviews)</p>
      </div>


    </div>
  )
}

import Image from 'next/image'
import React from 'react';
import logo from '../../../public/logo.png'
import { FaSearch } from 'react-icons/fa';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='sticky top-0 bg-white p-3  flex flex-row  auto margin-auto justify-between  items-center m-5 mx-auto border-b border-gray-200' >
        <div className='ml-10'>
            <Link href='/'>
          <Image src={logo} width="100" height="100" placeholder='blur' alt='logo'  />
          </Link>
        </div>
                 <div className="sm:w-100 sm:h-10 hidden  border border-gray-200 rounded  sm:flex items-center ">
                <input className='bg-transparent sm:h-full m-3 sm:w-100 focus:outline-none' type="search"     placeholder='search...' />
                     <div className='bg-[#00d8e3] w-10 sm:h-full flex justify-center rounded items-center '>
                       <FaSearch className='text-white   sm:outline-none' />
                     </div>

                </div>
                <div className='flex flex-row gap-5 mr-10'>
                <div className="flex flex-col items-center justify-center">
                    <div className="">
                        <FiHeart className='w-7 h-7' />
                    </div>
                    <p className='text-[12px] text-gray-500'>Wishlist</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="">
                        <FiShoppingCart className='w-7 h-7' />
                    </div>
                    <p className='text-[12px] text-gray-500 '>Wishlist</p>
                </div>
                </div>
    </div>
  )
}

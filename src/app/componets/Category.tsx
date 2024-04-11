import Link from 'next/link'
import React from 'react'
import {  BiMenu } from 'react-icons/bi'

import { BsChevronDown } from "react-icons/bs";

export default function Category() {
  return (
    <div className='flex flex-row  border-b border-gray-200'>
            <div className="flex ml-10 flex-row justify-center items-center">
                <BiMenu className='h-8 w-8 '/>
                <div className="p-3">
                <p>Browse</p>
                <p>Categories</p>
                </div>
            </div>
<div className="flex flex-col items-center justify-center text-gray-500">|</div>
      <div className="flex flex-col ">
        <div className="flex flex-row gap-5 w-screen ml-5 ">
            <ul className='flex flex-row items-center  gap-5 '  >
                <div className="flex flex-row items-center justify-center">
                <li ><Link href="/personalcare">Skin Caare   </Link></li>
                <BsChevronDown />
                </div>
           <div className="flex flex-row items-center justify-center">
            <li>Health & Supplements</li>
            <BsChevronDown />
            </div>
            <div className="flex flex-row items-center justify-center">
            <li>Naughty Gifts</li>
            <BsChevronDown />
            </div>
            <div className="flex flex-row items-center justify-center">
            <li>Women's Fashion</li>
            <BsChevronDown />
            </div>
            <div className="flex flex-row items-center justify-center">
            <li>Beverages</li>
            <BsChevronDown />
            </div>
            <div className="flex flex-row items-center justify-center">
            <li>Foods & Snacks </li>
            <BsChevronDown />
            </div>
            </ul>
        </div>


       
      </div>
    </div>
  )
}

import Link from 'next/link'
import React from 'react'
import { BsChevronDown } from "react-icons/bs";
import Product from '../componets/Product';

export default function page() {
  return (
    <div>
       <div className="p-3 border-b flex flex-row">
      <Link href="/">
        <h1 className='text-gray-400'>Home  &#11166; </h1>
        </Link>
        <br />
        <h1>&nbsp; Skin Care</h1>
        </div>


    <div className="mt-8 flex flex-row justify-between mr-10 mb-10">
        <div className="ml-10">
            <p className='text-gray-400 '>Filters:</p>
        </div>
        <div className="flex flex-row">
            <p className='text-[#00d8e3]'>Clean All </p>
            <p className='ml-3 text-gray-300'>Showing <span className='text-black'>1-12</span> of <span className='text-black'>71</span> Products</p>
        </div>
        <div className="flex flex-row ">
            <p>Sort By :</p>
            <div className='border flex flex-row  justify-center items-center'>
                <p className='text-gray-300 mr-5'>Sort by latest  </p>
                <BsChevronDown />
            </div>
        </div>

    </div>

    <div className="flex flex-row ">
            <div className="flex flex-col items-between gap-5">
        <div className="flex flex-row items-center ">
        <p>Category</p>
        <BsChevronDown />
        </div>

        <div className="flex flex-row items-center ">
        <p>Baby Products</p>
        <BsChevronDown />
        </div>

        <div className="flex flex-row items-center ">
        <p>Car Care</p>
        <BsChevronDown />
        </div>

        <div className="flex flex-row items-center ">
        <p>Dairy & Bakery</p>
        <BsChevronDown />
        </div>

        <div className="flex flex-row items-center ">
        <p>Foods & Snacks</p>
        <BsChevronDown />
        </div>

        <div className="flex flex-row items-center ">
        <p>Health & Supplements</p>
        <BsChevronDown />
        </div>

        <div className="flex flex-row items-center ">
        <p>CNaughty Gifts</p>
        <BsChevronDown />
        </div>

        <div className="flex flex-row items-center ">
        <p>Category</p>
        <BsChevronDown />
        </div>

        <div className="flex flex-row items-center ">
        <p>Category</p>
        <BsChevronDown />
        </div>

        <div className="flex flex-row items-center ">
        <p>Category</p>
        <BsChevronDown />
        </div>

        

    </div>
    <div className="ml-10 mx-auto flex flex-col ">

        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
    </div>

    </div>

    </div>
  )
}

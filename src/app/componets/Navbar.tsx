import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-gray-300'>
      <ul className='flex flex-row justify-end gap-6 text-stone-700 text-md mr-10 '>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/loyalty">Loyalty Reward Page</Link></li>
        <li><Link href="/myaccount">My Account </Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/order">Track Your Order</Link></li>
        <li><Link href="/login">Login/Register</Link></li>
       
      </ul>
    </div>
  )
}

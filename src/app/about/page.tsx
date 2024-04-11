import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import diamond from '../../../public/diamond.png';
import hand from '../../../public/hand.png';
import mission from '../../../public/mission.png';
import eye from '../../../public/eye.png';
import one from '../../../public/1.png';
import two from '../../../public/2.png';
import three from '../../../public/three.png';
import four from '../../../public/four.png';

export default function About() {
  return (
    <>
    <div className='bg-gray-100 flex justify-center items-center '>
      <div className='flex flex-col justify-center items-center m-8'>
      <h1 className='text-[50px]'>About CrazyD</h1>
      <p className='text-xl text-[#00cbd6]'>We are the #1 source for Health & Hygiene products</p>
      </div>

      
    </div>
    <div className="p-3 border-b flex flex-row">
      <Link href="/">
        <h1 className='text-gray-400'>Home  &#11166; </h1>
        </Link>
        <br />
        <h1>&nbsp; About CrazyD</h1>
    </div>

    <div className="flex flex-col justify-center items-center gap-3  m-5 mt-10">
      <h1 className='font-bold text-gray-500'>Welcome to Crazy D India — Your Premier Destination for Exceptional FMCG Products!</h1>
      <h1 className='font-bold text-gray-500'>⭐Elevate Your Lifestyle with Crazy D India⭐</h1>
      <h1 className='font-bold text-gray-500'>🛍️Explore a World of Quality🛍️</h1>
      <p className='text-gray-600  text-center'>Step into a realm of unparalleled quality with Crazy D India — your ultimate hub for FMCG essentials. Immerse yourself in a curated portfolio featuring renowned brands
like Reckitt Benckiser, HUL, P&G, Dabur, and more. We don't just sell products; we deliver a promise of innovation, compassion, and unwavering commitment.</p>
<h1 className='font-bold text-gray-500'>🛍️Unleash the Power of Health and Hygiene🛍️</h1>
<p className='text-gray-600  text-center'>At Crazy D India, we believe that health and hygiene form the bedrock of joyous lives, thriving communities, and progress. Our mission is to keep you healthy at every
stage of life. Join us in creating a world where well-being knows no bounds.</p>
<h1 className='font-bold text-gray-500'>🛍️Unparalleled Customer Service🛍️</h1>
<p className='text-gray-600  text-center'>Your satisfaction is our top priority. We go above and beyond to offer a shopping experience like no other. Our dedicated team ensures that every interaction with Crazy D
India is not just a transaction but a delightful journey.</p>

<h1 className='font-bold text-gray-500'>🛍️Building Healthier Communities🛍️</h1>
<p className='text-gray-600  text-center'>Crazy D India is more than just an e-commerce platform; we're on a mission to improve affordability, accessibility, and foster healthier communities nationwide. We're
proud to be recognized by DPIIT, Startup India, and affiliated with the International Trade Council.</p>

<h1 className='font-bold text-gray-500'>🛍️Nationwide Delivery Partners🛍️</h1>
<p className='text-gray-600  text-center'>Experience the ease of shopping with Crazy D India, as we reach every corner of the country through our trusted courier partners: Bluedart, Delhivery, Shiprocket, and
Pickrr. Your order is not just a package; it's a promise delivered to your doorstep with care.</p>

<h1 className='font-bold text-gray-500'>🛍️Giving Back to Society🛍️</h1>
<p className='text-gray-600  text-center'>At Crazy D India, we believe in making a difference. Join us in supporting NGOs dedicated to orphanage kids and women empowerment, as we donate 2% of our profits to
these noble causes. Together, we're creating positive change.</p>

<h1 className='font-bold text-gray-500'>🛍️Join the Crazy D India Family🛍️</h1>
<p className='text-gray-600  text-center'>Discover more than just products — become a part of the Crazy D India family. Shop with purpose, shop with passion, and experience the difference. Elevate your shopping
experience; choose Crazy D India, where quality meets compassion.</p>
    </div>


    <div className="flex flex-row gap-10 mt-20">
      <div className="flex flex-col items-center justify-center ml-[35px]">
      <Image className='rounded-full' src={diamond} width={100} height={100}  alt="diamond" />
      <h1 className='font-bold text-[20px] p-5 text-[#00d8e3]'>OurValues</h1>
      <p>Honesty, trust, professionalism, and compassion are the pillars upon which our firm is built. We have only
one guiding philosophy: always treat people, especially our clients, as we would like to be treated. We
believe that a firm should not focus on its interests because this might lead to deception, lack of integrity,
unprofessionalism, and/or avarice. We believe that our company's success will naturally follow our clients'
success and satisfaction and that we will not have to think about it.</p>
      </div>

      <div className="flex flex-col items-center justify-center mr-[50px]">
      <Image className='rounded-full' src={hand} width={100} height={100}  alt="diamond" />
      <h1 className='font-bold text-[20px] p-5 text-[#00d8e3]'>Our Commitment</h1>
      <p>Honesty, trust, professionalism, and compassion are the pillars upon which our firm is built. We have only
one guiding philosophy: always treat people, especially our clients, as we would like to be treated. We
believe that a firm should not focus on its interests because this might lead to deception, lack of integrity,
unprofessionalism, and/or avarice. We believe that our company's success will naturally follow our clients'
success and satisfaction and that we will not have to think about it.</p>
      </div>
    </div>

    <div className="mt-10  h-screen  " style={{ backgroundImage: `url(/background.jpg)` } }>
      <div className="flex flex-col items-center justify-center">
    <Image className='rounded-full mt-10   filter saturate-150' src={mission} width={100} height={100}  alt="diamond" />
    <h1 className='text-[30px] text-white font-bold'>Our Mission</h1>
    <p className='text-white text-center mt-[50px] font-bold m-[30px]'>At CrazyD India, our goal is to improve the personal health of people across the world. Our products are the
distinctive collection of notable brands including, Reckitt Benckiser, HUL, P&G, Dabur, etc. deliver life-enhancing, first-
to-market innovation. Our pan India Delivery Network is powered by Bluedart, and the international logistics network
is powered by DHL We help people live healthier and Sound life.</p>
    </div>

    <div className="flex flex-col items-center justify-center">
    <Image className='rounded-full mt-10   filter saturate-150' src={eye} width={100} height={100}  alt="diamond" />
    <h1 className='text-[30px] font-bold text-white'>Our Vision</h1>
    <p className='text-white text-center mt-[50px] font-bold  text-[30px]'>Be yourself, change the world.</p>
    </div>
    </div>


    <div className="">
        <div className=" flex items-center justify-center mt-[50px] p-10 ">
            <h1 className='font-bold text-4xl'>What makes us special ? </h1>
        </div>

    </div>

      <div className=" flex flex-row gap-5 ">
          <div className="flex flex-col items-center justify-center">
                        <Image className='rounded-full mt-10   filter saturate-150' src={one} width={100} height={100}  alt="diamond" />
                        <h1 className='text-[30px] font-bold '>Empowerment</h1>
                          <p className=' text-center mt-[50px] text-gray-600  '>We are motivated by our       belief to
                                   improve people's lives and assist
                                them in achieving their life goals.</p>
           </div>

           <div className="flex flex-col items-center justify-center">
                        <Image className='rounded-full mt-10   filter saturate-150' src={two} width={100} height={100}  alt="diamond" />
                        <h1 className='text-[30px] font-bold '>Knowledge</h1>
                          <p className=' text-center mt-[50px] text-gray-600 '>We are a team of experts
dedicated to delivering high-
quality products and experiences
that we claim.</p>
           </div>


           <div className="flex flex-col items-center justify-center">
                        <Image className='rounded-full mt-10   filter saturate-150' src={three} width={100} height={100}  alt="diamond" />
                        <h1 className='text-[30px] font-bold '>Inclusivity</h1>
                          <p className=' text-center mt-[50px]  '>We are dedicated to ensuring that
everyone has equitable access to
us, regardless of gender,
geography, economic status, or
other restrictions.</p>
           </div>


           <div className="flex flex-col items-center justify-center">
                        <Image className='rounded-full mt-10   filter saturate-150' src={four} width={100} height={100}  alt="diamond" />
                        <h1 className='text-[30px] font-bold '>Innovation</h1>
                          <p className=' text-center mt-[50px]  '>We will not be limited by what
already exists, but will instead
explore new approaches to
achieving our purpose.</p>
           </div>
             
      </div>
   

    </>
  )
}

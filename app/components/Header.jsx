"use client"
import React from 'react'
import emoji from '../assests/29 29.png'
import Image  from 'next/image'
import { TypeAnimation } from 'react-type-animation';



export const Header= () => {
  return (
    <section className=' text-white flex flex-col md:flex-row justify-between'>
        <div className=' w-full md:w-1/2 text-center md:text-left'>
            <h1 className=' text-5xl md:text-6xl font-bold text-white  mb-4'>
                <span className=' 
                text-transparent 
                bg-clip-text bg-gradient-to-r
              from-green-500 via-blue-500 to-blue-950'>Hello, i&apos;m </span>
              <br />
                <TypeAnimation
                  sequence={[
                    'Wilson Oluwatomisin',
                    2000,
                    'a Front-end developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  // style={{ fontSize: '2em', display: 'inline-block' }}
                  repeat={Infinity}
                />
            </h1>
            <p className=' text-gray-400 text-lg mb-6'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Maiores harum doloribus sed suscipit laborum accusamus fugiat, 
                optio corrupti. Iusto, corporis.
            </p>
            <div>
              <button className=' bg-gradient-to-br from-green-500 via-blue-500 to-blue-950 px-6 py-3 rounded-full mr-4'>Hire Me</button>
              <button className=' bg-transparent text-white px-1 py-1 rounded-full bg-gradient-to-r
              from-green-500 via-blue-500 to-blue-950 hover:bg-gradient-to-tr  transition-all duration-1000 ease-in-out'>
                <span className=' block bg-slate-950 rounded-full px-5 py-2 '>Download CV</span>
              </button>
            </div>
        </div>
        <div className=' rounded-full h-64 w-64 mx-auto mt-3 md:mt-0 md:mx-0 bg-slate-700'>
            <Image src={emoji} alt="" srcset=""  className=' w-64 h-64'/>
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
              >
                <path
                  d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                  // variants={icon}
                  // initial="hidden"
                  // animate="visible"
                />
            </svg> */}
        </div>
    </section>
  )
}

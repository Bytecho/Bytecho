import Link from 'next/link'
import React from 'react'

export default function Intro() {
  return (
    <div className='page lg:flex lg:flex-col lg:pb-[4.5rem]'>
        <div className=" pt-[1.25rem] lg:pt-0 flex flex-col gap-[0.5rem] lg:gap-[2rem] lg:order-2">
            <h1 className="text-[#F3F4F6] h3 md:text-[1.5rem] md:leading-[1.75rem]">
                We specialise in <span className="text-greenBrand">Branding, Custom Web Design and Development.</span>
            </h1>
            <p className="text-blue-200 text-[0.875rem] md:text-[1rem] leading-[1.25rem] md:leading-[1.5rem]">
                Whether you&apos;re starting from scratch or looking to elevate your existing brand, we&apos;ve got the creative edge and the tech-savvy to make it happen.
            </p>
            {/* Button for desktops */}
            <Link
                href='/'
                className="hidden relative lg:inline-flex w-[22rem]"
            >
                <button className="smaller-button lg:w-full">Let&apos;s Work Together</button>
                <button className="smaller-button-behind"></button>
            </Link>
        </div>
        <div className='py-[3.5rem] lg:py-[4rem] flex flex-col gap-[2rem] lg:order-1'>
            <h2 className='h2 text-[#729BF5]'>
                Bringing <span className='underline decoration-greenBrand'>Your Vision To Life</span> With A Blend Of Creativity And Technical Expertise.
            </h2>
            {/* Button for mobile */}
            <Link
                href='/'
                className="relative inline-flex mx-auto w-full lg:hidden"
            >
                <button className="smaller-button">Let&apos;s Work Together</button>
                <button className="smaller-button-behind"></button>
            </Link>
        </div>
    </div>
  )
}

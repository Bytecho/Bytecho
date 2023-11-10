import Link from 'next/link'
import React from 'react'

export default function Intro() {
  return (
    <div className='page'>
        <div className=" pt-[1.25rem] flex flex-col gap-[0.5rem]">
            <h1 className="text-[#F3F4F6] h3">We specialise in <span className="text-greenBrand">Branding, Custom Web Design and Development.</span></h1>
            <p className="text-blue-200 paragraph">Whether you&apos;re starting from scratch or looking to elevate your existing brand, we&apos;ve got the creative edge and the tech-savvy to make it happen.</p>
        </div>
        <div className='py-[3.5rem] flex flex-col gap-[2rem]'>
            <h2 className='h2 text-[#729BF5]'>
                Bringing <span className='underline decoration-greenBrand'>Your Vision To Life</span> With A Blend Of Creativity And Technical Expertise.
            </h2>
            <Link
                href='/'
                className="relative inline-flex mx-auto w-full"
            >
                <button className="smaller-button">Let&apos;s Work Together</button>
                <button className="smaller-button-behind"></button>
            </Link>
        </div>
    </div>
  )
}

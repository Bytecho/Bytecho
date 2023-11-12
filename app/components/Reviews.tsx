"use client"

import React from 'react'
import { useState, useEffect } from 'react';

import openQuotes from '../../assets/open-quotes.svg';
import Image from 'next/image';


export default function Reviews() {
  const testimonials = [
    {
        id: 1,
        quote: "Our designs go beyond aesthetics; they are strategic, reflecting your brand's essence and engaging your audience effectively.",
        name: 'James Montilla',
        company: 'AFRE Cleaning',
        link: 'https://www.afrecleaning.com.au/'
    },
    {
        id: 2,
        quote: 'lorem ipsum sjajfbnfe dfndjbfhew fwenfweufnewunfewjd',
        name: 'Michael Bennett',
        company: 'Bennett Cleaning Services',
        link: 'https://www.bennettcleaningservices.com.au/'
    },
    {
        id: 3,
        quote: 'lorem ipsum sjajfbnfe dfndjbfhew fwenfweufnewunfewjd',
        name: 'Andrea Diaz',
        company: 'The Ever Cake',
        link: 'https://dev.db61t1u90mry8.amplifyapp.com/'
    }
]

const [currentReview, setCurrentReview] = useState(0);
  
  return (
    <div className='pb-[3.5rem] flex flex-col gap-[3.5rem]'>
      <main className='page'>
        <h2 className='text-[1.25rem] text-[#DBEAFE] font-bold'>WHAT THEY SAID</h2>
        
        {/* Testimonials carousel */}
        <div className="mt-[2rem] flex items-start gap-2">
          <Image 
            src={openQuotes} 
            alt="open quotes" 
            title="Open quote illustration"
            quality={100}
            
          />
          <div className="flex flex-col gap-[1.5rem] transition-opacity duration-500">
            <p className="text-textBrand text-[1.125rem] font-bold leading-[1.375rem]">
              {testimonials[currentReview].quote}
            </p>
            {/* Client's information */}
            <div className="flex flex-col">
              <h3 className="text-[#F3F4F6] text-[1rem] font-bold ">
                {testimonials[currentReview].company}
              </h3>
              <p className="text-[0.875rem] text-[#F3F4F6]">
                {testimonials[currentReview].name}
              </p>
              <a href={testimonials[currentReview].link} target='_blank' className="text-[0.875rem] text-[#F3F4F6]">
                {testimonials[currentReview].link}
              </a>
            </div>
            
          </div>
        </div>
      </main>

      {/* Blue area */}
      <div className=' py-[3.5rem] px-[1rem] bg-gradient-to-tr from-[#1E40AF] to-[#2563EB] flex flex-col gap-[2rem]'>
        <p className="info-p text-[#DBEAFE] text-center">Ready to craft your digital masterpiece? Let&apos;s get started!</p>
        <button className='px-[2rem] py-[0.5rem] rounded-lg border border-[#9CA3AF] text-[#F3F4F6]'>
          Let&apos;s work
        </button>
      </div>

    </div>
  )
}

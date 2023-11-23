"use client"

import React from 'react'
import { useState, useEffect } from 'react';
import { createClient } from 'contentful'


// Assetss
import openQuotes from '../../assets/open-quotes.svg';
import Image from 'next/image';

// Components
import ReviewDetails from './ReviewDetails';

// Create client for contentful
const client = createClient({
    space: 'ogj4tsqztns9',
    accessToken: 'zrPhNvg3sTKd_yiL7RHYugQMwaiFn6tegREpD7ra5RM',
})


export default function Reviews() {

  const [data, setData] = useState<any>()
    
    // fetch data from contentful and asign it do data
    useEffect(() => {
      async function fetchData() {
        try {
          const res:any = await client.getEntries({ content_type: 'reviews' })
          setData(res.items)
        } catch(error) {
          console.error(error)
        }
  
      }

      fetchData()
    }, [])

  let [currentReview, setCurrentReview] = useState(0);
  
  return (
    <div className='pb-[3.5rem] flex flex-col gap-[3.5rem] lg:gap-[4rem]'>
      <main className='page'>
        <h2 className='text-[1.25rem] lg:text-[1.5rem] text-[#DBEAFE] font-bold text-center'>WHAT THEY SAID</h2>
        
        {/* Testimonials carousel */}
        <div className="lg:mt-[2rem] min-h-[354px] lg:min-h-[15rem] grid grid-cols-6 items-center gap-2">
          <svg 
            onClick={() => {
              if(currentReview >0) {
                setCurrentReview(currentReview - 1)
              } else {
                setCurrentReview(data.length - 1)
              }
            }}
            className="w-[3rem] text-[#DBEAFE] self-center justify-self-end"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
          </svg>

          <div className='col-span-4 flex items-start gap-2'>
            <Image 
              src={openQuotes} 
              alt="open quotes" 
              title="Open quote illustration"
              quality={100}
            />

            {/* Reviews content */}
            {data ? (
              <ReviewDetails data={data} currentReview={currentReview} />
            ): (
              <h3 className='text-textBrand text-[1.125rem] font-bold leading-[1.375rem]'>Loading... Hopefully not for too long :)</h3>
            )}

          </div>
          
          <svg 
            onClick={() => {
              if(currentReview < data.length -1) {
                setCurrentReview(currentReview + 1)
              } else {
                setCurrentReview(0)
              }
            }} 
            className="w-[3rem] text-[#DBEAFE] self-center  justify-self-start"
            viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
          </svg>

        </div>
      </main>

      {/* Blue area */}
      <div className=' py-[3.5rem] lg:py-[4rem] page bg-gradient-to-tr from-[#1E40AF] to-[#2563EB] flex flex-col gap-[2rem]'>
        <p className="info-p text-[#DBEAFE] text-center">Ready to craft your digital masterpiece? Let&apos;s get started!</p>
        <button className='px-[2rem] py-[0.5rem] rounded-lg border border-[#9CA3AF] lg:text-[1.125rem] text-[#F3F4F6] lg:w-[31.25rem] lg:mx-auto'>
          Let&apos;s work
        </button>
      </div>

    </div>
  )
}

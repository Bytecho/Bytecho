// "use client"

import React from 'react'
import { createClient } from 'contentful'
import { Entry } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';

// Components
import NotFound from '../not-found'
import Approach from './Approach';
import Reasons from './Reasons';
import Form from './Form';

// Assets
import Vector from '../../../assets/Services-vector.svg'


interface PageProps{
    params: {url: string}
}

// Contentful keys
const spaceKey:any = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken:any = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY;

// Create client for contentful
const client = createClient({
    space: spaceKey,
    accessToken: accessToken,
})

async function fetchData() {
    // Fetch the data
    const res = await client.getEntries({ content_type: 'services' })

    // Store the data in a variable
    const data = res.items

    return data
}

export default async function Services({ params }: PageProps ) {
    const data = await fetchData()

    // Find the service required by the user
    const currentService = data.find(entry => entry.fields.url === params.url);

    // Handle unkown services request
    if (!currentService) {
        // Handle case where the service is not found
        return <NotFound />;
    }

  return (
    <div className='bg-primary'>
        {/* Container with vector bg */}
        <div className='page py-[2rem] md:py-[5.31rem] relative w-full flex items-center justify-center'>
            <Image 
                src={Vector} 
                alt="Vector background"
                title='Vector background'  
                className='w-full h-full object-cover absolute'
            />
            <div className='flex flex-col md:flex-row gap-[2rem] sm:gap-[2.5rem] text-center items-center'>
                <div className='flex flex-col gap-[2rem] md:w-1/3'>
                    <h1 className='text-light text-[1.125rem] leading-[1.25rem] font-bold'>
                        {currentService?.fields?.title as string}
                    </h1>
                    <Image 
                        src={(currentService as any)?.fields?.sticker?.fields?.file.url} 
                        alt='hey' 
                        width={85} height={85} 
                        className='z-10 w-[15.255rem] h-[13.75rem]' 
                    />
                </div>
                <div className='flex flex-col gap-[2rem] md:w-2/3 md:px-8'>
                    <h2 className='h3 text-blue-300 '>{currentService?.fields?.legend as string}</h2>
                    <p className='text-white text-[0.875rem] leading-[1.25rem]'>{currentService?.fields?.description as string}</p>
                    {/* Button */}
                    <Link
                        href='/'
                        className="relative inline-flex mx-auto w-full"
                    >
                        <button className="bg-gradient-to-tr from-[#1E40AF] to-[#2563EB] w-full h-[2.75rem] py-[0.5rem] rounded-lg z-10 text-[1.125rem] text-white">
                            Let&apos;s talk
                        </button>
                        <button className="smaller-button-behind"></button>
                    </Link>

                </div>
            </div>
        </div>

        {/* Approach */}
        <div className='page mt-[2.5rem]'>
            <Approach approachService={currentService} />
        </div>
        
        {/* Reasons */}
        <div className='page'>
            <Reasons approachService={currentService} />
        </div>

        {/* Closing */}
        <div className='page mb-[2rem]'>
            <h3 className='text-[#10B981] text-[1.125rem] leading-[1.25rem] font-bold text-center w-2/3 mx-auto'>
                {currentService?.fields?.closingTitle as string}
            </h3>
        </div>

        {/* Blue container */}
        <div className=' py-[2rem] page bg-gradient-to-tr from-[#1E40AF] to-[#2563EB] flex flex-col gap-[2rem]'>
            <h3 className='h3 text-[#F3F4F6]'>CONTINUOUS SUPPORT</h3>
            <p className="info-p text-[#DBEAFE]">Our commitment doesn&apos;t stop at launch. We provide ongoing support to keep your digital presence ahead of the curve.</p>
        </div>

        {/* Contact form */}
        <div className='mt-[2rem]'>
            <Form params={params} />
        </div>

    </div>
  )
}

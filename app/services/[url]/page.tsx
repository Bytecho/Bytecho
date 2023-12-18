import React from 'react'
import { createClient } from 'contentful'
import { Entry } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

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

export async function generateMetadata({params}: any): Promise<Metadata> {
    const data = await fetchData()

     // Find the service required by the user
     const currentService = data.find(entry => entry.fields.url === params.url);
    
    return {
        title: `${currentService?.fields.title} | Bytecho`,
        description: `${currentService?.fields.metaTagDescription}`,
        openGraph: {
            images: [`${(currentService as any)?.fields?.sticker?.fields?.file.url}`]
        }
    }
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
        <div className='page py-[2rem] md:py-[5.31rem] lg:py-[8rem] relative w-full flex items-center justify-center'>
            <Image 
                src={Vector} 
                alt="Vector background"
                title='Vector background'  
                className='w-full h-full object-cover absolute'
            />
            <div className='xl:max-w-[64rem] flex flex-col md:flex-row gap-[2rem] sm:gap-[2.5rem] text-center items-center'>
                <div className='flex flex-col gap-[2rem] md:w-1/3 lg:w-1/2'>
                    <h1 className='text-light text-[1.125rem] md:text-[2.25rem] lg:text-[3rem] leading-[1.25rem] md:leading-[2.25rem] lg:leading-[3rem] md:text-left font-bold'>
                        {currentService?.fields?.title as string}
                    </h1>
                    <Image 
                        src={(currentService as any)?.fields?.sticker?.fields?.file.url} 
                        alt='hey' 
                        width={85} height={85} 
                        className='z-10 w-[15.255rem] xl:w-[17.3rem] h-[13.75rem] xl:h-[15.6rem]' 
                    />
                </div>
                <div className='flex flex-col gap-[2rem] md:w-2/3 md:px-8'>
                    <h2 className='h3 text-blue-300 '>{currentService?.fields?.legend as string}</h2>
                    <p className='text-white text-[0.875rem] md:text-[1rem] leading-[1.25rem] md:leading-[1.5rem]'>{currentService?.fields?.description as string}</p>
                    {/* Button */}
                    <Link
                        href='/'
                        className="relative inline-flex mx-auto w-2/3"
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
        <div className='page mt-[2.5rem] md:mt-[4rem] xl:mt-[6rem]'>
            <Approach approachService={currentService} />
        </div>
        
        {/* Reasons */}
        <div className='page'>
            <Reasons approachService={currentService} />
        </div>


        {/* Blue container */}
        <div className=' py-[2rem] md:py-[3.5rem] xl:mt-[2rem] page bg-gradient-to-tr from-[#1E40AF] to-[#2563EB] flex flex-col gap-[2rem]'>
            <div className='xl:max-w-[64rem] xl:mx-auto'>
                <h3 className='h3 text-[#F3F4F6]'>CONTINUOUS SUPPORT</h3>
                <p className="info-p text-[#DBEAFE]">Our commitment doesn&apos;t stop at launch. We provide ongoing support to keep your digital presence ahead of the curve.</p>
            </div>

        </div>

        {/* Contact form */}
        <div className='mt-[2rem] md:mt-[3.5rem] lg:mt-[4.5rem] xl:mt-[6rem]'>
            <Form params={params} />
        </div>

        {/* Closing - Green container */}
        <div className='py-[2rem] sm:py-[2.5rem] md:py-[4rem] lg:py-[4.5rem] xl:py-[6rem] '>
            <div className='page lg:px-[4rem] py-[3.5rem] md:py-[4.5rem] bg-gradient-to-r from-[#09D092] to-[#059669] '>
                <div className='xl:max-w-[64rem] xl:mx-auto flex flex-col md:flex-row gap-[1.5rem]'>
                    <p className=' underline md:whitespace-nowrap lg:text-[1.25rem] md:flex items-center'>Your business full potential</p>
                    <h3 className='text-light text-[1.125rem] md:text-[1.5rem] lg:text-[2.25rem] leading-[1.25rem] md:leading-[1.5rem] lg:leading-[2.125rem] font-bold md:max-w-[40rem] mx-auto'>
                        {(currentService?.fields?.closingTitle as string).toUpperCase()}
                    </h3>
                </div>
            </div>
        </div>
    </div>
  )
}

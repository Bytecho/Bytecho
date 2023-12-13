'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'

export default function Reasons(currentService:any) {

    return (
        <div className='xl:max-w-[64rem] xl:mx-auto'>
            <h2 className='h3 text-white text-center'>Why Choose Bytecho?</h2>
            <div className='py-[2rem] md:py-[3.5rem] lg:py-[4rem] flex flex-col md:grid grid-cols-3 gap-[2rem] sm:gap-[2.5rem] md:gap-[0.5rem]'>
                {/* First reason */}
                <div className='flex flex-col items-center text-center'>
                    {currentService.approachService.fields.reason.content.map((reason:any, index:any) => {
                        if(reason.nodeType.startsWith("embedded")){
                            return (
                                <Image 
                                    key={index}
                                    width={78}
                                    height={78}
                                    src={reason?.data?.target?.fields?.file?.url}
                                    alt='Bulb sticker'
                                    title='Bulb sticker'
                                    className='w-[3.5rem] h-auto'
                                />
                            )
                        }
                        if(reason.nodeType.startsWith("heading-3")) {
                            return(
                                <h3 key={index} className='pt-[0.56rem] text-[1rem] lg:text-[1.25rem] text-light font-bold'>{reason?.content[0]?.value}</h3>
                            )
                        }
                        if(reason.nodeType.startsWith("para")) {
                            return(
                                <p key={index} className='pt-[0.56rem] text-[1rem] lg:text-[1.125rem] lg:leading-[1.75rem] text-light w-2/3 '>
                                    {reason?.content[0]?.value}
                                </p>
                            )
                        }
                    })}
                </div>
                {/* Second reason */}
                <div className='flex flex-col items-center text-center'>
                    {currentService.approachService.fields.secondReason.content.map((reason:any, index:any) => {
                        if(reason.nodeType.startsWith("embedded")){
                            return (
                                <Image 
                                    key={index}
                                    width={78}
                                    height={78}
                                    src={reason?.data?.target?.fields?.file?.url}
                                    alt='Bulb sticker'
                                    title='Bulb sticker'
                                    className='w-[3.5rem] h-auto'
                                />
                            )
                        }
                        if(reason.nodeType.startsWith("heading-3")) {
                            return(
                                <h3 key={index} className='pt-[0.56rem] text-[1rem] lg:text-[1.25rem] text-light font-bold'>{reason?.content[0]?.value}</h3>
                            )
                        }
                        if(reason.nodeType.startsWith("para")) {
                            return(
                                <p key={index} className='pt-[0.56rem] text-[1rem] lg:text-[1.125rem] lg:leading-[1.75rem] text-light w-2/3 '>
                                    {reason?.content[0]?.value}
                                </p>
                            )
                        }
                    })}
                </div>
                {/* Third reason */}
                <div className='flex flex-col items-center text-center'>
                    {currentService.approachService.fields.thirdReason.content.map((reason:any, index:any) => {
                        if(reason.nodeType.startsWith("embedded")){
                            return (
                                <Image 
                                    key={index}
                                    width={78}
                                    height={78}
                                    src={reason?.data?.target?.fields?.file?.url}
                                    alt='Bulb sticker'
                                    title='Bulb sticker'
                                    className='w-[3.5rem] h-auto'
                                />
                            )
                        }
                        if(reason.nodeType.startsWith("heading-3")) {
                            return(
                                <h3 key={index} className='pt-[0.56rem] text-[1rem] lg:text-[1.25rem] text-light font-bold'>{reason?.content[0]?.value}</h3>
                            )
                        }
                        if(reason.nodeType.startsWith("para")) {
                            return(
                                <p key={index} className='pt-[0.56rem] text-[1rem] lg:text-[1.125rem] lg:leading-[1.75rem] text-light w-2/3 '>
                                    {reason?.content[0]?.value}
                                </p>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

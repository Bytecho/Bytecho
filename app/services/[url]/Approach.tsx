import Image from 'next/image'
import React from 'react'

// Assets
import Lamp from '../../../assets/approach-stickers/Lamp.svg'
import Glasses from '../../../assets/approach-stickers/Glasses.svg'
import Headphones from '../../../assets/approach-stickers/Head.svg'


export default function Approach(currentService:any) {
    return (
    <div className=''>
        <h2 className='h3 text-white'>Our Approach</h2>
        <div className='py-[2rem] flex flex-col gap-[2rem]'>
            {/* First approach box */}
            <div className='p-[1rem] border border-light rounded flex flex-col gap-[0.5rem]'>
                {currentService?.approachService.fields.approachIdea.content.map((item: any, index: any) => {
                    if(item.nodeType.startsWith("heading")) {
                        return (
                            <div key={index} className='flex gap-[0.5rem] items-center'>
                                <Image
                                    src={Lamp}
                                    alt='Bulb sticker'
                                    title='Bulb sticker'
                                    className='w-[1.10rem] h-auto'
                                />
                                <h3 className='text-light text-[1rem] font-bold'>
                                    {item.content[0].value}
                                </h3>

                            </div>
                        )
                    } else {
                        return (
                            <p key={index} className='text-[0.775rem] leading-[1.25rem] text-secondary '>
                                {item.content[0].value}
                            </p>
                        )
                    }
                })}
            </div>

            {/* Second approach box */}
            <div className='p-[1rem] border border-light rounded flex flex-col gap-[0.5rem]'>
                {currentService?.approachService.fields.secondApproachIdea.content.map((item: any, index: any) => {
                    if(item.nodeType.startsWith("heading")) {
                        return (
                            <div key={index} className='flex gap-[0.5rem] items-center'>
                                <Image
                                    src={Glasses}
                                    alt='Glassess sticker'
                                    title='Glassess sticker'
                                    className='w-[1.10rem] h-auto'
                                />
                                <h3 className='text-light text-[1rem] font-bold'>
                                    {item.content[0].value}
                                </h3>

                            </div>
                        )
                    } else {
                        return (
                            <p key={index} className='text-[0.775rem] leading-[1.25rem] text-secondary '>
                                {item.content[0].value}
                            </p>
                        )
                    }
                })}
            </div>

               {/* Third approach */}
            <div className='p-[1rem] border border-light rounded flex flex-col gap-[0.5rem]'>
                {currentService?.approachService.fields.thirdApproachIdea.content.map((item: any, index: any) => {
                    if(item.nodeType.startsWith("heading")) {
                        return (
                            <div key={index} className='flex gap-[0.5rem] items-center'>
                                <Image
                                    src={Headphones}
                                    alt='Headphones sticker'
                                    title='Headphones sticker'
                                    className='w-[1.10rem] h-auto'
                                />
                                <h3 className='text-light text-[1rem] font-bold'>
                                    {item.content[0].value}
                                </h3>

                            </div>
                        )
                    } else {
                        return (
                            <p key={index} className='text-[0.775rem] leading-[1.25rem] text-secondary '>
                                {item.content[0].value}
                            </p>
                        )
                    }
                })}
            </div>   
        </div>
        
    </div>
  )
}

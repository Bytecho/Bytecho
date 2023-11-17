
import Image from 'next/image'
import React from 'react'

export default function Reasons(currentService:any) {

  console.log(currentService)
    return (
    <div>
        <h2 className='h3 text-white text-center'>Why Choose Bytecho?</h2>
        <div className='pb-[2rem] flex flex-col items-center text-center'>
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
                            className='pt-[2rem] w-[3.5rem] h-auto'
                        />
                    )
                }
                if(reason.nodeType.startsWith("heading-3")) {
                    return(
                        <h3 key={index} className='pt-[0.56rem] text-[1rem] text-light font-bold'>{reason?.content[0]?.value}</h3>
                    )
                }
                if(reason.nodeType.startsWith("para")) {
                    return(
                        <h3 key={index} className='pt-[0.56rem] text-[1rem] text-light '>{reason?.content[0]?.value}</h3>
                    )
                }
            })}
        </div>

        
    </div>
  )
}

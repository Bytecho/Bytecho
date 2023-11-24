import Image from 'next/image'
import React from 'react'

// Assets
import GridBg from '../../assets/gridBg.svg'

export default function About() {
  const values = [
    {
        id: 1,
        title: 'Our focus',
        text: "We specialise in leveraging the web to effectively convey your company's message, driving sales, achieving goals, and boosting your bottom line. Our mission is to solve our clients' problems and empower their success."
    },
    {
        id: 2,
        title: 'Crafting Success, One partnership At A Time',
        text: "We approach our work with a commitment to long-term client relationships. We don't aim to be the biggest; instead, we focus on being the best for a select number of clients each year."
    },
    {
        id: 3,
        title: 'Curiosity As Our Guiding Light',
        text: "We're deeply curious about your business, your customers, and the design challenges you face. This curiosity fuels our creativity and drives us to develop innovative solutions tailored to your unique needs."
    }
  ]

  const reasons = [
    {
        id: 1,
        title: 'Dedication To Quality',
        text: "We're not here to churn out projects; we're here to craft success stories. Quality and excellence are at the core of everything we do."
    },
    {
        id: 2,
        title: 'Personalised Approach',
        text: "Every client is unique, and so are our solutions. We take the time to understand your specific needs and objectives."
    },
    {
        id: 3,
        title: 'Web Experts',
        text: "The web is our playground, and we've mastered it. We bring a wealth of experience to the table, ensuring that your digital presence shines."
    }
  ]
  
    return (
    <div className=' relative mb-[3.5rem] lg:mb-[4rem]'>
        <Image src={GridBg} className='hidden md:flex absolute w-full h-full object-cover object-left-bottom' alt='vector background' title='vector background'  />
        <div className='pt-[3.5rem] md:pt-[4rem] lg:pt-[6rem] '>
            <main className='page xl:px-0 xl:max-w-[63rem] xl:mx-auto pb-[3.5rem] md:pb-[4rem] xl:pb-[6rem]'>
                <div className=" flex flex-col gap-[2rem] lg:gap-[3.5rem] xl:gap-[4.5rem]">
                    {/* Values container */}
                    <div className='flex flex-col lg:flex-row gap-[2rem]'>
                        <h2 className='h1 text-white lg:min-w-[6.8rem]'>WHO WE ARE</h2>
                            {/* Values array */}
                            <div className='flex flex-col gap-[2rem] md:grid grid-cols-2 lg:grid-cols-3'>
                                {values.map((value) => (
                                    <div key={value.id} className='flex flex-col gap-[1rem]'>
                                        <h3 className='h3 text-[#9CA3AF]'>{value.title}</h3>
                                        <p className='values-p text-[#E5E7EB]'>{value.text}</p>
                                    </div>
                                ))}
                            </div>
                    </div>

                    {/* Reasons container */}
                    <div className='flex flex-col lg:flex-row gap-[2rem]'>
                        <h2 className='h1 text-[#E5E7EB]'>Why Bytecho?</h2>
                        {/* Reasons array */}
                        <div className='flex flex-col gap-[2rem] md:grid grid-cols-2 lg:grid-cols-3'>
                            {reasons.map((reason) => (
                                <div key={reason.id} className='flex flex-col gap-[1rem]'>
                                    <h3 className='h3 text-[#9CA3AF]'>{reason.title}</h3>
                                    <p className='values-p text-[#E5E7EB]'>{reason.text}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                <p className='mt-[2rem] text-[#D1FAE5] sm:mt-[2.5rem] md:mt-[3.5rem] xl:mt-[4.5rem] lg:mx-auto text-[1.25rem] md:text-[1.5rem] xl:text-[1.9rem] font-bold leading-[1.625rem] md:leading-[1.75rem] xl:leading-[2rem] md:text-center lg:max-w-[31.25rem] '>
                    We&apos;re not just building websites; We&apos;re building success stories, one project at a time.
                </p>
            </main>
            
            {/* Green area */}
            <div 
                className=' bg-gradient-to-r from-[#09D092] to-[#059669] '
            >
                <div className='py-[3.5rem] lg:py-[4rem] page xl:max-w-[63rem] xl:mx-auto flex flex-col lg:flex-row lg:items-center gap-[2rem]'>
                    <p className='text-[1rem] lg:text-[1.3rem] leading-[1rem] lg:leading-[1.75rem] underline decorat decoration-black'>
                        It all begins with a spark, a brilliant idea. 
                    </p>
                    <h3 className='text-[1.125rem] lg:text-[2.25rem] leading-[1.25rem] lg:leading-[2.125rem] sm:w-2/3 font-bold text-[#F9FAFB]'>
                        WE&apos;RE HERE TO HELP YOU <span className='text-[#022C22]'>TRANSFORM THAT SPARK</span> INTO A BLAZING DIGITAL PRESENCE. 
                    </h3>
                </div>
            </div>
        </div>
    </div>
  )
}

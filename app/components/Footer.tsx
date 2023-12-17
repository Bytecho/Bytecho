'use client'

import React, { useEffect, useState } from 'react'

import Logo from '../../assets/logo-footer.svg'
import Image from 'next/image'
import Link from 'next/link'

// Utils
import { fetchData } from '../utils/fetchServices';

export default function Footer() { 
  const navLinks = [
    {
        id: 1,
        title: 'About',
        url: '/'
    },
    {
        id: 2,
        title: 'Services',
        url: '/#services'
    },
    {
        id: 3,
        title: 'Contact',
        url: '/#contact'
    }
  ]

   // Fetch services data from contentful
   const [services, setServices] = useState<any>()
   useEffect(() => {
     async function fetchingData() {
       const res:any = await fetchData()
       setServices(res)
     }
     fetchingData()
   }, [])
 

    return (
    <div className='bg-primary page py-[2rem]'>
        <div className='max-w-[31.25rem] mx-auto md:max-w-[40rem] lg:max-w-[56rem] xl:max-w-[63rem] md:flex md:gap-[3rem] lg:justify-between'>
            {/* Logo area */}
            <div className=''>
                <div className='flex flex-col gap-[0.5rem] md:w-[19.68rem]'>
                    <Image
                        src={Logo}
                        className='h-[2.81rem] w-[4.12rem]'
                        alt='Bytecho logo'
                        title="Company's logo"
                        quality={100}
                        loading='lazy'
                    />
                    <h3 className='text-[1rem] lg:text-[1.2rem] text-white'>
                        Crafting Digital Experiences, Byte by Byte.
                    </h3>
                    {/* Button */}
                    <Link
                        href='/#contact' 
                        scroll
                        className="relative inline-flex mt-[2rem]  mx-auto w-full"
                    >
                        <button className="bg-gradient-to-tr from-[#1E40AF] to-[#2563EB] w-full h-[2.75rem] py-[0.5rem] rounded-lg z-10 text-[1.125rem] text-[#E5E7EB]">Contact us</button>
                        <button className="smaller-button-behind"></button>
                    </Link>
                </div>


                {/* contact details */}
                <div className='mt-[2rem] flex flex-col sm:items-center md:flex-row gap-[0.5rem] text-textBrand text-[1rem] lg:text-[1.2rem]'>
                    <a href="tel:+61414029043">
                        <p className=''>P: 0414029043</p>
                    </a>
                    <a href="mailto:info@bytecho.com.au">
                        <p className=''>E: info@bytecho.com.au</p>
                    </a>
                </div>

            </div>


            {/* menu */}
            <div className='mt-[2rem] flex sm:justify-center gap-[2rem]'>
                {/* Col 1 */}
                <div>
                    <h4 className='text-[1rem] lg:text-[1.3rem] text-[#E5E7EB]'>
                        Services
                    </h4>
                    {services?.map((service:any) => (
                        <Link key={service.sys.id} href={`/services/${service?.fields.url}`}>
                            <p className='pt-[0.5rem] text-[1rem] lg:text-[1.3rem] text-textBrand'>{service?.fields.title}</p>
                        </Link>
                    ))}
                </div>

                {/* Col 2 */}
                <div>
                    <h4 className='text-[1rem] lg:text-[1.3rem] text-[#E5E7EB]'>
                        Company
                    </h4>
                    <nav>
                        {navLinks.map(item => (
                            <Link key={item.id} href={item.url}>
                                <p className='pt-[0.5rem] text-[1rem] lg:text-[1.3rem] text-textBrand'>{item.title}</p>
                            </Link>
                        ))}
                    </nav>
                </div>

            </div>


        </div>
        
        {/* Copyright */}
        <div className='mt-[2rem] sm:text-center'>
            <p className='text-[0.875rem] lg:text-[1.1rem] text-textBrand'>&copy; 2023 <span>Bytecho.</span> All Rights Reserved</p>
        </div>
    </div>
  )
}

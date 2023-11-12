import React from 'react'

import Logo from '../../assets/logo-footer.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const services = [
    {
        id: 1,
        title: 'Branding & Graphic Design',
        url: '/'
    },
    {
        id: 2,
        title: 'Web Development',
        url: '/'
    },
    {
        id: 3,
        title: 'SEO Optimization',
        url: '/'
    },
    {
        id: 4,
        title: 'Content Creation',
        url: '/'
    },
  ]
  
  const navLinks = [
    {
        id: 1,
        title: 'About',
        url: '/'
    },
    {
        id: 2,
        title: 'Services',
        url: '/'
    },
    {
        id: 3,
        title: 'Blog',
        url: '/'
    },
    {
        id: 4,
        title: 'Contact',
        url: '/'
    }
  ]

    return (
    <div className='bg-primary page py-[2rem]'>
        
        {/* Logo area */}
        <div className='mb-[2rem] flex flex-col gap-[0.5rem]'>
            <Image
                src={Logo}
                className='h-[2.81rem] w-[4.12rem]'
                alt='Bytecho logo'
                title="Company's logo"
                quality={100}
                loading='lazy'
            />
            <h3 className='text-[1rem] text-white'>
                Crafting Digital Experiences, Byte by Byte.
            </h3>
        </div>

        {/* Button */}
        <Link
            href='/'
            className="relative inline-flex mx-auto w-full"
        >
            <button className="bg-gradient-to-tr from-[#1E40AF] to-[#2563EB] w-full h-[2.75rem] py-[0.5rem] rounded-lg z-10 text-[1.125rem] text-[#E5E7EB]">Contact us</button>
            <button className="smaller-button-behind"></button>
        </Link>

        {/* contact details */}
        <div className='mt-[2rem] flex flex-col gap-[0.5rem] text-textBrand text-[1rem]'>
            <a href="tel:+61414029043">
                <p className=''>P: 0414029043</p>
            </a>
            <a href="mailto:info@bytecho.com.au">
                <p className=''>E: info@bytecho.com.au</p>
            </a>
        </div>

        {/* menu */}
        <div className='mt-[2rem] flex gap-[2rem]'>
            {/* Col 1 */}
             <div>
                <h4 className='text-[1rem] text-[#E5E7EB]'>
                    Services
                </h4>
                {services.map(service => (
                    <Link key={service.id} href={service.url}>
                        <p className='pt-[0.5rem] text-[1rem] text-textBrand'>{service.title}</p>
                    </Link>
                ))}
             </div>

             {/* Col 2 */}
             <div>
                <h4 className='text-[1rem] text-[#E5E7EB]'>
                    Company
                </h4>
                <nav>
                    {navLinks.map(item => (
                        <Link key={item.id} href={item.url}>
                            <p className='pt-[0.5rem] text-[1rem] text-textBrand'>{item.title}</p>
                        </Link>
                    ))}
                </nav>
             </div>

        </div>

        {/* Copyright */}
        <div className='mt-[2rem]'>
            <p className='text-[0.875rem] text-textBrand'>&copy; 2023 <span>Bytecho.</span> All Rights Reserved</p>
        </div>
    </div>
  )
}

"use client"

import React, { useState } from 'react'
import Link from 'next/link';

// assets
import Logo from '../../assets/logo.png'
import Image from 'next/image';


export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState('home')

  const navLinks = [
    {
      id: 'home',
      title: 'Home'
    },
    {
      id: 'services',
      title: 'Services'
    }, 
    {
      id: 'blog',
      title: 'Blog',
    },
    {
      id: 'careers',
      title: 'Careers'
    }
  ]
  
  return (
    <nav className='bg-primary'>
      <div className='py-[1rem] page flex justify-between items-center '>
        <Link href="/">
          <Image
            className='md:w-[4.64rem]'
            src={Logo}
            alt='Bytecho logo'
            title="Company's logo"
            width={74.31}
            height={24}
            quality={100}
            placeholder='blur'
            loading='eager'
          />
        </Link>
        <button 
          id='hamburguer-button' 
          className='md:hidden cursor-pointer relative' 
          onClick={() => {
            setMobileMenu(!mobileMenu)
          }}
        >
          <svg className="h-[1rem] w-[1.33rem] text-[#DBEAFE]"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        <nav className='hidden md:flex gap-2'>
                  {navLinks.map((nav) => (
                    <Link 
                      key={nav.id} 
                      href={'/'}
                      onClick={() => setActive(nav.title)}
                      className={`${active === nav.title ? "text-red-200" : "text-gray-800"} `}
                    >
                        {nav.title}
                    </Link>
                  ))}
                </nav>
      </div>

      {/* Mobile menu area */}
      {mobileMenu === true && (
        <div className="absolute z-20 page top-[3rem] bg-black w-full text-5xl flex flex-col justify-center origin-top animate-open-menu" >
            <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
              {navLinks.map((nav) => (
                  <Link 
                    key={nav.id} 
                    href={'/'} 
                    onClick={() => setActive(nav.title)}
                    className={`${active === nav.title ? "text-[#DBEAFE]" : "text-gray-800"} `}
                  >
                    {nav.title}
                  </Link>
              ))}
            </nav>
        </div>
      )}
    </nav>
  )
}

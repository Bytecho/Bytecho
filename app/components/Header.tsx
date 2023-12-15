"use client"

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link';

// assets
import Logo from '../../assets/logo.png'
import Image from 'next/image';

// Utils
import { fetchData } from '../utils/fetchServices';

export default function Header() {
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleClickOutside = (event:MouseEvent) => {
    if (menuRef.current && !(menuRef.current.contains(event.target as Node))) {
      setMobileMenu(false);
    }
  };

  const [active, setActive] = useState('home')

  const navLinks = [
    {
      id: 'home',
      title: 'Home',
      route: '/'
    },
    {
      id: 'services',
      title: 'Services',
      route: '/#services'
    },
    {
      id: 'contact',
      title: 'Contact',
      route: '/#contact'
    }
  ]
  
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

   // Set state for services options
   const [servicesDisplay, setServicesDisplay] = useState(false);

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
    <nav className='bg-primary '>
      <div className='py-[1rem] lg:py-[2rem] xl:max-w-[64rem] xl:mx-auto page xl:px-0 flex justify-between items-center '>
        <Link href="/">
          <Image
            className='md:w-[4.64rem] md:h-[1.5rem] '
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
          {mobileMenu === false ? (
            <svg className="h-[1rem] w-[1.33rem] text-[#DBEAFE]"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          ) : (
            <svg 
              onClick={() => {
                setServicesDisplay(false)
              }} 
              className="h-[1rem] w-[1.33rem] text-[#DBEAFE]"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          )}
        </button>
        
        {/* Nav links desktop */}
        <div className='hidden lg:flex justify-between items-center gap-[4rem] '>
          <nav className='hidden md:flex gap-[4rem]'>
            {navLinks.map((nav) => (
              <Link 
                key={nav.id} 
                href={'/'}
                onClick={() => setActive(nav.title)}
                className='text-secondary text-[1.125rem]'
              >
                {nav.title}
              </Link>
            ))}
          </nav>

          <Link
            href='/'
            className="relative inline-flex mx-auto w-full"
          >
            <button className="smaller-button">Let&apos;s Work</button>
            <button className="smaller-button-behind"></button>
          </Link>

        </div>

      </div>

      {/* Mobile menu area */}
      
      {mobileMenu === true && (
        <div className={`absolute z-20 page top-[3rem] bg-primary w-full text-5xl flex flex-col justify-center origin-top ${mobileMenu === true ? 'animate-open-menu': 'animate-close-menu'} `} >
            <nav className=" min-h-screen  py-8" aria-label="mobile">
              <ul className='text-[#DBEAFE] flex flex-col items-center gap-[1rem] text-[2rem]'>
                <li>
                  <Link href={'/'} onClick={() => toggleMenu()}>Home</Link>
                </li>
                <li className={`flex gap-2 ${servicesDisplay === true ? 'text-white' : 'text-[#DBEAFE]'}`}>
                  <Link href={'/'} onClick={() => toggleMenu()}>Services</Link>
                  {/* Arrows to show/hide services */}
                  {servicesDisplay === false ? (
                    <svg 
                      onClick={() => {
                        setServicesDisplay(true)
                      }}
                      className="h-8 w-8"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                    >  
                    <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 9 12 15 18 9" />
                    </svg> 
                  ) : (
                    <svg 
                      onClick={() => {
                        setServicesDisplay(false)
                      }}
                      className="h-8 w-8"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                      <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 15 12 9 18 15" />
                    </svg>
                  )}
                </li>
                  {/* Services display for mobile */}
                  {servicesDisplay && (
                    <div className='flex flex-col gap-1 text-[1.3rem] text-white text-center animate-open-services'>
                      {services.map((service:any) => (
                        <Link 
                          key={service.sys.id} 
                          href={`/services/${service?.fields.url}`}
                          onClick={() => {
                            setMobileMenu(!mobileMenu)
                            setServicesDisplay(false)
                          }}
                        >
                          <p>{service?.fields.title}</p>
                        </Link>
                      ))}
                    </div> 
                  )}
                <li>
                  <Link href={'/'} onClick={() => toggleMenu()}>Contact us</Link>
                </li>
              </ul>
              
            </nav>
        </div>
      )}
    </nav>
  )
}

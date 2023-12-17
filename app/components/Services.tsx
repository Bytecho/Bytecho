'use client'

import Image from 'next/image';
import Link from 'next/link';

// Assets
import Vector from '../../assets/vector.svg';
import EyeIcon from '../../assets/eye-icon.svg';
import RightArrow from '../../assets/right-arrow.svg';
import ServicesButtons from './ServicesButtons';
import GridBg from '../../assets/gridBg.svg'

// Utils
import { fetchData } from '../utils/fetchServices';
import { useEffect, useState } from 'react';

const Services = () => {
    
    // const services = [
    //     {
    //         id: 1,
    //         title: 'Strategic Design',
    //         logo: StrategicIcon,
    //         logoDescription: "strategic design representative icon",
    //         description: "Our designs go beyond aesthetics; they are strategic, reflecting your brand's essence and engaging your audience effectively.",
    //         url: 'design-service'
    //     },
    //     {
    //         id: 2,
    //         title: 'User-Centric Web Development',
    //         logo: UserCentricIcon,
    //         logoDescription: "strategic design representative icon",
    //         description: "Our designs go beyond aesthetics; they are strategic, reflecting your brand's essence and engaging your audience effectively.",
    //         url: 'development-service'
    //     },
    //     {
    //         id: 3,
    //         title: 'Optimising for Search Engines',
    //         logo: SeoIcon,
    //         logoDescription: "SEO representative icon",
    //         description: "We elevate your online visibility with Search Engine Optimization (SEO), making sure your website ranks where it matters.",
    //         url: 'seo-service'
    //     },
    //     {
    //         id: 4,
    //         title: 'Conversion Mastery',
    //         logo: ConversionIcon,
    //         logoDescription: "Statistics icon",
    //         description: "Our strategies turn visitors into loyal customers, maximizing the potential of your online presence.",
    //         url: 'conversion-service'
    //     },
    //     {
    //         id: 5,
    //         title: 'Social Media Excellence',
    //         logo: SocialMediaIcon,
    //         logoDescription: "Social media representative icon",
    //         description: "We manage your social media and create captivating content that keeps your brand in the spotlight.",
    //         url: 'social-media-service'
    //     },
    // ]

     // Fetch services data from contentful
    const [services, setServices] = useState<any>()
    useEffect(() => {
        async function fetchingData() {
        const res:any = await fetchData()
        setServices(res)
        }
        fetchingData()
    }, [])
    console.log(services)
    
    return ( 
        <div className="pt-[3.5rem] md:pt-[4rem] lg:pt-[6rem] font-sans" id='services' >
            <div className=" relative ">
                <Image src={GridBg} className='absolute w-full h-full object-cover' alt='vector background' title='vector background'  />
    
                <div className='flex flex-col gap-[1rem] sm:gap-[2.5rem] md:gap-[4.5rem] xl:gap-[6rem] px-[1rem] sm:px-[9rem] md:px-[4rem] xl:px-0 text-center xl:max-w-[64rem] xl:mx-auto'>
                    {/* Services container */}
                    {services?.map((service:any, index:any) => (
                        <div key={service.sys.id} className={`flex flex-col md:flex-row gap-[1rem] md:gap-[2rem] ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <h2 className=' text-greenBrand h3 md:hidden'>{service.fields.title}:</h2>
                            <div className='bg-surfaceGreen/80 p-10 relative rounded-lg w-full lg:w-2/5 xl:w-3/5 h-[16rem] lg:h-[19rem] xl:h-[25rem] flex items-center justify-center'>
                                <Image 
                                    src={Vector} 
                                    alt="Vector background"
                                    title='Vector background'  
                                    className='w-full md:h-full absolute md:object-fill'
                                />
                                <Image src={service.fields.sticker.fields.file.url} width={78} height={78} alt={`${service.fields.title} sticker`} title={`${service.fields.title} sticker`} className='z-10 w-[8.25rem] xl:w-[10rem] h-[7.64rem] xl:h-auto' />
                            </div>
                            <div className='flex flex-col md:justify-center gap-[1rem] md:text-left lg:w-3/5'>
                                <h2 className=' text-greenBrand h3 hidden md:inline '>{service.fields.title}:</h2>
                                <p className='info-p text-white'>{service.fields.summary}</p>
                                <Link href={`services/${service.fields.url}`} className='flex justify-center md:justify-start'>
                                    <button className='flex gap-[0.5rem] items-center z-20'>
                                        <Image src={EyeIcon} alt="Eye icon" title='Eye icon' className='lg:w-[1.7rem]' />
                                        <span className='text-[0.875rem] lg:text-[1.3rem] text-white'>Read more</span>
                                        <Image src={RightArrow} alt="Right arrow icon" title='Right arrow icon' className='lg:w-[0.5rem]' />
                                    </button>
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Blue container */}
            <div className='mt-[3.5rem] py-[3.5rem] md:py-[4rem] lg:mt-[6rem] page bg-gradient-to-tr from-[#1E40AF] to-[#2563EB]'>
                <div className='flex flex-col lg:flex-row lg:items-center xl:justify-center gap-[2rem] lg:gap-[3rem] md:max-w-[31.25rem] lg:max-w-[56rem] lg:mx-auto'>
                    <h3 className='h3 lg:text-[2.25rem] lg:leading-[2.125rem] text-[#F3F4F6] lg:max-w-[18.75rem]'>CONTINUOUS SUPPORT</h3>
                    <p className="info-p text-[#DBEAFE] lg:max-w-[25rem]">Our commitment doesn&apos;t stop at launch. We provide ongoing support to keep your digital presence ahead of the curve.</p>
                </div>
            </div>

            {/* Services buttons */}
            <ServicesButtons />

            
        </div>
     );
}
 
export default Services;
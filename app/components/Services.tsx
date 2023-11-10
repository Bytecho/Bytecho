import StrategicIcon from '../../assets/strategic-icon.svg';
import UserCentricIcon from '../../assets/user-centric-icon.svg';
import SeoIcon from '../../assets/seo-icon.svg';
import ConversionIcon from '../../assets/conversion-icon.svg';
import SocialMediaIcon from '../../assets/social-media-icon.svg';
import Vector from '../../assets/vector.svg';
import EyeIcon from '../../assets/eye-icon.svg';
import RightArrow from '../../assets/right-arrow.svg';
import ServicesButtons from './ServicesButtons';
import Image from 'next/image';

const Services = () => {
    
    const services = [
        {
            id: 1,
            title: 'Strategic Design',
            logo: StrategicIcon,
            logoDescription: "strategic design representative icon",
            description: "Our designs go beyond aesthetics; they are strategic, reflecting your brand's essence and engaging your audience effectively."
        },
        {
            id: 2,
            title: 'User-Centric Web Development',
            logo: UserCentricIcon,
            logoDescription: "strategic design representative icon",
            description: "Our designs go beyond aesthetics; they are strategic, reflecting your brand's essence and engaging your audience effectively."
        },
        {
            id: 3,
            title: 'Optimising for Search Engines',
            logo: SeoIcon,
            logoDescription: "SEO representative icon",
            description: "We elevate your online visibility with Search Engine Optimization (SEO), making sure your website ranks where it matters."
        },
        {
            id: 4,
            title: 'Conversion Mastery',
            logo: ConversionIcon,
            logoDescription: "Statistics icon",
            description: "Our strategies turn visitors into loyal customers, maximizing the potential of your online presence."
        },
        {
            id: 5,
            title: 'Social Media Excellence',
            logo: SocialMediaIcon,
            logoDescription: "Social media representative icon",
            description: "We manage your social media and create captivating content that keeps your brand in the spotlight."
        },
    ]
    
    return ( 
        <div className="py-[3.5rem] font-sans">
            <div className=" pb-[3.5rem] px-[1rem]">
                {/* <h1 className="text-white h1 text-center">OUR SERVICES</h1> */}
                <div className='flex flex-col gap-[1rem]'>
                    {/* Services container */}
                    {services.map(service => (
                        <div key={service.id} className='flex flex-col gap-[1rem]'>
                            <h2 className=' text-greenBrand h3'>{service.title}:</h2>
                            <div className='bg-surfaceGreen/80 p-10  relative rounded-lg w-ful h-[16rem] flex items-center justify-center'>
                                <Image 
                                    src={Vector} 
                                    alt="Vector background"
                                    title='Vector background'  
                                    className='w-full absolute'
                                />
                                <Image src={service.logo} alt={service.logoDescription} title={service.logoDescription} className='z-10 w-[8.25rem] h-[7.64rem]' />
                            </div>
                            <p className='info-p text-textBrand'>{service.description}</p>
                            <button className='flex gap-[0.5rem] items-center'>
                                <Image src={EyeIcon} alt="Eye icon" title='Eye icon' />
                                <span className='text-[0.875rem] text-white'>Read more</span>
                                <Image src={RightArrow} alt="Right arrow icon" title='Right arrow icon' />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Blue container */}
            <div className=' py-[3.5rem] px-[1rem] mb-[3.5rem] bg-gradient-to-tr from-[#1E40AF] to-[#2563EB] flex flex-col gap-[2rem]'>
                <h3 className='h3 text-[#F3F4F6]'>CONTINUOUS SUPPORT</h3>
                <p className='info-p text-[#DBEAFE]'>Our commitment doesn't stop at launch. We provide ongoing support to keep your digital presence ahead of the curve.</p>
            </div>

            {/* Services buttons */}
            <ServicesButtons />

            
        </div>
     );
}
 
export default Services;
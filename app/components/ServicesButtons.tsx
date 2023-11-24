import Image from 'next/image';

// Assets
import DesignIcon from '../../assets/design-icon.svg';
import CodeIcon from '../../assets/code-icon.svg';
import SEOIcon from '../../assets/seo-icon-2.svg';
import ContentIcon from '../../assets/content-icon.svg';
import GridBg from '../../assets/gridBg.svg'

const ServicesButtons = () => {
    
    const buttons = [
        {
            id: 1,
            icon: DesignIcon,
            iconAlt: 'Design representative icon',
            title: 'Branding & Graphic Design'
        },
        {
            id: 2,
            icon: CodeIcon,
            iconAlt: 'Coding representative icon',
            title: 'Web Development'
        },
        {
            id: 3,
            icon: SEOIcon,
            iconAlt: 'SEO representative icon',
            title: 'SEO Optimization'
        },
        {
            id: 4,
            icon: ContentIcon,
            iconAlt: 'Camera icon',
            title: 'Content Creation'
        }
    ]
    
    return ( 
        <div className='relative'>
            <Image src={GridBg} className='hidden md:flex absolute w-full h-full object-cover object-left-bottom' alt='vector background' title='vector background'  />
            <div className='page xl:px-0 pt-[3.5rem] md:pt-[4rem] lg:pt-[6rem] xl:max-w-[63rem] xl:mx-auto'>
                <h2 className='h1 text-white'>OUR SERVICES</h2>
                <div className='mt-[2rem] sm:mt-[2.5rem] flex flex-col lg:grid lg:grid-cols-2 gap-[0.5rem] lg:gap-[1.5rem]'>
                    {buttons.map((button) => (
                        <button key={button.id} className='z-20 px-[1rem] py-[0.5rem] lg:py-[1rem] flex items-center justify-between rounded-lg border-t border-r border-gray-500 shadow-2xl'>
                            <div className='flex items-center gap-[1.5rem]'>
                                <Image src={button.icon} alt={button.iconAlt} title={`${button.iconAlt} icon`} className='h-[2.5rem] w-[2.5rem] lg:h-[3rem] lg:w-[3rem]' />
                                <p className='text-textBrand lg:text-[1.5rem]'>{button.title}</p>
                            </div>
                            <svg className="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"/><polyline points="9 6 15 12 9 18" />
                            </svg>
                        </button>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default ServicesButtons;
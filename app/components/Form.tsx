'use client'

import React, { useState, useRef } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha"
import { motion } from "framer-motion";
import Lottie, {LottieRefCurrentProps} from "lottie-react";

// Assets
import Success from '../../assets/mail-animation.json';
import Fail from '../../assets/fail-animation.json';

// Amplify configuration
import config from '@/amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';
import { post } from 'aws-amplify/api';

// API key
const apiKey:any = process.env.NEXT_PUBLIC_AMPLIFY_API_KEY;

Amplify.configure(config, {
    API: {
      REST: {
        headers: async () => {
          return { 'X-Api-Key': apiKey };
        },
      },
    }
  });


export default function Form() {

    // State for the text of the button
    const [buttonText, setButtonText] = useState('Submit');
    const [isSending, setIsSending] = useState(false);
    
    
    const formik = useFormik({
        // Declare initial values
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            project: "Branding",
            description: "",
            terms: "",
        },

        // Validate data

        validationSchema: Yup.object({
            firstname: Yup.string()
                .max(20, 'Name must be 20 characters or less')
                .required("Name is required"),
            lastname: Yup.string()
                .max(20, 'Last name must be 20 characters or less')
                .required("Last name is required"),
            email: Yup.string()
                .email('Invalid email address')
                .required("Email address is required"),
            description: Yup.string()
                .min(20, 'Please leave us a more detailed description')
                .required('A project description is required'),
            terms: Yup.array().required("Terms of service must be checked")
        }), 

        onSubmit: async (values) => {
            // Allow to submit just if captcha has been verified
            if(isVerified === true) {
                setButtonText('Sending...');
                setIsSending(true);
                try{
                    let resOperation = post({
                        apiName: 'quotes',
                        path: '/create',
                        options: {
                            body: {
                                name: formik.values.firstname,
                                lastname: formik.values.lastname,
                                email: formik.values.email,
                                project: formik.values.project,
                                description: formik.values.description
                            }
                        }
                    })
                    if((await resOperation.response).statusCode == 200) {
                        setRenderForm(!renderForm);
                        setRenderSuccessMessage(true);
                        // handleSubmitForm();
                        setTimeout(() => {
                            // Reset the button text and indicate that the form has been sent
                            setButtonText('Message sent');
                            setIsSending(false);
                        }, 4000);
                    } else {
                        setRenderForm(false);
                        setRenderErrorMessage(true)
                        setTimeout(() => {
                            // Reset the button text and indicate that the form has been sent
                            setButtonText('Message not sent');
                            setIsSending(false);
                        }, 4000);
                    }
                } catch(err:any) {
                    setRenderForm(false);
                    setRenderErrorMessage(true)
                    setTimeout(() => {
                        // Reset the button text and indicate that the form has been sent
                        setButtonText('Message not sent');
                        setIsSending(false);
                    }, 4000);
                }
            }
        }
    })

    // Site key ReCaptcha
    const siteKey:any = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    const [isVerified, setIsVerified] = useState(false);
    
    function onChange(value:any) {
        setIsVerified(true);
    }

    // The next function is to check if the user has already tried to submit the form without completing the captcha verification
    const [clickedSubmit, setClickedSubmit] = useState(false);

    // State to render or hide form when success sending message
    const [renderForm, setRenderForm] = useState(true);
    const [renderSuccessMessage, setRenderSuccessMessage] = useState(false);

     // State to render error when sending message
     const [renderErrorMessage, setRenderErrorMessage] = useState(false);
    
    // For Lottie animation
    const successRef = useRef<LottieRefCurrentProps>(null);
    const errorRef = useRef<LottieRefCurrentProps>(null); 

    return (
    <div className='page lg:flex xl:px-[3rem] xl:mx-auto'>
        <div className='hidden rounded-l-lg lg:flex flex-col gap-[2rem] justify-center bg-gradient-to-tr from-[#1E40AF] to-[#2563EB] p-[4rem] w-2/5'>
            <h3 className='text-[#DBEAFE] text-[1.875rem] font-bold leading-[2.06rem]'>Ready To Craft Your Digital Masterpiece?</h3>
            <p className='text-[#F3F4F6] text-[1.25rem]'>Let&apos;s Work Together</p>
        </div>
        <div className='rounded md:rounded-lg lg:rounded-l-none lg:rounded-r-lg bg-surfaceBlue p-[1rem] md:py-[1.5rem] md:px-[4rem] lg:py-[2.5rem] xl:py-[3rem] lg:px-[3.5rem] 2xl:py-[4rem] 2xl:px-[8rem] w-full'>
            {renderForm && (
                <div className='flex flex-col gap-[1rem] md:gap-[1.5rem]'>
                    <h3 className='h3 lg:hidden'>Let&apos;s Work Together</h3>
                    <p className="text-[0.75rem] lg:hidden">It all begins with a spark, a brilliant idea.  Lets make it real</p>
                    <form 
                        onSubmit={formik.handleSubmit} 
                        className="bg-white rounded shadow-2xl p-[1rem] xl:py-[2rem] xl:px-[2.5rem] flex flex-col gap-[1rem] "
                    >
                        <label htmlFor="firstname" className='flex flex-col gap-[0.5rem]'>
                            <span className={`${formik.touched.firstname && formik.errors.firstname ? 'text-red-400' : 'text-black'}`}>
                                {formik.touched.firstname && formik.errors.firstname 
                                    ? formik.errors.firstname 
                                    : 'First name'
                                }
                            </span>
                            <input 
                                required 
                                type="text" 
                                name='firstname' 
                                value={formik.values.firstname} 
                                onChange={formik.handleChange} 
                                placeholder='Enter your name' 
                                onBlur={formik.handleBlur}
                                className='border-none px-0 '
                            />
                        </label>
                        <label htmlFor="lastname" className='flex flex-col gap-[0.5rem]'>
                            <span className={`${formik.touched.lastname && formik.errors.lastname ? 'text-red-400' : 'text-black'}`}>
                                {formik.touched.lastname && formik.errors.lastname 
                                    ? formik.errors.lastname 
                                    : 'Last name'
                                }
                            </span>
                            <input 
                                required 
                                type="text" 
                                name='lastname' 
                                value={formik.values.lastname} 
                                onChange={formik.handleChange} 
                                placeholder='Enter your last name' 
                                onBlur={formik.handleBlur}
                                className='border-none px-0 '
                            />
                        </label>
                        <label htmlFor="email" className='flex flex-col gap-[0.5rem]'>
                            <span className={`${formik.touched.email && formik.errors.email ? 'text-red-400' : 'text-black'}`}>
                                {formik.touched.email && formik.errors.email 
                                    ? formik.errors.email 
                                    : 'Email'
                                }
                            </span>
                            <input 
                                required 
                                type='email' 
                                name='email' 
                                value={formik.values.email} 
                                onChange={formik.handleChange} 
                                placeholder='Enter your email address' 
                                onBlur={formik.handleBlur}
                                className='border-none px-0 '
                            />
                        </label>
                        <label htmlFor="project" className='flex flex-col gap-[0.5rem]'>
                            <span>Project</span>
                            <div>
                                <select name="project" value={formik.values.project} onChange={formik.handleChange} className='w-full rounded'>
                                    <option >Branding</option>
                                    <option> Web Development</option>
                                    <option>Search Engine Optimization</option>
                                    <option>Content Creation</option>
                                    <option>Social Media</option>
                                </select>
                            </div>
                        </label>
                        <label htmlFor="description" className='flex flex-col gap-[0.5rem]'>
                            <span className={`${formik.touched.description && formik.errors.description ? 'text-red-400' : 'text-black'}`}>
                                {formik.touched.description && formik.errors.description 
                                    ? formik.errors.description 
                                    : 'Project description'
                                }
                            </span>
                            <textarea 
                                required   
                                name='description' 
                                value={formik.values.description} 
                                onChange={formik.handleChange} 
                                placeholder='Please let us know your ideas for your project and how we can help you' 
                                onBlur={formik.handleBlur}
                                className='rounded min-h-[5rem]'
                            />
                        </label>
                        {/* Terms */}
                        <label htmlFor="terms gap-[0.5rem]">
                            <span>Terms of service</span>
                            <div className='flex gap-[1rem] items-center  '>
                                <input 
                                    required
                                    type='checkbox' 
                                    name='terms' 
                                    onChange={formik.handleChange} 
                                    className='' 
                                />
                                <p className='text-[0.7rem] md:text-[0.8rem]'>I consent to be contacted by Bytecho in response to the information provided in this form.</p>
                            </div>
                        </label>

                        <ReCAPTCHA
                            sitekey={siteKey}
                            onChange={onChange}
                        >
                            {clickedSubmit && !isVerified && (
                                <p className="text-red-400">Please complete the reCaptcha verification</p>
                            )}
                        </ReCAPTCHA>
                        
                        <button 
                            className='relative inline-flex mx-auto w-full' 
                            type='submit'
                            onClick={() => setClickedSubmit(true)}
                            >
                            <span className="smaller-button lg:w-full">{buttonText}</span>
                            <span className="smaller-button-behind"></span>
                        </button>
                    </form>                
                </div>
            )}
            {!renderForm && renderSuccessMessage && (
                <motion.div 
                    className="flex flex-col items-center justify-center xl:justify-around h-full"
                    animate={{ scale: 1, y: 0}}
                    transition={{ type: "tween", duration: 1}}
                    initial={{ scale: 0, y: 100}}
                >
                    <Lottie
                        className='h-[10rem]'
                        onComplete={() => {
                            successRef.current?.stop
                        }}
                        lottieRef={successRef}
                        loop={false}
                        animationData={Success}
                    />
                    <p className="mt-[1rem] lg:mt-0 text-center text-lg font-bold lg:text-xl">Your quote request has been sent. We will get in touch as soon as possible. You can also contact us at 
                        <br className="md:hidden" /> 
                        <a className='text-[#059669]' href="tel:+61414029043"> 0414029043</a>.
                    </p>
                </motion.div>
            )}

            {/* {!renderForm && renderSuccessMessage && ( */}
            {/* Render error animation when the form could not been submitted */}
            {!renderForm && renderErrorMessage && (
                <motion.div 
                    className="flex flex-col items-center justify-center xl:justify-around h-full"
                    animate={{ scale: 1, y: 0}}
                    transition={{ type: "tween", duration: 1}}
                    initial={{ scale: 0, y: 100}}
                >
                    <Lottie
                        className='h-[10rem]'
                        onComplete={() => {
                            successRef.current?.stop
                        }}
                        lottieRef={errorRef}
                        loop={false}
                        animationData={Fail}
                    />
                    <p className="mt-[1rem] lg:mt-0 text-center text-lg font-bold lg:text-xl">Sorry, your message could not be sent. Please try again later or contact us at 
                        <br className="md:hidden" /> 
                        <a className='text-red-600' href="tel:+61414029043">0414029043</a>.
                    </p>
                </motion.div>
            )}
        </div>
    </div>
  )
}

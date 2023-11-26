'use client'

import React, { useState, useRef } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha"
import { motion } from "framer-motion";
import Lottie, {LottieRefCurrentProps} from "lottie-react";

// Assets
import Success from '../../assets/mail-animation.json';

export default function Form() {
    const formik = useFormik({
        // Declare initial values
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            project: "Design",
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

        onSubmit: (values) => {
            if(isVerified === true) {
                setRenderForm(!renderForm)
                console.log(values, 'submitted');
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
    // const [renderSuccessMessage, setRenderSuccessMessage] = useState(false);
    
    // For Lottie animation
    const successRef = useRef<LottieRefCurrentProps>(null);
    // const errorRef = useRef<LottieRefCurrentProps>(null); 

    return (
    <div className='page'>
        <div className='rounded bg-surfaceBlue p-[1rem]'>
            {renderForm && (
                <div className='flex flex-col gap-[1rem]'>
                    <h3 className='h3'>Let&apos;s Work Together</h3>
                    <p className="text-[0.75rem]">It all begins with a spark, a brilliant idea.  Lets make it real</p>
                    <form 
                        onSubmit={formik.handleSubmit} 
                        className="bg-white rounded p-[1rem] flex flex-col gap-[1rem] "
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
                            />
                        </label>
                        <label htmlFor="project" className='flex flex-col gap-[0.5rem]'>
                            <span>Project</span>
                            <div>
                                <select name="project" value={formik.values.project} onChange={formik.handleChange} className='w-full'>
                                    <option >Design</option>
                                    <option> Web</option>
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
                                className=' plac'
                                placeholder='Please let us know your ideas for your project and how we can help you' 
                                onBlur={formik.handleBlur}
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
                            className='relative inline-flex mx-auto w-full lg:hidden' 
                            type='submit'
                            onClick={() => setClickedSubmit(true)}
                            >
                            <span className="smaller-button lg:w-full">Let&apos;s Work Together</span>
                            <span className="smaller-button-behind"></span>
                        </button>
                    </form>                
                </div>
            )}
            {!renderForm && (
                <Lottie
                    className='h-[10rem]'
                    onComplete={() => {
                        successRef.current?.stop
                    }}
                    lottieRef={successRef}
                    loop={false}
                    animationData={Success}
                />
            )}
        </div>
    </div>
  )
}

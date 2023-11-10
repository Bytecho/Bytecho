import React from 'react'

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
    <div className='pb-[3.5rem]'>
        <main className='page pb-[3.5rem]'>
            <h2 className='h1 text-[#E5E7EB]'>WHO WE ARE</h2>
            <div className="py-[2rem] flex flex-col gap-[2rem]">
                {/* Values array */}
                {values.map((value) => (
                    <div key={value.id} className='flex flex-col gap-[1rem]'>
                        <h3 className='h3 text-[#9CA3AF]'>{value.title}</h3>
                        <p className='values-p text-[#E5E7EB]'>{value.text}</p>
                    </div>
                ))}

                {/* Reasons array */}
                <h2 className='h1 text-[#E5E7EB]'>Why Bytecho?</h2>
                {reasons.map((reason) => (
                    <div key={reason.id} className='flex flex-col gap-[1rem]'>
                        <h3 className='h3 text-[#9CA3AF]'>{reason.title}</h3>
                        <p className='values-p text-[#E5E7EB]'>{reason.text}</p>
                    </div>
                ))}
            </div>

            <p className='text-[1.25rem] font-bold leading-[1.625rem] text-[#D1FAE5] '>
                We're not just building websites; we're building success stories, one project at a time.
            </p>
        </main>
        
        {/* Green area */}
        <div className='py-[3.5rem] px-[1rem] bg-gradient-to-r from-[#09D092] to-[#059669] flex flex-col gap-[2rem] '>
            <p className='text-[0.75rem] leading-[1rem] underline decorat decoration-[#F9FAFB]'>It all begins with a spark, a brilliant idea. </p>
            <h3 className='text-[1.125rem] leading-[1.25rem] font-bold text-[#F9FAFB]'>
                WE'RE HERE TO HELP YOU <span className='text-[#022C22]'>TRANSFORM THAT SPARK</span> INTO A BLAZING DIGITAL PRESENCE. 
            </h3>
        </div>
    </div>
  )
}

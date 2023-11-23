import Link from 'next/link'
import React from 'react'

export default function ReviewDetails({data, currentReview}: any) {

    return (
        <div className="flex flex-col gap-[1.5rem] transition-opacity duration-500">
            <p className=" text-textBrand text-[1.125rem] lg:text-[1.5rem] font-bold leading-[1.375rem] lg:leading-[1.7rem]">
              {data[currentReview]?.fields.reviewText as any}
            </p>

            {/* Client's information */}
            <div className="flex flex-col">
              <h3 className="text-[#F3F4F6] text-[1rem] font-bold ">
                {data[currentReview].fields.clientName}
              </h3>
              <p className="text-[0.875rem] text-[#F3F4F6]">
                {data[currentReview].fields.clientPosition}
              </p>
              <Link href={data[currentReview].fields.url} target='_null'>
                <p className="text-[0.875rem] text-[#F3F4F6]">
                  {data[currentReview].fields.company}
                </p>
              </Link>
              
            </div>
             
          </div>
  )
}

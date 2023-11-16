"use client"

import React from 'react'
import { createClient } from 'contentful'
import { Entry } from 'contentful';

// Components
import NotFound from '../not-found'


interface PageProps{
    params: {url: string}
}

export default async function Services({ params }: PageProps ) {

    const client = createClient({
        space: 'ogj4tsqztns9',
        accessToken: 'zrPhNvg3sTKd_yiL7RHYugQMwaiFn6tegREpD7ra5RM',
    })

    const res = await client.getEntries({ content_type: 'services' })

    const data = res.items

    const currentService = data.find(entry => entry.fields.url === params.url);
    console.log('este', currentService)

    if (!currentService) {
        // Handle case where the service is not found
        return <NotFound />;
    }

  return (
    <div>
        {currentService?.fields.url as string}
        {currentService?.fields.legend as string}
    </div>
  )
}

"use client"

import React, { useEffect, useState } from 'react'
import { createClient } from 'contentful'
import { Entry } from 'contentful';

// Components
import NotFound from '../not-found'


// Fetch all the services
export async function fetchData() {
    
    const client = createClient({
        space: 'ogj4tsqztns9',
        accessToken: 'zrPhNvg3sTKd_yiL7RHYugQMwaiFn6tegREpD7ra5RM',
    })

    const res = await client.getEntries({ content_type: 'services' })

    return {
        props: {
            services: res.items
        }
    }
}

// Function to get the url path
interface PageProps{
    params: {url: string}
}

export default function Services({ params }: PageProps ) {

    // Declare the variable where all the services will be stored
    const [fetchedServices, setFetchedServices] = useState<Entry<any>[]>([]);
    
    useEffect(() => {
        const fetchServices = async () => {
            const data = await fetchData();
            setFetchedServices(data.props.services);
        }

        fetchServices()
    }, []);

    // Find the service according to the path requested
    const service = fetchedServices.find(service => service.fields.url === params.url)
    console.log(service)

  return (
    <div>
        {service?.fields?.url === params.url && (
            <p>{String(service?.fields?.title)}</p>
        )}

        {service?.fields?.url != params.url && (
            <NotFound />
        )}
    </div>
  )
}

import { MetadataRoute } from "next";

import { createClient } from 'contentful'

// Contentful keys
const spaceKey:any = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken:any = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY;

// Create client for contentful
const client = createClient({
    space: spaceKey,
    accessToken: accessToken,
})

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Fetch the data
    const res = await client.getEntries({ content_type: 'services' })

    // Store the data in a variable
    const data = res.items

    const serviceEntries: MetadataRoute.Sitemap = data.map((service) => ({
        url: `https://bytecho.com.au/services/${service.fields.url}`
    }))

    return [
        {
            url: 'https://bytecho.com.au'
        },
        ...serviceEntries
    ]
}
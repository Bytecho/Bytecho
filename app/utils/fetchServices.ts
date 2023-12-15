import { createClient } from 'contentful'

// Contentful keys
const spaceKey:any = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken:any = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY;

// Create client for contentful
const client = createClient({
    space: spaceKey,
    accessToken: accessToken,
})

export async function fetchData() {
    // Fetch the data
    const res = await client.getEntries({ content_type: 'services' })

    // Store the data in a variable
    const data = res.items

    return data
}


import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECTID,
    dataset: 'production',
    apiVersion: '2021-10-21',
    token: process.env.REACT_APP_SANITY_APITOKEN,
    useCdn: true
})

const builder  = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    projectId: 'vgaojuvy',
    dataset: 'production',
    apiVersion: '2021-10-21',
    token: 'skCRNVMoFgDilgu8mydfXzvIjXulxKjd34RMzFSUeuSx8f1G6WheIwaicEqd4Ah63C3bTV22QoacfQhGt4QzS8KjZiuzd89KitlYCG5kEcHEt2fHaA5zx4aCRNQ8CmYxGSAyhAPC9wYjuAhtzpqGABvBOPH03xHlcYqCcQA6MOozrcuTPGfJ',
    useCdn: true
})

const builder  = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

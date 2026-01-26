import {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseURL = 'https://portfolio-michelon-scott.vercel.app';
    return [
        {
            url: `${baseURL}/`,
            lastModified: new Date()
        },
        {
            url: `${baseURL}/competences/`,
            lastModified: new Date()
        },
        {
            url: `${baseURL}/projets/`,
            lastModified: new Date()
        },
        {
            url: `${baseURL}/cv`,
            lastModified: new Date()
        },
        {
            url: `${baseURL}/contact/`,
            lastModified: new Date()
        }
    ];
}

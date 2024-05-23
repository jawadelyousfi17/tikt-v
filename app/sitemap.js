import {MetadataRoute} from 'next';
 
// Can be imported from shared config
const defaultLocale = 'en' 
const locales = ['en', 'fr' , 'ar' , 'id' , 'es' , 'it'] 
 const noLocale = ['blog' , '']
// Adapt this as necessary
const pathnames = ['' , 'about' , 'tiktok-image-downloader' , 'tiktok-carousel-downloader' ];
const host = 'http://localhost:3000';
 
import Article from '../lib/model/article'


export default async function sitemap() {
  const articles = await Article.find()
  const allPages = []
  noLocale.forEach(page => allPages.push({url : `${host}/${page}` }))
  for(const locale of locales) {
    for (const page of pathnames) {
      allPages.push({url : `${host}/${locale}/${page}`})
    }
  }
  articles.forEach(article => allPages.push({url : `${host}/${'blog'}/${article.slug}` }))

  return  allPages
 
}
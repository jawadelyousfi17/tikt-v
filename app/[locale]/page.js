import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server';
import LinkHome from './components/home/link';
import dbConnect from '@/lib/connect-db';
import Article from '@/lib/model/article';




export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations('Index');
  return {
    title: t('title') ,
    description : t('description')
  };
}

export default async function Home({params: {locale}}) {
  unstable_setRequestLocale(locale);
  await dbConnect()
  // const article = await Article.create({title : 'title' , content : 'content' , tags : ['social' , 'tech']})
  // console.log(article)
  const t =await getTranslations('faq');
  const i = await getTranslations('Index');
  const  actions = await getTranslations('actions');
  return (
    <div>
     <LinkHome i={i} t={t} actions={actions}/>
    </div>
  );
}

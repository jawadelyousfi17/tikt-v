import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server';
import LinkHome from '../components/home/link';




export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations('Index');
  return {
    title: t('title') ,
    description : t('description')
  };
}

export default function Page({params: {locale}}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('faq');
  const i = useTranslations('Index');
  const  actions = useTranslations('actions');
  return (
    <div>
     <LinkHome i={i} t={t} actions={actions}/>
    </div>
  );
}

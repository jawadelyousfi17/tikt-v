import { cookies } from 'next/headers';

export  function getLocale() {
    const cookieStore = cookies();
    const locale = cookieStore.get('NEXT_LOCALE').value || 'en'
    return locale
}

export default function flink(url) {
    return `${getLocale()}${url}`
}
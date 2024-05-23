
import {useLocale} from 'next-intl';

const Navbar = ({ n }) => {
  const locale = useLocale();

  return (
    <div className="navbar border-b border-slate-800 drop-shadow-lg">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href='/'><img width={'40px'} src="/images/logo.webp" alt="" />TikSaver  </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
        {/* <li>
        <details>
          <summary>
            Products
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none w-40 ">
          <li><a className="link link-hover" href={`/`}> {n('tik_downloader')} </a></li>
      <li><a className="link link-hover" href={`/${locale}/tiktok-image-downloader`}> {n('tik_image')} </a></li>
     <li><a className="link link-hover" href={`/${locale}/titkok-carousel-downloader`}> {n('tik_carousel')} </a></li> 
          </ul>
        </details>
      </li> */}
      <li>


      </li>
     
        <li> <a href={`/${locale}/about`}>
            {n('about_us')} </a></li>
            <li>
              <a href="/blog">Blog</a>
            </li>
        {/* <li><a href={`/${locale}/contact`}> {n('contact')} </a></li>
        <li><a href={`/${locale}/terms`}> {n('terms')} </a></li>  */}
      </ul>
    </div>
</div >
  )
}

export default Navbar
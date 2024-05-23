import flink from '@/lib/next-intl/get_loacle'
import '@/app/[locale]/globals.css'
const Navbar = () => {

  
  return (
        <div className="navbar border-b border-slate-800 drop-shadow-lg">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl" href='/'><img width={'40px'} src="/images/logo.webp" alt="" />TikSaver  </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
              </li>
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
    
          <div className="dropdown dropdown-end dropdown-hover">
      <div tabIndex={0} role="button" className="m-1 text-lg"> Services </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60 text-md">
      <li><a className="link link-hover" href={flink('/')}> tik downloader </a></li>
          <li><a className="link link-hover" href={flink(`/tiktok-image-downloader`)}> Tik image </a></li>
         <li><a className="link link-hover" href={flink(`/titkok-carousel-downloader`)}> Tik carousel </a></li> 
      </ul>
    </div>
             {/* <li> <a href={`/${locale}/about`}>
                {n('about_us')} </a></li>
            <li><a href={`/${locale}/contact`}> {n('contact')} </a></li>
            <li><a href={`/${locale}/terms`}> {n('terms')} </a></li> */}
          </ul>
        </div>
    </div >
  )
}

export default Navbar
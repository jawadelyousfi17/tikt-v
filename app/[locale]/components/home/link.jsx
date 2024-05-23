
import VideoDowloaderClient from './downloadVideo'
import Featurs from './features'

const LinkHome = ({t , i , actions}) => {
    let data = {
        download_song : actions('download_song') ,
        download_video : actions('download_video') ,
        paste : actions('paste') ,
        get_video : actions('get_video') ,
        loading : actions('loading') ,
        linkHere : actions('link_here') ,
    }

  return (
    <div className=' space-y-8'>
     <VideoDowloaderClient title={i('title')} data={data} />
     <article dir='ltr' className="prose prose-sm">
     <h2>Unlock the Full Potential of TikTok with TikSaver - Your Ultimate Watermark-Free Video Downloader</h2>
      <p>Tired of those pesky watermarks ruining your downloaded TikTok videos? Say goodbye to distractions and hello to a seamless viewing experience with TikSaver! Our powerful, user-friendly app empowers you to download your favorite TikTok videos in seconds, completely free of watermarks.</p>

      <h3>Why Choose TikSaver?</h3>
      <ul>
        <li>Watermark-Free Downloads: Enjoy crystal-clear videos without any distracting logos or text.</li>
        <li>Lightning-Fast & Easy: Download videos in seconds with just a few taps.</li>
        <li>High-Quality: Save videos in their original high resolution for optimal viewing.</li>
        <li>Share Seamlessly: Easily share your saved TikToks with friends and family.</li>
        <li>No Login Required: Start downloading immediately – no account necessary.</li>
        <li>Completely Free: TikSaver is 100% free to use with no hidden fees or limitations.</li>
      </ul>

      <h3>How Does TikSaver Work?</h3>
      <ol>
        <li>Copy the Link: Simply copy the link of the TikTok video you want to download.</li>
        <li>Paste & Download: Open TikSaver, paste the link, and tap Download. </li>
        <li>Enjoy! Your watermark-free video will be saved to your device, ready to watch, share, or edit.</li>
      </ol>

      <h3>Enhance Your TikTok Experience</h3>
      <p>TikSaver is perfect for content creators, social media enthusiasts, or anyone who loves TikTok. Download and save your favorite dance challenges, funny skits, educational content, or trending sounds without any visual clutter. Create seamless edits, compile your favorite clips, or simply enjoy offline viewing on your terms.</p>

      <h3>Join the TikSaver Community</h3>
      <p>Millions of TikTok users are already enjoying the freedom of watermark-free downloads. Download TikSaver today and discover a whole new way to experience TikTok!</p>

      <p><strong>Don t let watermarks hold you back. Download TikSaver now and unleash the full potential of TikTok!</strong></p>
   
     </article>
    <Featurs t={t} />
    </div>
   
  )
}

export default LinkHome
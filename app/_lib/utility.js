export  function checkUrl(url) {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url;
    }
    try {
        const nurl = new URL(url);
        console.log(nurl.hostname)
        if(!nurl.hostname.includes('tiktok.com')) {
            return false
        }
        return true
    } catch (error) {
        return false
    }
  }

  export function removeHTMLTags(inputString) {
    if (!inputString || typeof inputString !== 'string') {
      return ''; // Handle null, undefined, or non-string inputs
    }
    
    return inputString.replace(/<[^>]+>/g, ''); 
  }
  
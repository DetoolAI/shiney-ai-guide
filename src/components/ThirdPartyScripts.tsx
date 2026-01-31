import { useEffect } from 'react';

const PIXEL_ID = '1423176479316771';
const GOOGLE_ADS_ID = 'AW-17894527490';

const ThirdPartyScripts = () => {
  useEffect(() => {
    // Google Ads / gtag.js initialization
    const initGoogleAds = () => {
      if (typeof window !== 'undefined' && !(window as any).gtag) {
        // Load the gtag.js script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
        document.head.appendChild(script);

        // Initialize dataLayer and gtag function
        (window as any).dataLayer = (window as any).dataLayer || [];
        function gtag(...args: any[]) {
          (window as any).dataLayer.push(args);
        }
        (window as any).gtag = gtag;
        gtag('js', new Date());
        gtag('config', GOOGLE_ADS_ID);
      }
    };

    // Meta Pixel initialization
    const initMetaPixel = () => {
      if (typeof window !== 'undefined' && !(window as any).fbq) {
        (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
          if (f.fbq) return;
          n = f.fbq = function() {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
          };
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = !0;
          n.version = '2.0';
          n.queue = [];
          t = b.createElement(e);
          t.async = !0;
          t.src = v;
          s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s);
        })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
        
        (window as any).fbq('init', PIXEL_ID);
        (window as any).fbq('track', 'PageView');
      }
    };

    initGoogleAds();
    initMetaPixel();
  }, []);

  // Meta Pixel noscript fallback
  return (
    <noscript>
      <img 
        height="1" 
        width="1" 
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
};

export default ThirdPartyScripts;
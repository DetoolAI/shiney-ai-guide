import { useEffect } from 'react';

const PIXEL_ID = '1423176479316771';
const GOOGLE_ADS_ID = 'AW-17894527490';
const GTM_ID = 'GTM-5C5R5KWC';
// Replace with your Tawk.to Property ID and Widget ID from tawk.to dashboard
const TAWKTO_PROPERTY_ID = '6a24edd36d77da1c401dea06';
const TAWKTO_WIDGET_ID = '1jqg420d3';

const ThirdPartyScripts = () => {
  useEffect(() => {
    // Google Tag Manager initialization
    const initGTM = () => {
      if (typeof window !== 'undefined' && !(window as any).gtmLoaded) {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js'
        });
        
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
        document.head.appendChild(script);
        (window as any).gtmLoaded = true;
      }
    };

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

    // Tawk.to live chat initialization
    const initTawkTo = () => {
      if (typeof window !== 'undefined' && !(window as any).Tawk_API) {
        (window as any).Tawk_API = (window as any).Tawk_API || {};
        (window as any).Tawk_LoadStart = new Date();
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://embed.tawk.to/${TAWKTO_PROPERTY_ID}/${TAWKTO_WIDGET_ID}`;
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');
        document.head.appendChild(script);
      }
    };

    initGTM();
    initGoogleAds();
    initMetaPixel();
    initTawkTo();
  }, []);

  // Noscript fallbacks for GTM and Meta Pixel
  return (
    <>
      {/* Google Tag Manager noscript fallback */}
      <noscript>
        <iframe 
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager"
        />
      </noscript>
      {/* Meta Pixel noscript fallback */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
};

export default ThirdPartyScripts;
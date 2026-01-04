import { useEffect } from 'react';

const PIXEL_ID = '1423176479316771';

const ThirdPartyScripts = () => {
  useEffect(() => {
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

    initMetaPixel();

    // Create and append the chatbot script
    const chatbotScript = document.createElement('script');
    chatbotScript.src = 'https://buildmyagent.io/widget/68a504abb0dac7433e1ca791/widget-professional.js?widgetId=68a504abb0dac7433e1ca791';
    chatbotScript.async = true;
    document.body.appendChild(chatbotScript);

    // Cleanup function
    return () => {
      const existingChatbot = document.querySelector(`script[src="${chatbotScript.src}"]`);
      if (existingChatbot) {
        document.body.removeChild(existingChatbot);
      }
    };
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
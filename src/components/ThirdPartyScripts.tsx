import { useEffect } from 'react';

const ThirdPartyScripts = () => {
  useEffect(() => {
    // Create and append the chatbot script
    const script = document.createElement('script');
    script.src = 'https://buildmyagent.io/widget/68a504abb0dac7433e1ca791/widget-professional.js?widgetId=68a504abb0dac7433e1ca791';
    script.async = true;
    
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default ThirdPartyScripts;
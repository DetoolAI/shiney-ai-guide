import { useEffect } from 'react';

interface ChatbotConfig {
  enabled: boolean;
  scriptUrl?: string;
  widgetId?: string;
  initFunction?: string;
  customConfig?: Record<string, any>;
}

const ThirdPartyScripts = () => {
  // Configure your chatbot here
  const chatbotConfig: ChatbotConfig = {
    enabled: true, // Set to true to enable
    scriptUrl: "https://buildmyagent.io/widget/68863adc401fa64b17cd3c3c/widget.js", // Add your script URL here
    widgetId: "68863adc401fa64b17cd3c3c", // Add your widget ID here
    initFunction: "AIChatWidget", // Change if your chatbot uses a different global function
    customConfig: {
      logo: "/lovable-uploads/710113d7-81ef-41c9-9319-ba9612fc9114.png",
      logoUrl: "/lovable-uploads/710113d7-81ef-41c9-9319-ba9612fc9114.png",
      brandName: "Detool.AI",
      useLogoForAvatar: true,
      useLogoForMinimizedWidget: true
    } // Add any custom configuration options
  };

  useEffect(() => {
    if (!chatbotConfig.enabled || !chatbotConfig.scriptUrl || !chatbotConfig.widgetId) {
      return;
    }

    // Create and load the script
    const script = document.createElement('script');
    script.src = chatbotConfig.scriptUrl;
    script.async = true;

    script.onload = () => {
      // Initialize the chatbot after script loads
      if (window[chatbotConfig.initFunction as keyof Window]) {
        const initFunction = window[chatbotConfig.initFunction as keyof Window] as any;
        if (initFunction && typeof initFunction.init === 'function') {
          initFunction.init({
            widgetId: chatbotConfig.widgetId,
            ...chatbotConfig.customConfig
          });
        }
      }
    };

    document.body.appendChild(script);

    // Cleanup function to remove script on unmount
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [chatbotConfig.enabled, chatbotConfig.scriptUrl, chatbotConfig.widgetId]);

  return null; // This component doesn't render anything
};

export default ThirdPartyScripts;
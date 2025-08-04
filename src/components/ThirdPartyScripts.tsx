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
      logo: "/lovable-uploads/ca46362a-ecff-4aef-b0d3-5d2e8e8497ac.png",
      logoUrl: "/lovable-uploads/ca46362a-ecff-4aef-b0d3-5d2e8e8497ac.png",
      brandName: "Detool.AI",
      useLogoForAvatar: true,
      useLogoForMinimizedWidget: true,
      onRedirect: (url: string) => {
        window.location.href = url;
      },
      availablePages: [
        { name: "Home", url: "/" },
        { name: "Contact", url: "/contact" },
        { name: "Pricing", url: "/pricing" },
        { name: "Help Center", url: "/help" },
        { name: "Privacy", url: "/privacy" },
        { name: "Documentation", url: "/documentation" },
        { name: "Marketing Templates", url: "/marketing" },
        { name: "Phone Script", url: "/phone-script" },
        { name: "Client Onboard Form", url: "/client-onboard-form" }
      ]
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
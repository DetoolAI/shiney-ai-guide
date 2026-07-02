import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GHL_WIDGET_ID = "6a468ccbeacf7e67b98a7347";
const GHL_LOADER_SRC = "https://widgets.leadconnectorhq.com/loader.js";
const GHL_RESOURCES_URL = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";

/** Pages with phone/SMS opt-in forms — GHL chat widget must not load here */
const EXCLUDED_PATHS = ["/contact", "/client-onboard-form"];

const ChatWidget = () => {
  const { pathname } = useLocation();
  const excluded = EXCLUDED_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`));

  useEffect(() => {
    if (excluded) return;

    if (document.querySelector(`script[data-widget-id="${GHL_WIDGET_ID}"]`)) return;

    const script = document.createElement("script");
    script.src = GHL_LOADER_SRC;
    script.async = true;
    script.setAttribute("data-resources-url", GHL_RESOURCES_URL);
    script.setAttribute("data-widget-id", GHL_WIDGET_ID);
    script.setAttribute("data-source", "WEB_USER");
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [excluded]);

  return null;
};

export default ChatWidget;

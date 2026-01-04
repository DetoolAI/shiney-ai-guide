// Meta Pixel event tracking utilities

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export const trackLead = (data?: { 
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', data);
  }
};

export const trackContact = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact');
  }
};

export const trackCompleteRegistration = (data?: {
  content_name?: string;
  value?: number;
  currency?: string;
}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'CompleteRegistration', data);
  }
};

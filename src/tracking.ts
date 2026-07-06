// UTM parameter helpers
export function getUTMParams(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  const result: Record<string, string> = {};
  for (const key of utmKeys) {
    const val = params.get(key);
    if (val) result[key] = val;
  }
  return result;
}

// Meta Pixel tracking
export function fireMetaPixelEvent(eventName: string, params?: Record<string, unknown>) {
  try {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', eventName, params);
    }
  } catch {
    // Pixel not loaded
  }
}

// Google Analytics tracking
export function fireGAEvent(eventName: string, params?: Record<string, unknown>) {
  try {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, params);
    }
  } catch {
    // gtag not loaded
  }
}

// Fire CompleteRegistration on page load
export function fireCompleteRegistration() {
  const utm = getUTMParams();
  fireMetaPixelEvent('CompleteRegistration', utm);
  fireGAEvent('complete_registration', utm);
}

// Track WhatsApp button click
export function trackWhatsAppClick() {
  const utm = getUTMParams();
  fireMetaPixelEvent('WhatsAppJoin', utm);
  fireGAEvent('whatsapp_community_click', utm);
}

// WhatsApp community link (replace with actual invite link)
export const WHATSAPP_COMMUNITY_LINK = 'https://chat.whatsapp.com/Ec5obwqRYSdILJC7OMIEy7';

/**
 * Google Tag (gtag.js) & Conversion Tracking
 * Google Ads ID: AW-18484671476
 * Phone / Lead Conversion Action: AW-18484671476/b7jxCK-p3IsdEPTnlu5E
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GOOGLE_ADS_ID = 'AW-18484671476';
export const GOOGLE_ADS_CALL_CONVERSION = 'AW-18484671476/b7jxCK-p3IsdEPTnlu5E';

/**
 * Fires Google Ads conversion & engagement events when WhatsApp is clicked
 */
export function trackWhatsAppConversion(buttonLocation: string, message?: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    // 1. Custom Google Tag engagement event
    window.gtag('event', 'click_whatsapp', {
      event_category: 'Contact',
      event_label: buttonLocation,
      message_preview: message || 'Inquiry',
      send_to: GOOGLE_ADS_ID,
    });

    // 2. Google Ads Conversion Event (Call / Lead Action)
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_CALL_CONVERSION,
    });
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_ID,
    });
  }
}

/**
 * Fires Google Ads conversion & engagement events when Phone call is clicked
 */
export function trackPhoneConversion(buttonLocation: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    // 1. Custom Google Tag engagement event
    window.gtag('event', 'click_phone', {
      event_category: 'Contact',
      event_label: buttonLocation,
      send_to: GOOGLE_ADS_ID,
    });

    // 2. Google Ads Conversion Event (Call / Lead Action)
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_CALL_CONVERSION,
    });
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_ID,
    });
  }
}

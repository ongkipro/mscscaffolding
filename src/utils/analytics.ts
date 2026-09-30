/**
 * Google Tag (gtag.js) & Conversion Tracking
 * Google Ads ID: AW-18484671476
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

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
      send_to: 'AW-18484671476',
    });

    // 2. Google Ads Conversion Event
    window.gtag('event', 'conversion', {
      send_to: 'AW-18484671476',
      event_callback: () => {
        // Optional callback
      },
    });
  }
}

/**
 * Fires Google Ads conversion & engagement events when Phone call is clicked
 */
export function trackPhoneConversion(buttonLocation: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'click_phone', {
      event_category: 'Contact',
      event_label: buttonLocation,
      send_to: 'AW-18484671476',
    });

    window.gtag('event', 'conversion', {
      send_to: 'AW-18484671476',
    });
  }
}

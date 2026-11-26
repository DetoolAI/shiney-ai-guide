/** $297/mo — full system (website + automations) */
export const CHECKOUT_URL_FULL = "https://buy.stripe.com/6oU8wP4Yn98m8GLbev9sk03";
/** $99/mo — website only */
export const CHECKOUT_URL_WEBSITE = "https://buy.stripe.com/4gM7sLfD170e5uz6Yf9sk04";

export type PlanId = "full" | "website";

export const PLANS: Record<PlanId, { name: string; price: number; checkoutUrl: string; label: string }> = {
  full: { name: "Full System", price: 297, checkoutUrl: CHECKOUT_URL_FULL, label: "Get started - $297/mo" },
  website: { name: "Website Only", price: 99, checkoutUrl: CHECKOUT_URL_WEBSITE, label: "Get my website - $99/mo" },
};

/** Default checkout (full system). Kept so older imports keep working. */
export const CHECKOUT_URL = CHECKOUT_URL_FULL;
export const ONBOARDING_FORM_URL = "https://links.detool.ai";
export const THANK_YOU_URL = "https://www.detool.ai/thank-you";

/** @deprecated Use CHECKOUT_URL — kept so older imports keep working */
export const BOOK_A_CALL_URL = CHECKOUT_URL;

/** Must match GHL / Twilio brand verification exactly */
export const BUSINESS_NAME = "Detool.AI";
export const BUSINESS_EMAIL = "detoolai@gmail.com";
export const BUSINESS_PHONE = ""; // e.g. "+1 (555) 123-4567 — set to your verified brand phone
export const BUSINESS_ADDRESS = ""; // e.g. "123 Main St, City, ST 12345" — set to your verified brand address

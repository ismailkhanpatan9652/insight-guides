/**
 * AFFILIATE LINKS CONFIGURATION
 * 
 * Edit this file to update your CTA button URLs for each article.
 * The key is the article slug, and the value is the URL.
 * 
 * Example:
 * "smart-money-mastery-wealth-building-2026": "https://your-affiliate-link.com/finance",
 */

export const affiliateLinks: Record<string, string> = {
  // ========== FINANCE ARTICLES ==========
  "smart-money-mastery-wealth-building-2026": "",
  "personal-loans-decoded-borrowing-guide-2026": "",
  "smart-borrowing-loan-strategies-2026": "",
  "credit-score-secrets-2026": "",
  
  // ========== HOME & MORTGAGE ARTICLES ==========
  "dream-home-mortgage-mastery-2026": "",
  "mortgage-mastery-home-buying-2026": "",
  "home-improvement-revolution-2026": "",
  "energy-efficient-home-improvements-2026": "",
  "auto-loans-ultimate-car-financing-2026": "",
  "car-financing-decoded-auto-loans-2026": "",
  
  // ========== ENTERTAINMENT ARTICLES ==========
  "streaming-entertainment-revolution-2026": "",
  "streaming-wars-entertainment-guide-2026": "",
  "digital-music-revolution-discovery-2026": "",
  "music-streaming-revolution-discovery-2026": "",
  "gaming-evolution-ultimate-guide-2026": "",
  "gaming-universe-exploration-2026": "",
  "mobile-gaming-revolution-2026": "",
  "digital-subscriptions-smart-management-2026": "",
  
  // ========== TECHNOLOGY & APPS ARTICLES ==========
  "productivity-apps-efficiency-guide-2026": "",
  "productivity-revolution-apps-tools-2026": "",
  "cloud-storage-digital-backup-2026": "",
  "cloud-backup-data-protection-2026": "",
  "digital-security-privacy-guide-2026": "",
  "cyber-protection-security-essentials-2026": "",
  "vpn-privacy-digital-freedom-2026": "",
  "vpn-services-online-privacy-2026": "",
  
  // ========== HEALTH & WELLNESS ARTICLES ==========
  "virtual-healthcare-telehealth-guide-2026": "",
  "telehealth-revolution-healthcare-2026": "",
  "health-apps-wellness-technology-2026": "",
  "wellness-technology-health-apps-2026": "",
  
  // ========== EDUCATION ARTICLES ==========
  "online-learning-education-revolution-2026": "",
  
  // ========== CONSUMER GUIDES ==========
  "smart-online-shopping-consumer-guide-2026": "",
  "travel-booking-platforms-guide-2026": "",
};

/**
 * Gets the affiliate URL for an article
 * Returns the configured URL or empty string if not set
 */
export const getAffiliateUrl = (slug: string): string => {
  return affiliateLinks[slug] || "";
};

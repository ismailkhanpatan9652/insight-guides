// High-quality article images
import personalFinance from './personal-finance.jpg';
import creditScore from './credit-score.jpg';
import streamingServices from './streaming-services.jpg';
import onlineLearning from './online-learning.jpg';
import heroBg from './hero-bg.jpg';
import cloudStorage from './cloud-storage.jpg';
import vpnServices from './vpn-services.jpg';
import musicStreaming from './music-streaming.jpg';
import homeImprovement from './home-improvement.jpg';
import travelBooking from './travel-booking.jpg';
import telehealth from './telehealth.jpg';
import mobileGaming from './mobile-gaming.jpg';
import productivityApps from './productivity-apps.jpg';
import onlineShopping from './online-shopping.jpg';
import autoLoans from './auto-loans.jpg';
import mortgageGuide from './mortgage-guide.jpg';
import personalLoans from './personal-loans.jpg';
import digitalSubscriptions from './digital-subscriptions.jpg';
import healthApps from './health-apps.jpg';
import energyEfficient from './energy-efficient.jpg';
import gamingSubscriptions from './gaming-subscriptions.jpg';
import security from './security.jpg';
// New images for updated articles
import smartMoney from './smart-money.jpg';
import smartBorrowing from './smart-borrowing.jpg';
import dreamHome from './dream-home.jpg';
import carFinancing from './car-financing.jpg';
import streamingGuide from './streaming-guide.jpg';
import musicDiscovery from './music-discovery.jpg';
import gamingWorld from './gaming-world.jpg';
import productivityBoost from './productivity-boost.jpg';
import cloudBackup from './cloud-backup.jpg';
import cyberProtection from './cyber-protection.jpg';
import vpnPrivacy from './vpn-privacy.jpg';
import virtualHealthcare from './virtual-healthcare.jpg';
import wellnessTech from './wellness-tech.jpg';

// Image mapping for articles
export const articleImages: Record<string, string> = {
  'personal-finance': personalFinance,
  'credit-score': creditScore,
  'streaming-services': streamingServices,
  'online-learning': onlineLearning,
  'hero-bg': heroBg,
  'cloud-storage': cloudStorage,
  'vpn-services': vpnServices,
  'music-streaming': musicStreaming,
  'home-improvement': homeImprovement,
  'travel-booking': travelBooking,
  'telehealth': telehealth,
  'mobile-gaming': mobileGaming,
  'productivity-apps': productivityApps,
  'online-shopping': onlineShopping,
  'auto-loans': autoLoans,
  'mortgage-guide': mortgageGuide,
  'personal-loans': personalLoans,
  'digital-subscriptions': digitalSubscriptions,
  'health-apps': healthApps,
  'energy-efficient': energyEfficient,
  'gaming-subscriptions': gamingSubscriptions,
  'security': security,
  // New image mappings
  'smart-money': smartMoney,
  'smart-borrowing': smartBorrowing,
  'dream-home': dreamHome,
  'car-financing': carFinancing,
  'streaming-guide': streamingGuide,
  'music-discovery': musicDiscovery,
  'gaming-world': gamingWorld,
  'productivity-boost': productivityBoost,
  'cloud-backup': cloudBackup,
  'cyber-protection': cyberProtection,
  'vpn-privacy': vpnPrivacy,
  'virtual-healthcare': virtualHealthcare,
  'wellness-tech': wellnessTech,
};

// Helper function to get image by key
export const getArticleImage = (key: string): string => {
  return articleImages[key] || personalFinance;
};

export {
  personalFinance,
  creditScore,
  streamingServices,
  onlineLearning,
  heroBg,
  cloudStorage,
  vpnServices,
  musicStreaming,
  homeImprovement,
  travelBooking,
  telehealth,
  mobileGaming,
  productivityApps,
  onlineShopping,
  autoLoans,
  mortgageGuide,
  personalLoans,
  digitalSubscriptions,
  healthApps,
  energyEfficient,
  gamingSubscriptions,
  security,
  // New exports
  smartMoney,
  smartBorrowing,
  dreamHome,
  carFinancing,
  streamingGuide,
  musicDiscovery,
  gamingWorld,
  productivityBoost,
  cloudBackup,
  cyberProtection,
  vpnPrivacy,
  virtualHealthcare,
  wellnessTech,
};

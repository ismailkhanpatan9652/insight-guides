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
};

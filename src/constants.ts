import { ServiceCategory } from './types';

export const SERVICES: ServiceCategory[] = [
  {
    id: 'security-surveillance',
    title: 'CCTV Surveillance',
    icon: 'Shield',
    description: 'Comprehensive HD camera systems with advanced analytics, remote monitoring capabilities, and secure digital recording solutions. Perfect for offices, warehouses, retail spaces, and industrial facilities requiring 24/7 security oversight.',
    items: [
      'High-Definition IP Cameras',
      'Advanced Video Analytics',
      'Remote Monitoring Systems',
      'Maintenance & Support (AMC)'
    ]
  },
  {
    id: 'fire-alarm',
    title: 'Fire Alarm Systems',
    icon: 'Zap',
    description: 'State-of-the-art fire detection and alert systems designed to meet all safety codes and regulations. Our customizable solutions include smoke detection, heat sensors, and integrated emergency warning systems for maximum protection.',
    items: [
      'Addressable Fire Alarm Systems',
      'Conventional Smoke Detection',
      'System Integration (BMS)',
      'Emergency Warning Systems'
    ]
  },
  {
    id: 'access-control',
    title: 'Access Control',
    icon: 'ShieldCheck',
    description: 'Advanced access management solutions featuring RFID cards, biometric fingerprint recognition, and facial identification. Includes time attendance tracking, visitor management, and automated barrier systems for comprehensive security.',
    items: [
      'RFID & Smart Card Readers',
      'Fingerprint & Facial Recognition',
      'Time Attendance Software',
      'Vehicle Barrier Systems'
    ]
  },
  {
    id: 'data-networking',
    title: 'Wireless & Wired Networking',
    icon: 'Network',
    description: 'Enterprise-grade networking infrastructure including structured cabling, fiber optic installations, high-speed Wi-Fi networks, and secure routing solutions. Designed for scalability, reliability, and optimal performance.',
    items: [
      'Enterprise WiFi Solutions',
      'Fiber Optic (Single & Multi-mode)',
      'Switching & Routing Fabric',
      'Network Security & Firewalls'
    ]
  },
  {
    id: 'structured-cabling',
    title: 'IT Infrastructure',
    icon: 'Layers',
    description: 'Complete IT infrastructure solutions encompassing servers, storage systems, data center setups, and virtualization platforms. We provide end-to-end infrastructure management tailored to your organizational needs.',
    items: [
      'UTP CAT5e, 6, 6a, 7 Solutions',
      'Data Center Cabling',
      'Server Solutions',
      'Voice & Telephone Cabling'
    ]
  },
  {
    id: 'audio-visual',
    title: 'Audio-Visual & Collaboration',
    icon: 'Globe',
    description: 'Professional AV solutions for modern workplaces including video conferencing systems, interactive displays, public address systems, and collaborative meeting environments. Enhance communication and productivity.',
    items: [
      'Video Conferencing Systems',
      'Public Address (PA) & Music',
      'Meeting Room Solutions',
      'Projection & Display Systems'
    ]
  }
];

export const CLIENTS = [
  { name: 'Flipkart', industry: 'E-commerce' },
  { name: 'Amazon', industry: 'E-commerce' },
  { name: 'Blinkit', industry: 'Quick Commerce' },
  { name: 'Zepto', industry: 'Quick Commerce' },
  { name: 'LuLu', industry: 'Retail' },
  { name: 'Infosys', industry: 'Technology' },
  { name: 'DMart', industry: 'Retail' },
  { name: 'Metro Retail Stores', industry: 'Retail' }
];

export const PARTNERS = [
  { name: 'Oracle', type: 'Platinum Partner' },
  { name: 'Microsoft', type: 'Gold Partner' },
  { name: 'Cisco', type: 'Networking Partner' },
  { name: 'Hikvision', type: 'Security Partner' },
  { name: 'CommScope', type: 'Infrastructure Partner' }
];

export const LOGO = '/autolink-logo.svg';

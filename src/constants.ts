import { ServiceCategory } from './types';

export const SERVICES: ServiceCategory[] = [
  {
    id: 'security-surveillance',
    title: 'CCTV Surveillance',
    icon: 'Shield',
    description: 'HD cameras, remote monitoring, and digital recording for offices, warehouses, and retail spaces.',
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
    description: 'Code-compliant, customisable fire detection and alert solutions to ensure safety and regulatory compliance.',
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
    description: 'RFID card readers and biometric fingerprint systems for secure entry management and time attendance.',
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
    description: 'Structured cabling, fiber optics, and Wi-Fi distribution systems with enterprise-grade reliability.',
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
    description: 'Servers, storage, data centre, and virtualised environments tailored within reach of every organisation.',
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
    description: 'Meeting room AV solutions and integrated collaborative environments for seamless communication.',
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

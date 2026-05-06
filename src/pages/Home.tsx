import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { ArrowRight, Network, ShieldCheck, Building2, Wrench, Code2, CheckCircle2, TrendingUp, Users, Zap, Phone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition, Section } from '@/src/components/Transitions';
import { SERVICES } from '@/src/constants';

const MotionLink = motion(Link);

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden pt-20 md:pt-4 md:pb-6">
      {/* Background Decorative Elements */}
      <motion.div 
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-0 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-200/20 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2" 
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-100/30 rounded-full blur-[100px] translate-y-1/2" 
      />
      
      <Section className="w-full relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6 md:mb-8">
              Integrated <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Security & IT Solutions</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mb-8 md:mb-10 font-medium">
              Bangalore's trusted partner for enterprise-grade networking, surveillance, and IT infrastructure. We deliver end-to-end solutions tailored to your business needs.
            </p>
            
            <div className="flex flex-col gap-3 sm:gap-4">
              <MotionLink
                to="/services"
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-slate-900 border border-slate-200 px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 group shadow-sm hover:shadow-xl"
              >
                Our Services
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </MotionLink>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-10 md:mt-14 flex flex-wrap items-center gap-6 md:gap-8 border-t border-slate-100 pt-8"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="cursor-default"
              >
                <p className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tighter">12+</p>
                <p className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Years Experience</p>
              </motion.div>
              <div className="w-px h-10 bg-slate-100 hidden sm:block" />
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="cursor-default"
              >
                <p className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tighter">500+</p>
                <p className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Global Clients</p>
              </motion.div>
              <div className="w-px h-10 bg-slate-100 hidden sm:block" />
              <div className="flex -space-x-4 items-center group cursor-pointer">
                {[
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
                ].map((url, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5, zIndex: 50, scale: 1.1 }}
                    className="w-12 h-12 rounded-full border-4 border-white shadow-lg overflow-hidden relative"
                  >
                    <img src={url} className="w-full h-full object-cover" alt="Client" />
                  </motion.div>
                ))}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full border-4 border-white bg-brand-600 flex items-center justify-center text-[10px] text-white font-black shadow-lg relative z-10"
                >
                  <Users className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-600/10 rounded-[4rem] blur-2xl group-hover:bg-brand-600/20 transition-all duration-700" />
              <div className="relative bg-white border border-slate-100 rounded-[3.5rem] p-4 shadow-2xl overflow-hidden aspect-square md:aspect-auto">
                 <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                  alt="IT Infrastructure" 
                  className="w-full h-full object-cover rounded-[2.5rem]"
                  referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-bottom p-10">
                    <div className="mt-auto">
                       <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-white text-xs font-bold uppercase tracking-widest">Server Uptime 99.9%</span>
                       </div>
                       <p className="text-white/80 text-sm font-medium">Real-time infrastructure monitoring active.</p>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4 hidden md:flex"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600">
                <Network className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Network Optimised</p>
                <p className="text-[10px] text-slate-500 font-medium tracking-tight">Active Latency: 12ms</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

const ServiceCard: React.FC<{ service: any; index: number }> = ({ service, index }) => {
  const IconComponent = (Icons as any)[service.icon] || Icons.Globe;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.21, 1.11, 0.81, 0.99]
      }}
      whileHover={{ y: -10 }}
      className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-brand-500/30 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] transition-all duration-500 flex flex-col h-full"
    >
      <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-8 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 shadow-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
        <IconComponent className="w-8 h-8 relative z-10" />
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-4 uppercase tracking-widest text-sm leading-tight">
        {service.title}
      </h3>
      
      <p className="text-sm text-slate-500 leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity mb-8 flex-grow">
        {service.description}
      </p>
      
      <div className="space-y-3 pt-6 border-t border-slate-50">
        {service.items.slice(0, 3).map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 text-[11px] font-bold text-slate-400 uppercase tracking-tight">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export const HomePage = () => {
  return (
    <PageTransition>
      <Hero />

      {/* Services Grid */}
      <Section className="py-20 md:py-32" id="services">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-brand-600 mx-auto mb-6 md:mb-8 rounded-full"
          />
          <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 md:mb-8">
            Infrastructure That <br />
            <span className="text-brand-600">Drives Results.</span>
          </h3>
          <p className="text-base sm:text-lg text-slate-500 font-medium">
            Strategic IT solutions meticulously engineered for the modern enterprise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </Section>

      {/* Why Choose Autolink Infotech? - Differentiators */}
      <Section className="py-32 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-200/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
                  Why Choose <br />
                  <span className="text-brand-600">Autolink Infotech?</span>
                </h3>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  We serve industries across energy, utilities, telecommunications, banking & finance, healthcare, and industrial operations — bringing enterprise-grade security and IT infrastructure within reach of every organisation.
                </p>
              </div>

              <motion.div 
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15
                    }
                  }
                }}
              >
                {[
                  { title: 'CCTV Surveillance', desc: 'HD cameras, remote monitoring, and digital recording for offices, warehouses, and retail spaces.' },
                  { title: 'Fire Alarm Systems', desc: 'Code-compliant, customisable fire detection and alert solutions.' },
                  { title: 'Access Control', desc: 'RFID card readers and biometric fingerprint systems for secure entry management.' },
                  { title: 'Wireless & Wired Networking', desc: 'Structured cabling, fiber optics, and Wi-Fi distribution systems.' },
                  { title: 'IT Infrastructure', desc: 'Servers, storage, data centre, and virtualised environments.' },
                  { title: 'Audio-Visual & Collaboration', desc: 'Meeting room AV solutions and integrated collaborative environments.' }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex gap-5 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-lg shadow-brand-500/30 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors uppercase text-sm tracking-widest">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed italic">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-[3.5rem] p-12 shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-slate-100 relative z-10">
                <div className="flex items-center gap-4 mb-10 pb-8 border-b border-slate-50">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-brand-600">
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 tracking-tight">Trust Framework</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest leading-none mt-1">Verified Performance</p>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="bg-slate-50 rounded-2xl p-6 italic text-slate-600 font-medium relative group">
                    <span className="text-6xl text-brand-200 absolute -top-4 -left-2 opacity-50 font-serif">"</span>
                    <p className="relative z-10 leading-relaxed mb-6">
                      AutoLink transformed our legacy data center into a high-performance hub. Their team's attention to detail during the fiber optic backbone rollout was impeccable.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-600" />
                      <div>
                        <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Chief Tech Officer</p>
                        <p className="text-[9px] text-brand-600 font-bold">Global Logistics Hub</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: ShieldCheck, label: 'Secured Assets', val: '$2.4B+' },
                      { icon: Globe, label: 'Global Nodes', val: '5k+' }
                    ].map((badge, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:bg-white hover:border-brand-200 transition-all">
                        <badge.icon className="w-5 h-5 text-brand-600 mb-3" />
                        <p className="text-2xl font-black text-slate-900 tracking-tighter leading-none">{badge.val}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">{badge.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute top-20 right-0 w-80 h-80 bg-brand-600/10 rounded-full blur-[100px] -mr-40" />
            </div>
          </div>
        </div>
      </Section>

      {/* Featured CTA Section */}
      <Section className="py-24">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center group shadow-2xl shadow-slate-900/40">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 rounded-full blur-[120px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-400/10 rounded-full blur-[120px] -ml-48 -mb-48" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-tight max-w-4xl mx-auto text-balance">
              Take Your IT Infrastructure to the <span className="text-brand-500">Next Level.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
              Our engineering team is ready to architect a custom solution that optimizes performance and guarantees security.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold tracking-tight text-xl transition-all hover:bg-slate-100 hover:shadow-2xl hover:shadow-white/20 active:scale-95 shadow-lg w-full sm:w-auto"
              >
                Book a Strategy Call
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Trusted By Section */}
       <Section className="py-24 border-t border-slate-100">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-8">
              Trusted by Leading Organisations
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
              Autolink Infotech has delivered security and IT projects for leading organisations including Flipkart, Amazon, Blinkit, Zepto, LuLu, Infosys, DMart, and Metro Retail Stores — and many more across Bangalore and beyond.
            </p>
            <div className="space-y-8">
              {[
                { title: 'Proven Reliability', desc: 'Over a decade of successful deployments in complex enterprise environments.', icon: ShieldCheck },
                { title: 'Global Standards', desc: 'Our solutions meet the highest international security and networking certifications.', icon: Zap },
                { title: '24/7 Expert Support', desc: 'Dedicated AMC support and preventive maintenance to ensure zero downtime.', icon: Users },
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-brand-600 flex-shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 shadow-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-50 lg:hidden group-hover:block opacity-10" />
                    <item.icon className="w-6 h-6 relative z-10" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-slate-900 italic font-serif tracking-tight group-hover:text-brand-600 transition-colors uppercase text-[15px]">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed italic">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-slate-900 rounded-3xl p-10 overflow-hidden relative shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600 rounded-full blur-3xl opacity-20 -translate-y-16 translate-x-16" />
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
                alt="Digital Data Visualization"
                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 italic tracking-tight">Our Global Impact</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-5xl font-bold text-brand-400">12k+</div>
                    <div className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-2 italic">Devices Managed</div>
                  </div>
                   <div>
                    <div className="text-5xl font-bold text-brand-400">100%</div>
                    <div className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-2 italic">Client Satisfaction</div>
                  </div>
                   <div>
                    <div className="text-5xl font-bold text-brand-400">50+</div>
                    <div className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-2 italic">Global Partners</div>
                  </div>
                   <div>
                    <div className="text-5xl font-bold text-brand-400">2012</div>
                    <div className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-2 italic">Established Year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </PageTransition>
  );
};

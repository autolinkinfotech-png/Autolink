import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageTransition, Section } from '@/src/components/Transitions';
import { SERVICES, CLIENTS, PARTNERS } from '@/src/constants';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Globe, Award, Shield, Zap, Loader2, Users, ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const AboutPage = () => (
  <PageTransition>
    <Section className="py-20">
      <div className="max-w-6xl mx-auto space-y-40">
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05]">
                A Decade of <br />
                <span className="text-brand-600">Technical Rigor.</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">
                Founded in 2012, Autolink Infotech has evolved from a specialized networking firm into a full-scale enterprise IT powerhouse in Bangalore. We bridge the gap between complex engineering and business growth.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <p className="text-4xl font-black text-slate-900 tracking-tighter">12+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Years of Excellence</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-slate-900 tracking-tighter">500+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Global Deployments</p>
                </div>
              </div>
            </div>
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="absolute -inset-4 bg-brand-600/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto h-[600px]">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    alt="Our Main Office"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed italic">
              To empower organizations with robust, future-proof IT infrastructure that eliminates technical barriers and accelerates digital transformation across all operational touchpoints.
            </p>
            <div className="space-y-4">
              {[
                'Global Standard Networking',
                'Uncompromising Cybersecurity',
                'Scalable Cloud Infrastructure',
                'Strategic Technical Consulting'
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-slate-700 font-bold uppercase text-[11px] tracking-[0.2em]">
                  <div className="w-2 h-2 rounded-full bg-brand-500" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-50 rounded-[3rem] p-12 space-y-8"
          >
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Our Vision</h2>
            <p className="text-lg text-slate-600 leading-relaxed italic">
              To be the most trusted technical partner globally, recognized for engineering excellence and human-centric technical innovation that defines the next era of industrial connectivity.
            </p>
            <div className="pt-8 border-t border-brand-200">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-600 shadow-sm">
                    <Globe className="w-6 h-6" />
                 </div>
                 <p className="text-slate-900 font-black uppercase text-xs tracking-widest">Bridging Continents Through Fiber</p>
               </div>
            </div>
          </motion.div>
        </div>



        <div className="grid md:grid-cols-3 gap-8">
           {[
             { title: 'Innovation', icon: Zap, text: 'Continuously adopting the latest IP and cloud standards to keep you ahead.' },
             { title: 'Security', icon: Shield, text: 'Zero-trust architecture embedded in every network we deploy.' },
             { title: 'Integrity', icon: Award, text: 'Transparent partnerships and ethical engineering are our primary values.' }
           ].map((val, idx) => (
             <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-2xl transition-all group"
             >
               <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-600 mb-8 border border-white group-hover:bg-brand-600 group-hover:text-white transition-all">
                 <val.icon className="w-6 h-6" />
               </div>
               <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tighter uppercase text-sm tracking-widest">{val.title}</h4>
               <p className="text-slate-500 font-medium leading-relaxed italic text-sm">{val.text}</p>
             </motion.div>
           ))}
        </div>

        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 rounded-full blur-[120px] -mr-48 -mt-48" />
           <div className="relative z-10 max-w-4xl mx-auto space-y-12">
             <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Our Core Philosophy: <br />
                <span className="text-brand-500">"Efficiency Through Connectivity"</span>
             </h2>
             <p className="text-xl text-slate-400 font-medium leading-relaxed italic">
                We believe that in the digital age, a company's speed is determined by its network's stability. Our goal is to make IT infrastructure invisible, so you can focus on what matters most—your business.
             </p>
             <div className="flex flex-wrap justify-center gap-16 grayscale opacity-40 hover:opacity-100 transition-opacity">
                {['ISC2', 'CCIE', 'ORACLE CLOUD', 'VCP'].map(cert => (
                  <span key={cert} className="text-white font-black text-xs tracking-[0.3em]">{cert}</span>
                ))}
             </div>
           </div>
        </div>

        <div className="space-y-14">
          <div className="bg-slate-50 rounded-[4rem] p-10 md:p-16">
            <div className="max-w-5xl mx-auto space-y-10">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Our Brands</h2>
                <p className="mt-4 text-slate-600 text-base md:text-lg max-w-3xl mx-auto">
                  Autolink works with leading technology brands to bring reliable networking, security, and infrastructure solutions to enterprise customers.
                </p>
              </div>

              <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm">
                <img src="/1.png" alt="Brands associated with Autolink" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-[4rem] p-10 md:p-16">
            <div className="max-w-5xl mx-auto space-y-10">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Our Clients</h2>
                <p className="mt-4 text-slate-600 text-base md:text-lg max-w-3xl mx-auto">
                  These are some of the businesses supported by Autolink, representing our commitment to delivering performance, security, and trusted technical service.
                </p>
              </div>

              <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm">
                <img src="/2.png" alt="Our clients" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </PageTransition>
);

export const ServicesPage = () => (
  <PageTransition>
    <Section className="py-20">
       <div className="text-center max-w-3xl mx-auto mb-24">
         <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8">Our Expertise</h1>
         <p className="text-xl text-slate-600 italic leading-relaxed">
           Detailed breakdown of our core specializations designed to maximize ROI and minimize downtime.
         </p>
      </div>

      <div className="space-y-32">
        {SERVICES.map((category, idx) => (
          <div key={category.id} className={cn("grid lg:grid-cols-2 gap-16 items-center", idx % 2 !== 0 && "lg:flex-row-reverse")}>
            <div className={cn(idx % 2 !== 0 && "lg:order-last")}>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">{category.title}</h2>
              <p className="text-lg text-slate-600 mb-8 italic italic italic">{category.description}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {category.items.map(item => (
                  <div key={item} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-100 hover:border-brand-200 transition-all font-medium text-slate-700 shadow-sm hover:shadow-md">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0 italic" />
                    <span className="leading-tight italic">{item}</span>
                  </div>
                ))}
              </div>
            </div>
             <motion.div 
               className="bg-slate-100 rounded-[3rem] aspect-video overflow-hidden shadow-xl"
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
             >
                <motion.img
                 whileHover={{ scale: 1.05 }}
                 src={
                   category.id === 'security-surveillance' ? '/cctv-surveillance.jpg' :
                   category.id === 'fire-alarm' ? '/fire-alarm.jpg' :
                   category.id === 'access-control' ? '/access-control.jpg' :
                   category.id === 'data-networking' ? 'https://i.pinimg.com/1200x/d5/f5/3d/d5f53dcf4814a962ade5df367c935cd5.jpg' :
                   category.id === 'structured-cabling' ? '/networking.jpg' :
                   category.id === 'it-infrastructure' ? '/it-infrastructure.jpg' :
                   category.id === 'audio-visual' ? '/audio-visual.jpg' :
                   `https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1000`
                 }
                 className="w-full h-full object-cover transition-all duration-700"
                 alt={category.title}
                 referrerPolicy="no-referrer"
                />
             </motion.div>
          </div>
        ))}
      </div>
    </Section>
  </PageTransition>
);

export const PortfolioPage = () => (
  <PageTransition>
    <Section className="py-20">
       <div className="text-center max-w-3xl mx-auto mb-20 animate-pulse-slow">
         <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8">Client Portfolio</h1>
         <p className="text-xl text-slate-600 italic">
           We take pride in the success of our clients. Here are some of the companies we've empowered.
         </p>
      </div>

       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {CLIENTS.map((client, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 bg-white border border-slate-100 rounded-3xl text-center hover:shadow-2xl transition-all group"
          >
            <div className="w-20 h-20 bg-brand-50 rounded-full mx-auto mb-8 flex items-center justify-center text-brand-600 font-black text-2xl group-hover:scale-110 transition-transform">
              {client.name.charAt(0)}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 italic tracking-tight">{client.name}</h3>
            <p className="text-brand-600 font-bold uppercase tracking-widest text-xs">{client.industry}</p>
            <div className="mt-8 pt-8 border-t border-slate-50 italic text-slate-500 text-sm">
              Strategic IT Modernization & Support
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  </PageTransition>
);

export const PartnersPage = () => (
  <PageTransition>
    <Section className="py-20">
       <div className="text-center max-w-3xl mx-auto mb-20">
         <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8">Official Partners</h1>
         <p className="text-xl text-slate-600 italic">
           Collaborating with industry giants to bring you best-in-class technology and support.
         </p>
      </div>

       <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
        {PARTNERS.map((partner, idx) => (
          <motion.div 
            key={idx} 
            whileHover={{ scale: 1.05, y: -10 }}
            className="p-8 bg-white border border-slate-100 rounded-[2.5rem] flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl hover:border-brand-500/20 transition-all duration-500 grayscale hover:grayscale-0 h-48 group relative overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-1 bg-slate-50 group-hover:bg-brand-500 transition-colors" />
             <div className="font-black tracking-tighter text-3xl mb-4 text-slate-900 uppercase italic leading-none group-hover:text-brand-600 transition-all group-hover:tracking-normal">{partner.name}</div>
             <div className="text-[10px] font-black text-slate-400 group-hover:text-brand-500 uppercase tracking-[0.3em] leading-none transition-colors">{partner.type}</div>
             <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity">
                <Shield className="w-8 h-8 text-brand-600" />
             </div>
          </motion.div>
        ))}
      </div>
    </Section>
  </PageTransition>
);

export const ContactPage = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  const CustomInput = ({ label, name, type = 'text', required = false, placeholder }: { label: string, name: string, type?: string, required?: boolean, placeholder?: string }) => (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block ml-1">{label}</label>
      <input
        required={required}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-[#f0f4ff] border-none rounded-xl px-6 py-4 text-slate-900 font-bold text-base placeholder:text-slate-300 focus:ring-2 focus:ring-brand-500/20 transition-all shadow-sm"
      />
    </div>
  );

  return (
    <PageTransition>
      <Section className="py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-stretch mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.8, staggerChildren: 0.2 }
              }
            }}
          >
            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
               className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8 tracking-tight leading-[1.1]"
            >
              Let's Build the <br/>Future <span className="text-brand-600">Together.</span>
            </motion.h2>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-xl text-slate-600 italic mb-12 italic leading-relaxed"
            >
              Our teams are ready to discuss your unique infrastructure needs. Reach out via the form or our direct channels.
            </motion.p>

            <div className="space-y-8">
              {[
                { icon: MapPin, title: 'Corporate HQ', text: '362/7, 2nd Floor, Synerge Workspace, 16th Main, 4th T Block East, Jayanagar, Bengaluru, Karnataka 560041' },
                { icon: Phone, title: 'Technical Desk', text: '+91 87226 42718, +91 99458 43434' },
                { icon: Mail, title: 'Direct Access', text: 'autolinkinfotech@gmail.com' },
                { icon: Clock, title: 'Availability', text: 'Mon-Sat: 9am - 6pm (IST)' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-brand-600 flex-shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-sm">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1 tracking-tight italic font-serif">{item.title}</h4>
                    <p className="text-slate-600 italic text-sm tracking-tight">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white border border-slate-100 rounded-[3rem] p-8 md:p-14 shadow-2xl flex flex-col relative"
          >
            <div className="mb-10 text-center md:text-left">
              <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">Request a Quote</h3>
              <p className="text-slate-500 font-medium">Fill out the form below and we'll get back to you with a custom solution.</p>
            </div>
            
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center flex-1 text-center space-y-6 relative z-10 py-12"
              >
                <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">Inquiry Received</h3>
                  <p className="text-slate-500 font-medium max-w-sm mx-auto">Our engineers will review your request and reach out within 4 business hours.</p>
                </div>
                <button 
                  onClick={() => setFormState('idle')}
                  className="text-brand-600 font-bold hover:underline py-2"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-8 flex-1 relative z-10" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <CustomInput label="FULL NAME" name="name" required placeholder="Full Name" />
                  <CustomInput label="EMAIL ADDRESS" name="email" type="email" required placeholder="Email Address" />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <CustomInput label="PHONE NUMBER" name="phone" type="tel" required placeholder="Phone Number" />
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block ml-1">SERVICE REQUIRED</label>
                    <div className="relative group">
                      <select 
                        name="specialization"
                        required
                        defaultValue=""
                        className="w-full bg-white border-2 border-slate-900 rounded-xl px-6 py-4 text-slate-900 focus:outline-none transition-all font-bold text-lg tracking-tight appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select a service</option>
                        {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-900">
                        <ChevronDown className="w-6 h-6 stroke-[3]" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block ml-1">MESSAGE</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project"
                    className="w-full bg-[#f0f4ff] border-none rounded-xl px-6 py-4 text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-500/20 transition-all font-bold text-base resize-none shadow-sm placeholder:text-slate-300"
                  />
                </div>

                <motion.button
                  disabled={formState === 'loading'}
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-black hover:bg-slate-900 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-xl py-5 font-bold text-lg shadow-2xl shadow-black/20 transition-all flex items-center justify-center gap-3 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer transition-transform" />
                  <span className="relative z-10 flex items-center gap-3">
                    {formState === 'loading' ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                      </>
                    )}
                  </span>
                </motion.button>

                {formState === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-xs font-bold text-center"
                  >
                    Submission failed. Please check your connection and try again.
                  </motion.p>
                )}
              </form>
            )}
          </motion.div>
        </div>

      {/* Real Map with Tech Overlays */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-slate-900 rounded-[4rem] h-[550px] overflow-hidden group shadow-2xl border border-white/5"
      >
         {/* Map Iframe with Filter */}
          <div className="absolute inset-0 grayscale invert contrast-[1.2] opacity-30 brightness-[0.8] mix-blend-screen pointer-events-none">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.75127027382!2d77.5832563!3d12.9284128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15082d619931%3A0xc682025ed91d6438!2sSynerge%20Workspace!5e0!3m2!1sen!2sin!4v1714032000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

         {/* Scanning Effect Overlay */}
         <div className="absolute inset-0 bg-gradient-to-b from-brand-600/5 via-transparent to-brand-600/5 pointer-events-none" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(5,5,5,0.4)_100%)] pointer-events-none" />
         
         {/* Tech UI Elements */}
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
               {/* Target Reticle */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 border border-brand-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="w-24 h-24 border border-brand-500/20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_15s_linear_infinite_reverse]" />
                  
                  <div className="w-4 h-4 bg-brand-600 rounded-full border-2 border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(37,99,235,1)] z-20" />
                  <div className="w-20 h-20 bg-brand-600/20 rounded-full animate-ping absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
               </div>
            </div>
         </div>

         {/* Location Card */}
         <div className="absolute bottom-10 left-10 p-10 bg-[#0a0a0a]/80 backdrop-blur-xl rounded-[2.5rem] border border-white/10 max-w-sm shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
              <h4 className="text-white font-black uppercase tracking-[0.3em] text-[9px]">Location Synchronized</h4>
            </div>
            <div className="flex items-start gap-4">
               <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                 <MapPin className="w-5 h-5 text-brand-500" />
               </div>
               <div>
                  <p className="font-extrabold text-2xl text-white tracking-tight leading-none mb-1">Jayanagar</p>
                  <p className="text-xs text-slate-400 font-medium">Synerge Workspace HQ</p>
               </div>
            </div>
         </div>

         {/* Status Indicators */}
         <div className="absolute top-10 right-10 flex flex-col items-end gap-3">
            <div className="bg-brand-600/10 backdrop-blur-md border border-brand-500/30 px-6 py-3 rounded-full text-brand-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
               <div className="w-2 h-2 bg-brand-400 rounded-full animate-pulse" />
               Satellite Feed Active
            </div>
            <div className="bg-black/20 backdrop-blur-sm border border-white/5 px-4 py-2 rounded-lg text-slate-500 text-[8px] font-black uppercase tracking-[0.2em]">
              GRID REF: 12.928° N, 77.583° E
            </div>
         </div>
      </motion.div>
    </Section>
  </PageTransition>
);
};

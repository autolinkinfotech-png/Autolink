import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { PageTransition, Section } from '@/src/components/Transitions';
import { Loader2, ChevronRight } from 'lucide-react';

export const GetQuotePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      // Save to Google Sheets
await fetch('https://script.google.com/macros/s/AKfycbwmIsKJPh04lKldb1PzooVUse67YezdnR2ZA7sWRVYEOEudPYQzkkPJhzzJAbkqzxJE/exec', {        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      // Send email notification
      await fetch('/api/notify-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      // Redirect to contact page with pre-filled params
      const params = new URLSearchParams(form).toString();
      navigate(`/contact?${params}`);

    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <Section className="py-20">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white border border-slate-100 rounded-[3rem] p-10 md:p-14 shadow-2xl"
          >
            <div className="mb-10">
              <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                Get a Free Quote
              </h1>
              <p className="text-slate-500 font-medium">
                Tell us who you are and we'll prepare a custom solution for you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: 'name', label: 'FULL NAME', type: 'text', placeholder: 'John Doe' },
                { name: 'email', label: 'EMAIL ADDRESS', type: 'email', placeholder: 'john@company.com' },
                { name: 'phone', label: 'PHONE NUMBER', type: 'tel', placeholder: '+91 98765 43210' },
                { name: 'company', label: 'COMPANY NAME', type: 'text', placeholder: 'Acme Pvt Ltd' },
              ].map((field) => (
                <div key={field.name} className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block ml-1">
                    {field.label}
                  </label>
                  <input
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#f0f4ff] border-none rounded-xl px-6 py-4 text-slate-900 font-bold text-base placeholder:text-slate-300 focus:ring-2 focus:ring-brand-500/20 transition-all shadow-sm outline-none"
                  />
                </div>
              ))}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-black hover:bg-slate-900 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-xl py-5 font-bold text-lg shadow-2xl shadow-black/20 transition-all flex items-center justify-center gap-3 mt-4"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Please wait...
                  </>
                ) : (
                  <>
                    Continue to Full Form
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs font-bold text-center"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </Section>
    </PageTransition>
  );
};
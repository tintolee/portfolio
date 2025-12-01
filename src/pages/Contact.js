import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { Section, Card, Button } from '../components/ui';

function Contact() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/xnqgvoyj', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setError(body?.errors?.[0]?.message || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      setStatus('error');
    }
  };
  return (
    <>
      <Helmet>
        <title>Contact – Oluwatosin Adelaja</title>
        <meta name="description" content="Get in touch with Oluwatosin." />
      </Helmet>
      <Section id="contact" className="max-w-3xl">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-3xl md:text-4xl font-display font-semibold gradient-text mb-8">Get In Touch</motion.h1>
        <p className="text-gray-600 dark:text-white/70 mb-6">Have a project, question, or collaboration in mind? Drop a message and I will respond promptly.</p>
        <form className="space-y-5" action="https://formspree.io/f/xnqgvoyj" method="POST" acceptCharset="UTF-8" onSubmit={handleSubmit}>
          <Card className="space-y-5 p-6">
          <div>
            <label className="text-sm font-medium block mb-1" htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-purple bg-white border border-gray-300 dark:bg-white/5 dark:border-white/10" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-purple bg-white border border-gray-300 dark:bg-white/5 dark:border-white/10" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-purple bg-white border border-gray-300 dark:bg-white/5 dark:border-white/10" placeholder="Share details..." />
          </div>
          <input type="hidden" name="_subject" value="New message from portfolio website" />
          <Button type="submit" disabled={status==='loading'} className="w-full justify-center">
            <Send size={18}/> {status==='loading' ? 'Sending...' : 'Send Message'}
          </Button>
          </Card>
          {status==='success' && (
            <div className="text-xs text-emerald-400">Thanks! Your message has been sent.</div>
          )}
          {status==='error' && (
            <div className="text-xs text-red-400">{error}</div>
          )}
          <div className="text-xs text-gray-500 dark:text-white/40 flex items-center gap-2"><Mail size={14}/> Or email: hello@tosinadelaja.com</div>
        </form>
      </Section>
    </>
  );
}

export default Contact;
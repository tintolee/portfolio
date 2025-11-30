import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/writing', label: 'Writing' },
  { to: '/contact', label: 'Contact' }
];

function MainNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition ${scrolled ? 'backdrop-blur-md bg-bg/80 shadow-glass' : 'bg-transparent'} `}>
      <nav className="container-responsive flex items-center justify-between h-20">
        <Link to="/" className="text-xl font-display font-semibold gradient-text">Oluwatosin</Link>
        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle color theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-xl px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <button
            className="sm:hidden inline-flex items-center justify-center rounded-xl p-2 bg-white/5 border border-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <ul className="hidden sm:flex items-center gap-6">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) => `text-sm font-medium tracking-wide relative group ${isActive ? 'text-brand-purple' : 'text-white/80 hover:text-white'}`}
              >
                <span>{l.label}</span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-brand-purple to-brand-pink group-hover:w-full transition-all" />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="sm:hidden px-4 pb-6"
          >
            <ul className="flex flex-col gap-2 glass-card p-4">
              {links.map(l => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => `block px-3 py-2 rounded-lg text-sm font-medium ${isActive ? 'bg-brand-purple/20 text-brand-purple' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default MainNav;
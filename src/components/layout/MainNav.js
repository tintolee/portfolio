import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../Assets/logo.png';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/writing', label: 'Publications' },
  { to: '/contact', label: 'Contact' }
];

function MainNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
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
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0b0d17' : '#ffffff');
  }, [theme]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => {
      const stored = localStorage.getItem('theme');
      if (!stored) setTheme(e.matches ? 'dark' : 'light');
    };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition ${scrolled ? 'backdrop-blur-md bg-white/80 dark:bg-bg/80 shadow-glass' : 'bg-transparent'} `}>
      <nav className="container-responsive flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2" aria-label="Home">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>
        
        <ul className="hidden sm:flex items-center gap-6">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) => `text-sm font-medium tracking-wide relative group ${isActive ? 'text-brand-purple' : 'text-gray-700 hover:text-gray-900 dark:text-white/80 dark:hover:text-white'}`}
              >
                <span>{l.label}</span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-brand-purple to-brand-pink group-hover:w-full transition-all" />
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-xl p-2 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
          >
            {theme === 'dark' ? <Sun size={20} className="text-gray-700 dark:text-white/80" /> : <Moon size={20} className="text-gray-700 dark:text-white/80" />}
          </button>
          <button
            className="sm:hidden inline-flex items-center justify-center rounded-xl p-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
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
                    className={({ isActive }) => `block px-3 py-2 rounded-lg text-sm font-medium ${isActive ? 'bg-brand-purple/20 text-brand-purple' : 'text-gray-700 hover:bg-black/5 hover:text-black dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white'}`}
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
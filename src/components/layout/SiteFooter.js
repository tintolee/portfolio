import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-black/10 dark:border-white/10">
      <div className="container-responsive py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg gradient-text mb-2">Oluwatosin Adelaja</h3>
          <p className="text-sm text-gray-600 dark:text-white/60 max-w-xs">Creative Software Engineer crafting performant, inclusive digital experiences.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-gray-800 dark:text-white/80">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/projects" className="hover:text-black dark:hover:text-white">Projects</Link></li>
            <li><Link to="/experience" className="hover:text-black dark:hover:text-white">Experience</Link></li>
            <li><Link to="/about" className="hover:text-black dark:hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-black dark:hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-gray-800 dark:text-white/80">Connect</h4>
          <div className="flex gap-3">
            <a href="https://github.com/tintolee" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 transition"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/adelaja-oluwatosin/" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 transition"><Linkedin size={18} /></a>
            <a href="mailto:hello@tosinadelaja.com" className="p-2 rounded-lg bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 transition"><Mail size={18} /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs py-5 text-gray-500 dark:text-white/50">© {new Date().getFullYear()} Oluwatosin Adelaja. All rights reserved.</div>
    </footer>
  );
}

export default SiteFooter;
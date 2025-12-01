import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import StructuredData from '../seo/StructuredData';
import Analytics from '../seo/Analytics';
import MainNav from './MainNav';
import SiteFooter from './SiteFooter';

function Layout({ children }) {
  return (
    <HelmetProvider>
      <a href="#main-content" className="skip-link absolute left-2 top-2 -translate-y-14 focus:translate-y-0 bg-brand-purple text-white px-3 py-2 rounded-md text-sm shadow-soft">Skip to content</a>
      <Helmet>
        <meta name="author" content="Oluwatosin Adelaja" />
        <meta name="theme-color" content="#0b0d17" />
        <meta property="og:site_name" content="Oluwatosin Adelaja" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Oluwatosin Adelaja – Software Engineer" />
        <meta property="og:description" content="I build web and mobile apps with React & React Native, design scalable architectures, and write technical articles." />
        <meta property="og:image" content="/og-image.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oluwatosin Adelaja – Software Engineer" />
        <meta name="twitter:description" content="I build web and mobile apps with React & React Native, design scalable architectures, and write technical articles." />
        <meta name="twitter:image" content="/og-image.svg" />
        <link rel="preload" href={require('../../Assets/Oluwatosin_Adelaja_2-2.jpg')} as="image" type="image/jpeg" fetchpriority="high" />
        <link rel="alternate" type="application/rss+xml" title="Oluwatosin Adelaja RSS" href="/feed.xml" />
        <link rel="alternate" type="application/json" title="Oluwatosin Adelaja JSON Feed" href="/feed.json" />
      </Helmet>
      <StructuredData />
      <Analytics />
      <div className="min-h-screen flex flex-col">
        <MainNav />
        <main id="main-content" className="flex-1 pt-20" tabIndex={-1}>{children}</main>
        <SiteFooter />
      </div>
    </HelmetProvider>
  );
}

export default Layout;
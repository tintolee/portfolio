import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Analytics() {
  // Respect Do Not Track
  const dnt = typeof navigator !== 'undefined' && (
    navigator.doNotTrack === '1' ||
    window.doNotTrack === '1' ||
    navigator.msDoNotTrack === '1'
  );

  if (dnt) return null;

  return (
    <Helmet>
      {/* Replace data-domain with your actual domain */}
      <script
        defer
        data-domain="www.oluwatosinadelaja.com"
        src="https://plausible.io/js/script.js"
      />
    </Helmet>
  );
}

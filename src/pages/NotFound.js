import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <div className="container-responsive py-32 text-center">
      <Helmet>
        <title>Page Not Found | Oluwatosin Adelaja</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 className="gradient-text text-5xl mb-6">404</h1>
      <p className="text-lg text-white/70 mb-8">The page you are looking for does not exist.</p>
      <Link to="/" className="btn-primary-new">Go Home</Link>
    </div>
  );
}

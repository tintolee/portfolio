import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function StructuredData() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Oluwatosin Adelaja',
    url: 'https://www.oluwatosinadelaja.com',
    sameAs: [
      'https://github.com/username',
      'https://www.linkedin.com/in/username',
      'https://twitter.com/username'
    ],
    jobTitle: 'Software Engineer (React & React Native)',
    knowsAbout: ['React', 'React Native', 'Architecture Design', 'Technical Writing'],
    worksFor: {
      '@type': 'Organization',
      name: 'Independent'
    }
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Oluwatosin Adelaja Portfolio',
    url: 'https://www.oluwatosinadelaja.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.oluwatosinadelaja.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(person)}</script>
      <script type="application/ld+json">{JSON.stringify(website)}</script>
    </Helmet>
  );
}

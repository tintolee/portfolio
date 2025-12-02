import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function StructuredData() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Oluwatosin Adelaja',
    alternateName: 'Tosin Adelaja',
    url: 'https://tosinadelaja.com',
    image: 'https://tosinadelaja.com/logo512.png',
    sameAs: [
      'https://github.com/tintolee',
      'https://www.linkedin.com/in/adelaja-oluwatosin/',
      'https://twitter.com/mr_tinto',
      'https://www.researchgate.net/profile/Oluwatosin-Adelaja',
      'https://techcabal.com/author/oluwatosin-adelaja/'
    ],
    jobTitle: 'Software Engineer',
    description: 'Software engineer building production-grade web and mobile apps with React and React Native. Technical writer, speaker, and architect.',
    knowsAbout: [
      'React',
      'React Native',
      'TypeScript',
      'JavaScript',
      'Software Architecture',
      'System Design',
      'Performance Optimization',
      'Accessibility',
      'Technical Writing',
      'Mobile Development',
      'Web Development'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Liaison Group',
      url: 'https://www.liaisongroup.co.uk/'
    },
    alumniOf: 'Software Engineering',
    email: 'hello@tosinadelaja.com'
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Oluwatosin Adelaja - Software Engineer Portfolio',
    alternateName: 'Tosin Adelaja Portfolio',
    url: 'https://tosinadelaja.com',
    description: 'Professional portfolio showcasing software engineering projects, technical publications, and expertise in React and React Native development.',
    author: {
      '@type': 'Person',
      name: 'Oluwatosin Adelaja'
    },
    inLanguage: 'en-US'
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Oluwatosin Adelaja',
      url: 'https://tosinadelaja.com',
      jobTitle: 'Software Engineer',
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Software Engineer',
        occupationalCategory: 'Software Development',
        skills: 'React, React Native, TypeScript, System Architecture'
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(person)}</script>
      <script type="application/ld+json">{JSON.stringify(website)}</script>
      <script type="application/ld+json">{JSON.stringify(organization)}</script>
    </Helmet>
  );
}

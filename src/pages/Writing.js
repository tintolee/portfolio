import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Section, Card } from '../components/ui';
import articles from '../content/articles.json';

export default function Writing() {
  return (
    <>
      <Helmet>
        <title>Writing – Technical Articles</title>
        <meta name="description" content="Technical articles on React, React Native, architecture, performance, and DX." />
      </Helmet>
      <Section id="writing">
        <h1 className="text-3xl md:text-4xl font-display font-semibold gradient-text mb-8">Technical Writing</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map(a => (
            <Card key={a.slug} className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-2">{a.title}</h2>
              <p className="text-gray-600 dark:text-white/70 mb-4">{a.summary}</p>
              <a href={a.url} className="btn-primary-new" aria-label={`Read article ${a.title}`}>Read Article</a>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import projects from '../content/projects.json';
import { Section, Card, Button } from '../components/ui';

function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects - Oluwatosin Adelaja | React & React Native Development Portfolio</title>
        <meta name="description" content="Portfolio of production-grade web and mobile applications built with React, React Native, TypeScript, and modern architecture patterns. Healthcare, fintech, and enterprise solutions." />
        <meta property="og:title" content="Projects - Oluwatosin Adelaja Portfolio" />
        <meta property="og:description" content="Portfolio of production-grade web and mobile applications built with React, React Native, TypeScript, and modern architecture patterns." />
      </Helmet>
      <Section id="projects">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-3xl md:text-4xl font-display font-semibold gradient-text mb-8">Projects</motion.h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay: i * 0.1}}
              className="flex flex-col group"
            >
              <Card interactive className="flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-purple/10 dark:hover:shadow-brand-purple/20">
                {p.appStore && (
                  <div className="mb-3 inline-flex items-center gap-1.5 text-xs text-brand-purple dark:text-brand-purple-light font-medium">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    App Store
                  </div>
                )}
                <h3 className="font-semibold text-lg mb-2 group-hover:text-brand-purple transition-colors">{p.title}</h3>
                <p className="text-sm text-gray-600 dark:text-white/70 flex-1 leading-relaxed">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map(s => <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-gradient-to-r from-brand-purple/20 to-brand-pink/20 text-brand-purple dark:text-brand-purple-light font-medium transition-all hover:scale-105">{s}</span>)}
                </div>
                {p.url && p.url !== '#' && (
                  <div className="mt-4 flex gap-2">
                    <Button as="a" href={p.url} target="_blank" rel="noreferrer" variant="subtle" className="text-xs group-hover:bg-brand-purple/20 flex-1">
                      <ExternalLink size={14} /> {p.appStore ? 'App Store' : 'Visit'}
                    </Button>
                    {p.website && (
                      <Button as="a" href={p.website} target="_blank" rel="noreferrer" variant="ghost" className="text-xs group-hover:bg-brand-purple/10">
                        Website
                      </Button>
                    )}
                  </div>
                )}
              </Card>
            </motion.article>
          ))}
        </div>
      </Section>
    </>
  );
}

export default Projects;
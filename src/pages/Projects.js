import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
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
                <h3 className="font-semibold text-lg mb-2 group-hover:text-brand-purple transition-colors">{p.title}</h3>
                <p className="text-sm text-gray-600 dark:text-white/70 flex-1 leading-relaxed">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map(s => <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-gradient-to-r from-brand-purple/20 to-brand-pink/20 text-brand-purple dark:text-brand-purple-light font-medium transition-all hover:scale-105">{s}</span>)}
                </div>
                {p.url && <Button as="a" href={p.url} target="_blank" rel="noreferrer" variant="subtle" className="mt-4 text-xs group-hover:bg-brand-purple/20">Visit →</Button>}
              </Card>
            </motion.article>
          ))}
        </div>
      </Section>
    </>
  );
}

export default Projects;
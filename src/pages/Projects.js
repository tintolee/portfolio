import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import projects from '../content/projects.json';
import { Section, Card, Button } from '../components/ui';

function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects – Oluwatosin Adelaja</title>
        <meta name="description" content="Selected software projects by Oluwatosin." />
      </Helmet>
      <Section id="projects">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-3xl md:text-4xl font-display font-semibold gradient-text mb-8">Projects</motion.h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <motion.article
              key={p.slug}
              initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              className="flex flex-col"
            >
              <Card interactive className="flex flex-col h-full">
                <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
                <p className="text-sm text-white/70 flex-1">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1">
                  {p.stack.map(s => <span key={s} className="text-[11px] px-2 py-1 rounded-full bg-brand-purple/20 text-brand-purple">{s}</span>)}
                </div>
                {p.url && <Button as="a" href={p.url} target="_blank" rel="noreferrer" variant="subtle" className="mt-4 text-xs">Visit →</Button>}
              </Card>
            </motion.article>
          ))}
        </div>
      </Section>
    </>
  );
}

export default Projects;
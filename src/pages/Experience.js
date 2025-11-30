import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import experience from '../content/experience.json';
import { Section, Card } from '../components/ui';

function Experience() {
  return (
    <>
      <Helmet>
        <title>Experience – Oluwatosin Adelaja</title>
        <meta name="description" content="Professional experience and roles." />
      </Helmet>
      <Section id="experience">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-3xl md:text-4xl font-display font-semibold gradient-text mb-8">Experience</motion.h1>
        <div className="space-y-6 max-w-3xl">
          {experience.map(role => (
            <motion.div key={role.company + role.title} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
              <Card>
              <div className="flex items-baseline justify-between flex-wrap gap-2">
                <h3 className="font-semibold text-lg">{role.title} – {role.company}</h3>
                <span className="text-xs text-white/50">{role.period}</span>
              </div>
              <p className="mt-2 text-sm text-white/70">{role.summary}</p>
              <ul className="mt-3 space-y-1 text-xs text-white/60 list-disc list-inside">
                {role.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}

export default Experience;
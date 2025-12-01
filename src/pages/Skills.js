import React from 'react';
import { Helmet } from 'react-helmet-async';
import skills from '../content/skills.json';
import { Section, Card } from '../components/ui';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <>
      <Helmet>
        <title>Skills – Oluwatosin Adelaja</title>
        <meta name="description" content="Technical skills and competencies." />
      </Helmet>
      <Section id="skills">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-3xl md:text-4xl font-display font-semibold gradient-text mb-8">Skills</motion.h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map(s => (
            <motion.div key={s.name} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
              <Card className="p-4">
                <h3 className="font-medium text-sm">{s.name}</h3>
                <p className="text-xs text-gray-500 dark:text-white/60 mt-1">{s.level}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}

export default Skills;
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
                  <h3 className="font-semibold text-lg">{role.title}</h3>
                  <span className="text-xs text-gray-500 dark:text-white/50">{role.period} · {role.duration}</span>
                </div>
                <div className="mt-1 text-xs text-gray-600 dark:text-white/70">
                  <span className="font-medium">{role.company}</span>
                  {role.employmentType ? ` · ${role.employmentType}` : null}
                </div>
                {role.location ? (
                  <div className="mt-1 text-xs text-gray-600 dark:text-white/60">{role.location}</div>
                ) : null}
                {role.projects && role.projects.length > 0 ? (
                  <div className="mt-3 space-y-3 text-xs text-gray-600 dark:text-white/60">
                    {role.projects.map(project => (
                      <div key={project.name}>
                        <div className="font-medium text-gray-700 dark:text-white/70">{project.name}</div>
                        <ul className="mt-1 space-y-1 list-disc list-inside">
                          {project.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : role.highlights && role.highlights.length > 0 ? (
                  <ul className="mt-3 space-y-1 text-xs text-gray-600 dark:text-white/60 list-disc list-inside">
                    {role.highlights.map(h => <li key={h}>{h}</li>)}
                  </ul>
                ) : null}
                {role.skills && role.skills.length > 0 ? (
                  <div className="mt-3 text-xs text-gray-600 dark:text-white/60">
                    <span className="font-medium text-gray-700 dark:text-white/70">Skills:</span>{' '}
                    {role.skills.join(' · ')}
                  </div>
                ) : null}
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}

export default Experience;
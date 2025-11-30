import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';
import { Section } from '../components/ui';
import { Button } from '../components/ui';
import { Helmet } from 'react-helmet-async';
import HeroVisual from '../components/visual/HeroVisual';

function Home() {
  return (
    <>
      <Helmet>
        <title>Oluwatosin Adelaja – React/React Native Engineer</title>
        <meta name="description" content="I build web and mobile apps with React & React Native, design scalable architectures, and write technical articles." />
      </Helmet>
      <Section id="home">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-display font-bold leading-tight gradient-text"
            >
              Web & mobile apps with React and React Native.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-white/70 max-w-prose"
            >
              I build production-grade web and mobile applications using React and React Native, design scalable architectures, and share knowledge through technical writing. Focused on accessibility, performance, and developer experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button as="a" href="/projects" variant="primary">
                <Code2 size={18} /> View Projects
              </Button>
              <Button as="a" href="/contact" variant="subtle">
                Contact Me <ArrowRight size={18} />
              </Button>
            </motion.div>
          </div>
          <HeroVisual />
        </div>
      </Section>
    </>
  );
}

export default Home;
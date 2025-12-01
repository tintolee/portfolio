import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Section, Card } from '../components/ui';

function About() {
  return (
    <>
      <Helmet>
        <title>About – React/React Native Engineer</title>
        <meta name="description" content="I build web and mobile apps with React & React Native, design scalable architectures, and write technical articles." />
      </Helmet>
      <Section id="about">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-3xl md:text-4xl font-display font-semibold gradient-text mb-8">About Me</motion.h1>
        <Card className="prose max-w-none dark:prose-invert"> 
          <p>I build production-ready web and mobile applications using <strong>React</strong> and <strong>React Native</strong>. I design scalable, maintainable architectures, and I share what I learn through <strong>technical articles</strong>.</p>
          <p>My focus areas include accessibility, performance, developer experience, and clean design systems. I enjoy shaping robust frontends backed by well-structured APIs and tooling that empowers teams.</p>
        </Card>
      </Section>
    </>
  );
}

export default About;
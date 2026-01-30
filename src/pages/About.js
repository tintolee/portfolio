import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Section, Card } from '../components/ui';

function About() {
  return (
    <>
      <Helmet>
        <title>About Oluwatosin Adelaja - React & React Native Software Engineer</title>
        <meta name="description" content="Software engineer with expertise in React, React Native, and system architecture. Experience building high-availability platforms for NHS, fintech, and healthcare. Technical writer and speaker." />
        <meta property="og:title" content="About Oluwatosin Adelaja - React & React Native Engineer" />
        <meta property="og:description" content="Software engineer with expertise in React, React Native, and system architecture. Experience building high-availability platforms for NHS, fintech, and healthcare." />
      </Helmet>
      <Section id="about">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-3xl md:text-4xl font-display font-semibold gradient-text mb-8">About Me</motion.h1>
        
        <div className="space-y-6">
          <Card className="prose max-w-none dark:prose-invert p-6">
            <h2 className="text-2xl font-semibold gradient-text mb-4">Building Production Systems at Scale</h2>
            <p className="text-gray-700 dark:text-white/80 leading-relaxed">
              I'm a software engineer who builds production-grade applications that serve thousands of users daily. My work spans <strong>React</strong> and <strong>React Native</strong> ecosystems, where I design high-availability architectures, implement secure data flows, and ship resilient systems that handle real-world complexity.
            </p>
            <p className="text-gray-700 dark:text-white/80 leading-relaxed">
              At <strong>Liaison Group (UK)</strong>, I architected and delivered <strong>Liaison Link</strong> - an enterprise platform serving 5,000+ NHS users with secure, scalable infrastructure. I've reduced release cycles by 80% through CI/CD automation, improved performance by 25-40% via code-splitting and caching strategies, and strengthened system observability across distributed microservices.
            </p>
          </Card>

          <Card className="prose max-w-none dark:prose-invert p-6">
            <h2 className="text-2xl font-semibold gradient-text mb-4">Technical Expertise & Architecture</h2>
            <p className="text-gray-700 dark:text-white/80 leading-relaxed">
              My core strengths lie in <strong>system design, performance optimization, and developer experience</strong>. I've implemented OAuth2/JWT authentication flows with encrypted storage, integrated AWS services (S3, CloudFront, Lambda) for scalability, and established event-driven patterns with WebSockets and Server-Sent Events for real-time applications.
            </p>
            <p className="text-gray-700 dark:text-white/80 leading-relaxed">
              I practice domain-driven design (DDD), clean architecture, and MVVM patterns to reduce code duplication and maintain long-term maintainability. My work emphasizes <strong>accessibility (WCAG compliance)</strong>, <strong>security-by-design</strong>, and building design systems that empower engineering teams.
            </p>
          </Card>

          <Card className="prose max-w-none dark:prose-invert p-6">
            <h2 className="text-2xl font-semibold gradient-text mb-4">Thought Leadership & Publications</h2>
            <p className="text-gray-700 dark:text-white/80 leading-relaxed">
              Beyond code, I contribute to the broader engineering community through <strong>technical writing and research</strong>. I've published articles on <strong>TechCabal</strong>, <strong>Technext</strong>, <strong>ResearchGate</strong>, and <strong>Academia.edu</strong>, covering topics like resilient system design in African contexts, open banking architecture, and healthcare payment security.
            </p>
            <p className="text-gray-700 dark:text-white/80 leading-relaxed">
              My writing focuses on practical frameworks for building observable, fault-tolerant systems - drawing from real production experience scaling fintech and healthcare platforms across challenging network conditions and regulatory environments.
            </p>
          </Card>

          <Card className="prose max-w-none dark:prose-invert p-6">
            <h2 className="text-2xl font-semibold gradient-text mb-4">Awards & Recognition</h2>
            <p className="text-gray-700 dark:text-white/80 leading-relaxed">
              Awarded <strong>Tech Thought Leadership of the Year</strong> for contributions to engineering research, publications, and community impact.
            </p>
          </Card>

          <Card className="prose max-w-none dark:prose-invert p-6">
            <h2 className="text-2xl font-semibold gradient-text mb-4">Mentorship & Team Leadership</h2>
            <p className="text-gray-700 dark:text-white/80 leading-relaxed">
              I've mentored 5 engineers across frontend and mobile teams, led system design sessions, and authored RFCs that shaped future architecture decisions. I believe in raising code quality through structured reviews, pair programming, and fostering a culture of continuous learning.
            </p>
            <p className="text-gray-700 dark:text-white/80 leading-relaxed">
              My approach combines <strong>technical rigor with empathy</strong> - helping teams ship faster while maintaining high standards for security, performance, and user experience.
            </p>
          </Card>

          <Card className="prose max-w-none dark:prose-invert p-6">
            <h2 className="text-2xl font-semibold gradient-text mb-4">Speaking & Community Engagement</h2>
            <p className="text-gray-700 dark:text-white/80 leading-relaxed">
              I regularly speak at tech conferences, meetups, and community events, sharing insights on system architecture, React/React Native best practices, and building resilient applications. My talks focus on bridging theory with real-world production challenges.
            </p>
            <p className="text-gray-700 dark:text-white/80 leading-relaxed">
              Whether it's a panel discussion on open banking, a workshop on performance optimization, or a keynote on engineering for emerging markets, I'm passionate about contributing to the broader tech community and inspiring the next generation of builders.
            </p>
          </Card>

          <Card className="prose max-w-none dark:prose-invert p-6">
            <h2 className="text-2xl font-semibold gradient-text mb-4">What Drives Me</h2>
            <p className="text-gray-700 dark:text-white/80 leading-relaxed">
              I'm passionate about solving hard problems with elegant solutions. Whether it's reducing production crashes by 40%, implementing GDPR-compliant data flows, or designing offline-first architectures for unreliable networks, I thrive on building systems that <strong>work reliably at scale</strong>.
            </p>
            <p className="text-gray-700 dark:text-white/80 leading-relaxed">
              I'm particularly interested in the intersection of <strong>performance, security, and accessibility</strong> - ensuring that powerful technology remains inclusive and serves diverse user needs across different contexts and capabilities.
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}

export default About;
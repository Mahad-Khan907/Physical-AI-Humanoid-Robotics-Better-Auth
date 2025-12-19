import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Physical AI & Humanoid Robotics — Course Book</h1>
        <p className="hero__subtitle">AI-Native Technical Textbook (Spec-Driven)</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/chapter1/foundations-of-physical-ai">
            Start Reading
          </Link>
        </div>
      </div>
    </header>
  );
}

const ChapterCard = ({title, description, link}) => (
  <div className={clsx('col col--4', styles.chapterCard)}>
    <Link to={link} className={styles.chapterCardLink}>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  </div>
);

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="An AI-native textbook on Physical AI and Humanoid Robotics.">
      <HomepageHeader />
      <main>
        <section className={styles.chapterSection}>
          <div className="container">
            <h2 className="text--center margin-bottom--lg">Chapters</h2>
            <div className="row">
              <ChapterCard
                title="Chapter 1: Foundations of Physical AI"
                description="Understand the core principles of AI systems embodied in physical forms and their interaction with the real world."
                link="/docs/chapter1/foundations-of-physical-ai"
              />
              <ChapterCard
                title="Chapter 2: ROS 2 Fundamentals"
                description="Dive into the Robotic Operating System 2 (ROS 2) and learn its architecture for robot control."
                link="/docs/chapter2/ros-2-fundamentals"
              />
              <ChapterCard
                title="Chapter 3: Robot Simulation with Gazebo & Unity"
                description="Explore digital twin environments using Gazebo and Unity for realistic robot simulation and visualization."
                link="/docs/chapter3/robot-simulation"
              />
              <ChapterCard
                title="Chapter 4: NVIDIA Isaac Platform"
                description="Learn about NVIDIA's comprehensive platform for AI-powered robots, including Isaac SDK and Isaac Sim."
                link="/docs/chapter4/nvidia-isaac-platform"
              />
              <ChapterCard
                title="Chapter 5: Humanoid Robotics Development"
                description="Master the kinematics, dynamics, and control strategies for developing bipedal humanoid robots."
                link="/docs/chapter5/humanoid-robot-development"
              />
              <ChapterCard
                title="Chapter 6: Vision-Language-Action (VLA) Systems"
                description="Discover how large language models integrate with robotics for natural language understanding and action generation."
                link="/docs/chapter6/vision-language-action"
              />
              <ChapterCard
                title="Chapter 7: Hardware Requirements"
                description="Review the essential hardware specifications for building and running a physical AI robotics lab."
                link="/docs/chapter7/hardware-requirements"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'chapter1/foundations-of-physical-ai',
      label: 'Chapter 1: Foundations of Physical AI',
    },
    {
      type: 'doc',
      id: 'chapter2/ros-2-fundamentals',
      label: 'Chapter 2: ROS 2 Fundamentals',
    },
    {
      type: 'doc',
      id: 'chapter3/robot-simulation',
      label: 'Chapter 3: Robot Simulation with Gazebo & Unity',
    },
    {
      type: 'doc',
      id: 'chapter4/nvidia-isaac-platform',
      label: 'Chapter 4: NVIDIA Isaac Platform',
    },
    {
      type: 'doc',
      id: 'chapter5/humanoid-robot-development',
      label: 'Chapter 5: Humanoid Robotics Development',
    },
    {
      type: 'doc',
      id: 'chapter6/vision-language-action',
      label: 'Chapter 6: Vision-Language-Action (VLA) Systems',
    },
    {
      type: 'doc',
      id: 'chapter7/hardware-requirements',
      label: 'Chapter 7: Hardware Requirements',
    },
  ],
};

export default sidebars;
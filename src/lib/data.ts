import { Project, projectSchema } from './schema';
import { z } from 'zod';

// Helper to validate data at build time
const validateProjects = (data: unknown): Project[] => {
  try {
    return z.array(projectSchema).parse(data);
  } catch (e) {
    console.error("Invalid project data:", e);
    return [];
  }
};

const rawProjects: Omit<Project, 'slug'>[] = [
  {
    title: "MAKRO PRO - #1 Grocery App in Thailand",
    summary: "Senior Mobile Engineer at Thailand's top-ranked grocery app, architecting secure session flows and automated CI/CD pipelines. Implemented OCR functionality and OTA updates for 50K+ users.",
    timeline: { start: "2023", end: "Present" },
    stack: ["React Native", "TypeScript", "WebViews", "Mixpanel", "Firebase Analytics", "Bitrise", "Fastlane", "Doppler"],
    role: "Senior Software Engineer (Mobile)",
    teamSize: 8,
    repo: "https://github.com/Avais392/makro-pro",
    demo: "https://play.google.com/store/apps/details?id=com.makropro.app",
    cover: "/projects/project-a-cover.svg",
    metrics: [
      { name: "Deployment Efficiency", before: "Manual", after: "40% faster" },
      { name: "User Retention", after: "+20%" },
      { name: "App Store Ranking", after: "#1 Grocery App Thailand" }
    ],
    challenges: ["Architecting secure token-safe session flows between WebViews and native apps.", "Implementing OCR functionality to streamline user interactions.", "Configuring automated CI/CD pipelines with multiple tools."],
    decisions: ["Used Doppler for configuration management and Bitrise for CI/CD automation.", "Implemented Microsoft App Center for OTA updates.", "Integrated AppsFlyer and Firebase for deep linking and analytics."],
    outcomes: ["Reduced deployment effort by 40% through automation.", "Increased user retention by 20% through data-driven improvements.", "Achieved #1 ranking in Thailand's grocery app category."]
  },
  {
    title: "AimFit - Fitness & Nutrition Platform",
    summary: "Solution Architect for real-time fitness platform with workout streaming, nutrition tracking, and leaderboards. Migrated to TypeScript and implemented CI/CD pipelines, boosting engagement by 25%.",
    timeline: { start: "2021", end: "2023" },
    stack: ["React Native", "TypeScript", "Firebase", "MUX", "Zoom SDK", "Bitrise", "Fastlane", "Node.js"],
    role: "Senior Software Engineer (Mobile & Solution Architect)",
    teamSize: 5,
    repo: "https://github.com/Avais392/aimfit",
    cover: "/projects/project-b-cover.svg",
    metrics: [
        { name: "User Engagement", after: "+25%" },
        { name: "User Retention", after: "+20%" },
        { name: "Release Time", before: "Manual", after: "40% faster" },
        { name: "App Open Rates", after: "+20%" }
    ],
    challenges: ["Designing real-time workout streaming features using MUX & Zoom SDK.", "Implementing Firebase Dynamic Links and Push Notifications.", "Migrating to TypeScript-based modular patterns."],
    decisions: ["Used MUX and Zoom SDK for real-time video streaming.", "Implemented Firebase Dynamic Links for seamless user experience.", "Adopted TypeScript for better maintainability and reduced onboarding time."],
    outcomes: ["Boosted user engagement by 25% and retention by 20%.", "Reduced release times by 40% through automated CI/CD.", "Improved app open rates by 20% through push notifications."]
  },
  {
    title: "Your Doctors Online - Telemedicine Platform",
    summary: "Built real-time doctor-patient consultations for 300,000+ users. Integrated Stripe, Google/Apple Pay, and EMR SOAP APIs, improving daily active user engagement by 25%.",
    timeline: { start: "2021", end: "2021" },
    stack: ["React Native", "Firebase", "Agora", "Stripe", "Google Pay", "Apple Pay", "AWS Lambda", "Node.js"],
    role: "Software Engineer (Full Stack)",
    teamSize: 4,
    cover: "/projects/project-c-cover.svg",
    metrics: [
        { name: "Daily Active Users", after: "+25%" },
        { name: "Transaction Success Rate", after: "+18%" },
        { name: "Patient Retention", after: "+15%" },
        { name: "System Uptime", after: "99.9%" }
    ],
    challenges: ["Building real-time patient-doctor interactions using Agora (audio/video).", "Improving payment reliability with multiple payment gateways.", "Developing backend queuing system for session scheduling."],
    decisions: ["Used Agora for real-time audio/video communication.", "Integrated multiple payment gateways (Stripe, Google Pay, Apple Pay).", "Implemented AWS Lambda functions for scalable microservices."],
    outcomes: ["Served 300,000+ users with real-time telemedicine consultations.", "Increased transaction success rates by 18%.", "Achieved 99.9% uptime with scalable AWS infrastructure."]
  }
];

export const projects = validateProjects(
    rawProjects.map(p => ({
        ...p,
        slug: p.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
    }))
);

export const skills = {
    "Mobile Development": [
        { name: "React Native", depth: 98 },
        { name: "TypeScript", depth: 95 },
        { name: "Redux", depth: 90 },
        { name: "Expo", depth: 85 },
        { name: "Native Modules", depth: 80 },
        { name: "Secure WebViews", depth: 85 },
    ],
    "Web & Frontend": [
        { name: "React.js", depth: 90 },
        { name: "Next.js", depth: 85 },
        { name: "HTML5", depth: 95 },
        { name: "CSS3", depth: 90 },
        { name: "AngularJS", depth: 75 },
    ],
    "Backend & APIs": [
        { name: "Node.js", depth: 90 },
        { name: "Express.js", depth: 85 },
        { name: "Firebase", depth: 95 },
        { name: "GraphQL", depth: 80 },
        { name: "MongoDB", depth: 85 },
        { name: "SQL", depth: 80 },
    ],
    "CI/CD & DevOps": [
        { name: "Bitrise", depth: 95 },
        { name: "Fastlane", depth: 90 },
        { name: "GitHub Actions", depth: 85 },
        { name: "Doppler", depth: 80 },
        { name: "App Center", depth: 85 },
        { name: "Firebase Hosting", depth: 90 },
    ],
    "Payments & Integrations": [
        { name: "Stripe", depth: 95 },
        { name: "Apple Pay", depth: 90 },
        { name: "Google Pay", depth: 90 },
        { name: "EasyPaisa", depth: 80 },
        { name: "SafePay", depth: 80 },
    ],
    "Testing & Analytics": [
        { name: "Jest", depth: 85 },
        { name: "Detox", depth: 80 },
        { name: "Appium", depth: 75 },
        { name: "Cypress", depth: 70 },
        { name: "Sentry", depth: 85 },
        { name: "Mixpanel", depth: 90 },
    ]
};

export const testimonials = [
    { name: "CTO at MAKRO PRO", quote: "Avais's work on our mobile app was instrumental in achieving #1 ranking in Thailand. His expertise in CI/CD automation and secure session handling directly contributed to our success." },
    { name: "Head of Engineering at AimFit", quote: "An exceptional mobile engineer who bridges complex real-time systems with user-centric design. His TypeScript migration and CI/CD implementation transformed our development workflow." },
    { name: "Product Manager at YDO", quote: "Incredibly collaborative and product-minded. Avais doesn't just write code, he solves user problems and delivers measurable business value. His telemedicine platform served 300K+ users flawlessly." },
    { name: "Senior Designer at ExperLabs", quote: "The attention to mobile UX details and performance optimization is world-class. It's rare to find an engineer so dedicated to both technical excellence and user experience." },
];

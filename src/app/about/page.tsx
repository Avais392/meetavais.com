import { Metadata } from 'next';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';
import Balancer from 'react-wrap-balancer';

export const metadata: Metadata = {
  title: 'About Me',
  description: `Learn more about my professional journey, values, and what drives me as a full-stack engineer.`,
};

export default function AboutPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      <div className="md:col-span-2 space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter">My Story</h1>
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
          <p>
            Hello! I&apos;m {siteConfig.name}, a Senior React Native Engineer based in Pakistan with over 6 years of experience designing, building, and scaling cross-platform mobile applications. My journey into mobile development started with a fascination for how mobile apps work, which quickly evolved into a career dedicated to solving complex problems in healthtech, fitness, e-commerce, and SaaS domains.
          </p>
          <p>
            Over the years, I&apos;ve had the privilege of working on applications that have served 300,000+ users, including Thailand&apos;s #1 ranked grocery app (MAKRO PRO) and a telemedicine platform that revolutionized patient-doctor interactions. My core expertise lies in React Native, TypeScript, and CI/CD automation, where I&apos;ve led teams to build feature-rich mobile experiences with secure session flows, OTA updates, and modern modular architectures.
          </p>
          <h2 className="text-2xl font-bold text-foreground">My Values</h2>
          <ul>
            <li>
              <strong>Mobile-First Excellence:</strong> I believe mobile applications should deliver native-level performance while maintaining cross-platform consistency. Every decision I make prioritizes user experience and app performance.
            </li>
            <li>
              <strong>Automation & Efficiency:</strong> Clean, maintainable code is just the beginning. I focus on building automated CI/CD pipelines and modular architectures that reduce deployment time by 40% and improve team productivity.
            </li>
            <li>
              <strong>Data-Driven Development:</strong> I integrate analytics and monitoring tools like Mixpanel and Sentry to make informed decisions, resulting in measurable improvements in user engagement and retention.
            </li>
            <li>
              <strong>Mentorship & Collaboration:</strong> Having mentored 5+ junior engineers to promotion readiness, I believe in fostering technical excellence through code reviews, knowledge sharing, and collaborative team dynamics.
            </li>
          </ul>
        </div>
      </div>
      <aside className="md:col-span-1">
        <Image
          src="/avatar.jpg" // Your professional photo
          alt="Avais Muhib Ur Rasool"
          width={400}
          height={400}
          className="rounded-full border-2 aspect-square object-cover"
        />
      </aside>
    </div>
  );
}

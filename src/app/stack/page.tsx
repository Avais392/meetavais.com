import { Metadata } from 'next';
import { skills } from '@/lib/data';
import SkillMatrix from '@/components/skill-matrix';
import { siteConfig } from '@/lib/config';
import Balancer from 'react-wrap-balancer';

export const metadata: Metadata = {
  title: 'Tech Stack',
  description: 'An interactive matrix of my technical skills and expertise in web and mobile development.',
  openGraph: {
    title: `Tech Stack | ${siteConfig.name}`,
    description: 'An interactive matrix of my technical skills.',
    url: `${siteConfig.url}/stack`,
  },
  twitter: {
    title: `Tech Stack | ${siteConfig.name}`,
    description: 'An interactive matrix of my technical skills.',
  }
};

export default function StackPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter">My Tech Stack</h1>
        <p className="text-lg text-muted-foreground">
          <Balancer>
            A curated list of technologies I specialize in. The darker the shade, the higher my proficiency. 
            Click on a skill to see related projects.
          </Balancer>
        </p>
      </header>
      <SkillMatrix skills={skills} />
    </div>
  );
}

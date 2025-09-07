import { Metadata } from 'next';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/project-card';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Projects',
  description: `A collection of my work, showcasing my skills in full-stack development, from React Native mobile apps to scalable web platforms.`,
  openGraph: {
    title: `Projects | ${siteConfig.name}`,
    description: `Explore my portfolio of full-stack projects.`,
    url: `${siteConfig.url}/projects`,
  },
  twitter: {
    title: `Projects | ${siteConfig.name}`,
    description: `Explore my portfolio of full-stack projects.`,
  }
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter">All Projects</h1>
        <p className="text-lg text-muted-foreground">
          Here&apos;s a showcase of my work in mobile and web development.
        </p>
      </header>

      {/* TODO: Add filter/search functionality here */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

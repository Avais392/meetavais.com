import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ExternalLink, Github, Users, Calendar, BarChart2 } from 'lucide-react';
import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { Project } from '@/lib/schema';

type Props = {
  params: { slug: string };
};

// Generate static pages for each project
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
        title: `${project.title} | ${siteConfig.name}`,
        description: project.summary,
        url: `${siteConfig.url}/projects/${project.slug}`,
        images: [
            {
                url: `${siteConfig.url}${project.cover}`,
                width: 1200,
                height: 630,
                alt: project.title,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${project.title} | ${siteConfig.name}`,
        description: project.summary,
        images: [`${siteConfig.url}${project.cover}`],
    },
  };
}


const ProjectDetailSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tighter border-b pb-2">{title}</h2>
      <div className="prose prose-invert max-w-none text-muted-foreground">{children}</div>
    </section>
);

const MetricCard = ({ metric }: { metric: NonNullable<Project['metrics']>[0] }) => (
    <div className="bg-muted/50 p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">{metric.name}</p>
        <div className="flex items-baseline gap-2">
            {metric.before && <p className="text-xl font-semibold line-through text-red-500/70">{metric.before}</p>}
            {metric.after && <p className="text-2xl font-bold text-green-400">{metric.after}</p>}
        </div>
        {metric.note && <p className="text-xs text-muted-foreground mt-1">{metric.note}</p>}
    </div>
)


export default function ProjectSlugPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">{project.title}</h1>
        <p className="text-lg text-muted-foreground">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <Image
            src={project.cover}
            alt={project.title}
            width={1200}
            height={630}
            className="rounded-lg border object-cover w-full aspect-video"
          />
        
            {project.metrics && project.metrics.length > 0 && (
                <ProjectDetailSection title="Impact & Metrics">
                     <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        {project.metrics.map(metric => <MetricCard key={metric.name} metric={metric} />)}
                    </div>
                </ProjectDetailSection>
            )}

            <ProjectDetailSection title="Challenges">
                <ul className="list-disc pl-5 space-y-2">
                    {project.challenges.map((challenge, i) => <li key={i}>{challenge}</li>)}
                </ul>
            </ProjectDetailSection>

            <ProjectDetailSection title="Key Decisions & Architecture">
                 <ul className="list-disc pl-5 space-y-2">
                    {project.decisions.map((decision, i) => <li key={i}>{decision}</li>)}
                </ul>
            </ProjectDetailSection>

            <ProjectDetailSection title="Outcomes">
                <ul className="list-disc pl-5 space-y-2">
                    {project.outcomes.map((outcome, i) => <li key={i}>{outcome}</li>)}
                </ul>
            </ProjectDetailSection>
        </div>
        
        <aside className="md:col-span-1 space-y-6 md:sticky top-24 h-fit">
            <div className="bg-muted/30 p-6 rounded-lg space-y-4">
                <h3 className="text-xl font-semibold">Project Info</h3>
                <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-muted-foreground" /> <span>{project.timeline.start} - {project.timeline.end || 'Present'}</span></div>
                    <div className="flex items-center gap-2"><BarChart2 className="h-4 w-4 text-muted-foreground" /> <span>{project.role}</span></div>
                    <div className="flex items-center gap-2"><Users className="h-4 w-4 text-muted-foreground" /> <span>Team of {project.teamSize}</span></div>
                </div>
                <div className="flex gap-2 pt-2">
                    {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex-1 text-center"><Button variant="outline" className="w-full"><Github className="mr-2 h-4 w-4"/> Repository</Button></a>}
                    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 text-center"><Button className="w-full"><ExternalLink className="mr-2 h-4 w-4"/> Live Demo</Button></a>}
                </div>
            </div>
        </aside>
      </div>
    </article>
  );
}

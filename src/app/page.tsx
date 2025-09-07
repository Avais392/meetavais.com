import { projects, testimonials } from "@/lib/data";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TerminalCard from "@/components/terminal-card";
import TestimonialMarquee from "@/components/testimonial-marquee";
import { siteConfig } from "@/lib/config";
import Balancer from 'react-wrap-balancer';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[70vh]">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            <Balancer>Senior React Native Engineer Building Scalable Mobile Solutions.</Balancer>
          </h1>
          <p className="text-lg text-muted-foreground">
            <Balancer>
              Specializing in <strong className="text-foreground">React Native & Cross-Platform Mobile</strong>, I architect high-performance applications with seamless integrations for{' '}
              <strong className="text-foreground">Firebase, Stripe, and CI/CD automation</strong>.
              Proven track record with 6+ years experience serving 300K+ users across healthtech, fitness, and e-commerce platforms.
            </Balancer>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="/projects">See Flagship Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={siteConfig.calendly} target="_blank">Book a Call</Link>
            </Button>
          </div>
        </div>
        <TerminalCard />
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="text-center pt-4">
            <Button asChild variant="ghost">
                <Link href="/projects">View All Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">What People Are Saying</h2>
        <TestimonialMarquee testimonials={testimonials} />
      </section>
    </div>
  );
}

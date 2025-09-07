import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Mail, Send } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch for collaborations, hiring, or just to say hello.',
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-6">
      <h1 className="text-4xl font-bold tracking-tighter">Let&apos;s Connect</h1>
      <p className="text-lg text-muted-foreground">
        I&apos;m currently available for new opportunities and collaborations. Whether you have a mobile app project in mind, need React Native expertise, or want to discuss CI/CD automation, feel free to reach out.
      </p>
      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground">📧 {siteConfig.email}</p>
        <p className="text-sm text-muted-foreground">📱 +92 321 392 4692</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <Button asChild size="lg">
          <a href={`mailto:${siteConfig.email}`}>
            <Mail className="mr-2 h-4 w-4" /> Send an Email
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href={siteConfig.calendly} target="_blank">
            <Send className="mr-2 h-4 w-4" /> Book a Meeting
          </Link>
        </Button>
      </div>
      <div className="pt-8">
        <p className="text-muted-foreground">You can also find me on:</p>
        <div className="flex justify-center gap-4 mt-2">
            <Link href={siteConfig.links.linkedin} className="text-sm hover:underline" target="_blank">LinkedIn</Link>
            <Link href={siteConfig.links.github} className="text-sm hover:underline" target="_blank">GitHub</Link>
            <Link href={siteConfig.links.twitter} className="text-sm hover:underline" target="_blank">Twitter</Link>
        </div>
      </div>
    </div>
  );
}

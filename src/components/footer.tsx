import { siteConfig } from '@/lib/config';
import { Github, Linkedin, Twitter, FileText } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
    { name: 'GitHub', href: siteConfig.links.github, icon: Github },
    { name: 'LinkedIn', href: siteConfig.links.linkedin, icon: Linkedin },
    { name: 'Twitter', href: siteConfig.links.twitter, icon: Twitter },
    { name: 'Resume', href: siteConfig.links.resume, icon: FileText },
]

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                    {socialLinks.map(({ name, href, icon: Icon }) => (
                        <Link href={href} key={name} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Icon className="h-5 w-5" />
                            <span className="sr-only">{name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}

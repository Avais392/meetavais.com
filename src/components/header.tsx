"use client";
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import CommandMenu from './command-menu';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/stack', label: 'Stack' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">{siteConfig.name}</span>
          </Link>
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
                <Link
                key={link.href}
                href={link.href}
                className={cn(
                    'transition-colors hover:text-foreground/80',
                    pathname === link.href ? 'text-foreground' : 'text-foreground/60'
                )}
                >
                {link.label}
                </Link>
            ))}
          </div>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <CommandMenu />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

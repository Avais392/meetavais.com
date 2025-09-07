'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Button } from './ui/button';
import { projects } from '@/lib/data';
import { FileCode, Home, User, Mail, SquareStack } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = (command: () => unknown) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <Button
        variant="outline"
        className="h-9 w-9 p-0"
        onClick={() => setOpen(true)}
        aria-label="Open command menu"
      >
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
        </kbd>
        <span className="sm:hidden">🔍</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => runCommand(() => router.push('/'))}><Home className="mr-2 h-4 w-4" /><span>Home</span></CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/projects'))}><FileCode className="mr-2 h-4 w-4" /><span>Projects</span></CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/stack'))}><SquareStack className="mr-2 h-4 w-4" /><span>Stack</span></CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/about'))}><User className="mr-2 h-4 w-4" /><span>About</span></CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/contact'))}><Mail className="mr-2 h-4 w-4" /><span>Contact</span></CommandItem>
          </CommandGroup>
          <CommandGroup heading="Projects">
            {projects.map((project) => (
              <CommandItem
                key={project.slug}
                onSelect={() => runCommand(() => router.push(`/projects/${project.slug}`))}
              >
                {project.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>Light</CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>Dark</CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>System</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

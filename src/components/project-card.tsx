'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, BarChart2 } from 'lucide-react';
import type { Project } from '@/lib/schema';

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="h-full"
        >
            <Link href={`/projects/${project.slug}`} className="block h-full">
                <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 ease-in-out hover:border-primary/50">
                    <div className="relative aspect-video">
                        <Image
                            src={project.cover}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                         <div className="absolute top-2 right-2 p-2 bg-background/50 backdrop-blur-sm rounded-full text-foreground">
                            <ArrowUpRight className="h-4 w-4" />
                        </div>
                    </div>
                    <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.summary}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-end gap-4">
                        <div className="flex flex-wrap gap-2">
                            {project.stack.slice(0, 4).map((tech) => (
                                <Badge key={tech} variant="secondary">{tech}</Badge>
                            ))}
                        </div>
                        {project.metrics && project.metrics[0] && (
                            <div className="flex items-center text-sm text-green-400 gap-2 pt-2">
                                <BarChart2 className="h-4 w-4" />
                                <span>{`${project.metrics[0].name}: ${project.metrics[0].after}`}</span>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </Link>
        </motion.div>
    );
}

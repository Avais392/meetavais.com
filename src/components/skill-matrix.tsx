'use client'
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

type Skill = { name: string; depth: number };
type Skills = Record<string, Skill[]>;

// Helper to get color based on depth
const getDepthColor = (depth: number) => {
    if (depth > 90) return 'bg-primary/80 hover:bg-primary';
    if (depth > 80) return 'bg-primary/60 hover:bg-primary/80';
    if (depth > 70) return 'bg-primary/40 hover:bg-primary/60';
    return 'bg-primary/20 hover:bg-primary/40';
};

function SkillMatrixContent({ skills }: { skills: Skills }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeSkill = searchParams.get('skill');

    const handleSkillClick = (skillName: string) => {
        const newParams = new URLSearchParams(searchParams);
        if (activeSkill === skillName) {
            newParams.delete('skill');
        } else {
            newParams.set('skill', skillName);
        }
        // For this portfolio, we'll just log it. A full implementation would filter projects.
        console.log(`Filtering by: ${skillName}`);
        router.push(`/projects?${newParams.toString()}`);
    };

    return (
        <div className="space-y-8">
            {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                    <h3 className="text-xl font-semibold mb-4">{category}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {skillList.map((skill, index) => (
                            <TooltipProvider key={skill.name} delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <motion.button
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            onClick={() => handleSkillClick(skill.name)}
                                            className={cn(
                                                "p-4 rounded-lg text-left transition-all duration-300 ease-in-out",
                                                getDepthColor(skill.depth),
                                                activeSkill === skill.name && 'ring-2 ring-primary ring-offset-2 ring-offset-background'
                                            )}
                                        >
                                            <span className="font-medium text-primary-foreground">{skill.name}</span>
                                        </motion.button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Proficiency: {skill.depth}%</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function SkillMatrix({ skills }: { skills: Skills }) {
    return (
        <Suspense fallback={<div>Loading skills...</div>}>
            <SkillMatrixContent skills={skills} />
        </Suspense>
    );
}

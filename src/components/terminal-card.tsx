'use client'
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from './ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const commands = [
    { cmd: './fetch-skills', output: 'React Native, TypeScript, Node.js, Stripe API, Next.js...', duration: 2000 },
    { cmd: './run-tests', output: '✓ All 1,254 tests passed.', duration: 1500 },
    { cmd: 'git commit -m "feat: Ship pixel-perfect UI"', output: '[main 1a2b3c4] feat: Ship pixel-perfect UI', duration: 2500 },
    { cmd: 'vercel deploy --prod', output: '✅ Production deployment complete!', duration: 2000 },
];

export default function TerminalCard() {
    const [currentLine, setCurrentLine] = useState(0);
    const [typedCommand, setTypedCommand] = useState('');
    const [showOutput, setShowOutput] = useState(false);

    useEffect(() => {
        const currentCommand = commands[currentLine].cmd;
        if (typedCommand.length < currentCommand.length) {
            const timeout = setTimeout(() => {
                setTypedCommand(currentCommand.slice(0, typedCommand.length + 1));
            }, 50 + Math.random() * 50);
            return () => clearTimeout(timeout);
        } else {
            const outputTimeout = setTimeout(() => {
                setShowOutput(true);
            }, 500);
            const nextCommandTimeout = setTimeout(() => {
                setShowOutput(false);
                setTypedCommand('');
                setCurrentLine((prev) => (prev + 1) % commands.length);
            }, commands[currentLine].duration);
            return () => {
                clearTimeout(outputTimeout);
                clearTimeout(nextCommandTimeout);
            };
        }
    }, [typedCommand, currentLine]);

    return (
        <Card className="font-mono text-sm shadow-lg w-full max-w-lg mx-auto">
            <CardHeader className="p-2 border-b flex-row items-center space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </CardHeader>
            <CardContent className="p-4 h-48 overflow-hidden">
                <div className="flex items-center">
                    <span className="text-green-400">~ $</span>
                    <p className="pl-2">{typedCommand}</p>
                    <motion.div 
                        animate={{ opacity: [0, 1, 0] }} 
                        transition={{ duration: 1, repeat: Infinity }} 
                        className="w-2 h-4 bg-foreground"
                    />
                </div>
                <AnimatePresence>
                {showOutput && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <p className={cn("mt-2", commands[currentLine].output.startsWith('✓') || commands[currentLine].output.startsWith('✅') ? "text-green-400" : "text-muted-foreground")}>
                            {commands[currentLine].output}
                        </p>
                    </motion.div>
                )}
                </AnimatePresence>
            </CardContent>
        </Card>
    );
}

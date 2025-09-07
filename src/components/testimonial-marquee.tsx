import { Card, CardContent } from './ui/card';
import Image from 'next/image';

interface Testimonial {
    name: string;
    quote: string;
}

export default function TestimonialMarquee({ testimonials }: { testimonials: Testimonial[] }) {
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee hover:[animation-play-state:paused]">
                {duplicatedTestimonials.map((testimonial, index) => (
                    <Card key={index} className="flex-shrink-0 w-80 md:w-96 mx-4">
                        <CardContent className="p-6 flex flex-col items-start text-left">
                             <Image 
                                src={`https://api.dicebear.com/8.x/initials/svg?seed=${testimonial.name}`} 
                                alt={testimonial.name}
                                width={40}
                                height={40}
                                className="rounded-full mb-4 border"
                            />
                            <blockquote className="italic text-muted-foreground mb-4">&quot;{testimonial.quote}&quot;</blockquote>
                            <p className="font-semibold">{testimonial.name}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-background to-transparent" />
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-background to-transparent" />
        </div>
    );
}

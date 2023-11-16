"use client";

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs';
import { ArrowRight, Code, Image, MessageSquare, Music, Video } from 'lucide-react';
import { useRouter } from 'next/navigation';

const tools = [
    {
        label: 'Conversation',
        icon: MessageSquare,
        href: '/conversation',
        color: "text-violet-500",
        bgcolor: "bg-violet-500/10",
    },
    {
        label: 'Music Generation',
        icon: Music,
        href: '/music',
        color: "text-emerald-500",
        bgcolor: "bg-emerald-500/10",
    },
    {
        label: 'Image Generation',
        icon: Image,
        href: '/image',
        color: "text-pink-700",
        bgcolor: "bg-pink-700/10",
    },
    {
        label: 'Video Generation',
        icon: Video,
        href: '/video',
        color: "text-orange-700",
        bgcolor: "bg-orange-700/10",
    },
    {
        label: 'Code Generation',
        icon: Code,
        href: '/code',
        color: "text-green-700",
        bgcolor: "bg-green-700/10",
    },
]

const DashBoardPage = () => {
    const router = useRouter();

    return (
        <div>
            <div className='mb-8 space-y-4'>
                <h2 className='text-2xl md:text-4xl font-bold text-center'>
                    One - AI
                </h2>
                <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
                    Single AI for all things - Explore the power of AI
                </p>
            </div>
            <div className='px-4 md:px-20 lg:px-32 space-y-4'>
                {tools.map((tool) => (
                    <Card
                        onClick={() => router.push(tool.href)}
                        key={tool.href}
                        className='p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer'
                    >
                        <div className='flex items-center gap-x-4'>
                            <div className={cn('p-2 w-fit rounded-md', tool.bgcolor)} >
                                <tool.icon className={cn('w-8 h-8', tool.color)} />
                            </div>
                            <div className='font-semibold'>
                                {tool.label}
                            </div>
                        </div>
                        <ArrowRight className='w-5 h-6' />
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default DashBoardPage;
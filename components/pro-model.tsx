"use client";

import axios from "axios";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader } from "./ui/dialog";
import { useProModel } from "@/hooks/use-pro-model";
import { Badge } from "./ui/badge";
import { Check, Code, Image, MessageSquare, Music, Video, Zap } from 'lucide-react';
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useState } from "react";
import { set } from "zod";


const tools = [
    {
        label: 'Conversation',
        icon: MessageSquare,
        color: "text-violet-500",
        bgcolor: "bg-violet-500/10",
    },
    {
        label: 'Music Generation',
        icon: Music,
        color: "text-emerald-500",
        bgcolor: "bg-emerald-500/10",
    },
    {
        label: 'Image Generation',
        icon: Image,
        color: "text-pink-700",
        bgcolor: "bg-pink-700/10",
    },
    {
        label: 'Video Generation',
        icon: Video,
        color: "text-orange-700",
        bgcolor: "bg-orange-700/10",
    },
    {
        label: 'Code Generation',
        icon: Code,
        color: "text-green-700",
        bgcolor: "bg-green-700/10",
    },
]



export const ProModal = () => {
    const proModal = useProModel();
    const [loading, setLoading] = useState(false);


    const onSubscribe = async () => {
        try {
            setLoading(true);
            const response = axios.get("/api/stripe");

            window.location.href = (await response).data.url;

        } catch (error) {
            console.log(error, "Stripe Client error");
        } finally {
            setLoading(false);
        }

    }


    return (
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        <div className="flex items-center gap-x-2 font-bold py-1">
                            Upgrade to One AI
                            <Badge variant={"premium"} className="uppercase text-sm py-1">
                                Pro
                            </Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                        {tools.map((tool) => (
                            <Card
                                key={tool.label}
                                className="p-3 border-black/5 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-x-4">
                                    <div className={cn("p-2 w-fit rounded-md", tool.color)}>
                                        <tool.icon className={cn("w-6 h-6", tool.color)} />
                                    </div>
                                    <div className="font-semibold text-sm">
                                        {tool.label}
                                    </div>
                                </div>
                                <Check className="text-primary w-5 h-5" />
                            </Card>
                        ))}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        onClick={onSubscribe}
                        size={"lg"}
                        variant={"premium"}
                        className="w-full"
                    >
                        Upgrade
                        <Zap className="w-4 h-4 ml-2 fill-white" />
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "./sidebar";
import { useEffect, useState } from "react";

interface MobileSideBarProps {
    apiLimitCount: number;
    isPro: boolean;
}

const MobileSideBar = ({
    apiLimitCount = 0,
    isPro = false,
}: MobileSideBarProps) => {
    const [isMounted, selfMounted] = useState(false);

    useEffect(() => {
        selfMounted(true);
    }, []);

    if (!isMounted) return null;
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className="p-0">
                <SideBar apiLimitCount={apiLimitCount} isPro={isPro} />
            </SheetContent>
        </Sheet>
    )
}

export default MobileSideBar;
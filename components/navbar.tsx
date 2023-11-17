import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Ghost, Menu } from "lucide-react";
import MobileSideBar from "./mobile-sidebar";
import { getApiLimit } from "@/lib/api-limit";

const Navbar = async () => {
    const apiLimitCount = await getApiLimit();
    return (
        <div className="flex items-center p-4">
            <MobileSideBar apiLimitCount={apiLimitCount} />

            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    );
}

export default Navbar;
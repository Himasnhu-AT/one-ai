import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs';

const DashBoardPage = () => {
    return (
        <div>
            DashBoard Page (Protected);
            <UserButton afterSignOutUrl='/' />
        </div>
    )
}

export default DashBoardPage;
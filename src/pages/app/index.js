import { useSession } from 'next-auth/react'
import Navigation from '@/components/Navigation';

export default function app() {
    const { data:session } = useSession();
    return (
        <div className='bg-black h-screen'>
        <Navigation session={session}/>
        </div>
    )
}
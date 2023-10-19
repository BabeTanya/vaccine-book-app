import Link from 'next/link'
import TopMenuItem from './TopMenuItem'
import styles from './topmenu.module.css'
import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function TopMenu() {
    const session = await getServerSession(authOptions)
    return (
        <div className={styles.menucontainer}>
            <Link href='/'>
                <Image 
                    src={'/image/logo.png'}
                    className={styles.logoimg}
                    alt='logo'
                    width={0}
                    height={0}
                    sizes="100vh"
                />
            </Link>
            <TopMenuItem title='Booking' pageRef='/booking'/>
            {
                session ? 
                  <Link className="flex items-center absolute left-0 h-full 
                  px-2 text-cyan-600 text-sm" href='/api/auth/signout'>
                    Sign-Out of {session.user?.name}
                  </Link>
                  : <Link className="flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm"
                      href='/api/auth/signin'>
                    Sign-In
                    </Link>
            }
        </div>
    )
}
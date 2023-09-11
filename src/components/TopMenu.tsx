import Link from 'next/link'
import TopMenuItem from './TopMenuItem'
import styles from './topmenu.module.css'
import Image from 'next/image'

export default function TopMenu() {
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
        </div>
    )
}
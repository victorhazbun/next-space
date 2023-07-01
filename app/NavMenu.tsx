import Link from 'next/link';
import styles from './NavMenu.module.css';
import { SignInButton, SignOutButton } from '@/components/AuthButtons';
import AuthCheck from '@/components/AuthCheck';

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href='/' className={styles.logo}>Logo goes here</Link>
      <ul className={styles.links}>
        <li>
          <SignInButton />
        </li>
        <li>
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </li>
      </ul>
    </nav>
  );
}
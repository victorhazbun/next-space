'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <>...</>;
  }

  if (status === 'authenticated') {
    return (
      <Link href={`/`}>
        <Image
          src={session.user?.image ?? '/avatar.svg'}
          width={32}
          height={32}
          alt={session.user?.email ?? 'Avatar'}
        />
      </Link>
    );
  }

  return <button onClick={() => signIn()}>Sign in</button>;
  // return <Link href="/api/auth/signin/signin?csrf=true">Sign in</Link>;
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign out</button>;
}
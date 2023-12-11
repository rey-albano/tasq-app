"use client"

import Image from 'next/image'
import { useUserAuth } from '../login/_utils/auth-context';

export default function List() {
  const { user } = useUserAuth();

  return (
    <main className="h-screen">
      <p>Listing!</p>
      {user ? (<p>Yes</p>) : (<p>No</p>)}
    </main>
  )
}

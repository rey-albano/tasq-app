"use client"

import Image from 'next/image';
import Link from 'next/link';
import TasqLogo from './logo.png';
import { useUserAuth } from './login/_utils/auth-context';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(true); //  Set to true for testing sake
  const { user, firebaseSignOut } = useUserAuth();

  async function handleSignOut () {
    try {
        await firebaseSignOut();
    } catch (err) {
        console.log(err);
    }
  }

  return (
    <main className="h-screen z-0">
      {user ? (
        <div>
          <div className="flex flex-row-reverse mt-4 mr-4">
            <button className="shadow-2xl bg-gray-500 px-8 py-3 border-4 border-slate-800 rounded-xl text-xl group-hover:bg-slate-700 relative inline-block"
              onClick={() => {
                setIsOpen(!isOpen)
                console.log(isOpen);
              }}>              
              {isOpen && (
                <span className="absolute z-[1] bg-gray-700/[.80] top-[105%] left-1 p-2 w-[140px] text-left cursor-default">
                  <Link href="./list" className="hover:underline">List</Link><br/>
                  <Link href="./calendar" className="hover:underline">Calendar</Link>
                  <button onClick={handleSignOut} className="hover:underline">Sign out</button>
                </span>
              )}
              Logged in
            </button>
          </div>

        </div>
      ) : (
        <div className="flex flex-row-reverse mt-4 mr-4">
          <Link href="./login" className="shadow-2xl bg-gray-500 px-8 py-3 border-4 border-slate-800 rounded-xl text-xl hover:bg-slate-700">Login</Link>
        </div>
      )}
      <section className="flex flex-col translate-y-1/3">
        <div className="self-center"><Image src={TasqLogo} height="400" width="600" alt="Tasq logo"/></div>
        <p className="text-5xl self-center mt-8">Welcome to Tasq</p>
        <section className="flex justify-center gap-20 my-14">
          <Link href="./list" className="shadow-2xl bg-gray-600 px-8 py-3 border-4 border-slate-800 rounded-xl text-xl hover:bg-slate-700">Task List</Link>
          <Link href="./calendar" className="shadow-2xl bg-gray-600 px-8 py-3 border-4 border-slate-800 rounded-xl text-xl hover:bg-slate-700">Calendar</Link>
        </section>
      </section>
    </main>
  )
}
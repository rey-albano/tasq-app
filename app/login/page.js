"use client"

import Image from 'next/image'
import Link from 'next/link'
import logo from '../logo.png'
import githubLogo from './github.svg'
import { useUserAuth } from './_utils/auth-context'

export default function Login() {
  const { user, gitHubSignIn } = useUserAuth();
    
  async function handleSignIn () {
      try {
          await gitHubSignIn();
      } catch (err) {
          console.log(err);
      }
      
  }

  if (user) {
    document.location.href = '../';
  }

  return (
    <main className="h-screen flex flex-col">
      <Link href="../" className="shadow-2xl bg-gray-600 px-8 py-3 border-4 border-slate-800 rounded-xl text-xl hover:bg-slate-700 w-40 text-center m-4 absolute z-1 top-0">Go Back</Link>
      <div className="m-auto">
        <section className="bg-zinc-400 rounded-5xl w-96 h-[450px] flex flex-col drop-shadow-[7px_10px_8px_black] outline outline-zinc-500">
          <a href="../" className="flex flex-col items-center pt-14"><Image src={logo} width="280" height="104" alt="tasq logo"/></a>
          <p className="text-center mt-20 mb-1 text-2xl">Sign in with:</p>
          <section className="flex gap-8 justify-center">
            <button className="bg-gray-500 w-14 h-14 border-2 border-black rounded-md p-1"
              onClick={handleSignIn}>
              <Image src={githubLogo} height="56" width="56" alt="Github sign in"/>
            </button>
          </section>
        </section>
      </div>
    </main>
  )
}

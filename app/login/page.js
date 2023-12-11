"use client"

import Image from 'next/image'
import logo from '../logo.png'
import githubLogo from './github.svg'
import googleLogo from './icons8-google.svg'
import { useUserAuth } from './_utils/auth-context'

export default function Home() {
  const { user, gitHubSignIn } = useUserAuth();
    
  async function handleSignIn () {
      try {
          await gitHubSignIn();
      } catch (err) {
          console.log(err);
      }
      
  }

  return (
    <main className="h-screen flex flex-col">
        {/*<section className="bg-zinc-400 rounded-5xl w-96 h-112 flex flex-col">
        <Image src={logo} width="280" height="104" alt="tasq logo" className="flex items-center" />

         Username/password boxes
        <section className="">
          <div className="flex items-center flex-col mt-2">
            <p className="text-zinc-900 -ml-40">Username</p>
            <input type="text" className="rounded-md bg-gray-500 border-2 border-black p-1 w-2/3" />
          </div>
          <div className="flex items-center flex-col mt-2">
            <p className="text-zinc-900 -ml-40">Password</p>
            <input type="password" className="rounded-md bg-gray-500 border-2 border-black p-1 w-2/3" />
          </div>
        </section>

        {/* Alternate sign in methods *\/}
        <p className="text-center mt-2 mb-1">Or sign in with:</p>
        <section className="flex gap-8 justify-center">
          <button className="bg-gray-500 w-12 h-12 border-2 border-black rounded-md p-1">
            <Image src={githubLogo} height="36" width="36" alt="Github sign in"/>
          </button>
          <button className="bg-gray-500 w-12 h-12 border-2 border-black rounded-md p-1">
            <Image src={googleLogo} height="36" width="36" alt="Google sign in"/>
          </button>
        </section>

        <p className="text-center mt-14 mb-1 text-2xl">Sign in with:</p>
        <section className="flex gap-8 justify-center">
          <button className="bg-gray-500 w-14 h-14 border-2 border-black rounded-md p-1">
            <Image src={githubLogo} height="56" width="56" alt="Github sign in"/>
          </button>
          <button className="bg-gray-500 w-14 h-14 border-2 border-black rounded-md p-1">
            <Image src={googleLogo} height="56" width="56" alt="Google sign in"/>
          </button>
        </section>
      </section>
      
      The next bit in curly braces is just for user testing
      */}
      {user ? (<p>Yes</p>) : (<p>No</p>)}
      <div className="m-auto">
        <section className="bg-zinc-400 rounded-5xl w-96 h-[450px] flex flex-col drop-shadow-[7px_10px_8px_black] outline outline-zinc-500">
          <a href="../" className="flex flex-col items-center pt-14"><Image src={logo} width="280" height="104" alt="tasq logo"/></a>
          <p className="text-center mt-20 mb-1 text-2xl">Sign in with:</p>
          <section className="flex gap-8 justify-center">
            <button className="bg-gray-500 w-14 h-14 border-2 border-black rounded-md p-1"
              onClick={handleSignIn}>
              <Image src={githubLogo} height="56" width="56" alt="Github sign in"/>
            </button>
            <button className="bg-gray-500 w-14 h-14 border-2 border-black rounded-md p-1">
              <Image src={googleLogo} height="56" width="56" alt="Google sign in"/>
            </button>
          </section>
          <div className="self-center mt-[5.5rem]">
            <div className="text-zinc-600"><a target="_blank" href="https://icons8.com/icon/17949/google">Google</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></div>
          </div>
        </section>
      </div>
    </main>
  )
}

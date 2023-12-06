import Image from 'next/image'
import logo from '../logo.png'
import githubLogo from './github.svg'
import googleLogo from './icons8-google.svg'

export default function Login() {
  return (
    <main className="h-screen">
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
      </section>*/}

      <section className="bg-zinc-400 rounded-5xl w-96 h-96 block translate-x-1/2 translate-y-1/2">
        <div className="flex flex-col items-center pt-14"><Image src={logo} width="280" height="104" alt="tasq logo"/></div>
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
      <div className="flex flex-col ">
        <a target="_blank" href="https://icons8.com/icon/17949/google">Google</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
      </div>
    </main>
  )
}

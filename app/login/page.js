import Image from 'next/image'
import logo from '../logo.png'
import githubLogo from './github.svg'
import googleLogo from './icons8-google.svg'

export default function Login() {
  return (
    <main className="h-screen">
      <section className="bg-zinc-400 rounded-3xl w-96 h-96">
        <Image src={logo} alt="tasq logo"/>
        <div className="m-2">
          <div className="flex justify-center flex-col ml-14 mt-2">
            <p className="text-zinc-900 ml-2">Username</p>
            <input type="text" className="rounded-md bg-gray-500 border-2 border-black p-1 w-2/3" />
          </div>
          <div className="flex justify-center flex-col ml-14 mt-2">
            <p className="text-zinc-900 ml-2">Password</p>
            <input type="password" className="rounded-md bg-gray-500 border-2 border-black p-1 w-2/3" />
          </div>
        </div>
        <p className="text-center">Or sign in with:</p>
        <div className="flex gap-8 justify-center">
          <button className="bg-gray-500 w-12 h-12 border-2 border-black rounded-md p-1">
            <Image src={githubLogo} height="36" width="36" alt="Github sign in"/>
          </button>
          <button className="bg-gray-500 w-12 h-12 border-2 border-black rounded-md p-1">
            <Image src={googleLogo} height="36" width="36" alt="Google sign in"/>
          </button>
        </div>
      </section>
      <a target="_blank" href="https://icons8.com/icon/17949/google">Google</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    </main>
  )
}

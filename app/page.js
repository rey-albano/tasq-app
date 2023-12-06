import Image from 'next/image';
import TasqLogo from './logo.png';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-screen">
      <div className="flex flex-row-reverse mt-4 mr-4">
        <Link href="./login" className="shadow-2xl bg-gray-500 px-8 py-3 border-4 border-slate-800 rounded-xl text-xl hover:bg-slate-700">Login</Link>
      </div>
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

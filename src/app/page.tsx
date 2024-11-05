"use client"
import { Button } from "@/components/ui/button";
import { compileWelcomeTemplate, sendMail } from "@/lib/mail";
import { send } from "@/lib/testeMail";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div className='flex justify-center items-center w-full h-screen flex-col gap-2'>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className='text-gray-600 p2 w-1/4' />
      <button onClick={() => send(email)} className='bg-green-400 text-black p-3 hover:bg-green-500 w-1/4 rounded'>Cadastrar</button>
    </div>
  )
}


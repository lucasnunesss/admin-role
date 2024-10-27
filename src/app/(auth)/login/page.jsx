"use client"
import { useRouter } from "next/navigation";
import {signIn, useSession} from "next-auth/react"
import { useEffect, useState } from "react";
import {FaGoogle} from "react-icons/fa"

export default function Login(){
  const router = useRouter()
  const [loader, setLoader] = useState(false);

  const session = useSession()

  useEffect(() => {
    if(session?.status === 'authenticated'){
      router.push('/')
    }
  })

  const loginUser = async () => {
    setLoader(true);
    await signIn('google', {
      redirect: false,
      prompt: 'login'
    })
  }


  return (
    <>
      <section className="flex h-screen w-full items-center justify-center py-16">
          <div className="p-4 sm:p-7 w-full flex items-center justify-center text-center ">
            <button
              type="button"
              onClick={loginUser}
              disabled={loader}
              className="flex gap-2 items-center justify-center text-slate-800 font-medium bg-gray-300/40 p-4 rounded-md hover:bg-blue-300"
            >
            <FaGoogle size={20} fill="red" />{' '}
            {loader ? 'Sign in - Please Wait ...' : 'Signin with Google'}

            </button>

          </div>
      </section>
    </>
  )


}
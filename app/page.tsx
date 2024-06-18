"use client"

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {

  const session = useSession();

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-col gap-5">

        {session.data?.user?.name ? (
          <a href="/api/auth/signout">
            <button className="p-2 border rounded-lg text-xl">Signout</button>
          </a>) : (
          <a href="/api/auth/signin">
            <button className="p-2 border rounded-lg text-xl">Signin</button>
          </a>)}


        <a href="/page1" className="text-blue-700 underline">go to next page </a>
      </div >
    </>
  );
}

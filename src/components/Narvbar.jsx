"use client";
import logo from "@/asset/QurbaniHat2.png";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const Narvbar = () => {
  const { data, error } = authClient.useSession();
  console.log(data);
  return (
    <div className=" ">
      <div className="min-h-10 bg-black/80"></div>
      <div className=" flex  items-center justify-between  container mx-auto ">
        <div>
          <Image
            className="rounded-lg"
            src={logo}
            alt="QurbaniHat"
            height={100}
            width={100}
          ></Image>
        </div>
        <div>
          <ul className="space-x-5 font-bold ">
            <Link href="/">Home</Link>
            <Link href="/animals">All Animals </Link>
          </ul>
        </div>
        {data ? (
          <button onClick={() => authClient.signOut()} className="btn">
            Logout
          </button>
        ) : (
          <div className="flex gap-5 items-center">
            <Link href="/login">
              <button className="btn ">Login</button>
            </Link>

            <p className="text-amber-600 font-semibold">OR</p>
            <Link href="/register">
              <button className="btn ">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Narvbar;

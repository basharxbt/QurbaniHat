"use client";
import logo from "@/asset/QurbaniHat2.png";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const Narvbar = () => {
  const { data, isPending } = authClient.useSession();
  console.log(data);
  return (
    <div className=" ">
      <div className=" flex  items-center justify-between  container mx-auto ">
        <Link href="/">
          <div>
            <Image
              className="rounded-lg"
              src={logo}
              alt="QurbaniHat"
              height={100}
              width={100}
            ></Image>
          </div>
        </Link>

        <div>
          <ul className="space-x-5 font-bold ">
            <Link href="/">Home</Link>
            <Link href="/animals">All Animals </Link>
            {data ? <Link href="/my-profile">My Profile</Link> : ""}
          </ul>
        </div>
        {isPending ? (
          <span className="loading loading-bars loading-xl"></span>
        ) : (
          <div>
            {data ? (
              <div className="flex gap-5 items-center ">
                <div className="flex items-center gap-3">
                  <Link href="/my-profile">
                    <Image
                      className="rounded-full"
                      src={data.user.image}
                      alt=""
                      height={50}
                      width={50}
                    ></Image>
                  </Link>
                  <p>{data.user.name.toUpperCase()}</p>
                </div>
                <button
                  onClick={() => authClient.signOut()}
                  className="btn border border-amber-400"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-5 items-center">
                <Link href="/login">
                  <button className="btn border  border-amber-300">
                    Login
                  </button>
                </Link>

                <p className="text-amber-600 font-semibold">OR</p>
                <Link href="/register">
                  <button className="btn border  border-amber-300">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Narvbar;

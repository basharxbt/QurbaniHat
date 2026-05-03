"use client";
import logo from "@/asset/QurbaniHat2.png";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const Narvbar = () => {
  const { data, isPending } = authClient.useSession();

  const ulList = (
    <>
      <Link href="/">Home</Link>
      <Link href="/animals">All Animals </Link>
      <Link href="/my-profile">My Profile</Link>
    </>
  );

  const logOutBtn = () => {
    authClient.signOut();
    toast.success("Logout Success");
  };
  return (
    <div className=" ">
      <div className=" flex  items-center justify-around md:justify-between  container mx-auto px-5">
        <div className="flex gap-3">
          <Link href="/">
            <Image
              className="rounded-lg"
              src={logo}
              alt="QurbaniHat"
              height={100}
              width={100}
            ></Image>
          </Link>

          <div className="navbar-start md:hidden">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3"
              >
                {ulList}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <ul className="space-x-5 font-bold hidden md:block ">{ulList}</ul>
        </div>
        {isPending ? (
          <span className="loading loading-bars loading-xl"></span>
        ) : (
          <div>
            {data ? (
              <div className="flex  gap-5 items-center ">
                <div className="flex  items-center gap-3">
                  {data.user?.image && data.user.image.startsWith("http") ? (
                    <Link href="/my-profile">
                      <Image
                        className="rounded-full"
                        src={data.user?.image}
                        alt=""
                        height={50}
                        width={50}
                      ></Image>
                    </Link>
                  ) : (
                    ""
                  )}
                  <p>{data.user.name.toUpperCase()}</p>
                </div>
                <button
                  onClick={logOutBtn}
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

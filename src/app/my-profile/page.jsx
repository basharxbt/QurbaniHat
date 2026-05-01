"use client";

import { EditProfile } from "@/components/EditProfile";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import { HashLoader } from "react-spinners";

const Myprofile = () => {
  const { data, isPending } = authClient.useSession();

  if (isPending)
    return (
      <div className="flex items-center justify-center h-screen">
        <HashLoader color="#c9a420" />
      </div>
    );
  return (
    <div className="h-screen container mx-auto my-10 flex justify-center items-center">
      <div className="p-5 border flex flex-col items-center border-gray-300 space-y-2.5">
        <Image
          className="rounded-3xl w-full"
          src={data.user.image}
          alt={data.user.name}
          height={100}
          width={100}
        ></Image>
        <div>
          <p
            className="
        "
          >
            <span className="font-bold">Name:</span>{" "}
            {data.user.name.toUpperCase()}
          </p>
          <p>
            <span className="font-bold">Email:</span> {data.user.email}
          </p>
        </div>
        {/* <button className="btn bg-amber-600 text-white">Edit Profile</button> */}
        <EditProfile></EditProfile>
      </div>
    </div>
  );
};

export default Myprofile;

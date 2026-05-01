"use client";
import logo from "@/asset/QurbaniHat.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  const [readmore, setReadmore] = useState("readmore");

  return (
    <div className="bg-gray-100 ">
      <div className="py-10 flex justify-between container mx-auto">
        <div className="flex flex-col space-y-2 w-100">
          <Image
            className="rounded-full"
            src={logo}
            alt="Qurbani Hat"
            height={100}
            width={100}
          ></Image>

          <p className={`${readmore ? "line-clamp-4" : ""}`}>
            QurbaniHat is a reliable digital platform that simplifies buying
            sacrificial animals for Eid-ul-Adha. It connects customers with
            verified sellers, offering healthy and well-cared-for cattle, goats,
            and sheep with clear details on price, weight, and breed. Focused on
            convenience, transparency, and hygiene, QurbaniHat ensures a safe
            and hassle-free Qurbani experience.
          </p>
          <button
            onClick={() => setReadmore(!readmore)}
            className="text-amber-600 text-sm flex justify-end my-0"
          >
            Read more
          </button>
        </div>
        <div>
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className=" gap-3 mt-10 grid grid-cols-2">
            <Link href="/">Home</Link>
            <Link href="/animals">Animals</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>

            <Link href="/policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </ul>
        </div>
        <div>
          <h2>CONTACTS</h2>
          <ul className="mt-10 space-y-3">
            <li className="flex items-center gap-2">
              <IoCall className="text-2xl" /> Tel: +880 164 736000
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-2xl" />
              Email: shafiullahbashaar@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaLocationDot className="text-2xl" />
              Address: House # 123, Street # 45, <br /> Gulshan, Dhaka
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mb-10">
        <p className="text-gray-500 text-sm">
          <br />
          Copyright © Qurbani Hat. All Rights Reserved Site developed by{" "}
          <span className="hover:underline">
            <Link href="https://www.linkedin.com/in/shafiullahbashar/">
              Shafiullah Bashar
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;

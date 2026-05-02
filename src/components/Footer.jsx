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

          <div className="my-5 ">
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4 my-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
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

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-slate-300 transform ${
        open ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out filter`}
    >
      <div className="flex flex-col justify-center items-center mt-28">
        <Link
          href="#"
          className="text-3xl font-bold hover:text-purple-500 my-4 transition-all duration-300"
          passHref
        >
          Home
        </Link>
        <Link
          href="/home"
          className="text-3xl font-bold hover:text-purple-500 my-4 transition-all duration-300"
          passHref
        >
          Chat
        </Link>
        <Link
          href="#"
          className="text-3xl font-bold hover:text-purple-500 my-4 transition-all duration-300"
          passHref
        >
          Services
        </Link>
        <Link
          className="text-3xl font-bold hover:text-purple-500 my-4 transition-all duration-300"
          href="#"
          passHref
        >
          Gallery
        </Link>
        <Link
          href="#"
          className="text-3xl font-bold hover:text-purple-500 my-4 transition-all duration-300"
          passHref
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-300 bg-opacity-60 p-1 md:p-3 md:rounded-full mx-0 md:mx-16 shadow-lg">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-11/12 flex justify-between items-center">
        <div className="text-3xl flex ml-4 gap-3 md:ml-16 font-semibold text-black">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={40}
            height={30}
            className="object-contain rounded-full"
          />
          Aiichat
        </div>
        <div
          className="group z-50 relative w-8 h-6 cursor-pointer flex flex-col justify-between items-center"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
}

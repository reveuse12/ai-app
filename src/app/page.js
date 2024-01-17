"use client";
import Image from "next/image";
import { FaDatabase } from "react-icons/fa6";
import { FaRobot, FaUserLock } from "react-icons/fa";

import Link from "next/link";
import Navbar from "./component/Navbar";
import Spline from "@splinetool/react-spline";
export default function Home() {
  return (
    <>
      {/* Background Gradient */}
      <div className="">
        {/* Navbar */}
        <Navbar />

        <main className="flex-1">
          <header>
            {/* <!-- Container --> */}
            <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
              {/* <!-- Component --> */}
              <div class="flex flex-col gap-8 sm:gap-20 lg:flex-row-reverse">
                <div class="max-w-2xl lg:max-w-xl">
                  {/* <!-- Title --> */}
                  <h1 class="mb-4 text-4xl font-bold md:text-6xl">
                    Revolutionize your business with AI
                  </h1>
                  <p class="mb-6 max-w-lg text-sm text-[#636262] sm:text-xl lg:mb-8">
                    Our AI SaaS platform provides cutting-edge solutions to
                    transform your business. Start innovating today.
                  </p>
                  {/* <!-- Button --> */}
                  <div class="mb-6 flex items-stretch md:mb-10 lg:mb-12">
                    <Link
                      className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-purple-600 text-white font-semibold text-lg shadow-md transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                      href="/home"
                    >
                      Start Chatting now!
                    </Link>
                  </div>
                  {/* <!-- Info --> */}
                  <ul class="flex items-center gap-4">
                    <li class="mr-16">
                      <h3 class="text-2xl font-bold md:text-3xl">5.0</h3>
                      <p class="text-sm text-[#636262]">Rating</p>
                    </li>
                    <li class="mr-16">
                      <h3 class="text-2xl font-bold md:text-3xl">67K+</h3>
                      <p class="text-sm text-[#636262]">Downloads</p>
                    </li>
                    <li class="mr-16">
                      <h3 class="text-2xl font-bold md:text-3xl">1M+</h3>
                      <p class="text-sm text-[#636262]">Active Users</p>
                    </li>
                  </ul>
                </div>
                {/* <!-- Hero Image --> */}
                <div>
                  <Spline scene="https://prod.spline.design/IqRyvHIHfX9W-KPR/scene.splinecode" />
                </div>
              </div>
            </div>
          </header>
          {/* Key Features */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-200 to-gray-300 dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-8 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 text-white">
                    Key Features
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                    Transform your business with our AI
                  </h2>
                  <p className="max-w-[900px] text-gray-600 dark:text-gray-400 text-lg md:text-xl lg:text-2xl">
                    Our AI SaaS platform provides a range of features designed
                    to drive innovation and growth in your business.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-12">
                <div className="flex flex-col items-center justify-center space-y-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <FaDatabase className="h-12 w-12 text-indigo-500" />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 dark:text-gray-300">
                    Data Analysis
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Our AI tools provide deep insights into your data, helping
                    you make informed business decisions.
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <FaRobot className="h-12 w-12 text-indigo-500" />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 dark:text-gray-300">
                    Automation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Automate repetitive tasks and processes, freeing up your
                    team to focus on strategic initiatives.
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <FaUserLock className="h-12 w-12 text-indigo-500" />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 dark:text-gray-300">
                    Security
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Our platform uses advanced security measures to protect your
                    data and ensure compliance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-100 to-gray-200 dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-8 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 text-white">
                    Testimonials
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                    Trusted by businesses worldwide
                  </h2>
                  <p className="max-w-[900px] text-gray-600 dark:text-gray-400 text-lg md:text-xl lg:text-2xl">
                    Hear from our satisfied customers who have transformed their
                    businesses with our AI SaaS platform.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-12">
                {[
                  {
                    image: "/men.jpeg",
                    quote:
                      "The AI SaaS platform has revolutionized our business. The insights we have gained have been invaluable.",
                    name: "Jane Doe",
                    title: "CEO, Acme Inc",
                  },
                  {
                    image: "/women.jpeg",
                    quote:
                      "The automation features have saved us countless hours. I cannot imagine going back to our old way of doing things.",
                    name: "Alice Smith",
                    title: "CTO, XYZ Corp",
                  },
                  {
                    image: "/men2.jpeg",
                    quote:
                      "The security features give us peace of mind knowing our data is safe and secure.",
                    name: "Mark Johnson",
                    title: "CISO, Beta Corp",
                  },
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center space-y-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                  >
                    <Image
                      alt={`Testimonial ${index + 1}`}
                      width={96}
                      height={96}
                      className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
                      src={testimonial.image}
                    />
                    <blockquote className="text-lg md:text-xl lg:text-2xl font-semibold leading-snug text-gray-800 dark:text-gray-300 text-center">
                      {testimonial.quote}
                    </blockquote>
                    <div className="text-gray-600 dark:text-gray-400">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div>{testimonial.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 AI SaaS Inc. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Twitter
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              LinkedIn
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}

"use client";
import Image from "next/image";
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
          <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <Spline scene="https://prod.spline.design/IqRyvHIHfX9W-KPR/scene.splinecode" />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Revolutionize your business with AI
                    </h1>
                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                      Our AI SaaS platform provides cutting-edge solutions to
                      transform your business. Start innovating today.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    Key Features
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Transform your business with our AI
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Our AI SaaS platform provides a range of features designed
                    to drive innovation and growth in your business.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  {/* <DatabaseIcon className="mx-auto h-12 w-12" /> */}
                  <h3 className="text-xl font-bold text-center">
                    Data Analysis
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Our AI tools provide deep insights into your data, helping
                    you make informed business decisions.
                  </p>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  {/* <BotIcon className="mx-auto h-12 w-12" /> */}
                  <h3 className="text-xl font-bold text-center">Automation</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Automate repetitive tasks and processes, freeing up your
                    team to focus on strategic initiatives.
                  </p>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  {/* <LockIcon className="mx-auto h-12 w-12" /> */}
                  <h3 className="text-xl font-bold text-center">Security</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Our platform uses advanced security measures to protect your
                    data and ensure compliance.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    Testimonials
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Trusted by businesses worldwide
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Hear from our satisfied customers who have transformed their
                    businesses with our AI SaaS platform.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <img
                    alt="Testimonial"
                    className="mx-auto aspect-[1/1] overflow-hidden rounded-full object-cover"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                  />
                  <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                    “The AI SaaS platform has revolutionized our business. The
                    insights we have gained have been invaluable.“
                  </blockquote>
                  <div>
                    <div className="font-semibold">Jane Doe</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      CEO, Acme Inc
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <img
                    alt="Testimonial"
                    className="mx-auto aspect-[1/1] overflow-hidden rounded-full object-cover"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                  />
                  <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                    “The automation features have saved us countless hours. I
                    cannot imagine going back to our old way of doing things.“
                  </blockquote>
                  <div>
                    <div className="font-semibold">John Smith</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      CTO, XYZ Corp
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <img
                    alt="Testimonial"
                    className="mx-auto aspect-[1/1] overflow-hidden rounded-full object-cover"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                  />
                  <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                    “The security features give us peace of mind knowing our
                    data is safe and secure.“
                  </blockquote>
                  <div>
                    <div className="font-semibold">Alice Johnson</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      CISO, Beta Corp
                    </div>
                  </div>
                </div>
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

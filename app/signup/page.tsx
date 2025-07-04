'use client'
import Image from 'next/image';
import { useRouter } from "next/navigation";
import React from "react";

export default function Signup() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Grid Background */}
      <div
        className="
          absolute inset-0 z-0
          [background-size:40px_40px]
          [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]
        "
        aria-hidden="true"
      />
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <div className="bg-white rounded-3xl shadow-lg px-10 py-8 w-full max-w-md flex flex-col items-center">
          {/* Logo and Name inside card */}
          <div className="flex items-center justify-center mb-6">
            <Image
              src="/icons/logo.png"
              alt="AptiNation Logo"
              width={36}
              height={36}
              className="mr-2 rounded"
            />
            <span className="text-3xl font-extrabold tracking-tight text-black">AptiNation</span>
          </div>
          {/* Signup Form */}
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-5 flex gap-4">
              <div className="w-1/2">
                <label className="block text-lg font-medium mb-2 text-black">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full px-5 py-3 rounded-full border border-gray-300 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-lg font-medium mb-2 text-black">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full px-5 py-3 rounded-full border border-gray-300 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-lg font-medium mb-2 text-black">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-5 py-3 rounded-full border border-gray-300 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2 text-black">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-5 py-3 rounded-full border border-gray-300 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-3 rounded-full text-lg transition cursor-pointer hover:bg-gray-900"
            >
              Sign Up
            </button>
          </form>
          <div className="flex items-center my-6 w-full">
            <div className="flex-grow h-px bg-gray-200" />
            <span className="mx-2 text-gray-400 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-200" />
          </div>
          <button
            className="flex items-center justify-center cursor-pointer w-full py-3 rounded-full border border-gray-300 bg-white text-black font-bold text-lg shadow-sm transition hover:bg-gray-100"
            type="button"
          >
            <img
              src="https://www.citypng.com/public/uploads/preview/google-logo-icon-gsuite-hd-701751694791470gzbayltphh.png"
              alt="Google logo"
              className="h-5 w-5 mr-2"
              width={20}
              height={20}
            />
            Sign up with Google
          </button>
        </div>
        <div className="mt-4">
          <a
            href="#"
            className="text-lg underline text-black hover:text-gray-700"
            onClick={() => router.push("/login")}
          >
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
}

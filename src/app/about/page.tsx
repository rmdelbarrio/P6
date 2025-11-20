"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, Menu, Bell, User } from "lucide-react";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Top Navigation */}
      <header className="relative flex items-center justify-between px-4 py-3 bg-white shadow">
        <div className="flex items-center gap-3">
          {/* Menu dropdown */}
          <div className="relative">
            <button
              className="p-2 hover:bg-gray-200 rounded-full transition"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <Menu className="w-6 h-6" />
            </button>

            {open && (
              <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md border z-20"
              >
                <nav className="flex flex-col p-2 text-gray-700">
                  <a href="/" className="px-3 py-2 rounded hover:bg-gray-100">Home</a>
                  <a href="/about" className="px-3 py-2 rounded bg-gray-100 font-semibold">About</a>
                  <a href="/education" className="px-3 py-2 rounded hover:bg-gray-100">Education</a>
                  <a href="/hobbies" className="px-3 py-2 rounded hover:bg-gray-100">Hobbies</a>
                  <a href="/contact" className="px-3 py-2 rounded hover:bg-gray-100">Contact</a>
                </nav>
              </div>
            )}
          </div>

          <h1 className="text-xl font-bold text-red-600">About Me</h1>
        </div>

        <div className="flex items-center gap-4">
          <Bell className="w-6 h-6" />
          <Image
            src="/rmdb.png"
            alt="Profile Icon"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
        </div>
      </header>

      {/* Banner and Profile Section */}
      <main className="max-w-5xl mx-auto p-6">
        <div className="w-full h-48 bg-gradient-to-r from-red-500 to-red-700 rounded-xl shadow mb-6"></div>

        <div className="flex items-start gap-6">
          <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center shadow-md">
            <User className="w-14 h-14 text-gray-600" />
          </div>

          <div>
            <h2 className="text-3xl font-bold">Yuki</h2>
            <p className="text-gray-600 mt-1">Welcome to my channel-inspired personal page!</p>

            <p className="text-gray-700 mt-4 leading-relaxed max-w-2xl">
              I'm someone who enjoys learning, creating, and exploring different forms of art and technology. This website is my personal corner of the internet, inspired by YouTube's clean layout but shaped around who I am.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed max-w-2xl">
              Here you’ll find more about my education, hobbies, and ways to contact me. Think of this as my channel profile — but in website form.
            </p>
          </div>
        </div>

        {/* Sections */}
        <h3 className="text-2xl font-bold mt-10 mb-4">Sections</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="/education" className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <div className="w-full h-40 bg-gray-300 rounded-lg mb-3"></div>
            <h3 className="text-lg font-semibold">Education</h3>
            <p className="text-sm text-gray-600">Learn about my academic background.</p>
          </a>

          <a href="/hobbies" className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <div className="w-full h-40 bg-gray-300 rounded-lg mb-3"></div>
            <h3 className="text-lg font-semibold">Hobbies</h3>
            <p className="text-sm text-gray-600">See what I love doing in my free time.</p>
          </a>

          <a href="/contact" className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <div className="w-full h-40 bg-gray-300 rounded-lg mb-3"></div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-sm text-gray-600">Get in touch with me.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
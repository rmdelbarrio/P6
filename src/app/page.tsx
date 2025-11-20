"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, Bell } from "lucide-react";

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
                  <a href="/" className="px-3 py-2 rounded bg-gray-100 font-semibold">Home</a>
                  <a href="/about" className="px-3 py-2 rounded hover:bg-gray-100">About</a>
                  <a href="/education" className="px-3 py-2 rounded hover:bg-gray-100">Education</a>
                  <a href="/hobbies" className="px-3 py-2 rounded hover:bg-gray-100">Hobbies</a>
                  <a href="/contact" className="px-3 py-2 rounded hover:bg-gray-100">Contact</a>
                </nav>
              </div>
            )}
          </div>

          <h1 className="text-xl font-bold text-red-600">RMDBSite</h1>
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

      {/* Main Content */}
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">Welcome to My Personal Website</h2>
        <p className="text-gray-700 max-w-2xl">
          Ellour! welcome to my side of the internet.
          Explore my About me, Education, Hobbies, and Contact pages to learn more
          about me.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <a href="/about" className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <div className="w-full h-40 rounded-lg mb-3 overflow-hidden">
            <Image
              src="/rmdb.png"
              alt="About Me"
              width={400}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
            <h3 className="text-lg font-semibold">About Me</h3>
            <p className="text-sm text-gray-600">Get to know who I am.</p>
          </a>

          <a href="/education" className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <div className="w-full h-40 rounded-lg mb-3 overflow-hidden">
            <Image
              src="/ncf.png"
              alt="ncf"
              width={400}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
            <h3 className="text-lg font-semibold">Education</h3>
            <p className="text-sm text-gray-600">My academic background.</p>
          </a>

          <a href="/hobbies" className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <div className="w-full h-40 rounded-lg mb-3 overflow-hidden">
            <Image
              src="/Nightwalk.png"
              alt="NW"
              width={400}
              height={160}
              className="object-cover w-full h-full"
            />
            </div>
            <h3 className="text-lg font-semibold">Hobbies</h3>
            <p className="text-sm text-gray-600">Things I love doing.</p>
          </a>

          <a href="/contact" className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <div className="w-full h-40 bg-gray-300 rounded-lg mb-3"></div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-sm text-gray-600">Reach out to me.</p>
          </a>
        </div>
      </main>
    </div>
  );
}

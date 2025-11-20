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

            {/* Dropdown */}
            {open && (
              <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md border z-20"
              >
                <nav className="flex flex-col p-2 text-gray-700">
                  <a href="/" className="px-3 py-2 rounded hover:bg-gray-100">Home</a>
                  <a href="/about" className="px-3 py-2 rounded hover:bg-gray-100">About</a>
                  <a href="/education" className="px-3 py-2 rounded hover:bg-gray-100">Education</a>
                  <a href="/hobbies" className="px-3 py-2 rounded bg-gray-100 font-semibold">Hobbies</a>
                  <a href="/contact" className="px-3 py-2 rounded hover:bg-gray-100">Contact</a>
                </nav>
              </div>
            )}
          </div>

          <h1 className="text-xl font-bold text-red-600">Hobbies</h1>
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
      <main className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Things I Enjoy Doing</h2>
        <p className="text-gray-700 max-w-2xl mb-6">
          Here are some of the hobbies and passions that make my everyday life more meaningful and fun.
        </p>

        {/* YouTube-style cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <div className="w-full h-40 rounded-lg mb-3 overflow-hidden">
            <Image
              src="/art.png"
              alt="art"
              width={400}
              height={160}
              className="object-cover w-full h-full"
            />
            </div>
            <h3 className="text-lg font-semibold">Digital Art</h3>
            <p className="text-sm text-gray-600">Drawing illustrations and fanart.</p>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <div className="w-full h-40 rounded-lg mb-3 overflow-hidden">
            <Image
              src="/code.jpg"
              alt="cd"
              width={400}
              height={160}
              className="object-cover w-full h-full"
            />
            </div>
            <h3 className="text-lg font-semibold">Coding</h3>
            <p className="text-sm text-gray-600">Trying to build apps, games, and websites.</p>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <div className="w-full h-40 rounded-lg mb-3 overflow-hidden">
            <Image
              src="/Nightwalk.png"
              alt="NW"
              width={400}
              height={160}
              className="object-cover w-full h-full"
            />
            </div>
            <h3 className="text-lg font-semibold">Music</h3>
            <p className="text-sm text-gray-600">Listening, exploring genres, relaxing.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

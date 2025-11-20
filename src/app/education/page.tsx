"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, Bell, Book } from "lucide-react";

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
                  <a href="/about" className="px-3 py-2 rounded hover:bg-gray-100">About</a>
                  <a href="/education" className="px-3 py-2 rounded bg-gray-100 font-semibold">Education</a>
                  <a href="/hobbies" className="px-3 py-2 rounded hover:bg-gray-100">Hobbies</a>
                  <a href="/contact" className="px-3 py-2 rounded hover:bg-gray-100">Contact</a>
                </nav>
              </div>
            )}
          </div>

          <h1 className="text-xl font-bold text-red-600">Education</h1>
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
        <h2 className="text-2xl font-bold mb-4">My Academic Journey</h2>
        <p className="text-gray-700 max-w-2xl mb-6">
          This section highlights the schools, courses, and milestones that helped me through this journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <div className="w-full h-40 rounded-lg mb-3 overflow-hidden">
            <Image
              src="/unc.png"
              alt="UNC"
              width={400}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
            <h3 className="text-lg font-semibold">High School</h3>
            <p className="text-sm text-gray-600">Completed my high school education in UNC with honors.</p>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <div className="w-full h-40 rounded-lg mb-3 overflow-hidden">
            <Image
              src="/ncf.png"
              alt="ncf"
              width={400}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
            <h3 className="text-lg font-semibold">College</h3>
            <p className="text-sm text-gray-600"> Currently tudying Computer Science in NCF.</p>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <div className="w-full h-40 bg-gray-300 rounded-lg mb-3 flex items-center justify-center">
              <Book className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold">Workshops & Certifications</h3>
            <p className="text-sm text-gray-600">Attended workshops and earned certificates to enhance skills.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, Bell, Mail } from "lucide-react";

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
                  <a href="/education" className="px-3 py-2 rounded hover:bg-gray-100">Education</a>
                  <a href="/hobbies" className="px-3 py-2 rounded hover:bg-gray-100">Hobbies</a>
                  <a href="/contact" className="px-3 py-2 rounded bg-gray-100 font-semibold">Contact</a>
                </nav>
              </div>
            )}
          </div>

          <h1 className="text-xl font-bold text-red-600">Contact</h1>
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
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-700 max-w-2xl mb-6">
          I’d love to hear from you! Feel free to reach out via the contact form below or email me directly.
          Rommelmichaeld@gmail.com.
        </p>

        <form className="bg-white rounded-xl shadow p-6 max-w-xl">
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
            <input className="w-full border border-gray-300 rounded p-2" type="text" id="name" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
            <input className="w-full border border-gray-300 rounded p-2" type="email" id="email" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
            <textarea className="w-full border border-gray-300 rounded p-2" id="message" rows={4}></textarea>
          </div>

          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition" type="submit">
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}

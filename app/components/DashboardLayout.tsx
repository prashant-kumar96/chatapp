"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { initFlowbite } from "flowbite";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full bg-neutral-primary-soft border-b border-default">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                data-drawer-target="top-bar-sidebar"
                data-drawer-toggle="top-bar-sidebar"
                aria-controls="top-bar-sidebar"
                type="button"
                className="sm:hidden p-2 rounded-base hover:bg-neutral-secondary-medium"
              >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path stroke="currentColor" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
                </svg>
              </button>

              <Link href="/" className="flex ms-2">
                <Image
                  src="https://flowbite.com/docs/images/logo.svg"
                  alt="Logo"
                  width={24}
                  height={24}
                />
                <span className="ml-2 text-lg font-semibold">Flowbite</span>
              </Link>
            </div>

            {/* USER MENU */}
            <button
              data-dropdown-toggle="dropdown-user"
              className="rounded-full"
            >
              <Image
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="User"
                width={32}
                height={32}
                className="rounded-full"
              />
            </button>

            <div
              id="dropdown-user"
              className="hidden z-50 w-44 bg-neutral-primary-medium border rounded-base shadow"
            >
              <div className="px-4 py-3 border-b">
                <p className="text-sm font-medium">Neil Sims</p>
                <p className="text-sm truncate">neil.sims@flowbite.com</p>
              </div>
              <ul className="p-2 text-sm">
                <li><Link href="#" className="block p-2 hover:bg-neutral-tertiary-medium">Dashboard</Link></li>
                <li><Link href="#" className="block p-2 hover:bg-neutral-tertiary-medium">Settings</Link></li>
                <li><Link href="#" className="block p-2 hover:bg-neutral-tertiary-medium">Sign out</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* SIDEBAR */}
    <Sidebar />

      {/* MAIN CONTENT */}
      <main className="p-4 sm:ml-64 mt-14">
        asl;djiopas
        <div className="p-4 border border-dashed rounded-base">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-24 bg-neutral-secondary-soft rounded-base" />
            <div className="h-24 bg-neutral-secondary-soft rounded-base" />
            <div className="h-24 bg-neutral-secondary-soft rounded-base" />
          </div>
        </div>
      </main>
    </>
  );
}

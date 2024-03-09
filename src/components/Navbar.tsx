'use client'

import Link from "next/link"
import ThemeSwitcher from "./ThemeSwitcher"
import TempLogo from "@/icons/templogo.svg"
import { useState } from "react"
import useScroll from "@/hooks/useOnScroll"

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const isScrolled = useScroll(0);

  return (
    <header className="h-16 py-2 fixed w-full top-0 z-[1000]">
      <div
        className={`fixed inset-0 h-16 ${
          isScrolled ?
            'border-b border-gray-200 dark:border-slate-800 backdrop-blur-[9px]':
            'bg-white dark:bg-dark-1'
        }`}
      />
      <nav className="relative flex flex-wrap items-center justify-between mx-auto max-w-[1320px] px-4">
        <div className="order-0">
          <Link href="/" className="max-h-full max-w-full inline-block">
            <TempLogo />
          </Link>
        </div>

        <input id="nav-toggle" type="checkbox" className="hidden" />
        <label
          htmlFor="nav-toggle"
          className="order-3 cursor-pointer flex items-center lg:hidden lg:order-1"
          onClick={() => {setNavbar(!navbar)}}
        >
          <svg
            id="menu-button"
            className={`h-6 fill-current ${
              navbar ? "hidden": "block"
            }`}
            viewBox="0 0 20 20"
          >
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
          </svg>
          <svg
            id="close-button"
            className={`h-6 fill-current ${
              navbar ? "block": "hidden"
            }`}
            viewBox="0 0 20 20"
          >
            <title>Menu Close</title>
            <polygon
              points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)"
            ></polygon>
          </svg>
        </label>

        <ul
          id="nav-menu"
          className={`text-center lg:text-left order-3 w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8 ${
            navbar ? "block": "hidden"
          }`}
        >
          <li className="mx-3">
            <Link 
              href="/blog" 
              className="block p-3 font-semibold hover:scale-125 transition-all ease duration-200 lg:px-2 lg:py-3"
              onClick={() => {setNavbar(!navbar)}}
            >
              Blog
            </Link>
          </li>
          <li className="mx-3">
            <Link 
              href="/projects" 
              className="block p-3 font-semibold hover:scale-125 transition-all ease duration-200 lg:px-2 lg:py-3"
              onClick={() => {setNavbar(!navbar)}}
            >
              Projects
            </Link>
          </li>
          <li className="mx-3">
            <Link 
              href="/contact" 
              className="block p-3 font-semibold hover:scale-125 transition-all ease duration-200 lg:px-2 lg:py-3"
              onClick={() => {setNavbar(!navbar)}}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
          <ThemeSwitcher className="mr-5"/>
        </div>
      </nav>
    </header>
  )
}
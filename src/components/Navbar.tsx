'use client'

import Link from "next/link"
import ThemeSwitcher from "./ThemeSwitcher"
import TempLogo from "@/icons/templogo.svg"
import GitHubIcon from '@/icons/github.svg';
import LinkedInIcon from '@/icons/linkedin.svg';
import SpotifyIcon from '@/icons/spotify.svg';
import { useState } from "react"
import useScroll from "@/hooks/useOnScroll"

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const isScrolled = useScroll(0);

  return (
    <div>
      <header className="navbar-header">
        <div
          className={`navbar-scroll-common ${
            isScrolled ?
              'navbar-scroll' :
              'navbar-no-scroll'
          }`}
        />
        <nav className="navbar-main">
          <div className="navbar-logo">
            <Link href="/" className="navbar-logo-link">
              <TempLogo />
            </Link>
          </div>

          <button
            className="navbar-toggle"
            onClick={() => {setNavbar(!navbar)}}
          >
            <div
              className={`navbar-menu-button ${
                navbar ? 
                  "navbar-menu-close-1" : 
                  "navbar-menu-open"
              }`}
            />
            <div 
              className={`navbar-menu-button ${
                navbar ? 
                  "navbar-menu-close-2" : 
                  "navbar-menu-open"
              }`} />
            <div
              className={`navbar-menu-button ${
                navbar ? 
                  "navbar-menu-close-3" :
                  "navbar-menu-open"
              }`}
            />
          </button>

          <ul
            id="nav-menu"
            className="navbar-list"
          >
            <li className="ml-2">
              <Link 
                href="/blog" 
                className="navbar-item"
              >
                Blog
              </Link>
            </li>
            <li className="ml-2">
              <Link 
                href="/projects" 
                className="navbar-item"
              >
                Projects
              </Link>
            </li>
            <li className="ml-2">
              <Link 
                href="/about" 
                className="navbar-item"
              >
                About
              </Link>
            </li>
          </ul>

          <div className={navbar ? "hidden" : "navbar-theme"}>
            <ThemeSwitcher />
          </div>
        </nav>
      </header>
      <nav
        className={navbar ? `navbar-menu navbar-menu-overlay` : `navbar-menu`}
        onClick={() => {setNavbar(!navbar)}}
      >
        <div className="navbar-menu-main">
          <ul className="navbar-menu-list">
            <li className="navbar-menu-item">
              <Link 
                href="/blog" 
                className="navbar-menu-link"
              >
                Blog
              </Link>
            </li>
            <li className="navbar-menu-item">
              <Link 
                href="/projects" 
                className="navbar-menu-link"
              >
                Projects
              </Link>
            </li>
            <li className="navbar-menu-item">
              <Link 
                href="/about" 
                className="navbar-menu-link"
              >
                About
              </Link>
            </li>
          </ul>

          <ul className="navbar-menu-socials">
            <li className="navbar-menu-social-item">
              <a
                href="https://www.linkedin.com/in/tarun-gowda/"
                target="_blank"
                rel="noreferrer nofollow"
                className='footer-website-link'
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedInIcon className="footer-icon hover:text-[#0077b5]" />
              </a>
            </li>
            <li className="navbar-menu-social-item">
              <a
                href="https://github.com/ibizabroker"
                target="_blank"
                rel="noreferrer nofollow"
                className='footer-website-link'
                aria-label="GitHub"
                title="GitHub"
              >
                <GitHubIcon className="footer-icon dark:hover:text-white hover:text-black" />
              </a>
            </li>
            <li className="navbar-menu-social-item">
              <a
                href="https://open.spotify.com/user/5lygea2hzqyo0yan37gvswbx0?si=dd01e11347574abf"
                target="_blank"
                rel="noreferrer nofollow"
                className='footer-website-link'
                aria-label="Spotify"
                title="Spotify"
              >
                <SpotifyIcon className="footer-icon hover:text-[#1ED760]" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
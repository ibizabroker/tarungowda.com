import Link from 'next/link';
import GitHubIcon from '@/icons/github.svg';
import LinkedInIcon from '@/icons/linkedin.svg';
import SpotifyIcon from '@/icons/spotify.svg';

export default function Footer() {
  let getYear = () => {
    return new Date().getFullYear();
  }

  return (
    <footer className='footer-main'>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='footer-content-max'>
            <div className='footer-heading-1'>
              tarungowda.com
            </div>
            <p className='footer-content-1'>
              Unleashing endless possibilities through code exploration and innovation.
            </p>
            <ul className='footer-website-list'>
              <li>
                <a
                  href="https://www.linkedin.com/in/tarun-gowda/"
                  target="_blank"
                  rel="noreferrer nofollow"
                  className='footer-website-link'
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <LinkedInIcon className='footer-icon hover:text-[#0077b5]' />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ibizabroker"
                  target="_blank"
                  rel="noreferrer nofollow"
                  className='footer-website-link'
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <GitHubIcon className='footer-icon dark:hover:text-white hover:text-black' />
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/user/5lygea2hzqyo0yan37gvswbx0?si=dd01e11347574abf"
                  target="_blank"
                  rel="noreferrer nofollow"
                  className='footer-website-link'
                  aria-label="Spotify"
                  title="Spotify"
                >
                  <SpotifyIcon className='footer-icon hover:text-[#1ED760]' />
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-content-2'>
            <div>
              <div className='footer-heading-2'>
                This Site
              </div>
              <ul className='footer-content-list'>
                <li className='footer-content-sublist'>
                  <a
                    href="https://github.com/ibizabroker/tarungowda"
                    target="_blank"
                    rel="noreferrer nofollow"
                    className='footer-link'
                  >
                    Source Code
                  </a>
                </li>
                <li className='footer-content-sublist'>
                  <Link href="/blog" className='footer-link'>
                    Blog
                  </Link>
                </li>
                <li className='footer-content-sublist'>
                  <Link href="/projects" className='footer-link'>
                    Projects
                  </Link>
                </li>
                <li className='footer-content-sublist'>
                  <Link href="/about" className='footer-link'>
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-info'>
          <div>
            Built with Next.js, TailwindCSS, ContentLayer & Vercel.
          </div>
          <div className='footer-info-copyright'>
            <strong>&copy;</strong> {getYear()}, Tarun Gowda
          </div>
        </div>
      </div>
    </footer>
  );
}
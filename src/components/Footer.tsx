import Link from 'next/link';

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
                  aria-label="LinkedIn profile"
                  title="LinkedIn profile"
                >
                  {/* <LinkedInIcon className='footer-icon' /> */}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ibizabroker"
                  target="_blank"
                  rel="noreferrer nofollow"
                  className='footer-website-link'
                  aria-label="GitHub profile"
                  title="GitHub profile"
                >
                  {/* <GitHubIcon className='footer-icon' /> */}
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
                  <Link href="/contact" className='footer-link'>
                    Contact
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
          <div>
            <strong>&copy;</strong> {getYear()}, Tarun Gowda
          </div>
        </div>
      </div>
    </footer>
  );
}
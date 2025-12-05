import { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { portfolioData } from '../../data/portfolio';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="layout">
      <Head>
        <title>{portfolioData.title} | {portfolioData.subtitle}</title>
        <meta name="description" content={portfolioData.description} />
        <meta name="keywords" content={portfolioData.keywords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={portfolioData.websiteUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={portfolioData.websiteUrl} />
        <meta property="og:title" content={`${portfolioData.title} | ${portfolioData.subtitle}`} />
        <meta property="og:description" content={portfolioData.description} />
        <meta property="og:image" content={`${portfolioData.websiteUrl}/logo.png`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={portfolioData.websiteUrl} />
        <meta property="twitter:title" content={`${portfolioData.title} | ${portfolioData.subtitle}`} />
        <meta property="twitter:description" content={portfolioData.description} />
        <meta property="twitter:image" content={`${portfolioData.websiteUrl}/logo.png`} />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": portfolioData.title,
              "url": portfolioData.websiteUrl,
              "image": `${portfolioData.websiteUrl}/logo.png`,
              "sameAs": [
                portfolioData.social.twitter,
                portfolioData.social.linkedin,
                portfolioData.social.github
              ],
              "jobTitle": portfolioData.subtitle,
              "worksFor": {
                "@type": "Organization",
                "name": "Razorpay"
              },
              "description": portfolioData.description
            })
          }}
        />
      </Head>

      <header className={`navbar ${isOpen ? 'open' : ''}`}>
        <div className="container nav-content">
          <div className="logo">
            <Link href="/">
              <img src="/logo.png" alt={portfolioData.title} className="logo-img" />
            </Link>
          </div>

          <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li onClick={() => setIsOpen(false)}><a href="#experience">Experience</a></li>
              <li onClick={() => setIsOpen(false)}><a href="#skills">Expertise</a></li>
              <li onClick={() => setIsOpen(false)}><a href="#projects">Work</a></li>
              <li onClick={() => setIsOpen(false)}><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>© {new Date().getFullYear()} {portfolioData.title}.</p>
            <div className="footer-links">
              <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={portfolioData.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(2, 6, 23, 0.85); /* Deep Navy with high opacity */
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--glass-border);
          padding: 1rem 0;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-img {
          height: 40px;
          width: auto;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .logo-img:hover {
          transform: scale(1.05);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .nav-links a:hover {
          color: var(--accent-primary);
        }

        main {
          flex: 1;
          padding-top: 80px; /* Offset for fixed header */
        }

        .footer {
          background: var(--bg-secondary);
          padding: 2rem 0;
          border-top: 1px solid var(--glass-border);
          margin-top: 4rem;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .footer-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-links a {
          color: var(--text-secondary);
        }

        .footer-links a:hover {
          color: var(--accent-primary);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px;
          z-index: 1001;
        }

        .bar {
          width: 25px;
          height: 2px;
          background-color: var(--text-primary);
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background: rgba(2, 6, 23, 0.98);
            backdrop-filter: blur(15px);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: right 0.3s ease;
            z-index: 1000;
          }

          .nav-menu.active {
            right: 0;
          }

          .nav-links {
            flex-direction: column;
            align-items: center;
            gap: 3rem;
          }

          .nav-links a {
            font-size: 1.5rem;
          }
          
          .footer-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          /* Hamburger Animation */
          .navbar.open .bar:nth-child(1) {
            transform: rotate(45deg) translate(5px, 6px);
          }
          .navbar.open .bar:nth-child(2) {
            opacity: 0;
          }
          .navbar.open .bar:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -6px);
          }
        }
      `}</style>
    </div>
  )
}
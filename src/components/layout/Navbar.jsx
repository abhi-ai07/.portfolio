import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { NAV_LINKS, SECONDARY_LINKS, SOCIALS } from '../../lib/theme'

const SOCIAL_ICONS = [
  { icon: FaLinkedinIn, href: SOCIALS.linkedin, label: 'LinkedIn' },
  { icon: FaGithub, href: SOCIALS.github, label: 'GitHub' },
  { icon: FaInstagram, href: SOCIALS.instagram, label: 'Instagram' },
  { icon: HiOutlineMail, href: `mailto:${SOCIALS.email}`, label: 'Email' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-premium ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 md:px-10 flex items-center justify-between rounded-2xl transition-all duration-500 ease-premium ${
          scrolled ? 'glass-strong shadow-glass py-2.5' : 'bg-transparent py-1'
        }`}
      >
        {/* AK monogram, stacked with small red dot accents */}
        <NavLink to="/" className="relative font-display text-2xl leading-none select-none" aria-label="Abhishek Kashyap — home">
          <span className="relative inline-block">
            A
            <span className="absolute -top-1 -right-1.5 w-1 h-1 rounded-sm bg-accent" />
          </span>
          <span className="relative inline-block -ml-0.5">
            K
            <span className="absolute -bottom-0.5 -right-1.5 w-1 h-1 rounded-sm bg-accent" />
          </span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-1 font-body text-sm">
  {NAV_LINKS.map((link) => {
    if (link.to === "#contact") {
      return (
        <button
          key={link.label}
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="px-3.5 py-2 text-ink-dim hover:text-ink transition-colors duration-300"
        >
          {link.label}
        </button>
      );
    }

    return (
      <NavLink
        key={link.to}
        to={link.to}
        className={({ isActive }) =>
          `relative px-3.5 py-2 transition-colors duration-300 ${
            isActive ? "text-ink" : "text-ink-dim hover:text-ink"
          }`
        }
      >
        {({ isActive }) => (
          <>
            {link.label}
            {isActive && (
              <motion.span
                layoutId="nav-active-underline"
                className="absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-accent"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
          </>
        )}
      </NavLink>
    );
  })}
</nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            {SOCIAL_ICONS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid place-items-center w-9 h-9 rounded-lg card-outline text-ink-dim hover:text-accent hover:border-accent/40 transition-colors duration-300"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>

          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-lg card-outline"
          >
            {menuOpen ? <HiOutlineX className="text-xl" /> : <HiOutlineMenu className="text-xl" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden mx-4 mt-3 rounded-2xl glass-strong shadow-glass overflow-hidden"
          >
            <nav className="flex flex-col p-2 font-body text-sm">
              {NAV_LINKS.map((link) => {
  if (link.to === "#contact") {
    return (
      <button
        key={link.label}
        onClick={() => {
          setMenuOpen(false);
          document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
        className="w-full px-4 py-3 rounded-xl text-left text-ink-dim hover:text-ink"
      >
        {link.label}
      </button>
    );
  }

  return (
    <NavLink
      key={link.to}
      to={link.to}
      onClick={() => setMenuOpen(false)}
      className={({ isActive }) =>
        `px-4 py-3 rounded-xl transition-colors ${
          isActive ? "text-ink bg-white/5" : "text-ink-dim"
        }`
      }
    >
      {link.label}
    </NavLink>
  );
})}
              <div className="flex gap-4 px-4 py-2 text-xs">
                {SECONDARY_LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="text-ink-dim hover:text-accent transition-colors"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
              <div className="flex items-center gap-2 px-4 py-3">
                {SOCIAL_ICONS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="grid place-items-center w-9 h-9 rounded-lg card-outline text-ink-dim"
                  >
                    <Icon className="text-sm" />
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

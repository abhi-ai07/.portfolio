import { motion } from 'framer-motion'
import { HiArrowRight, HiOutlineEnvelope, HiOutlinePhone } from 'react-icons/hi2'
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import MagneticButton from '../ui/MagneticButton'
import { SOCIALS } from '../../lib/theme'

const CONTACT_CARDS = [
  { icon: HiOutlineEnvelope, label: 'Email', value: SOCIALS.email, href: `mailto:${SOCIALS.email}` },
  { icon: HiOutlinePhone, label: 'Phone', value: SOCIALS.phone, href: `tel:${SOCIALS.phone.replace(/\s/g, '')}` },
  { icon: FaWhatsapp, label: 'WhatsApp', value: '9690353196', href: SOCIALS.whatsapp },
]

const SOCIAL_ICONS = [
  { icon: FaLinkedinIn, href: SOCIALS.linkedin, label: 'LinkedIn' },
  { icon: FaGithub, href: SOCIALS.github, label: 'GitHub' },
  { icon: FaInstagram, href: SOCIALS.instagram, label: 'Instagram' },
  { icon: HiOutlineMail, href: `mailto:${SOCIALS.email}`, label: 'Email' },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 px-5 md:px-10 pb-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl glass shadow-glass p-6 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center"
        >
          <div>
            <p className="font-body text-xs uppercase tracking-[0.15em] text-accent mb-2">Let&apos;s Work Together</p>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-2">
              Let&apos;s Build Something <span className="italic text-accent">Amazing</span>
            </h2>
            <p className="text-ink-dim text-sm mb-5">I&apos;m open to new opportunities and collaborations.</p>
            <a
              href={`mailto:${SOCIALS.email}`}
              className="group inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-[0.18em] text-accent transition-all duration-300 hover:gap-3"
            >
              Hire Me

              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid xs:grid-cols-3 gap-3">
            {CONTACT_CARDS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl card-outline-accent px-4 py-3 hover:shadow-glow-soft transition-shadow duration-300"
              >
                <span className="grid place-items-center w-9 h-9 rounded-lg bg-accent/15 text-accent shrink-0">
                  <Icon className="text-base" />
                </span>
                <div className="min-w-0">
                  <p className="text-ink-dim text-[11px] uppercase tracking-wide">{label}</p>
                  <p className="text-ink text-sm truncate">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-ink-dim text-xs font-body">
          <span className="font-display text-lg text-ink">
            AK<span className="text-accent">.</span>
          </span>
          <span>&copy; 2026 Abhishek Kashyap. All rights reserved.</span>
          <div className="flex items-center gap-2">
            {SOCIAL_ICONS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid place-items-center w-8 h-8 rounded-lg card-outline hover:text-accent hover:border-accent/40 transition-colors duration-300"
              >
                <Icon className="text-xs" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

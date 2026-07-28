import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { HiArrowDown, HiArrowDownTray, HiArrowRight } from 'react-icons/hi2'
import HeroCanvas from './HeroCanvas'
import MagneticButton from '../ui/MagneticButton'
import { useTypewriter } from '../../hooks/useTypewriter'
import { ROLES, SOCIALS } from '../../lib/theme'
import avatarHeadphones from '../../assets/images/avatar-headphones.png'

export default function Hero() {
  const { text } = useTypewriter(ROLES)

  const mouseX = useMotionValue(0)
const mouseY = useMotionValue(0)

const imageX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
  stiffness: 120,
  damping: 20,
})

const imageY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-12, 12]), {
  stiffness: 120,
  damping: 20,
})

const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-28, 28]), {
  stiffness: 100,
  damping: 18,
})

const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-28, 28]), {
  stiffness: 100,
  damping: 18,
})

const ringX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
  stiffness: 80,
  damping: 18,
})

const ringY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), {
  stiffness: 80,
  damping: 18,
})

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()

  mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
  mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
}

const handleMouseLeave = () => {
  mouseX.set(0)
  mouseY.set(0)
}

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* <HeroCanvas /> */}
      <div className="grain-overlay" />

      {/* avatar — full-bleed, top-anchored, cropped by the viewport edge like the reference */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-y-0 right-0 hidden md:block w-[58%] lg:w-[50%]"
      >
        <div
  className="relative w-full h-full"
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
>

  {/* Red Glow */}
  <motion.div
  style={{
    x: glowX,
    y: glowY,
  }}
  className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-[#e5283c]/20 blur-[140px] -z-10"
/>

  {/* Rings */}
  <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[520px] h-[520px]">
    <div className="absolute inset-0 rounded-full border border-red-500/20"></div>
    <div className="absolute inset-8 rounded-full border border-red-500/15"></div>
    <div className="absolute inset-16 rounded-full border border-red-500/15"></div>
    <div className="absolute inset-24 rounded-full border border-red-500/15"></div>
  </div>

  

          <img
              src={avatarHeadphones}
              alt="Illustrated portrait of Abhishek Kashyap wearing headphones"
              className="absolute bottom-0 right-0 w-[92%] h-auto object-contain select-none pointer-events-none drop-shadow-[0_25px_40px_rgba(0,0,0,0.45)]"
              draggable={false}
            />
            <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/70 to-transparent pointer-events-none" />
            
          {/* soft seam so the cutout blends into the page instead of a hard edge */}
          
        </div>
      </motion.div>

      {/* copy + CTAs */}
      <div className="relative z-10 h-full min-h-[100svh] flex flex-col justify-center mx-auto max-w-7xl w-full px-5 md:px-10 pt-32 pb-16 md:pt-28">
        <div className="md:max-w-[54%] lg:max-w-[52%]">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
              {text}
              <span className="inline-block w-[2px] h-3 ml-0.5 bg-accent align-middle animate-pulse" />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-medium text-[12vw] leading-[1.02] sm:text-6xl md:text-7xl tracking-tight text-ink"
          >
            Crafting Digital
            <br />
            <span className="italic text-accent">Experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-ink-dim text-base md:text-lg leading-relaxed"
          >
            I build modern, scalable and beautiful web applications that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as="a"
              href={SOCIALS.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 font-body text-sm font-medium uppercase tracking-wide text-ink bg-accent shadow-glow-accent transition-shadow duration-300"
            >
              <HiArrowDownTray /> Download Resume
            </MagneticButton>

            
          </motion.div>
        </div>

        <motion.a
          href="#about-preview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-5 md:left-10 flex items-center gap-2 text-ink-dim text-xs uppercase tracking-wider font-body hover:text-ink transition-colors"
        >
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <HiArrowDown className="text-accent" />
          </motion.span>
          Scroll Down
        </motion.a>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { HiOutlineAcademicCap, HiOutlineChartBar, HiOutlineClock, HiOutlineLanguage, HiOutlineMapPin } from 'react-icons/hi2'
import { ABOUT } from '../../lib/theme'
import avatarSuit from '../../assets/images/avatar-suit.png'

const DATA_ROWS = [
  { icon: HiOutlineAcademicCap, label: 'Education', value: ABOUT.education },
  { icon: HiOutlineChartBar, label: 'CGPA', value: ABOUT.cgpa },
  { icon: HiOutlineClock, label: 'Duration', value: ABOUT.duration },
  { icon: HiOutlineLanguage, label: 'Languages', value: ABOUT.languages },
  { icon: HiOutlineMapPin, label: 'Location', value: ABOUT.location },
]

export default function AboutPreview() {
  return (
    <section id="about-preview" className="relative z-10 py-20 md:py-28 px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
  initial={{
    opacity: 0,
    y: 80,
    scale: 0.96,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  viewport={{
    once: true,
    amount: 0.25,
  }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="rounded-3xl glass shadow-glass p-6 md:p-10 grid md:grid-cols-[auto_1fr_auto] gap-8 md:gap-10 items-center"
>
          <div className="relative mx-auto md:mx-0 w-48 md:w-60 shrink-0">
            <div className="absolute inset-0 scale-110 blur-3xl opacity-35 bg-accent/60 -z-10 rounded-full" />
            <img
              src={avatarSuit}
              alt="Illustrated formal portrait of Abhishek Kashyap"
              draggable={false}
              className="
                w-full
                h-auto
                object-contain
                select-none

                [mask-image:linear-gradient(to_top,transparent_0%,black_25%,black_100%)]
                [-webkit-mask-image:linear-gradient(to_top,transparent_0%,black_18%,black_100%)]
              "
            />
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#141417] via-[#141417]/25 to-transparent pointer-events-none rounded-b-full" />
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-[0.15em] text-accent mb-3">About Me</p>
            <h2 className="font-display text-2xl md:text-3xl leading-snug text-ink">
              Hi, I&apos;m Abhishek Kashyap
              <br />
              but you can call me <span className="italic text-accent">Abhi</span>.
            </h2>
            <p className="mt-4 text-ink-dim text-sm md:text-base leading-relaxed max-w-md">
              I&apos;m a BCA student, Full Stack Developer, WordPress Developer and Video Editor.
              I love building digital products, creating exceptional user experiences and turning
              ideas into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 md:min-w-[240px]">
            {DATA_ROWS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 text-sm">
                <span className="grid place-items-center w-8 h-8 rounded-lg card-outline-accent text-accent shrink-0">
                  <Icon className="text-base" />
                </span>
                <span className="text-ink-dim w-20 shrink-0">{label}</span>
                <span className="text-ink">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

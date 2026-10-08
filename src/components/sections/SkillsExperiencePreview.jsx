import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { SKILLS, EXPERIENCE } from '../../lib/theme'
import avatarWhiteJacket from '../../assets/images/avatar-white-jacket.png'

export default function SkillsExperiencePreview() {
  return (
    <section className="relative z-10 py-4 md:py-8 px-5 md:px-10">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-6">
        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl glass shadow-glass p-6 md:p-8"
        >
          <p className="font-body text-xs uppercase tracking-[0.15em] text-accent mb-2">What I Do</p>
          <h2 className="font-display text-[52px] leading-none text-ink mb-6">Skills</h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {SKILLS.map((skill) => (
              <span
                key={skill.label}
                className={`rounded-xl
                            px-5
                            h-11
                            min-w-[104px]
                            flex
                            items-center
                            justify-center
                            text-[15px] font-body transition-shadow duration-300 ${
                  skill.core
                    ? 'card-outline-accent text-ink shadow-[0_0_22px_-4px_rgba(255,45,45,0.55)]'
                    : 'card-outline text-ink-dim shadow-[0_0_16px_-4px_rgba(255,45,45,0.3)]'
                }`}
              >
                {skill.label}
              </span>
            ))}
          </div>

          <Link
            to="/skills"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-body text-sm card-outline hover:border-accent/40 hover:text-accent transition-colors duration-300"
          >
            Explore My Skills <HiArrowRight />
          </Link>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[26px] glass shadow-glass px-10 py-8 overflow-hidden"
        >
          <div>
            <p className="font-body text-xs uppercase tracking-[0.15em] text-accent mb-2">My Roles</p>
            <h2 className="font-display text-[52px]leading-none text-ink mb-6">Experience</h2>

            <ul className="relative pl-6 space-y-7 mb-8">
              <span className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-gradient-to-b from-accent via-accent/25 to-transparent" />
              {EXPERIENCE.map((item) => (
                <li key={item.title} className="relative">
                  <span className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_1px_rgba(255,45,45,0.7)]" />
                  <p className="text-ink text-sm font-medium">{item.title}</p>
                  <p className="text-ink-dim text-xs md:text-sm leading-relaxed">{item.description}</p>
                </li>
              ))}
            </ul>

            <Link
              to="/experience"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-body text-sm card-outline hover:border-accent/40 hover:text-accent transition-colors duration-300"
            >
              My Journey <HiArrowRight />
            </Link>
          </div>

          {/* Character + Glow */}

<div className="hidden lg:block absolute right-[-35px] bottom-[-18px]">

{/* Hero Rings */}

<div className="absolute right-[-170px] bottom-[-170px] w-[620px] h-[620px] rounded-full border border-white/5"></div>

<div className="absolute right-[-105px] bottom-[-105px] w-[470px] h-[470px] rounded-full border border-white/5"></div>

<div className="absolute right-[-40px] bottom-[-40px] w-[320px] h-[320px] rounded-full border border-white/5"></div>

  {/* Big Red Glow */}

  <div
className="
absolute
right-[-120px]
bottom-[-120px]
w-[620px]
h-[620px]
rounded-full
bg-[#E5283C]/15
blur-[150px]
-z-20
"
/>

  <img
    src={avatarWhiteJacket}
    alt="Abhishek Kashyap"
    draggable={false}
    className="
      w-[345px]
      object-contain
      select-none
      relative
      z-20
      translate-y-[6px]
      "
  />

</div>
        </motion.div>
      </div>
    </section>
  )
}
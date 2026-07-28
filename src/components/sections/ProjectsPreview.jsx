import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiArrowUpRight } from 'react-icons/hi2'
import TiltCard from '../ui/TiltCard'
import { PROJECTS } from '../../lib/theme'
import adivaHero from '../../assets/images/adiva/hero.jpg'
import dynamoHero from '../../assets/images/projects/dynamo-hero.jpg'
import edifyYoutube from '../../assets/images/projects/edify-youtube.jpg'
import samvaadMun from '../../assets/images/projects/samvaad-mun.jpg'

const COVER_IMAGES = {
  adiva: adivaHero,
  'dynamo-fitness': dynamoHero,
  'edify-youtube': edifyYoutube,
  'samvaad-mun': samvaadMun,
}

export default function ProjectsPreview() {
  return (
    <section className="relative z-10 py-20 md:py-28 px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.15em] text-accent mb-2">My Work</p>
            <h2 className="font-display text-2xl md:text-4xl text-ink">Featured Projects</h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-body text-sm card-outline-accent text-ink hover:shadow-glow-soft transition-shadow duration-300"
          >
            View All Projects <HiArrowRight />
          </Link>
        </div>

        <div
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5
                     sm:mx-0 sm:px-0 sm:pb-0 sm:overflow-visible sm:grid sm:grid-cols-2 lg:grid-cols-4"
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="shrink-0 w-[75%] xs:w-[65%] snap-center sm:w-auto"
            >
              <TiltCard maxTilt={5} className="group h-full">
                <Link
                  to={`/projects#${project.slug}`}
                  className="block rounded-2xl glass shadow-glass overflow-hidden h-full transition-shadow duration-300 hover:shadow-glow-soft"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                    <img
                      src={COVER_IMAGES[project.slug]}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
                    <span className="absolute top-3 right-3 grid place-items-center w-8 h-8 rounded-lg glass-strong text-ink opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <HiArrowUpRight />
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-ink-dim">{project.index}</span>
                      <span className="font-mono text-[11px] uppercase tracking-wide text-accent">{project.tag}</span>
                    </div>
                    <h3 className="font-display text-lg text-ink mb-1.5">{project.title}</h3>
                    <p className="text-ink-dim text-sm leading-relaxed mb-3">{project.description}</p>
                    <p className="font-mono text-[11px] text-ink-dim">{project.stack}</p>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
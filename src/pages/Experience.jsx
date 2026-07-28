import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiCode,
  FiFilm,
  FiGlobe,
  FiAward,
  FiArrowRight,
} from "react-icons/fi";

const experiences = [
  {
    icon: <FiCode size={22} />,
    role: "Full Stack Web Developer",
    company: "Freelance",
    duration: "2024 - Present",
    description:
      "Developing modern, responsive and scalable web applications using React, Node.js, Express and MongoDB with a focus on premium UI and clean architecture.",
  },
  {
    icon: <FiGlobe size={22} />,
    role: "WordPress Developer",
    company: "Client Projects",
    duration: "2024 - Present",
    description:
      "Built business websites, landing pages and SEO optimized WordPress solutions with custom UI and responsive layouts.",
  },
  {
    icon: <FiFilm size={22} />,
    role: "Video Editor",
    company: "YouTube & Events",
    duration: "2023 - Present",
    description:
      "Edited educational videos, Instagram reels and promotional content with smooth transitions, motion graphics and storytelling.",
  },
  {
    icon: <FiAward size={22} />,
    role: "Continuous Learning",
    company: "MERN Stack",
    duration: "Everyday",
    description:
      "Learning advanced backend architecture, authentication, APIs, deployment and performance optimization through real-world projects.",
  },
];

const achievements = [
  {
    number: "5+",
    title: "Projects",
  },
  {
    number: "100+",
    title: "Hours of Learning",
  },
  {
    number: "10+",
    title: "Happy Clients",
  },
];

export default function Experience() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0C] pt-36 pb-28">

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#E5283C]/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#E5283C]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full border border-[#E5283C]/40 bg-[#E5283C]/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#E5283C]">

            <FiBriefcase />

            Experience

          </span>

          <h1 className="mt-8 text-5xl font-bold text-white md:text-7xl">

            My Professional

            <span className="text-gradient">

              {" "}Journey

            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">

            My journey has been driven by curiosity, consistency and
            real-world projects that continue to sharpen both my
            technical and creative skills.

          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          <div className="absolute left-5 top-0 h-full w-[2px] bg-white/10" />

          <div className="space-y-12">
                      {experiences.map((item, index) => (

              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: .6,
                  delay: index * .15,
                }}
                viewport={{ once: true }}
                className="relative pl-16"
              >

                {/* Timeline Dot */}

                <div className="absolute left-0 top-8 flex h-10 w-10 items-center justify-center rounded-full border border-[#E5283C]/40 bg-[#141417] text-[#E5283C]">

                  {item.icon}

                </div>

                {/* Card */}

                <motion.div
                  whileHover={{
                    y: -8,
                    borderColor: "#E5283C",
                  }}
                  className="glass rounded-[28px] p-8 transition-all duration-300"
                >

                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    <div>

                      <h2 className="text-2xl font-semibold text-white">

                        {item.role}

                      </h2>

                      <p className="mt-2 text-[#E5283C]">

                        {item.company}

                      </p>

                    </div>

                    <span className="rounded-full border border-[#E5283C]/30 bg-[#E5283C]/10 px-5 py-2 text-sm text-[#E5283C]">

                      {item.duration}

                    </span>

                  </div>

                  <p className="mt-6 leading-8 text-zinc-400">

                    {item.description}

                  </p>

                </motion.div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* Achievements */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-32"
        >

          <div className="grid gap-8 md:grid-cols-3">

            {achievements.map((item) => (

              <motion.div
                key={item.title}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="card-outline rounded-[28px] p-8 text-center transition-all duration-300"
              >

                <h2 className="text-5xl font-bold text-gradient">

                  {item.number}

                </h2>

                <p className="mt-4 text-lg text-zinc-400">

                  {item.title}

                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-32"
        >

          <div className="glass-strong rounded-[40px] p-12 text-center">

            <h2 className="text-4xl font-bold text-white md:text-5xl">

              Every Project Makes Me Better

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">

              Every website, every client and every challenge has helped
              me become a better developer. I'm continuously improving my
              skills to build faster, smarter and more impactful digital
              experiences.

            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .96 }}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#E5283C] px-8 py-4 font-semibold text-white"
            >

              View My Projects

              <FiArrowRight size={20} />

            </motion.button>

          </div>

        </motion.div>
                {/* Decorative Grid */}

        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

      </div>

    </section>
  );
}
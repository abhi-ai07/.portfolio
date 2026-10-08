import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiCode,
  FiCoffee,
  FiGlobe,
  FiLayers,
  FiMonitor,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";

import avatarSuit from "../assets/images/avatar-suit.png";

const stats = [
  {
    number: "5+",
    label: "Projects Completed",
  },
  {
    number: "2+",
    label: "Years Learning",
  },
  {
    number: "100%",
    label: "Passion Driven",
  },
];

const techStack = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "Tailwind CSS",
  "WordPress",
  "Framer Motion",
  "REST APIs",
  "Git & GitHub",
];

const education = [
  {
    title: "Bachelor of Computer Applications",
    place: "Graphic Era Hill University",
    year: "2024 - Present",
  },
  {
    title: "Full Stack Web Development",
    place: "Self Learning & Real Projects",
    year: "2024 - Present",
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0C] pt-36 pb-24">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#E5283C]/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#E5283C]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full border border-[#E5283C]/40 bg-[#E5283C]/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#E5283C]">

            <FiUser />

            About Me

          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">

            Building Digital

            <span className="text-gradient">

              {" "}Experiences

            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">

            I'm Abhishek Kashyap, a Full Stack Web Developer passionate
            about building modern, premium and highly interactive web
            experiences. I love transforming ideas into fast,
            responsive and production-ready applications.

          </p>

        </motion.div>

        {/* Main Grid */}

        <div className="mt-24 grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="absolute inset-0 rounded-[40px] bg-[#E5283C]/10 blur-3xl" />

            <div className="glass-strong relative overflow-hidden rounded-[40px]">

              <img
                src={avatarSuit}
                alt="Abhishek"
                className="mx-auto w-full max-w-lg"
              />

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <div className="flex items-center gap-3">

              <FiCode
                size={26}
                className="text-[#E5283C]"
              />

              <h2 className="text-4xl font-bold text-white">

                Who Am I ?

              </h2>

            </div>

            <p className="mt-8 text-lg leading-8 text-zinc-400">

              I specialize in creating visually appealing and
              performance-focused websites using React, Node.js,
              MongoDB and modern frontend technologies.

            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">

              Alongside development, I also work with WordPress,
              UI/UX design and video editing. My goal is to build
              premium digital products that feel smooth,
              elegant and user-friendly.

            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
                          {stats.map((item) => (

                <motion.div
                  whileHover={{
                    y: -8,
                    borderColor: "#E5283C",
                  }}
                  key={item.label}
                  className="card-outline rounded-3xl p-6 text-center transition-all duration-300"
                >

                  <h3 className="text-4xl font-bold text-white">

                    {item.number}

                  </h3>

                  <p className="mt-2 text-sm tracking-wide text-zinc-400">

                    {item.label}

                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

        {/* Tech Stack */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-32"
        >

          <div className="flex items-center gap-3">

            <FiLayers
              className="text-[#E5283C]"
              size={24}
            />

            <h2 className="text-4xl font-bold text-white">

              Tech Stack

            </h2>

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            {techStack.map((tech) => (

              <motion.div
                key={tech}
                whileHover={{
                  y: -6,
                  scale: 1.05,
                }}
                className="rounded-full border border-[#E5283C]/30 bg-[#141417] px-6 py-3 text-sm font-medium text-zinc-200 transition-all"
              >

                {tech}

              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* Education */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-32"
        >

          <div className="flex items-center gap-3">

            <FiBookOpen
              size={24}
              className="text-[#E5283C]"
            />

            <h2 className="text-4xl font-bold text-white">

              Education

            </h2>

          </div>

          <div className="mt-14 space-y-8">

            {education.map((item) => (

              <motion.div
                key={item.title}
                whileHover={{
                  x: 10,
                  borderColor: "#E5283C",
                }}
                className="glass rounded-3xl p-8 transition-all duration-300"
              >

                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                  <div>

                    <h3 className="text-2xl font-semibold text-white">

                      {item.title}

                    </h3>

                    <p className="mt-2 text-zinc-400">

                      {item.place}

                    </p>

                  </div>

                  <span className="rounded-full border border-[#E5283C]/30 bg-[#E5283C]/10 px-5 py-2 text-sm text-[#E5283C]">

                    {item.year}

                  </span>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* What I Do */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-32"
        >

          <div className="flex items-center gap-3">

            <FiMonitor
              className="text-[#E5283C]"
              size={24}
            />

            <h2 className="text-4xl font-bold text-white">

              What I Do

            </h2>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
                      <motion.div
              whileHover={{
                y: -10,
                borderColor: "#E5283C",
              }}
              className="card-outline rounded-3xl p-8 transition-all duration-300"
            >
              <FiGlobe
                size={36}
                className="text-[#E5283C]"
              />

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Full Stack Development
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                Building fast, scalable and responsive web applications
                using React, Node.js, Express and MongoDB with a strong
                focus on clean architecture and performance.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
                borderColor: "#E5283C",
              }}
              className="card-outline rounded-3xl p-8 transition-all duration-300"
            >
              <FiAward
                size={36}
                className="text-[#E5283C]"
              />

              <h3 className="mt-6 text-2xl font-semibold text-white">
                UI / UX Design
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                Designing elegant, premium and modern interfaces with
                smooth animations, responsive layouts and attention to
                every small interaction.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
                borderColor: "#E5283C",
              }}
              className="card-outline rounded-3xl p-8 transition-all duration-300"
            >
              <FiTrendingUp
                size={36}
                className="text-[#E5283C]"
              />

              <h3 className="mt-6 text-2xl font-semibold text-white">
                WordPress Solutions
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                Creating business websites, landing pages and SEO-friendly
                WordPress solutions with premium design and excellent
                performance.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
                borderColor: "#E5283C",
              }}
              className="card-outline rounded-3xl p-8 transition-all duration-300"
            >
              <FiCoffee
                size={36}
                className="text-[#E5283C]"
              />

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Video Editing
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                Producing engaging YouTube videos, reels and promotional
                content with smooth transitions, motion graphics and
                storytelling.
              </p>
            </motion.div>

          </div>

        </motion.div>

        

      </div>

    </section>
  );
}
import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiFilm,
  FiTool,
  FiArrowRight,
} from "react-icons/fi";

const skillCategories = [
  {
    icon: <FiCode size={26} />,
    title: "Frontend Development",
    description:
      "Crafting fast, responsive and interactive user interfaces with modern frontend technologies.",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 92 },
      { name: "Tailwind CSS", level: 94 },
      { name: "Framer Motion", level: 84 },
    ],
  },

  {
    icon: <FiDatabase size={26} />,
    title: "Backend Development",
    description:
      "Building scalable APIs, authentication systems and databases for production applications.",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 86 },
      { name: "MongoDB", level: 84 },
      { name: "REST APIs", level: 90 },
      { name: "JWT", level: 82 },
      { name: "Firebase", level: 72 },
    ],
  },

  {
    icon: <FiLayout size={26} />,
    title: "UI / UX Design",
    description:
      "Designing premium interfaces with strong attention to layout, animation and user experience.",
    skills: [
      { name: "Figma", level: 82 },
      { name: "Responsive Design", level: 94 },
      { name: "Wireframing", level: 84 },
      { name: "Prototyping", level: 80 },
      { name: "Motion UI", level: 88 },
      { name: "Design Systems", level: 86 },
    ],
  },

  {
    icon: <FiFilm size={26} />,
    title: "Video Editing",
    description:
      "Creating engaging content for YouTube, Instagram and promotional campaigns.",
    skills: [
      { name: "Premiere Pro", level: 82 },
      { name: "After Effects", level: 76 },
      { name: "CapCut", level: 95 },
      { name: "Alight Motion", level: 88 },
      { name: "Color Grading", level: 74 },
      { name: "Motion Graphics", level: 72 },
    ],
  },
];

const tools = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "GitHub",
  "WordPress",
  "Tailwind",
  "Framer Motion",
  "VS Code",
  "Postman",
  "Cloudinary",
  "Vercel",
  "Netlify",
  "Render",
];

export default function Skills() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0C] pt-36 pb-28">

      {/* Background Glow */}

      <div className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-[#E5283C]/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#E5283C]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full border border-[#E5283C]/40 bg-[#E5283C]/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#E5283C]">

            <FiTool />

            Skills

          </span>

          <h1 className="mt-8 text-5xl font-bold text-white md:text-7xl">

            My Technical

            <span className="text-gradient">

              {" "}Expertise

            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">

            A combination of development, design and creative skills
            that help me build modern digital experiences from concept
            to deployment.

          </p>

        </motion.div>

        {/* Skill Cards */}

        <div className="mt-24 grid gap-10 lg:grid-cols-2">

          {skillCategories.map((category) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                borderColor: "#E5283C",
              }}
              transition={{ duration: .5 }}
              viewport={{ once: true }}
              className="glass rounded-[32px] p-8"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E5283C]/10 text-[#E5283C]">

                  {category.icon}

                </div>

                <div>

                  <h2 className="text-2xl font-semibold text-white">

                    {category.title}

                  </h2>

                  <p className="mt-1 text-sm text-zinc-400">

                    {category.description}

                  </p>

                </div>

              </div>

              <div className="mt-10 space-y-7">
                              {category.skills.map((skill) => (

                  <div key={skill.name}>

                    <div className="mb-3 flex items-center justify-between">

                      <span className="font-medium text-zinc-200">

                        {skill.name}

                      </span>

                      <span className="text-sm text-[#E5283C]">

                        {skill.level}%

                      </span>

                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/10">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-[#E5283C] via-[#ff5a6c] to-[#ff8d9b]"
                      />

                    </div>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

        {/* Tools Section */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-32"
        >

          <div className="flex items-center gap-3">

            <FiTool
              size={24}
              className="text-[#E5283C]"
            />

            <h2 className="text-4xl font-bold text-white">

              Tools & Technologies

            </h2>

          </div>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">

            These are the technologies and tools I use regularly while
            building scalable applications, designing interfaces and
            managing complete development workflows.

          </p>

          <div className="mt-12 flex flex-wrap gap-4">

            {tools.map((tool) => (

              <motion.div
                key={tool}
                whileHover={{
                  scale: 1.08,
                  y: -6,
                }}
                className="rounded-full border border-[#E5283C]/30 bg-[#141417] px-6 py-3 font-medium text-zinc-200 transition-all duration-300"
              >

                {tool}

              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-32"
        >

          <div className="glass-strong rounded-[40px] p-12 text-center">

            <h2 className="text-4xl font-bold text-white md:text-5xl">

              Constantly Learning &
              <span className="text-gradient"> Improving</span>

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">

              Technology evolves every day, and so do I. I enjoy exploring
              new frameworks, experimenting with modern UI patterns and
              building projects that push my skills further.

            </p>

            

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
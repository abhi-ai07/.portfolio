import { motion } from "framer-motion";
import {
  FiCode,
  FiLayout,
  FiGlobe,
  FiFilm,
  FiSmartphone,
  FiTrendingUp,
} from "react-icons/fi"; 

const services = [
  {
    icon: <FiCode size={28} />,
    title: "Full Stack Development",
    description:
      "Modern web applications using React, Node.js, Express and MongoDB with scalable architecture.",
  },
  {
    icon: <FiLayout size={28} />,
    title: "UI / UX Design",
    description:
      "Elegant interfaces focused on usability, animation and premium user experience.",
  },
  {
    icon: <FiGlobe size={28} />,
    title: "WordPress Websites",
    description:
      "Professional business websites, landing pages and SEO optimized WordPress solutions.",
  },
  {
    icon: <FiSmartphone size={28} />,
    title: "Responsive Design",
    description:
      "Pixel-perfect layouts optimized for desktops, tablets and mobile devices.",
  },
  {
    icon: <FiFilm size={28} />,
    title: "Video Editing",
    description:
      "High-quality YouTube videos, Instagram reels and promotional edits with smooth storytelling.",
  },
  {
    icon: <FiTrendingUp size={28} />,
    title: "Website Optimization",
    description:
      "Performance improvements, SEO optimization and faster loading experiences.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0C] pt-36 pb-28">

      <div className="absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-[#E5283C]/10 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#E5283C]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <motion.div
            initial={{ opacity:0,x:-50 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.8 }}
            viewport={{ once:true }}
          >

            <span className="rounded-full border border-[#E5283C]/40 bg-[#E5283C]/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-[#E5283C]">

              SERVICES

            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">

              What I Can

              <span className="text-gradient">

                {" "}Do For You

              </span>

            </h1>

            <p className="mt-8 text-lg leading-8 text-zinc-400">

              I help individuals, startups and businesses transform ideas
              into modern digital products with clean design,
              smooth interactions and scalable development.

            </p>

          </motion.div>

          <motion.div
            initial={{ opacity:0,x:50 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.8 }}
            viewport={{ once:true }}
            className="glass rounded-[40px] p-10"
          >

            <h2 className="text-3xl font-semibold text-white">

              Why Work With Me?

            </h2>

            <p className="mt-6 leading-8 text-zinc-400">

              Every project is built with performance, premium aesthetics
              and maintainable code. I focus on creating websites that
              not only look great but also deliver real business value.

            </p>

          </motion.div>

        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                  {services.map((service, index) => (

            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                borderColor: "#E5283C",
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#141417]/70 p-8 transition-all duration-300"
            >

              {/* Hover Glow */}

              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#E5283C]/10 blur-3xl transition-all duration-500 group-hover:bg-[#E5283C]/20" />

              <div className="relative z-10">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E5283C]/10 text-[#E5283C]">

                  {service.icon}

                </div>

                <h2 className="mt-8 text-2xl font-semibold text-white">

                  {service.title}

                </h2>

                <p className="mt-5 leading-8 text-zinc-400">

                  {service.description}

                </p>

                

              </div>

            </motion.div>

          ))}

        </div>

        {/* Process */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-32"
        >

          <h2 className="text-center text-4xl font-bold text-white">

            My Work Process

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-zinc-400">

            From idea to launch, every project follows a structured
            workflow focused on quality, communication and delivering
            an exceptional final product.

          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-4">

            {[
              "Discovery",
              "Planning",
              "Development",
              "Launch",
            ].map((step, index) => (

              <motion.div
                key={step}
                whileHover={{
                  y: -8,
                }}
                className="glass rounded-[28px] p-8 text-center"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E5283C] text-2xl font-bold text-white">

                  {index + 1}

                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">

                  {step}

                </h3>

              </motion.div>

            ))}

          </div>

        </motion.div>
               

        {/* Decorative Background Grid */}

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
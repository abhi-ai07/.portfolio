import { motion } from "framer-motion";
import {
  FiAward,
  FiExternalLink,
  FiCheckCircle,
} from "react-icons/fi";

const certificates = [
  
    
];

export default function Certificates() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0C] pt-36 pb-28">

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#E5283C]/10 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#E5283C]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full border border-[#E5283C]/40 bg-[#E5283C]/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-[#E5283C]">
            Certificates
          </span>

          <h1 className="mt-8 text-5xl font-display font-semibold text-white md:text-7xl">

            Learning Never
            <span className="text-gradient"> Stops</span>

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">

            Every certification represents a step towards building
            better products, mastering new technologies and delivering
            high-quality digital experiences.

          </p>

        </motion.div>

        <div className="mt-24 space-y-8">
                  {certificates.map((certificate, index) => (

            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .12,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-[#141417]/70 p-8 backdrop-blur-xl"
            >

              {/* Hover Glow */}

              <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#E5283C]/10 blur-3xl transition-all duration-500 group-hover:bg-[#E5283C]/20" />

              <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

                <div className="flex items-start gap-6">

                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-[#E5283C]/10 text-[#E5283C]">

                    <FiAward size={34} />

                  </div>

                  <div>

                    <div className="flex flex-wrap items-center gap-3">

                      <h2 className="text-3xl font-display font-semibold text-white">

                        {certificate.title}

                      </h2>

                      {certificate.verified && (

                        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">

                          <FiCheckCircle />

                          Verified

                        </span>

                      )}

                    </div>

                    <p className="mt-3 text-lg text-zinc-400">

                      {certificate.issuer}

                      <span className="mx-3 text-zinc-600">•</span>

                      {certificate.year}

                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">

                      {certificate.skills.map((skill) => (

                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
                        >

                          {skill}

                        </span>

                      ))}

                    </div>

                  </div>

                </div>

                <motion.a
                  whileHover={{
                    x: 6,
                  }}
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 self-start rounded-full border border-[#E5283C]/40 px-6 py-3 font-medium text-[#E5283C] transition-colors hover:bg-[#E5283C] hover:text-white"
                >

                  View Certificate

                  <FiExternalLink size={18} />

                </motion.a>

              </div>

            </motion.div>

          ))}

        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-28 text-center"
        >

          <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">

            Always Learning,
            <span className="text-gradient"> Always Growing</span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">

            I continuously explore new technologies, frameworks and
            design trends to build better digital products and stay
            updated with modern web development practices.

          </p>

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
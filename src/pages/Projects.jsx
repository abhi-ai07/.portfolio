import { motion } from "framer-motion";
import { useState } from "react";

import heroImg from "../assets/images/adiva/hero.png";
import collectionsImg from "../assets/images/adiva/collections.png";
import cartImg from "../assets/images/adiva/cart.png";
import checkoutImg from "../assets/images/adiva/checkout.png";
import signinImg from "../assets/images/adiva/signin.png";


import dynamoHero from "../assets/images/dynamo/hero.png";
import dynamoPlans from "../assets/images/dynamo/plans.png";
import dynamoRating from "../assets/images/dynamo/rating.png";
import dynamoWhy from "../assets/images/dynamo/why.png";

import edifyImg from "../assets/images/edify/edify-youtube.jpg";
import samvaadImg from "../assets/images/samvaad/samvaad-mun.jpg";
const projects = [
  {
    id: "01",

    title: "Adiva",

    subtitle: "Luxury Jewellery Ecommerce",

    description:
      "A premium ecommerce platform focused on luxury jewellery shopping with authentication, Razorpay integration, admin dashboard, order management and a modern shopping experience.",

   
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Razorpay",
      "Cloudinary",
    ],

    features: [
      "Authentication",
      "Admin Dashboard",
      "Payments",
      "Wishlist",
      "Responsive UI",
    ],
  },

  {
    id: "02",

    title: "Dynamo Fitness",

    subtitle: "Premium Gym Website",

    description:
      "Professional WordPress website built for a fitness brand with responsive layouts, lead generation, modern animations and SEO optimization.",


    tech: [
      "WordPress",
      "Elementor",
      "SEO",
      "Responsive",
    ],

    features: [
      "Landing Pages",
      "SEO",
      "Responsive",
      "Performance",
    ],
  },

  {
    id: "03",

    title: "Portfolio",

    subtitle: "Personal Brand Website",

    description:
      "Modern portfolio with smooth animations, premium dark UI and interactive experiences built completely using React.",
  image: "",

    
    tech: [
      "React",
      "Tailwind",
      "Framer Motion",
    ],

    features: [
      "Dark Theme",
      "Animations",
      "Responsive",
      "Performance",
    ],
  },

  {
  id: "04",
  title: "Edify",
  subtitle: "YouTube Channel",
  description:
    "Edited engaging YouTube content with motion graphics, smooth transitions, color grading and storytelling for a professional viewing experience.",
  image: edifyImg,
  tech: ["Capcut", "Alight Motion"],
  features: [
    "Motion Graphics",
    "Color Grading",
    "Smooth Transitions",
    "YouTube Content",
  ],
},
{
  id: "05",
  title: "Samvaad",
  subtitle: "Video Editing Project",
  description:
    "Produced a cinematic event highlight video featuring dynamic cuts, synchronized music, text animations and professional color grading.",
  image: samvaadImg,
  tech: ["Alight Motion", "After Effects"],
  features: [
    "Cinematic Cuts",
    "Text Animation",
    "Music Sync",
    "Event Highlights",
  ],
},
];

export default function Projects() {
  const adivaImages = [
  heroImg,
  collectionsImg,
  cartImg,
  checkoutImg,
  signinImg,
];

const [activeAdivaImage, setActiveAdivaImage] = useState(adivaImages[0]);

const dynamoImages = [
  dynamoHero,
  dynamoPlans,
  dynamoRating,
  dynamoWhy,
];

const [activeDynamoImage, setActiveDynamoImage] = useState(dynamoImages[0]);
  return (
    <section className="relative overflow-hidden bg-[#0A0A0C] pt-36 pb-28">

      {/* Background */}

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#E5283C]/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#E5283C]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* HERO */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full border border-[#E5283C]/40 bg-[#E5283C]/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-[#E5283C]">

            Selected Projects

          </span>

          <h1 className="mt-8 font-display text-5xl font-semibold text-white md:text-7xl">

            Turning Ideas Into

            <span className="text-gradient">

              {" "}Digital Experiences

            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">

            Every project is designed with performance,
            premium aesthetics and real-world usability.
            From concept to deployment, I focus on building
            experiences that are fast, scalable and memorable.

          </p>

        </motion.div>

        {/* STATS */}

        <motion.div
          initial={{ opacity:0,y:60 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:.8, delay:.15 }}
          viewport={{ once:true }}
          className="mt-24 grid gap-6 md:grid-cols-3"
        >

          <div className="glass rounded-[30px] p-8 text-center">

            <h2 className="text-5xl font-bold text-white">

              05+

            </h2>

            <p className="mt-3 text-zinc-400">

              Featured Projects

            </p>

          </div>

          <div className="glass rounded-[30px] p-8 text-center">

            <h2 className="text-5xl font-bold text-white">

              10+

            </h2>

            <p className="mt-3 text-zinc-400">

              Technologies Used

            </p>

          </div>

          <div className="glass rounded-[30px] p-8 text-center">

            <h2 className="text-5xl font-bold text-white">

              100%

            </h2>

            <p className="mt-3 text-zinc-400">

              Responsive Design

            </p>

          </div>

        </motion.div>

        {/* Featured Projects */}

        <div className="mt-32 space-y-40">
        {/* ================= A D I V A ================= */}

       <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="grid items-center gap-16 lg:grid-cols-2"
>
  {/* IMAGE */}

  <div className="space-y-4">

    {/* Main Image */}

    <img
      src={activeAdivaImage}
      alt="Adiva"
      className="w-full rounded-[34px] border border-white/10 object-cover"
    />

    {/* Thumbnails */}

    <div className="grid grid-cols-5 gap-3">

      {adivaImages.map((img, index) => (

        <button
          key={index}
          onClick={() => setActiveAdivaImage(img)}
          className={`overflow-hidden rounded-xl border transition-all duration-300 ${
            activeAdivaImage === img
              ? "border-[#E5283C] ring-2 ring-[#E5283C]/30"
              : "border-white/10 hover:border-white/30"
          }`}
        >
          <img
            src={img}
            alt={`Adiva ${index + 1}`}
            className="h-20 w-full object-cover"
          />
        </button>

      ))}

    </div>

  </div>

  {/* CONTENT */}

  <div>

    <span className="text-[80px] font-black leading-none text-white/5">
      {projects[0].id}
    </span>

    <p className="mt-2 text-sm uppercase tracking-[0.35em] text-[#E5283C]">
      {projects[0].subtitle}
    </p>

    <h2 className="mt-4 text-5xl font-bold text-white">
      {projects[0].title}
    </h2>

    <p className="mt-8 leading-8 text-zinc-400">
      {projects[0].description}
    </p>

    {/* FEATURES */}

    <div className="mt-10">
      <h4 className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Key Features
      </h4>

      <div className="grid grid-cols-2 gap-4">
        {projects[0].features.map((item) => (
          <div
            key={item}
            className="glass flex items-center gap-3 rounded-xl px-5 py-4"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-[#E5283C]" />
            <span className="text-zinc-300">{item}</span>
          </div>
        ))}
      </div>
    </div>

    {/* TECH STACK */}

    <div className="mt-10">
      <h4 className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Tech Stack
      </h4>

      <div className="flex flex-wrap gap-3">
        {projects[0].tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300 transition hover:border-[#E5283C]/50 hover:bg-[#E5283C]/10"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    {/* BUTTONS */}

    <div className="mt-12 flex flex-wrap gap-5">
      {/* Add buttons here if needed */}
    </div>

  </div>

</motion.div>
{/* ================= DYNAMO FITNESS ================= */}

<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="grid items-center gap-16 lg:grid-cols-2"
>

  {/* CONTENT */}

  <div className="order-2 lg:order-1">

    <span className="text-[80px] font-black leading-none text-white/5">
      {projects[1].id}
    </span>

    <p className="mt-2 text-sm uppercase tracking-[0.35em] text-[#E5283C]">
      {projects[1].subtitle}
    </p>

    <h2 className="mt-4 text-5xl font-bold text-white">
      {projects[1].title}
    </h2>

    <p className="mt-8 leading-8 text-zinc-400">
      {projects[1].description}
    </p>

    <div className="mt-10">
      <h4 className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Key Features
      </h4>

      <div className="grid grid-cols-2 gap-4">
        {projects[1].features.map((item) => (
          <div
            key={item}
            className="glass flex items-center gap-3 rounded-xl px-5 py-4"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-[#E5283C]" />
            <span className="text-zinc-300">{item}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-10">
      <h4 className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Tech Stack
      </h4>

      <div className="flex flex-wrap gap-3">
        {projects[1].tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300 transition hover:border-[#E5283C]/50 hover:bg-[#E5283C]/10"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-12 flex flex-wrap gap-5">
      
    </div>

  </div>

  {/* IMAGE */}

  <div className="space-y-4">

  {/* Main Image */}

  <img
    src={activeDynamoImage}
    alt="Dynamo"
    className="w-full rounded-3xl border border-white/10"
  />

  {/* Thumbnails */}

  <div className="grid grid-cols-4 gap-3">

    {dynamoImages.map((img, index) => (

      <button
        key={index}
        onClick={() => setActiveDynamoImage(img)}
        className={`overflow-hidden rounded-xl border ${
          activeDynamoImage === img
            ? "border-[#E5283C]"
            : "border-white/10"
        }`}
      >

        <img
          src={img}
          alt=""
          className="h-20 w-full object-cover"
        />

      </button>

    ))}

  </div>

</div>

</motion.div>

{/* ================= EDIFY ================= */}

<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="grid items-center gap-16 lg:grid-cols-2"
>
  <div>
    <img
      src={edifyImg}
      alt="Edify"
      className="w-full rounded-[34px] border border-white/10 object-cover"
    />
  </div>

  <div>
    <span className="text-[80px] font-black leading-none text-white/5">04</span>

    <p className="mt-2 text-sm uppercase tracking-[0.35em] text-[#E5283C]">
      Video Editing Project
    </p>

    <h2 className="mt-4 text-5xl font-bold text-white">Edify</h2>

    <p className="mt-8 leading-8 text-zinc-400">
      Edited promotional and educational videos with smooth transitions, motion graphics,
      color grading and platform-optimized storytelling for a professional viewing experience.
    </p>

    <div className="mt-10">
      <h4 className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Editing Highlights
      </h4>

      <div className="grid grid-cols-2 gap-4">
        {["Motion Graphics","Color Grading","Smooth Transitions","Short-form Content"].map((item)=>(
          <div key={item} className="glass flex items-center gap-3 rounded-xl px-5 py-4">
            <div className="h-2.5 w-2.5 rounded-full bg-[#E5283C]" />
            <span className="text-zinc-300">{item}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-10">
      <h4 className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Tools Used
      </h4>

      <div className="flex flex-wrap gap-3">
        {projects[3].tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
</motion.div>

{/* ================= SAMVAAD ================= */}

<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="grid items-center gap-16 lg:grid-cols-2"
>
  <div className="order-2 lg:order-1">
    <span className="text-[80px] font-black leading-none text-white/5">05</span>

    <p className="mt-2 text-sm uppercase tracking-[0.35em] text-[#E5283C]">
      Video Editing Project
    </p>

    <h2 className="mt-4 text-5xl font-bold text-white">Samvaad</h2>

    <p className="mt-8 leading-8 text-zinc-400">
      Produced a cinematic event highlight video featuring dynamic cuts,
      synchronized music, text animations and professional color grading.
    </p>

    <div className="mt-10">
      <h4 className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Editing Highlights
      </h4>

      <div className="grid grid-cols-2 gap-4">
        {["Cinematic Cuts","Text Animation","Music Sync","Event Highlights"].map((item)=>(
          <div key={item} className="glass flex items-center gap-3 rounded-xl px-5 py-4">
            <div className="h-2.5 w-2.5 rounded-full bg-[#E5283C]" />
            <span className="text-zinc-300">{item}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-10">
      <h4 className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Tools Used
      </h4>

      <div className="flex flex-wrap gap-3">
        {projects[4].tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>

  <div className="order-1 lg:order-2">
    <img
      src={samvaadImg}
      alt="Samvaad"
      className="w-full rounded-[34px] border border-white/10 object-cover"
    />
  </div>
</motion.div>



{/* ================= PORTFOLIO ================= */}

<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="grid items-center gap-16 lg:grid-cols-2"
>

  {/* IMAGE */}

  <motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.4 }}
  className="flex min-h-[420px] items-center justify-center rounded-[34px] border border-white/10 bg-gradient-to-br from-[#141417] to-[#0A0A0C] p-10"
>
  <div className="text-center">

    <span className="text-7xl">💻</span>

    <h3 className="mt-8 text-4xl font-bold text-white">
      You're Already Viewing It
    </h3>

    <p className="mx-auto mt-6 max-w-md text-lg leading-8 text-zinc-400">
      This portfolio itself is one of my featured projects. Every section,
      animation and interaction you see has been designed and developed by me
      using React, Tailwind CSS and Framer Motion.
    </p>

    <div className="mt-8 inline-flex rounded-full border border-[#E5283C]/40 bg-[#E5283C]/10 px-6 py-3 text-sm font-medium text-[#E5283C]">
      ✨ Built with React + Tailwind + Framer Motion
    </div>

  </div>
</motion.div>

  {/* CONTENT */}

  <div>

    <span className="text-[80px] font-black leading-none text-white/5">
      {projects[2].id}
    </span>

    <p className="mt-2 text-sm uppercase tracking-[0.35em] text-[#E5283C]">
      {projects[2].subtitle}
    </p>

    <h2 className="mt-4 text-5xl font-bold text-white">
      {projects[2].title}
    </h2>

    <p className="mt-8 leading-8 text-zinc-400">
      {projects[2].description}
    </p>

    <div className="mt-10">
      <h4 className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Tech Stack
      </h4>

      <div className="flex flex-wrap gap-3">
        {projects[2].tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300 transition hover:border-[#E5283C]/50 hover:bg-[#E5283C]/10"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-12 flex flex-wrap gap-5">
      
    </div>

  </div>

</motion.div>
{/* ================= TECH STACK ================= */}

<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-40"
>
  <h2 className="text-center text-4xl font-bold text-white md:text-5xl">
    Technologies I Work With
  </h2>

  <p className="mx-auto mt-5 max-w-2xl text-center leading-8 text-zinc-400">
    I enjoy building scalable, responsive and modern web applications using
    technologies that are widely adopted in production.
  </p>

  <div className="mt-14 flex flex-wrap justify-center gap-4">
    {[
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Razorpay",
      "WordPress",
      "Git",
      "GitHub",
    ].map((tech) => (
      <motion.div
        key={tech}
        whileHover={{ y: -8, scale: 1.05 }}
        className="glass rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-zinc-300"
      >
        {tech}
      </motion.div>
    ))}
  </div>
</motion.div>

{/* ================= DEVELOPMENT PROCESS ================= */}

<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-40"
>
  <h2 className="text-center text-4xl font-bold text-white">
    Development Process
  </h2>

  <div className="mt-16 grid gap-6 md:grid-cols-4">
    {[
      {
        no: "01",
        title: "Research",
        text: "Understanding the project goals and user requirements.",
      },
      {
        no: "02",
        title: "Design",
        text: "Creating modern UI with focus on usability and aesthetics.",
      },
      {
        no: "03",
        title: "Development",
        text: "Building scalable applications using modern technologies.",
      },
      {
        no: "04",
        title: "Deployment",
        text: "Testing, optimization and production deployment.",
      },
    ].map((step) => (
      <motion.div
        key={step.no}
        whileHover={{ y: -10 }}
        className="glass rounded-[28px] border border-white/10 p-8"
      >
        <span className="text-5xl font-black text-[#E5283C]/30">
          {step.no}
        </span>

        <h3 className="mt-6 text-2xl font-semibold text-white">
          {step.title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {step.text}
        </p>
      </motion.div>
    ))}
  </div>
</motion.div>

{/* ================= MORE PROJECTS ================= */}

<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-40"
>
  <div className="glass rounded-[40px] border border-white/10 p-14 text-center">

    <h2 className="text-4xl font-bold text-white">
      More Projects Coming Soon
    </h2>

    <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
      I'm continuously exploring new ideas and building products that combine
      modern design with practical solutions. More exciting case studies will
      be added here soon.
    </p>

  </div>
</motion.div>

</div>

      </div>

    </section>

  );
}
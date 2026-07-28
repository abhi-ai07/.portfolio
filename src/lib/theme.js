// Single source of truth for content used across the site.

export const COLORS = {
  primary: '#0A0A0C',
  surface: '#141417',
  accent: '#E5283C',
  ink: '#F5F5F0',
}

// Cycled in the hero's small typing label above the headline.
export const ROLES = [
  'Full Stack Developer',
  'MERN Stack Developer',
  'Video Editor',
  'WordPress Developer',
]

// Matches the reference exactly — Services and Certificates stay as real
// routes (see App.jsx) but get natural entry points from within the About/
// Experience pages instead of crowding the main nav.
export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Experience', to: '/experience' },
  { label: 'Services', to: '/services' },
  { label: 'Certificates', to: '/certificates' },
  
]

export const SECONDARY_LINKS = []

export const SOCIALS = {
  email: 'abhi1730k@gmail.com',
  phone: '+91 9690359196',
  whatsapp: 'https://wa.me/919690353196',
  github: 'https://github.com/abhi-ai07',
  linkedin: 'https://www.linkedin.com/in/abhishek-kashyap-878b383a6/',
  instagram: 'https://www.instagram.com/abhi.az07',
  resume: 'https://drive.google.com/file/d/1T86JGWXhrTWhay6FqgY2TVQmCCPZt4O0/view?usp=drivesdk',
}

export const ABOUT = {
  education: 'BCA, Graphic Era Hill University',
  cgpa: '7.9',
  duration: '2024 - 2027',
  languages: 'Hindi, English',
  location: 'Dehradun, India',
}

export const SKILLS = [
  { label: 'React.js', core: false },
  { label: 'Node.js', core: false },
  { label: 'Express.js', core: false },
  { label: 'MongoDB', core: false },
  { label: 'JavaScript', core: false },
  { label: 'WordPress', core: false },
  { label: 'HTML', core: false },
  { label: 'CSS', core: false },
  { label: 'Video Editing', core: false },
  { label: 'UI/UX Design', core: false },
]

export const EXPERIENCE = [
  {
    title: 'Full Stack Developer',
    description: 'Building scalable web applications using the MERN stack.',
  },
  {
    title: 'WordPress Developer',
    description: 'Creating fast, SEO-friendly and responsive websites.',
  },
  {
    title: 'Video Editor',
    description: 'Editing engaging videos for YouTube & Instagram.',
  },
]

export const PROJECTS = [
  {
    index: '01',
    slug: 'adiva',
    title: 'Adiva Ecommerce',
    tag: 'Ongoing',
    description: 'Modern jewellery ecommerce with full functionality.',
    stack: 'React · Node.js · MongoDB',
    to: '/projects#adiva',
    github: '#',
    live: '#',
    features: [
      'Responsive UI',
      'Authentication',
      'MongoDB Backend'
    ],
  },

  {
    index: '02',
    slug: 'dynamo-fitness',
    title: 'Dynamo Fitness',
    tag: 'Business Website',
    description: 'Fitness website for gym and training programs.',
    stack: 'WordPress · Elementor',
    to: '/projects#dynamo-fitness',
    github: '#',
    live: '#',
    features: [
      'Responsive Design',
      'SEO Optimized',
      'Fast Loading'
    ],
  },

  {
    index: '03',
    slug: 'edify-youtube',
    title: 'Edify YouTube',
    tag: 'Content Creator',
    description: 'Edited educational videos for an English coaching channel.',
    stack: 'CapCut · Alight Motion',
    to: '/projects#edify',
    github: '#',
    live: null,
    features: [
      'YouTube Editing',
      'Motion Graphics',
      'Thumbnail Design'
    ],
  },

  {
    index: '04',
    slug: 'samvaad-mun',
    title: 'Samvaad MUN',
    tag: 'Event Media',
    description: 'Created promotional reels for a Model United Nations event.',
    stack: 'Alight Motion · After Effects',
    to: '/projects#samvaad',
    github: '#',
    live: null,
    features: [
      'Instagram Reels',
      'Event Branding',
      'Promo Videos'
    ],
  },
]
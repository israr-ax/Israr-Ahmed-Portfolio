// Pulled from ISRAR_RESUME.pdf. Edit freely — nothing else in the codebase
// hardcodes these values, they all flow from here.
export const profile = {
  name: 'Israr Ahmed',
  role: 'Backend Developer',
  roleLine: 'Python / Django · REST APIs · Real-time Systems',
  tagline:
    'I build scalable REST APIs, real-time backends, and role-based platforms — mostly with Django, Channels, and PostgreSQL.',
  location: 'Karachi, Pakistan',
  availability: 'Open to Backend Developer Roles',
  experienceYears: '1+ yrs hands-on',
  email: 'israrmemon211@gmail.com',
  phone: '+92 347 228 6990',
  socials: {
    github: 'https://github.com/israr-ax',
    linkedin: 'https://www.linkedin.com/in/israr-ahmed-a0a0872b7/',
    twitter: '',
  },
  // CV is bundled in /public so it survives static hosting as-is.
  cvUrl: '/israr-ahmed-cv.pdf',
  // No booking tool set up yet — mailto stands in until a Calendly/Cal.com
  // link exists. Swap this one string and every "Book a call" link updates.
  bookingUrl: 'mailto:israrmemon211@gmail.com?subject=Let%27s%20talk',
  bio: [
    "I'm a backend developer who likes the parts of the stack most people never see — the schema that holds up under load, the auth flow that can't be tricked, the WebSocket connection that stays alive.",
    "Currently a Computer Science student at Sindh Madressatul Islam University, I spend most of my time in Django: building REST APIs with DRF, wiring up real-time features with Django Channels and Redis, and designing PostgreSQL schemas that don't fall over as data grows.",
    "I'm quick to pick up new tools when a project calls for it, and I'm especially interested in where backend engineering meets AI and ML — building the systems that serve models, not just apps.",
  ],
  education: {
    school: 'Sindh Madressatul Islam University (SMIU)',
    degree: 'B.S. Computer Science',
    period: '2023 – 2027',
    coursework: [
      'Data Structures',
      'Database Systems',
      'Operating Systems',
      'Software Engineering',
      'Computer Networks',
    ],
  },
}

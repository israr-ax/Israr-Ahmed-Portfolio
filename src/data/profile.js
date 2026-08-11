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
  bio: ["I'm a backend developer who likes the parts of the stack most people never see — the schema that holds up under load, the auth flow that can't be tricked, and the WebSocket connection that stays alive.",
"I focus on building reliable backend systems with Django and Python. I work with Django REST Framework to design APIs, Django Channels and Redis for real-time features, and PostgreSQL for data systems built to scale.",
"I'm always exploring new tools and technologies when a project demands them, with a particular interest in the intersection of backend engineering and AI/ML — building the infrastructure and services that turn intelligent models into reliable, usable products."
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

// The first three are real, pulled straight from the CV. None of them list
// a live deployment, so `live` is left null rather than invented — wire up
// a real URL (Railway/Render/Vercel, etc.) and it'll appear automatically.
// The fourth is an explicit template slot for your next build.
export const projects = [
  {
    id: 'motors-mania',
    title: 'Motors Mania',
    subtitle: 'Vehicle marketplace platform',
    description:
      'A full-stack vehicle marketplace with advanced search and filtering. Secured with JWT auth and role-based access control, plus a real-time buyer–seller chat built on Django Channels and WebSockets.',
    tags: ['Django', 'React', 'PostgreSQL', 'DRF', 'JWT', 'WebSockets'],
    github: 'https://github.com/israr-ax/motors_mania',
    live: null,
    status: '201 Created',
    featured: true,
  },
  {
    id: 'rideshare-api',
    title: 'RideShare API',
    subtitle: 'Ride-sharing backend system',
    description:
      'A ride-sharing backend handling booking, trip management, and live ride tracking over WebSockets and Redis. Integrated with an Android client for real-time communication end-to-end.',
    tags: ['Django REST Framework', 'PostgreSQL', 'Redis', 'WebSockets'],
    github: 'https://github.com/israr-ax/django-RideShare-API-s',
    live: null,
    status: '200 OK',
    featured: true,
  },
  {
    id: 'online-examination-system',
    title: 'Online Examination System',
    subtitle: 'Role-based exam platform',
    description:
      'A role-based examination platform with dedicated Admin, Teacher, and Student modules — secure authentication, automated result generation, and protected routes enforced by RBAC.',
    tags: ['Django', 'RBAC', 'Auth', 'PostgreSQL'],
    github: 'https://github.com/israr-ax/Online-Examination-System',
    live: null,
    status: '200 OK',
    featured: false,
  },
  {
    id: 'template-slot',
    title: 'Your next build',
    subtitle: 'Template — swap this out',
    description:
      "This card is a placeholder. Duplicate an entry in src/data/projects.js, point `github` and `live` at a real repo and deployment, and it'll render exactly like the others — tilt effect included.",
    tags: ['Django', 'React', 'Full-stack'],
    github: '',
    live: '',
    status: '204 No Content',
    featured: false,
    isTemplate: true,
  },
]

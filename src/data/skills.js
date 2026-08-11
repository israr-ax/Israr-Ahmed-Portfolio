// Grouped exactly along the CV's own categories. `level` is a 0-1 value
// used only for the subtle progress indicator — tweak freely.
export const skillGroups = [
  {
    category: 'Backend',
    items: [
      { name: 'Python', level: 0.9 },
      { name: 'Django', level: 0.9 },
      { name: 'Django REST Framework', level: 0.88 },
      { name: 'FastAPI', level: 0.7 },
      { name: 'Django Channels', level: 0.8 },
      { name: 'WebSockets', level: 0.8 },
      { name: 'JWT / RBAC', level: 0.85 },
    ],
  },
  {
    category: 'Data',
    items: [
      { name: 'PostgreSQL', level: 0.85 },
      { name: 'MySQL', level: 0.75 },
      { name: 'SQLite', level: 0.8 },
      { name: 'Redis', level: 0.75 },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 0.75 },
      { name: 'JavaScript', level: 0.75 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', level: 0.85 },
      { name: 'Docker', level: 0.7 },
      { name: 'Linux', level: 0.75 },
      { name: 'Postman', level: 0.85 },
    ],
  },
]

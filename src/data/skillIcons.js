import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiRedis,
  SiReact,
  SiJavascript,
  SiGit,
  SiDocker,
  SiLinux,
  SiPostman,
  SiSocketdotio,
} from 'react-icons/si'
import { KeyRound, Shield } from 'lucide-react'

// Not every skill has a brand mark (WebSockets/JWT/RBAC are concepts, not
// products) — those fall back to a neutral Lucide glyph instead of forcing
// a mismatched logo.
export const skillIconMap = {
  Python: SiPython,
  Django: SiDjango,
  'Django REST Framework': SiDjango,
  FastAPI: SiFastapi,
  'Django Channels': SiSocketdotio,
  WebSockets: SiSocketdotio,
  'JWT / RBAC': KeyRound,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  SQLite: SiSqlite,
  Redis: SiRedis,
  React: SiReact,
  JavaScript: SiJavascript,
  Git: SiGit,
  Docker: SiDocker,
  Linux: SiLinux,
  Postman: SiPostman,
}

export const fallbackIcon = Shield

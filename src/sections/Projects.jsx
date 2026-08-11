import { projects } from '../data/projects'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="container-page">
        <SectionHeading
          eyebrow="GET /projects · 200 OK"
          title="Things I've shipped."
          description="Each one is a real repo — the dashed card is a template slot for whatever you build next."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

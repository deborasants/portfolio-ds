import { motion } from 'framer-motion'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section className="section" id="projetos">
      <div className="projects-head">
        <p className="projects-head__ghost" aria-hidden="true">
          PROJETOS
        </p>
        <h2 className="projects-head__title">Projetos</h2>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="project-card"
            style={{ background: project.color }}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.06, type: 'spring', stiffness: 120, damping: 16 }}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="project-card__art" aria-hidden="true">
              {project.id}
            </div>
            <div className="project-card__id">CASE {project.id}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="project-card__num">{Number(project.id)}</span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

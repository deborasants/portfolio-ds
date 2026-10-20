import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { education, experiences, profile, stack } from '../data/content'

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const floatY = useTransform(scrollYProgress, [0, 1], [24, -24])
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 4])

  return (
    <section className="section" id="sobre" ref={ref}>
      <p className="section-label">Sobre</p>

      <div className="about__grid">
        <motion.div
          className="about__intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h2>
            Oi, eu sou <em>Débora</em>
          </h2>
          <p>{profile.bio}</p>
        </motion.div>

        <div className="badge-wrap">
          <div className="lanyard" aria-hidden="true" />
          <motion.div className="badge" style={{ y: floatY, rotate }}>
            <div className="badge__clip" aria-hidden="true" />
            <div className="badge__photo">
              <img src={profile.photo} alt={`Foto de ${profile.name}`} />
            </div>
            <div className="badge__meta">
              <strong>{profile.name}</strong>
              <span>Backend PHP · APIs</span>
            </div>
          </motion.div>
        </div>

        <div className="about__split">
          <motion.div
            className="panel panel--experience"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>Experiência</h3>
            <ul className="exp-list">
              {experiences.map((item) => (
                <li key={`${item.company}-${item.period}`}>
                  <strong>{item.role}</strong>
                  <span className="company">{item.company}</span>
                  <span className="period">{item.period}</span>
                  <span className="detail">{item.detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="panel panel--stack"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.08 }}
          >
            <h3>Formação</h3>
            <ul className="exp-list">
              <li>
                <strong>{education.degree}</strong>
                <span className="company">{education.school}</span>
                <span className="period">{education.period}</span>
              </li>
            </ul>

            <h3 style={{ marginTop: '1.2rem' }}>Stack</h3>
            <div className="stack">
              {stack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="panel panel--links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3>Contato rápido</h3>
          <div className="contact-links">
            <motion.a href={`mailto:${profile.email}`} whileTap={{ scale: 0.98 }} whileHover={{ x: 4 }}>
              <span>E-mail</span>
              <span>→</span>
            </motion.a>
            <motion.a href={profile.linkedin} target="_blank" rel="noreferrer" whileTap={{ scale: 0.98 }} whileHover={{ x: 4 }}>
              <span>LinkedIn</span>
              <span>→</span>
            </motion.a>
            <motion.a href={profile.github} target="_blank" rel="noreferrer" whileTap={{ scale: 0.98 }} whileHover={{ x: 4 }}>
              <span>GitHub</span>
              <span>→</span>
            </motion.a>
            <motion.a href={profile.whatsapp} target="_blank" rel="noreferrer" whileTap={{ scale: 0.98 }} whileHover={{ x: 4 }}>
              <span>WhatsApp</span>
              <span>→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

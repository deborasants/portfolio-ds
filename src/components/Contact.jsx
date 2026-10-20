import { motion } from 'framer-motion'
import { certificates, profile } from '../data/content'

export default function Contact() {
  return (
    <section className="section contact" id="contato">
      <p className="section-label">Contato</p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Bora conversar?
      </motion.h2>
      <p>
        Aberta a vagas de backend PHP, full stack e integrações. {profile.location}.
      </p>

      <div className="cta-row">
        <motion.a
          className="btn btn-primary"
          href={`mailto:${profile.email}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          Enviar e-mail
        </motion.a>
        <motion.a
          className="btn btn-ghost"
          href={profile.cvBackend}
          download
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          Baixar CV Backend
        </motion.a>
        <motion.a
          className="btn btn-ghost"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          Ver GitHub
        </motion.a>
      </div>

      <div className="certs">
        {certificates.map((cert) => (
          <a key={cert.label} href={cert.href} target="_blank" rel="noreferrer">
            {cert.label}
          </a>
        ))}
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} {profile.name} · Feito com React + Framer Motion
      </footer>
    </section>
  )
}

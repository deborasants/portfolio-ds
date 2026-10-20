import { motion } from 'framer-motion'
import { profile } from '../data/content'
import HeroAnimation from './HeroAnimation'

const letters = 'PORTFOLIO'.split('')

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__media" aria-hidden="true">
        <motion.img
          className="hero__photo"
          src={profile.photo}
          alt=""
          initial={{ scale: 1.12 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="hero__animation">
          <HeroAnimation />
        </div>
        <div className="hero__shade" />
      </div>

      <div className="hero__content">
        <motion.div
          className="hero__year"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {profile.year}
        </motion.div>

        <motion.h1
          className="hero__brand"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.55 }}
        >
          {profile.brand}
        </motion.h1>

        <h2 className="hero__wordmark" aria-label="Portfolio">
          {letters.map((letter, i) => {
            if (letter === 'O') {
              return (
                <motion.span
                  key={`${letter}-${i}`}
                  className="o"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.35 + i * 0.05, type: 'spring', stiffness: 260, damping: 16 }}
                />
              )
            }
            return (
              <motion.span
                key={`${letter}-${i}`}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 + i * 0.05, duration: 0.4 }}
              >
                {letter}
              </motion.span>
            )
          })}
        </h2>

        <motion.p
          className="hero__tag"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
        >
          {profile.headline}
          <br />
          {profile.tagline}
        </motion.p>

        <motion.a
          href="#sobre"
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <motion.span
            className="hero__scroll-dot"
            animate={{ y: [0, 6, 0], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          />
          Descer
        </motion.a>
      </div>
    </header>
  )
}

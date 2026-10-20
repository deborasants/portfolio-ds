import { motion } from 'framer-motion'

const nodes = [
  { label: 'PHP', x: '18%', y: '22%', delay: 0, color: '#2F6FED' },
  { label: 'API', x: '72%', y: '18%', delay: 0.4, color: '#E25B2C' },
  { label: 'SQL', x: '78%', y: '58%', delay: 0.8, color: '#1FA971' },
  { label: 'REST', x: '22%', y: '68%', delay: 1.1, color: '#C9A227' },
  { label: 'JSON', x: '48%', y: '42%', delay: 0.2, color: '#9a7b4f' },
]

const floats = [
  { text: '{ }', x: '12%', y: '48%', duration: 7 },
  { text: '</>', x: '84%', y: '36%', duration: 8.5 },
  { text: '=>', x: '60%', y: '78%', duration: 6.5 },
  { text: '[]', x: '38%', y: '14%', duration: 9 },
]

export default function HeroAnimation() {
  return (
    <div className="hero-anim" aria-hidden="true">
      <div className="hero-anim__glow hero-anim__glow--a" />
      <div className="hero-anim__glow hero-anim__glow--b" />
      <div className="hero-anim__grid" />

      <motion.div
        className="hero-anim__ring hero-anim__ring--lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="hero-anim__ring hero-anim__ring--md"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="hero-anim__ring hero-anim__ring--sm"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="hero-anim__core"
        animate={{
          scale: [1, 1.08, 1],
          boxShadow: [
            '0 0 0 0 rgba(196,165,116,0.35)',
            '0 0 0 28px rgba(196,165,116,0)',
            '0 0 0 0 rgba(196,165,116,0.35)',
          ],
        }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span>DS</span>
      </motion.div>

      {nodes.map((node) => (
        <motion.div
          key={node.label}
          className="hero-anim__node"
          style={{ left: node.x, top: node.y, '--node': node.color }}
          animate={{ y: [0, -14, 0], x: [0, 8, 0] }}
          transition={{
            duration: 3.6 + node.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: node.delay,
          }}
        >
          <motion.span
            className="hero-anim__pulse"
            animate={{ scale: [1, 1.8, 1], opacity: [0.55, 0, 0.55] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: node.delay }}
          />
          {node.label}
        </motion.div>
      ))}

      {floats.map((item) => (
        <motion.span
          key={item.text}
          className="hero-anim__float"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -22, 0], opacity: [0.35, 0.85, 0.35], rotate: [-6, 6, -6] }}
          transition={{ duration: item.duration, repeat: Infinity, ease: 'easeInOut' }}
        >
          {item.text}
        </motion.span>
      ))}

      <svg className="hero-anim__lines" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M20 25 C 40 10, 60 40, 75 20"
          fill="none"
          stroke="rgba(154,123,79,0.45)"
          strokeWidth="0.4"
          strokeDasharray="3 3"
          animate={{ strokeDashoffset: [0, -24] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path
          d="M25 70 C 45 55, 55 80, 80 60"
          fill="none"
          stroke="rgba(47,111,237,0.35)"
          strokeWidth="0.4"
          strokeDasharray="2 4"
          animate={{ strokeDashoffset: [0, 20] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    </div>
  )
}

import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'

export default function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

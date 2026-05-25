import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Hammer } from "lucide-react"
export function Navbar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 200

      sections.forEach((section, index) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(index)
        }
      })
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-bg-surface/90 backdrop-blur-md border-b border-border z-50 transition-shadow duration-300">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <Hammer className="text-accent-red h-6 w-6" />
          <span className="font-serif font-bold text-lg hidden sm:block">Tài Xế Công Nghệ</span>
        </div>
        
        <div className="flex flex-wrap justify-end gap-1 sm:gap-2 max-w-[50%] sm:max-w-none">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
            <button
              key={i}
              onClick={() => scrollTo(`section-${i}`)}
              className={`w-8 h-2 rounded-full transition-colors ${
                activeSection === i ? "bg-accent-red" : "bg-bg-muted hover:bg-border"
              }`}
              aria-label={`Go to section ${i}`}
            />
          ))}
        </div>
      </div>
      <motion.div 
        className="h-1 bg-accent-gold origin-left" 
        style={{ scaleX }} 
      />
    </nav>
  )
}

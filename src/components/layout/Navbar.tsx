import { useState, useEffect } from "react"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { Hammer, Menu, X } from "lucide-react"

const SECTIONS = [
  { index: 0, name: "Giới thiệu", id: "section-0" },
  { index: 1, name: "01. Mở đầu: Thực tiễn", id: "section-1" },
  { index: 2, name: "02. Khái niệm Giai cấp", id: "section-2" },
  { index: 3, name: "03. 4 Tiêu chí Giai cấp", id: "section-3" },
  { index: 4, name: "04. Lý thuyết Đấu tranh", id: "section-4" },
  { index: 5, name: "05. Đấu tranh Truyền thống", id: "section-5" },
  { index: 6, name: "06. Đấu tranh Hiện đại", id: "section-6" },
  { index: 7, name: "07. Game Nhập vai", id: "section-7" },
  { index: 8, name: "08. Phân tích Bản chất", id: "section-8" },
  { index: 9, name: "09. Tắt App tập thể", id: "section-9" },
  { index: 10, name: "10. So sánh Lịch sử", id: "section-10" },
  { index: 11, name: "11. Kết luận", id: "section-11" },
  { index: 12, name: "12. Game Xúc xắc", id: "section-12" }
]

export function Navbar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [activeSection, setActiveSection] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 200

      sections.forEach((section) => {
        const id = section.getAttribute("id")
        if (!id) return
        const match = id.match(/section-(\d+)/)
        if (match) {
          const index = parseInt(match[1], 10)
          if (
            section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
          ) {
            setActiveSection(index)
          }
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
    <>
      <nav className="fixed top-0 w-full bg-bg-surface/90 backdrop-blur-md border-b border-border z-50 transition-shadow duration-300">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <Hammer className="text-accent-red h-6 w-6" />
            <span className="font-serif font-bold text-lg">Tài Xế Công Nghệ</span>
          </div>

          {/* Desktop Navigation Dots */}
          {!isMobile && (
            <div className="flex items-center gap-2">
              {SECTIONS.map((sec) => (
                <div key={sec.index} className="relative group">
                  <button
                    onClick={() => scrollTo(sec.id)}
                    className={`w-7 h-2.5 rounded-full transition-colors cursor-pointer ${activeSection === sec.index ? "bg-accent-red" : "bg-bg-muted hover:bg-border"
                      }`}
                    aria-label={`Go to ${sec.name}`}
                  />
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50">
                    <div className="bg-text-ink text-[#FAF6EE] text-xs font-serif font-semibold py-1.5 px-3 rounded shadow-lg whitespace-nowrap border border-border/10">
                      {sec.name}
                    </div>
                    {/* Arrow */}
                    <div className="w-1.5 h-1.5 bg-text-ink border-b border-r border-border/10 rotate-45 absolute -bottom-[4px] left-1/2 -translate-x-1/2 z-40" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Mobile Hamburger Button */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center p-2 rounded-xl bg-bg-muted hover:bg-border text-text-ink transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          )}
        </div>
        <motion.div
          className="h-1 bg-accent-gold origin-left"
          style={{ scaleX }}
        />
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] max-w-full bg-bg-surface border-l border-border z-50 shadow-2xl flex flex-col p-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
                <div className="flex items-center gap-2">
                  <Hammer className="text-accent-red h-5 w-5" />
                  <span className="font-serif font-bold text-base">Mục lục</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl hover:bg-bg-muted text-text-muted transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-1.5 pr-1">
                {SECTIONS.map((sec) => (
                  <button
                    key={sec.index}
                    onClick={() => {
                      scrollTo(sec.id)
                      setIsOpen(false)
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-colors cursor-pointer flex items-center justify-between ${activeSection === sec.index
                        ? "bg-accent-red/10 text-accent-red font-bold"
                        : "text-text-ink hover:bg-bg-muted font-medium"
                      }`}
                  >
                    <span className="font-serif">{sec.name}</span>
                    {activeSection === sec.index && (
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-red" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

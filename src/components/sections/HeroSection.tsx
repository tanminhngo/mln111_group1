
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="section-0" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Decorative background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#c0392b_0%,transparent_50%)] opacity-10" />
      </div>

      <div className="z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between mt-16 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-left"
        >
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-accent-gold font-semibold tracking-widest mt-4 uppercase mb-4 text-sm"
          >
            Triết học Mác - Lênin
          </motion.p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="block">TÀI XẾ CÔNG NGHỆ:</motion.span>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="block">NGƯỜI LÀM CHỦ hay</motion.span>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="relative inline-block mt-2">
              <span className="relative z-10">NGƯỜI LÀM THUÊ KIỂU MỚI?</span>
              <motion.span 
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1, duration: 0.6 }} 
                className="absolute bottom-1 left-0 w-full h-3 bg-accent-red/30 -rotate-1 z-0 origin-left"
              ></motion.span>
            </motion.span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-2xl text-text-muted font-serif italic max-w-lg"
          >
            Phân tích qua lăng kính Triết học Mác – Lênin về Giai cấp và Đấu tranh giai cấp
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <img 
              src="/hero_driver.png" 
              alt="Tài xế công nghệ" 
              className="w-full max-w-md rounded-2xl shadow-2xl shadow-accent-red/10 border-4 border-white object-cover"
            />
          </motion.div>
        </motion.div>
      </div>


      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="text-accent-red h-8 w-8" />
      </motion.div>
    </section>
  )
}

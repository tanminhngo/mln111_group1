import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card"

export function ConclusionSection() {
  const conclusions = [
    "Dù được gọi là 'đối tác', tài xế công nghệ vẫn phụ thuộc mạnh vào nền tảng.",
    "Đây là hình thức lao động thuê mướn mới trong thời đại kinh tế số.",
    "AI và thuật toán đang trở thành công cụ quản lý lao động hiện đại.",
    "Đấu tranh giai cấp không biến mất — mà thay đổi hình thức theo công nghệ."
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="section-11" className="min-h-screen py-24 px-4 bg-bg-muted relative flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 right-0 text-[20rem] font-serif font-bold text-black opacity-[0.03] select-none leading-none -mt-16 -mr-16">
        12
      </div>

      <div className="max-w-6xl mx-auto z-10 relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">Kết Luận</h2>
          <div className="w-24 h-1 bg-accent-red mx-auto mb-8"></div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 pt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {conclusions.map((text, idx) => (
            <motion.div key={idx} variants={cardVariants} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="bg-bg-surface border-none shadow-md hover:shadow-lg transition-shadow h-full relative pt-8">
                {/* Number Badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-accent-red text-white flex items-center justify-center font-bold text-xl font-serif shadow-md border-4 border-bg-muted">
                  0{idx + 1}
                </div>
                <CardContent className="p-6 text-center flex items-center justify-center h-full">
                  <p className="text-text-ink font-medium leading-relaxed">
                    {text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-text-ink leading-tight px-4 border-y-2 border-accent-gold/30 py-8 max-w-4xl mx-auto">
            "Triết học Mác – Lênin vẫn còn nguyên giá trị trong thời đại số."
          </h3>
        </motion.div>
      </div>
    </section>
  )
}

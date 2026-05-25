import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { Search } from "lucide-react"

export function AnalysisPlaceholderSection() {
  return (
    <section id="section-8" className="min-h-screen py-24 px-4 bg-bg-muted relative flex items-center justify-center">
      <div className="absolute top-0 right-0 text-[20rem] font-serif font-bold text-black opacity-[0.03] select-none leading-none -mt-16 -mr-16">
        09
      </div>

      <div className="max-w-4xl mx-auto w-full z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Phân Tích: Tài Xế Là "Người Làm Chủ" Hay "Người Làm Thuê Kiểu Mới"?</h2>
          <div className="w-24 h-1 bg-accent-red mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-bg-base border-2 border-dashed border-[#e0d9d0] shadow-sm hover:shadow-md transition-shadow h-96 flex items-center justify-center">
            <CardContent className="flex flex-col items-center justify-center text-center p-8">
              <Search className="w-24 h-24 text-gray-300 mb-6" strokeWidth={1.5} />
              <Badge variant="gold" className="mb-4 text-sm px-4 py-1">Coming Soon</Badge>
              <h3 className="text-2xl font-serif font-bold mb-3">Phần phân tích đang được hoàn thiện...</h3>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

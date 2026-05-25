
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Briefcase, Key, Cog, TrendingUp } from "lucide-react"

export function CriteriaSection() {
  const criteria = [
    {
      title: "(a) Địa vị trong hệ thống SX",
      icon: <Briefcase className="w-6 h-6" />,
      ruling: "Chủ sở hữu nền tảng, thiết kế luật chơi, nắm quyền sinh sát.",
      working: "Nguồn lao động được huy động, phụ thuộc hoàn toàn vào hệ thống."
    },
    {
      title: "(b) Quan hệ với Tư liệu SX",
      icon: <Key className="w-6 h-6" />,
      ruling: "Sở hữu 'Tư liệu sản xuất cốt lõi' (Thuật toán, Dữ liệu, Ứng dụng).",
      working: "Chỉ sở hữu 'Công cụ thứ cấp' (Xe máy, Điện thoại)."
    },
    {
      title: "(c) Tổ chức lao động xã hội",
      icon: <Cog className="w-6 h-6" />,
      ruling: "Quản lý bằng thuật toán phi nhân cách, tự động phân phối cuốc xe.",
      working: "Bị điều hành bởi App, mất quyền tự chủ thực sự."
    },
    {
      title: "(d) Hưởng thụ của cải",
      icon: <TrendingUp className="w-6 h-6" />,
      ruling: "Thu chiết khấu cao (20-30%), tích lũy tư bản lớn.",
      working: "Nhận tiền công theo cuốc, rủi ro tự chịu (xăng, bảo dưỡng)."
    }
  ]

  return (
    <section id="section-3" className="min-h-screen py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 text-[20rem] font-serif font-bold text-text-muted opacity-5 select-none leading-none -mt-16 -mr-16">
        03
      </div>

      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">4 Tiêu Chí Xác Định Giai Cấp</h2>
          <div className="w-24 h-1 bg-accent-red mb-8"></div>
          <p className="text-text-muted max-w-2xl text-lg">
            Áp dụng định nghĩa của Lênin để phân tích cấu trúc giai cấp trong nền kinh tế Gig (Gig Economy).
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {criteria.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden border-border/50">
                <CardHeader className="bg-bg-muted/50 pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl font-serif">
                    <span className="text-accent-red">{item.icon}</span>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 grid grid-cols-1 md:grid-cols-2 h-full">
                  <div className="p-6 bg-[#fff5f5] flex flex-col gap-4 border-b md:border-b-0 md:border-r border-red-100">
                    <Badge className="w-fit bg-red-100 text-red-800 hover:bg-red-200 border-none">Giai cấp thống trị</Badge>
                    <p className="text-sm text-gray-800 leading-relaxed font-medium">Nền tảng (App)</p>
                    <p className="text-sm text-text-muted">{item.ruling}</p>
                  </div>
                  <div className="p-6 bg-[#f0f4ff] flex flex-col gap-4">
                    <Badge className="w-fit bg-blue-100 text-blue-800 hover:bg-blue-200 border-none">Giai cấp bị trị</Badge>
                    <p className="text-sm text-gray-800 leading-relaxed font-medium">Tài xế</p>
                    <p className="text-sm text-text-muted">{item.working}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

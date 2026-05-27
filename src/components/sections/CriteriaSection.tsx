
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Briefcase, Key, Cog, TrendingUp } from "lucide-react"

export function CriteriaSection() {
  const criteria = [
    {
      title: "(a) Địa vị trong hệ thống SX",
      icon: <Briefcase className="w-6 h-6" />,
      rulingTitle: "Chủ xưởng / Nhà tư bản",
      ruling: "Nắm quyền quản lý toàn bộ quá trình sản xuất tại nhà máy, quyết định vận hành xí nghiệp.",
      workingTitle: "Công nhân / Vô sản",
      working: "Là người bán sức lao động, làm việc theo chỉ đạo và chịu sự giám sát trực tiếp của quản đốc."
    },
    {
      title: "(b) Quan hệ với Tư liệu SX",
      icon: <Key className="w-6 h-6" />,
      rulingTitle: "Chủ xưởng / Nhà tư bản",
      ruling: "Sở hữu toàn bộ tư liệu sản xuất chính (nhà xưởng, máy móc cơ khí khổng lồ, nguyên vật liệu).",
      workingTitle: "Công nhân / Vô sản",
      working: "Không sở hữu bất kỳ tư liệu sản xuất nào, chỉ có sức lao động cá nhân để kiếm sống."
    },
    {
      title: "(c) Tổ chức lao động xã hội",
      icon: <Cog className="w-6 h-6" />,
      rulingTitle: "Chủ xưởng / Nhà tư bản",
      ruling: "Đóng vai trò điều hành, áp đặt kỷ luật lao động và phân công công việc thông qua đốc công.",
      workingTitle: "Công nhân / Vô sản",
      working: "Là người trực tiếp thực hiện, bị phân vào các công đoạn dây chuyền chuyên môn hóa cố định."
    },
    {
      title: "(d) Hưởng thụ của cải",
      icon: <TrendingUp className="w-6 h-6" />,
      rulingTitle: "Chủ xưởng / Nhà tư bản",
      ruling: "Thu về phần lớn giá trị thặng dư dưới dạng lợi nhuận doanh nghiệp và tích lũy tư bản lớn.",
      workingTitle: "Công nhân / Vô sản",
      working: "Nhận một phần nhỏ dưới dạng tiền công/lương cơ bản, chỉ đủ để duy trì cuộc sống tối thiểu."
    }
  ]

  return (
    <section id="section-3" className="min-h-screen py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 text-[10rem] sm:text-[20rem] font-serif font-bold text-text-muted opacity-5 select-none leading-none -mt-16 -mr-16 pointer-events-none">
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">4 Tiêu Chí Xác Định Giai Cấp</h2>
          <div className="w-24 h-1 bg-accent-red mb-8"></div>
          <p className="text-text-muted max-w-2xl text-base sm:text-lg">
            Áp dụng định nghĩa của V.I. Lênin để phân tích cấu trúc giai cấp cổ điển trong xã hội tư bản chủ nghĩa (mô hình Chủ xưởng và Công nhân).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {criteria.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden border-border/50 flex flex-col">
                <CardHeader className="bg-bg-muted/50 pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg sm:text-xl font-serif">
                    <span className="text-accent-red">{item.icon}</span>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-1 grid grid-cols-1 md:grid-cols-2">
                  <div className="p-5 sm:p-6 bg-[#fff5f5] flex flex-col gap-3 border-b md:border-b-0 md:border-r border-red-100/60">
                    <Badge className="w-fit bg-red-100 text-red-800 hover:bg-red-200 border-none text-[10px] sm:text-xs">Giai cấp thống trị</Badge>
                    <p className="text-sm font-serif font-bold text-red-950">{item.rulingTitle}</p>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed">{item.ruling}</p>
                  </div>
                  <div className="p-5 sm:p-6 bg-[#f0f4ff] flex flex-col gap-3">
                    <Badge className="w-fit bg-blue-100 text-blue-800 hover:bg-blue-200 border-none text-[10px] sm:text-xs">Giai cấp bị trị</Badge>
                    <p className="text-sm font-serif font-bold text-blue-950">{item.workingTitle}</p>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed">{item.working}</p>
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

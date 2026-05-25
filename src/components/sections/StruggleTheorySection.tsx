
import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion"
import { Swords } from "lucide-react"

export function StruggleTheorySection() {
  return (
    <section id="section-4" className="min-h-screen py-24 px-4 bg-bg-muted relative">
      <div className="absolute top-0 right-0 text-[20rem] font-serif font-bold text-black opacity-[0.03] select-none leading-none -mt-16 -mr-16">
        04
      </div>

      <div className="max-w-4xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Lý Thuyết Đấu Tranh Giai Cấp</h2>
          <div className="w-24 h-1 bg-accent-red mx-auto mb-8"></div>
          <p className="text-text-muted text-lg">
            Động lực phát triển của xã hội có giai cấp là đấu tranh giai cấp.
          </p>
        </motion.div>

        {/* Conflict Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-16 relative">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 relative z-10"
          >
            <Card className="bg-white border-2 border-red-100 shadow-md">
              <CardContent className="p-6 text-center">
                <Badge variant="outline" className="mb-4 bg-red-50 text-red-700 border-red-200">Chủ Nền Tảng</Badge>
                <h3 className="font-serif font-bold text-xl mb-2">Tối đa hóa lợi nhuận</h3>
                <ul className="text-sm text-text-muted text-left list-disc list-inside space-y-1">
                  <li>Tăng chiết khấu</li>
                  <li>Giảm thưởng</li>
                  <li>Khóa app không cần lý do</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             viewport={{ once: true }}
             className="z-10 flex flex-col items-center"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 bg-white hidden md:block">
              <img src="/platform_vs_worker.png" alt="Mâu thuẫn" className="w-full h-full object-cover" />
            </div>
            <div className="bg-bg-muted p-4 rounded-full shadow-sm">
              <Swords className="w-8 h-8 text-accent-red" />
            </div>
          </motion.div>

          {/* Animated line behind swords */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-red-200 via-accent-red to-blue-200 z-0 -translate-y-1/2"></div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 relative z-10"
          >
            <Card className="bg-white border-2 border-blue-100 shadow-md">
              <CardContent className="p-6 text-center">
                <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-700 border-blue-200">Người Lao Động</Badge>
                <h3 className="font-serif font-bold text-xl mb-2">Bảo vệ quyền lợi sống</h3>
                <ul className="text-sm text-text-muted text-left list-disc list-inside space-y-1">
                  <li>Tăng giá cước</li>
                  <li>Giữ nguyên mức thưởng</li>
                  <li>Quyền lợi bảo hiểm</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-12"
        >
          <Badge className="text-lg py-2 px-6 shadow-md bg-accent-red hover:bg-accent-red/90 text-white">
            =&gt; Mâu Thuẫn Lợi Ích Không Thể Điều Hòa
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-bg-surface">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-serif">Nguyên nhân sâu xa</AccordionTrigger>
                  <AccordionContent className="text-text-muted text-base leading-relaxed">
                    Sự mâu thuẫn giữa tính chất xã hội hóa ngày càng cao của lực lượng sản xuất (mạng lưới hàng vạn tài xế phục vụ nhu cầu xã hội) với chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất (thuật toán và dữ liệu thuộc về số ít các tập đoàn công nghệ).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-serif">Nguyên nhân trực tiếp</AccordionTrigger>
                  <AccordionContent className="text-text-muted text-base leading-relaxed">
                    Sự bóc lột giá trị thặng dư dưới hình thức tinh vi hơn: "chiết khấu". Thay vì trả lương và thu lợi nhuận trực tiếp, nền tảng để tài xế tự khai thác phương tiện của mình, tự chịu hao mòn, nhưng vẫn thu về 20-30% doanh thu mỗi cuốc xe.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
